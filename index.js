require('dotenv').config();
const express = require('express');
const app = express();
const port =  process.env.PORT || 3000;

const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const testData = require('./utils/data');



const registerRoutes = require('./routes/register')
const jobsRoutes = require('./routes/jobs')
// const webHooksRoute = require('./routes/webHooks');
const authentication = require('./middlewares/authentication')

const errorHandler = require('./middlewares/error-handler')
const notFound = require('./middlewares/not-found')
const path = require("path");

app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
    })
);

app.use(express.json())

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());

app.use(cookieParser());
app.use(xss())
app.use(cors({ credentials: true, origin: process.env.frontend_domain }))
app.use(helmet())

app.use(express.static(path.join(__dirname, './frontend/build')));

app.use('/get-test-data', (req, res) => {
    res.status(200).json(testData);
})
app.use('/api', registerRoutes)
app.use('/api', authentication, jobsRoutes)
// app.use('/', webHooksRoute);


app.use(errorHandler)
app.use(notFound)

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));
