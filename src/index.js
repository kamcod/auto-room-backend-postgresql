require('dotenv').config();
const express = require('express');
const index = express();
const port =  process.env.PORT || 3000;

const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();



const registerRoutes = require('./routes/register')
const jobsRoutes = require('./routes/jobs')
// const webHooksRoute = require('./routes/webHooks');
const authentication = require('./middlewares/authentication')

const errorHandler = require('./middlewares/error-handler')
const notFound = require('./middlewares/not-found')

index.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
    })
);

index.use(express.json())

// for parsing application/json
index.use(bodyParser.json());

// for parsing application/xwww-
index.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
index.use(upload.array());

index.use(cookieParser());
index.use(xss())
index.use(cors({ credentials: true, origin: process.env.frontend_domain }))
index.use(helmet())

index.get('/test', (req, res) => {
    res.status(200).send("Everything is fine bro")
})
index.use('/api', registerRoutes)
index.use('/api', authentication, jobsRoutes)
// index.use('/', webHooksRoute);


index.use(errorHandler)
index.use(notFound)

index.listen(port, () => console.log(`App is listening at http://localhost:${port}`));
