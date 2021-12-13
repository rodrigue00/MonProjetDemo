const debug = require("debug")("monprojetdemo:schema");
const connection = require("./connection");
const { DataTypes, Model } = require("sequelize");

debug("Defining TeachingPeriod model...");

class TeachingPeriod extends Model {}

TeachingPeriod.init(
  {
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    beginning: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: "teachingPeriod",
    tableName: "teaching_periods",
  }
);

debug("TeachingPeriod model defined.");

module.exports = TeachingPeriod;