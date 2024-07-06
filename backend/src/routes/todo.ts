import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const router = express.Router();
router.use(express.json())

router.post("/addtodo", async(req, res)=>{
    const {title, description, compleated, userId } = req.body;

    try {
        const newTodo = await prisma.todo.create({
            data: {
                title,
                description,
                compleated,
                userId
            }
        })       
        res.status(200).json(newTodo);
    } catch (error) {
        res.status(500).json({error:"Error Creating Todo"})
    }
})



export default router;