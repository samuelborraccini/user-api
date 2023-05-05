# Proyecto Api de usuarios

Este proyecto fue creado para moestrar funcionalidad de conexion a bases de datos con ORM, encriptacion de contraseñas, autentificacion de usuario, autorizacion de rutas, CRUD usuarios, tokenizacion y seteo de cookies.

# Herramientas usadas
  * NodeJs
  * Express
  * Sequelize
  * MySQL (servidor en la nube JawsDB)

# Guia de ejecicion
  * Ejecutar: npm i
  * Ejecutar: npm run start

# Rutas

## `GET`
  * '/' --> Ruta para revisar estado del servidor
  * '/auth' --> Ruta para consultar todos los usuario del sistema
  * '/auth/logout' --> Ruta para eliminar cookie y cerrar sesion del usuario
  * '/auth/protected' --> Ruta para comprobar funcionalidad de autorizacion

## `POST`
  * '/auth/find' --> Ruta para buscar usuarios - parametro de entrada: {username:username}
  * '/auth/create' --> Ruta para crear usuarios - parametro de entrada: {username:username, password:password}
  * '/auth/login' --> Ruta para ingresar al sistema con credenciales - parametros de entrada: {username:username, password:password}

## `PUT`
  * '/auth/update' --> Ruta para actualizar datos de usuario - parametro de entrada: {username:username, newUsername:newUsername}

## `DELETE`
  * '/auth/delete' --> Ruta para eliminar usuario - parametro de entrada: {username:username}
