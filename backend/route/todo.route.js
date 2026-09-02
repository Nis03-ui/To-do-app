const express=require("express")
const router=express.Router()
const{
    createTodo,
    getAllTodo,
    getTodo,
    updateTodo,
    deleteTodo
}=require("../controller/todo.controller")
const{createTodoSchema}=require("../validation/todo.validation")
const validate=require("../middleware/validation.middleware")

router.post("/",validate(createTodoSchema),createTodo)
router.get("/",getAllTodo)
router.get("/:id",getTodo)
router.patch("/:id",updateTodo)
router.delete("/:id",deleteTodo)

module.exports=router