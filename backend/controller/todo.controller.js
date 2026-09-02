

const {
    createTodo:createTodoService,
    getAllTodos:getAllTodoService,
    getTodo:getTodoService,
    updateTodo:updateTodoService,
    deleteTodo:deleteTodoService
}=require('../service/todo.service')
const asyncHandler = require('../utils/asyncHandler')
const ApiError = require('../utils/ApiError')

exports.createTodo=asyncHandler(async(req,res)=>{
    const {title}=req.body
    const todo=await createTodoService(req.body)

    return res.status(201).json({
        success:true,
        message:"Todo created successfully",
        todo:todo
    })
})

exports.getAllTodo=asyncHandler(async(req,res)=>{
    const todos=await getAllTodoService()
    return res.status(200).json({
        success:true,
        message:'Todo retrieved successfully',
        todos:todos
    })
})

exports.getTodo=asyncHandler(async(req,res)=>{
    const {id}=req.params;
    const todo=await getTodoService(Number(id))
    if(!todo){
        throw new ApiError("Todo not found",404)
    }

    return res.status(200).json({
        success:true,
        message:"Todo retrieved successfully",
        todo:todo
    })
})

exports.updateTodo=asyncHandler(async(req,res)=>{
    const {id}=req.params
    const data=req.body
    const updatedTodo=await updateTodoService(data,Number(id))

    if(!updatedTodo){
        throw new ApiError("Todo not found",404)
    }

    return res.status(200).json({
        success:true,
        message:"Todo updated successfully",
        updatedTodo:updatedTodo
    })
})

exports.deleteTodo=asyncHandler(async(req,res)=>{
    const {id}=req.params
    const deletedTodo=await deleteTodoService(Number(id))
    if(!deletedTodo){
        throw new ApiError("Todo not found",404)
    }

    return res.status(200).json({
        success:true,
        message:"Todo deleted successfully",
        deletedTodo:deletedTodo
    })
})