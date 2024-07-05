import { Client } from "pg"
import { client } from "./index"

async function insertUser(){
    // await client.connect()
    const insertQuery = `INSERT INTO users(username, email, password)
        VALUES('prasad', 'prasadhp99@gmail.com', '@admin')` 
    const res = await client.query(insertQuery)
    console.log(res)
}

insertUser()