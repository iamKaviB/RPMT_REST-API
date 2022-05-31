const express = require('express')
const dotenv = require('dotenv').config()
const {studentErrorHandler} = require('./middleware/errorHandlers/student-groups/studentGroups.error')
const connectDB = require('./utils/database.connection')

const port = process.env.PORT || 5000

const baseurl = process.env.BASE_URL

connectDB()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(studentErrorHandler)

app.use(`${baseurl}/auth`, require('./routers/auth/auth.router'))

app.use(`${baseurl}/studentgroups`, require('./routers/student-groups/studentGroups.router'))
app.use(`${baseurl}/submissiontype`, require('./routers/submission-type/submissionType.router'))
app.use(`${baseurl}/template`, require('./routers/template/template.router'))
app.use(`${baseurl}/request`, require('./routers/superviser-request/supervisorRequest.router'))

app.listen(port, ()=>{console.log(`server start on port ${port} base url `)})
