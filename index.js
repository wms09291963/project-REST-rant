//require needed modules
require('dotenv').config()
const express=require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))


//Express Settings 
app.set ('views', __dirname + '/views')
app.set ('view engine', 'jsx')
app.engine ('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers & Routes 
app.use ('/places', require('./controllers/places'))

app.get('/', (req, res) => { 
    res.render ('Home')
})

app.get('*', (req, res) =>{
    res.render ('error404')

})

app.listen(process.env.PORT)

