class ApiError extends Error{
    constructor(message,statusCode,error=null){
        super(message)
        this.statusCode=statusCode
        this.error=error
        this.isOperational = true;

        Error.captureStackTrace(this,this.constructor)
    }
}

module.exports=ApiError