const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db/db-init");




const User = sequelize.define('user', {

    username: {
        type: DataTypes.STRING,
        field: 'usuario'
    },
    password: {
        type: DataTypes.STRING(500),
        field: 'contrasena'
    }
},
    { tableName: 'usuarios' , timestamps:false});


    exports.User = User;