import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config();
 
const pool = new Pool({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.NAME_DB,
    password: process.env.PASSWORD_DB,
    port: process.env.PORT_DB
})

pool.on("connect", () => {
    console.log("Connected to the database");
})

export default pool;