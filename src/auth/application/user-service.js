const { createToken } = require("../../utils/token");
const { findUsers, addUser, findUserByUsername, deleteUserByUsername, updateUserByUsername } = require("../domain/user-repository")
const bcrypt = require('bcrypt');


const findAllUsers = async (req,res) => {
    const users = await findUsers();

    res.json(users)

}

const createUser = async (req,res) => {

    const {username, password} = req.body;

    const newUser = await addUser(username, password)

    if(newUser != null) {
        res.status(200).json(newUser)
    }else {
        res.status(404).json({message: 'internal server error'})
    }
}

const findUser = async (req,res) => {

    const {username} = req.body; 
    const user = await findUserByUsername(username)

    if(user){
        res.status(200).json(user)
    }else {
        res.status(404).json({message: 'user doesnt exists'})
    }
}

const deleteUser = async (req,res) => {
    const {username} = req.body; 
    const user = await deleteUserByUsername(username);

    if(user) {
        res.status(200).json({message: 'user deleted succesfully'})
    }else {
        res.status(404).json({message: 'user doesnt exists'})
    }
}

const updateUser = async (req,res) => {
    const {username, newUsername} = req.body; 
    const user = await updateUserByUsername(username, newUsername);

    if(user) {
        res.status(200).json({message: 'user updated succesfully', updatedUser: user})
    }else {
        res.status(404).json({message: 'user doesnt exists'})
    }
}

const loginUser = async (req,res) => {
    const {username, password} = req.body; 
    const user = await findUserByUsername(username)

    if(user){
        const result = await bcrypt.compare(password, user.password)

        if(result) {
            console.log(user);
            const token = createToken({id:user.id, username:user.username})
            res.cookie('jwt', token)
            res.status(200).json({message: 'login succesfull'})
        }else {
            res.status(404).json({message: 'wrong password'})
        }
    }else {
        res.status(404).json({message: 'user doesnt exists'})
    }

}

const logoutUser = async (req,res) => {
    

    const cookie = req.cookies['jwt']
    if(!cookie){
        res.status(404).json({message:'Cookie no encontrada'})
    }else {
          res.clearCookie('jwt')
          res.status(404).json({message:'Sesion finalizada con exito'})
    }
        
    
        

}

exports.findAllUsers = findAllUsers;
exports.createUser = createUser;
exports.findUser = findUser;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.loginUser = loginUser;
exports.logoutUser = logoutUser;