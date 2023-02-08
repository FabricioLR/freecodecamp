const Sequelize = require("sequelize")

const database = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/database.sqlite'
})

module.exports = database