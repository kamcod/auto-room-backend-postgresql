require('dotenv').config();
const express = require('express');
const app = express();
const port =  process.env.PORT || 3000;

const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();



const registerRoutes = require('./routes/register')
const jobsRoutes = require('./routes/jobs')
// const webHooksRoute = require('./routes/webHooks');
const authentication = require('./middlewares/authentication')
//
//
const errorHandler = require('./middlewares/error-handler')
const notFound = require('./middlewares/not-found')

app.use(express.json())

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());


app.use('/api', registerRoutes)
app.use('/api', authentication, jobsRoutes)
// app.use('/', webHooksRoute);


app.use(errorHandler)
app.use(notFound)

app.listen(port, () => console.log(`App is listening at http://localhost:${port}`));
