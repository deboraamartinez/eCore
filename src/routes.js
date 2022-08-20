const { Router } = require('express')


const PeopleController = require('./controllers/people-controller')

const router = Router()

router.post('/people', PeopleController.createPerson)
router.get('/people', PeopleController.index)
router.get('/people/age', PeopleController.getByAge)
router.get('/people/name', PeopleController.getByName)



module.exports = router