import bodyParser from 'body-parser'
import express from 'express'
import { Server } from 'http'
import { sequelize } from '../../../db'
import { errorhandler } from '../../../errorhandler'
import router from '../../../routes'

describe('Routes', () => {
    let server: Server

    before('Setup server', done => {
        const app = express()
        app.use(
            bodyParser.json({
                type: ['application/json'],
            })
        )
        app.use(router)
        app.use(errorhandler)
        server = app.listen('3001', done)
    })

    beforeEach(async () => {
        await sequelize.query(
            `TRUNCATE TABLE "${sequelize.modelManager.models
                .map((model: any) => model.tableName)
                .join('", "')}" RESTART IDENTITY CASCADE;`,
            { raw: true }
        )
    })

    require('./songs.test')

    after('Shutdown server', done => {
        server.close(done)
    })
})
