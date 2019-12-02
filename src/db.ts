import { Sequelize } from 'sequelize'

export default new Sequelize('seed', 'root', 'root', {
    host: 'localhost',
    dialect: 'postgres',
})
