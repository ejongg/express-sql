import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import logger from 'morgan'
import './db'
import router from './routes'

const app = express()

app.use(helmet())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(bodyParser.json())
app.use(cors())
app.use(logger('dev'))

app.use(router)

app.listen(3000, () => {
    console.log('Server running...')
})

export default app
