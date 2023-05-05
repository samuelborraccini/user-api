const { User } = require("./models")
const bcrypt = require('bcrypt');


const findUsers = async () => {
    const users = await User.findAll();
    return users;
}

const findUserByUsername = async (username) => {
    const user = await User.findOne({where:{username:username}})

    return user;
}

const addUser = async (username, password) => {
    const hashPassword = await bcrypt.hash(password, 5);

    try {
        const newUser = await User.create({username:username, password:hashPassword});  
        
        return newUser;
    } catch (error) {
        return null;
    }
     
}

const deleteUserByUsername = async (username) => {
    const user = await User.findOne({where:{username:username}})
    
    if(user) {
        const deletedUser = await User.destroy({where:{username:username}})
        return deletedUser;
    }else {
        return user;
    }
}

const updateUserByUsername = async (username, newUsername) => {
    const user = await User.findOne({where:{username:username}})
    
    if(user) {
        const updatedUser = await user.update({username:newUsername})
        return updatedUser;
    }else {
        return user;
    }
}



exports.findUsers = findUsers;
exports.findUserByUsername = findUserByUsername;
exports.addUser = addUser;
exports.deleteUserByUsername = deleteUserByUsername;
exports.updateUserByUsername = updateUserByUsername;