const express = require('express');
const logger = require('./middlewares/logger');
const setupSoapRoutes = require('./routes/soapRoutes');

const app = express();

// El middleware se ejecuta antes de las rutas SOAP para registrar las peticiones
app.use(logger);

// Montamos las rutas SOAP
setupSoapRoutes(app);

module.exports = app;