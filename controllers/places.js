const router = require('express').Router()
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  let id=Number (req.params.id)
  if (isNaN(id)){
    res.render('error404')
  }
  else if(!places[id]) {
    res.render(error404)
  }
  else {
    res.render('places/show', {place: places[id]})
  }
  
})

router.post('/', (req, res) => {
  res.render('places/index', {places})
  console.log("pic",req.body.pic)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  console.log("before",places)

  places.push(req.body)
  console.log("after",places)
  res.redirect('/places')
})

    
   

module.exports = router