const { Model, DataTypes } = require(`sequelize`)
const sequelize = require(`../config/connection.js`)
class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        creator: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        post_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT(`long`),
            allowNull: false,
        },
        time: {
            type: DataTypes.TIME,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: `post`
    }
)

module.exports = Post