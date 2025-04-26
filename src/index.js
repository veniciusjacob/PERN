import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';

import userRoutes from './routers/userRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT_API || 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoutes);

//Error handling
app.use(errorHandler);

//testing DB connection
app.get("/", async (req, res) => {
    const result = await pool.query("SELECT current_database()");

    res.send(result.rows[0].current_database);z
})



//server running
  
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
    console.log(`Server running on http://localhost:${port}`)
})

