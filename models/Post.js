const { Model, DataTypes } = require(`sequelize`)
const sequelize = require(`../config/connection.js`)
class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        creator_id: {
            type: DataTypes.INTEGER,
            references: {
                model: `user` ,
                key: `id`
            }
        },
        post_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT(`long`),
            allowNull: false,
        },
        time: {
            type: DataTypes.DATE,
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