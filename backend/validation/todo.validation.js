const { z } = require("zod");

const createTodoSchema = z.object({
    title: z
        .string()
        .min(1, "Title is required")
        .max(100, "Title must be less than 100 characters"),

    completed: z.boolean().optional(),
    favorite: z.boolean().optional(),
    pinned: z.boolean().optional()
});

module.exports = {
    createTodoSchema
};