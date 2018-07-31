const router = require('express').Router()
const User = require('../../models/User')

router.get('/users', async (req, res) => {
  await User.create({ username: 'johnny' })
  res.json(await User.findAll())
})

router.get('/users/test', async (req, res) => {
  res.json('This is a test route')
})

module.exports = router
