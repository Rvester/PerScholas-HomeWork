const express = require('express')

const log = require('../models/logs')

const { findShip, newShip, deleteShip, updateShip, createNewShip, editShip, showShip } = require('../controllers/logController')

const router = express.Router()


//index route
router.get('/', findShip)


//New route
router.get('/new', newShip)


//setup delete route
router.delete('/:id', deleteShip)

//Setup Update route
router.put('/:id/',updateShip)

//setup Create route
router.post('/',createNewShip) 

//Setup edit Route
router.get('/:id/edit', editShip) 


//Setup Show route
router.get('/:id', showShip)











module.exports = router;






















module.exports = router;