const app = require('./app');
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
    console.log(`WSDL Conversiones: http://localhost:${PORT}/soap/conversiones?wsdl`);
    console.log(`WSDL Geometria:    http://localhost:${PORT}/soap/geometria?wsdl`);
});