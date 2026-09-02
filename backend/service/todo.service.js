
const prisma=require("../config/db")

exports.createTodo=async(data)=>{
    const todo=await prisma.todo.create({
        data
    })
    return todo
}

exports.getAllTodos=async()=>{
    const todos=await prisma.todo.findMany()
    return todos
}

exports.getTodo=async(id)=>{
    const todo=await prisma.todo.findUnique({
        where:{
            id
        }
    })
    return todo
}

exports.updateTodo=async(data,id)=>{
    const updatedTodo=await prisma.todo.update({
        where:{
            id
        },
        data
    })

    return updatedTodo
}

exports.deleteTodo=async(id)=>{
    const deletedTodo=await prisma.todo.delete({
        where:{
            id
        }
    })
    return deletedTodo
}