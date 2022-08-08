const express = require('express')
const router = express.Router()
const { getUsers, getUser, createUsers, updateUsers, deleteUsers } = require('../controllers/users')

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', createUsers)

router.put('/:id', updateUsers)

router.delete('/:id', deleteUsers)

module.exports = router