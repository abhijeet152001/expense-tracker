import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';


const app = express();
const PORT = 4000;
app.use(cors);
// const con = async()=>
// {
//   try { 
//     const connection = await mongoose.connect("mongodb+srv://abhijeet:abhijeetA@cluster0.uqo7wub.mongodb.net/?retryWrites=true&w=majority");
//     // console.log(await connection);
//     console.log("connection");
//     }
//     catch(e){
//         console.log("error");
//         // console.log(e);
//     }
// }
// con();


// Estabilsh connection with mongodb
await mongoose.connect("mongodb+srv://abhijeet:abhijeetA@cluster0.uqo7wub.mongodb.net/?retryWrites=true&w=majority");
console.log("MongoDB connection is sucessful");

// mongoose.connect("mongodb+srv://abhijeet:abhijeetA@cluster0.uqo7wub.mongodb.net/?retryWrites=true&w=majority").then(()=>
//   console.log("MongoDB connection is sucessful")).catch((err)=>{
//     console.log(err);
//   })

app.get('/',  (req, res) =>{
  res.send('Hello World')
})

app.listen(PORT, ()=>{
    console.log("Server is running at http://localhost:4000");
})