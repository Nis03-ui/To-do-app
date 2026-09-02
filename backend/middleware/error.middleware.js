const ApiError = require("../utils/ApiError");
const prismaErrorHandler = require("../utils/prismaErrorHandler");

const errorHandler = (err, req, res, next) => {

    console.error(err);

    // Prisma error
    const prismaError = prismaErrorHandler(err);

    if (prismaError) {
        return res.status(prismaError.statusCode).json({
            success: false,
            message: prismaError.message,
            error: prismaError.error
        });
    }

    // Custom ApiError
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.error
        });
    }

    // Unknown error
    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: null
    });
};

module.exports = errorHandler;