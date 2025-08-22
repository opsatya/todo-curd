import mongoose from "mongoose";
const express = require('express')
const app = express();
const router = express.Router();
console.log(router)
app.use(express.json())


mongoose.connect('mongodb://localhost:27017/todos-application')

const connectDB = async() =>{
        try {
            await mongoose.connect('mongodb://localhost:27017/todos-application')
            console.log("mongo DB is connceted");
            
        }
        catch(error : any){
        console.error(`Error connecting to MongoDB: ${error.message}`);
            
        }        
}
connectDB()