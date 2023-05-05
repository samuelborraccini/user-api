const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('dg0g52oznxl05ot8', 'nsd2tvi3vdum24ox', 'bhi8ivua0ai31usz', {
    host: 'o2olb7w3xv09alub.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',

});

exports.sequelize = sequelize;

