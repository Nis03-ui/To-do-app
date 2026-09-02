
const express=require('express')

const app=express()
const todoAPI=require("./route/todo.route")
const errorMiddleware=require("./middleware/error.middleware")
const notFound=require("./middleware/notfound.middleware")


app.use(express.json())


app.use("/api/todo",todoAPI)
app.use(errorMiddleware)
app.use(notFound)

module.exports=app