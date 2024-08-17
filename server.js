import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('database connected');
}).catch((erro)=>{
    console.log(erro)
});

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cookieParser())




app.get('/', (req, res) => {
  res.send('this is chatapplication server running')
})

//import routes 
import authRoutes from './routes/auth.routes.js'

app.use("/api/auth", authRoutes)


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})