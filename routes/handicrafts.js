
 const router = require('express').Router()
 const HandicraftController = require("../controllers/handicraft")


//to go all handicraft page - index
router.get("/", HandicraftController.index)

//create new handicraft
router.get('/new', HandicraftController.new)

//post the newly created handicraft
router.post('/', HandicraftController.create)

//route for buy one handicraft 
router.get('/buy/:id', HandicraftController.buy)

//show get => "/handicrafts/:id"
router.get('/:id', HandicraftController.show)

module.exports = router