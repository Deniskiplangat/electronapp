const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes/route');



const app = express()

//this is very important never forget to add it bro
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors())


app.use('/api', routes)

const mongoURL = "mongodb://localhost:27017/newtrial";
mongoose.connect(mongoURL).then(()=>{console.group('database successfully connected')})





app.listen(3009,()=>{
    console.log('Application is working')
})