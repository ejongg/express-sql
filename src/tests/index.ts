import { sequelize } from '../db'

describe('Test', () => {
    before('Initialize database', async () => {
        await sequelize.sync({ force: true })
    })
    require('./integration/routes')
})
