import sequelize from '../db'
import '../models'

sequelize.sync({ force: true })
