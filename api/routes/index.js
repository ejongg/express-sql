const router = require('express').Router()
const usersRoute = require('./core/users')

router.use(usersRoute)

module.exports = router
