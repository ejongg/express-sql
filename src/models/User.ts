import { DataTypes, Model } from 'sequelize'
import { Attribute, Options } from 'sequelize-decorators'
import sequelize from '../db'

@Options({
    sequelize,
})
class User extends Model {
    @Attribute({
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    })
    public id: string

    @Attribute({
        type: DataTypes.TEXT,
        allowNull: false,
    })
    public username: string

    @Attribute({
        type: DataTypes.TEXT,
        allowNull: false,
    })
    public password: string
}

export default User
