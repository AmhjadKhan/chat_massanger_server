import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import {server, app} from './socket/Socket.js'

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('database connected');
}).catch((erro)=>{
    console.log(erro)
});

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser())




app.get('/', (req, res) => {
  res.send('this is chatapplication server running')
})

//import routes 
import authRoutes from './routes/auth.routes.js'
import messageRoute from './routes/massage.routes.js'
import UserRoute from './routes/user.routes.js'


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoute)
app.use("/api/users", UserRoute)


server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

// error handle 
app.use((err,req,res,next ) =>{
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal Server Error"

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  })
})