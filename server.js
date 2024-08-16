import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('database connected');
}).catch((erro)=>{
    console.log(erro)
});

const app = express()
const PORT = process.env.PORT || 3000



app.get('/', (req, res) => {
  res.send('this is chatapplication server running')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})