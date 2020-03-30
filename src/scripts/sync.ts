import { sequelize } from '../db'

sequelize.sync({ force: true })
