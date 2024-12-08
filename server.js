import express from 'express';
import dotenv from 'dotenv';
import colors from "colors";

// Dot Env config
dotenv.config();

const app = express();

app.get('/', (req, res) => {
     res.send("<h1>Welcome to job portal</h1>")
})

// port 
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT,() => {
     console.log(`Node server Running in ${process.env.DEV_MODE} Mode on port ${PORT}`.bgCyan.white);
});