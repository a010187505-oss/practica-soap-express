module.exports = (req, res, next) => {
    const start = Date.now();
    
    // Escucha el evento 'finish' de la respuesta para calcular el tiempo total
    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[${req.method}] ${req.originalUrl} - Status: ${res.statusCode} - ${duration}ms`);
    });
    
    next();
};