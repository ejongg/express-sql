import { Sequelize } from 'sequelize'
import { DB_NAME, DB_HOST, DB_PASSWORD, DB_USER } from './config'

export default new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'postgres',
    logging: false,
})
