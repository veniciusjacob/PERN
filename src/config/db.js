import pkg from "pg"
import dotenv from "dotenv"

dotenv.config();

const { Pool } = pkg;

console.log(process.env.DB_USER);
 
const pool = new Pool ({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

pool.on("connect", () => {
    console.log("Connected to the database"); 
})

export default pool;