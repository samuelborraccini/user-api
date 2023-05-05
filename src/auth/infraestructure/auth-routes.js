const { Router } =  require('express');
const { findAllUsers, createUser, findUser, deleteUser, updateUser, loginUser, logoutUser } = require('../application/user-service');

const router = Router();

router.get('/', findAllUsers)
router.post('/find', findUser)
router.post('/create', createUser)
router.delete('/delete', deleteUser)
router.put('/update', updateUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)




exports.authRoutes = router;