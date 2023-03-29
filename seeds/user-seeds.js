const {User} = require(`../models`)

userData = [
    {
        name: `Admin`,
        email: `admin@mail.com`,
        password: `Admin`
    },
    {
        name: `Testing`,
        email: `test@mail.com`,
        password: `test`
    }
]
const seedUser = () => User.bulkCreate(userData)

module.exports = seedUser