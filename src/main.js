const express = require('express');
const { authRoutes } = require('./auth/infraestructure/auth-routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); 
const { checkAuth } = require('./middlewares/cookie-check');

require('./db/db-init');
require('./auth/domain/models');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

app.get('/', (req,res) => {
    res.send('server test ping')
})

app.use('/auth', authRoutes);
app.use('/protected', checkAuth, (req,res) => {res.send('token was verified')})

app.listen(4000, () => console.log('server started'))

