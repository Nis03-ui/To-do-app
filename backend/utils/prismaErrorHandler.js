const { Prisma } = require("@prisma/client");

const prismaErrorHandler = (err) => {

    if (err instanceof Prisma.PrismaClientKnownRequestError) {

        switch (err.code) {

            case "P2002":
                return {
                    statusCode: 409,
                    message: "A record with this value already exists",
                    error: err.meta
                };

            case "P2025":
                return {
                    statusCode: 404,
                    message: "Record not found",
                    error: null
                };

            case "P2003":
                return {
                    statusCode: 400,
                    message: "Foreign key constraint failed",
                    error: err.meta
                };

            case "P2014":
                return {
                    statusCode: 400,
                    message: "Required relation violation",
                    error: err.meta
                };

            case "P2023":
                return {
                    statusCode: 400,
                    message: "Invalid database value",
                    error: err.meta
                };

            default:
                return {
                    statusCode: 500,
                    message: "Database error",
                    error: null
                };
        }
    }

    if (err instanceof Prisma.PrismaClientValidationError) {
        return {
            statusCode: 400,
            message: "Invalid data provided",
            error: null
        };
    }

    return null;
};

module.exports = prismaErrorHandler;