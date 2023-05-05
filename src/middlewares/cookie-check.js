const jwt = require("jsonwebtoken");

const checkAuth = (req,res,next) => {

    try {
        const token = req.cookies['jwt'];


        // const token = (cookie.split(' ').length > 1) ? cookie.split(' ')[1] : cookie;
        const payload = jwt.verify(token, 'secret');
        req.user = payload;
        next();
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            console.log(e)
            res.status(401).json({message:'Token no válido o no existe'})
            return;
        }
        res.status(500).json({message: 'Error al verificar token'})
        return;

    }

}

exports.checkAuth = checkAuth;