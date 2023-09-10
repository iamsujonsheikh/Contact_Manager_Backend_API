const { VALIDATION_ERROR, NOT_FOUND, UNAUTHORIZED, FORBIDDEN, SERVER_ERROR } = require("../constants");

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case VALIDATION_ERROR:
            res.json({ tittle: "Validation error", message: err.message, stackTrace: err.stack })
        case NOT_FOUND:
            res.json({ tittle: "Not found", message: err.message, stackTrace: err.stack })
        case UNAUTHORIZED:
            res.json({ tittle: "Unauthorized", message: err.message, stackTrace: err.stack })
        case FORBIDDEN:
            res.json({ tittle: "Forbidden", message: err.message, stackTrace: err.stack })
        case SERVER_ERROR:
            res.json({ tittle: "Server error", message: err.message, stackTrace: err.stack })
        default:
            console.log('No error all is good.')
            break;
    }


};
module.exports = errorHandler;