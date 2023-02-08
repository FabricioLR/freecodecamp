const User = require("./User")
const Exercise = require("./Exercise")

User.hasMany(Exercise, { as: "log", foreignKey: "_id" })