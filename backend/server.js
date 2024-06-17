import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieparser from 'cookie-parser'
import DbCon from './utlis/db.js'
import AuthRoutes from './routes/Auth.js'
import AdminRoutes from './routes/AdminRoutes.js'
import mongoose from 'mongoose'
dotenv.config()
const PORT=process.env.PORT || 3000
const app=express()

// mongo db 
mongoose
.connect("mongodb+srv://ikevine:ikevine@cluster0.mfblml4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("connected to DB successfully");
    // Listening to requests if DB connection is successful
    app.listen(4000, "localhost", () => console.log("Listening to port 4000"));
    
  })
app.use(express.json())
app.use(cookieparser())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'  
}));

app.use('/api/auth',AuthRoutes)
app.use('/api/admin',AdminRoutes)

app.get('/',(req,res)=>{
    res.send('test')
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})