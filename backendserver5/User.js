const database = require("./database")
const Sequelize = require("sequelize")

const User = database.define("user", {
    _id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    }
    },
    {
        timestamps: false
    }
)

module.exports = User