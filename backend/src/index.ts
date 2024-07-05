import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://Todo_owner:wlLYv8nBaT5U@ep-sparkling-tree-a7wtfikf.ap-southeast-2.aws.neon.tech/Todo?sslmode=require"
})


async function createUsersTable(){
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}
createUsersTable()