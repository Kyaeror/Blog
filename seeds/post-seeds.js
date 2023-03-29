const {Post} = require(`../models`)

const postData = [
    {
        creator_id: 1,
        post_name: `I Hate this assignment`,
        message: `Whoever thought of this assignment is pure evil.`
    },
    {
        creator_id: 1,
        post_name: `I like to move it move it`,
        message: `I would like to move this assignment into a fire`
    },
    {
        creator_id: 1,
        post_name: `Poem`,
        message: `Roses are red violets are blue, I hate this assignment, how about you?`
    }
]
const seedPost = () => Post.bulkCreate(postData)

module.exports = seedPost