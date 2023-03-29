const {User} = require(`../models`)

userData = [
    {
        name: `Admin`,
        email: `admin@mail.com`,
        password: `Admin`
    },
]
const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser