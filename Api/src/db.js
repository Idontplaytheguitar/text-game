const mongoose = require('mongoose');
require('dotenv').config();   
// Import constants instead of accessing process.env directly
const { CONNECTION_URL } = process.env;

mongoose.Promise = global.Promise

const CONN = CONNECTION_URL;

mongoose.connect(CONN, { useNewUrlParser: true})
    .then(() => {
        console.log('La conexión a mongodb se realizo correctamente');
    })
    .catch((error) => console.log(`${error} did not connect`));

