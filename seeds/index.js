const seedUser = require(`./user-seeds`)
const seedPost = require(`./post-seeds`)
const sequelize = require(`../config/connection.js`)

const seedAll = async () => {
    await sequelize.sync({force: true})
    console.log(`\n----- DATABASE SYNCED -----\n`)
    await seedUser()
    console.log(`\n----- USER SYNCED -----\n`)
    await seedPost()
    console.log(`\n----- POST SYNCED -----\n`)

    process.exit(0)
}

seedAll()