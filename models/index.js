const Post = require(`./Post`)
const User = require(`./User`)

Post.belongsTo(User, {
    foreignKey: `creator_id`
})
User.hasMany(Post, {
    foreignKey: `creator`
})

module.exports = {
    Post,
    User
}