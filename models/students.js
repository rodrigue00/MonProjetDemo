const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('studentdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

class Student extends Model {}

Student.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize, modelName: "student" });

module.exports = { sequelize, Student };