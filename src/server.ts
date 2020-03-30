import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import logger from 'morgan'
import './db'
import { errorhandler } from './errorhandler'
import router from './routes'

const app = express()

app.use(helmet())
app.use(
    bodyParser.json({
        type: ['application/json'],
    })
)
app.use(cors())
app.use(logger('dev'))
app.use(router)
app.use(errorhandler)

app.listen(3000, () => {
    console.log('Server running...')
})

export default app
