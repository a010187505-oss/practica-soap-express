const express = require('express');
const router = express.Router();
const soap = require('soap');
const fs = require('fs');
const path = require('path');

const conversionesService = require('../services/conversionesService');
const geometriaService = require('../services/geometriaService');

const wsdlConversiones = fs.readFileSync(path.join(__dirname, '../wsdl/conversiones.wsdl'), 'utf8');
const wsdlGeometria = fs.readFileSync(path.join(__dirname, '../wsdl/geometria.wsdl'), 'utf8');

module.exports = (app) => {
    // Registra los endpoints SOAP en la aplicación
    soap.listen(app, '/soap/conversiones', conversionesService, wsdlConversiones);
    soap.listen(app, '/soap/geometria', geometriaService, wsdlGeometria);
    return router;
};