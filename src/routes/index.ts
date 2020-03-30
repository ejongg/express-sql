import { Router } from 'express'
import songRoutes from './songs'

const router = Router()

router.use(songRoutes)

export default router
