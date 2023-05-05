const jwt = require("jsonwebtoken");


const createToken = (value) => {
    const token = jwt.sign(value,'secret')

    return token;

}

exports.createToken = createToken;