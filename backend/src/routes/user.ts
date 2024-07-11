import express from "express"
import { PrismaClient } from "@prisma/client";
const router = express.Router()
router.use(express.json())
const prisma = new PrismaClient();

router.post("/", async(req, res)=>{
    const {email, password, firstName, lastName } = req.body;
    try {        
        const user = await prisma.user.create({
            data : {
                email,
                password,
                firstName,
                lastName
            }
        })
        console.log(user)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error:"Error Creating User"})
    }
} )

export default router;
