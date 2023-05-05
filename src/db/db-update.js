const { sequelize } = require('./db-init');
const { User } = require('../auth/domain/models')



const updateOrCreateDatabase = async () => {

    try {
        await sequelize.sync({ alter: true })
    } catch (e) {
        console.log(e)
    }


    console.log('Rinning test query...');

};

updateOrCreateDatabase();
