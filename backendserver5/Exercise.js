const database = require("./database")
const Sequelize = require("sequelize")
const User = require("./User")

const Exercise = database.define("exercises", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    date: {
        type: Sequelize.STRING,
        allowNull: false
    },
    _id: {
        type: Sequelize.UUID,
        references: {
            model: User,
            key: "_id"
        }
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

module.exports = Exercise