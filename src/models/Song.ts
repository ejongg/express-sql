import { DataTypes, Model } from 'sequelize'
import { Attribute, Options } from 'sequelize-decorators'
import { sequelize } from '../db'

@Options({
    sequelize,
})
export class Song extends Model {
    @Attribute({
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    })
    public id: string

    @Attribute({
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
    })
    public title: string

    @Attribute({
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
    })
    public artist: string

    @Attribute({
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { notEmpty: true },
    })
    public content: string
}
