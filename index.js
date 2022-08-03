//require needed modules
require('dotenv').config()
const express=require('express')
const methodOverride = require ('method-override')
app.set ('views', __dirname + '/views')
app.set ('view engine', 'jsx')
app.engine ('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
//app.use(methodOverride('_method'))

//Controllers & Routes 
app.use ('/places', require('./controllers/places'))

app.get('/', (req, res) => { 
    res.render ('Home')
})

app.get('*', (req, res) =>{
    res.render ('error404')

})

app.listen(process.env.PORT)

