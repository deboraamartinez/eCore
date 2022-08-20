const { Router } = require('express')


const PeopleController = require('./controllers/people-controller')

const router = Router()

router.post('/people', PeopleController.createPerson)
router.get('/people', PeopleController.index)


module.exports = router