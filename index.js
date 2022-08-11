//require needed modules
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')

const express=require('express')
const methodOverride = require ('method-override')
app.set ('views', __dirname + '/views')
app.set ('view engine', 'jsx')
app.engine ('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//Controllers & Routes 
app.use ('/places', require('./controllers/places'))

app.get('/', (req, res) => { 
    res.render ('Home')
})

app.get('*', (req, res) =>{
    res.render ('error404')

})

app.listen(process.env.PORT)

