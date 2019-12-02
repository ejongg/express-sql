import { Router } from 'express'
import User from '../models/User'

const router = Router()

router.get('/users', async (_, res) => {
    const users = await User.findAll()
    res.send(users)
})

export default router
