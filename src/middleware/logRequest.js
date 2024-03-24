const logRequest = (req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
};

const logError = (err, req, res, next) => {
    console.error(`Error durante la solicitud: ${err.stack}`);
    next(err);
};

module.exports = { logRequest, logError };
