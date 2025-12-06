
import express from 'express';
import dotenv from 'dotenv';
import path from "path";

import authRouter from'./routes/auth.route.js';
import MessageRouter from'./routes/message.route.js';

const app=express();
const PORT=process.env.PORT || 3000;
dotenv.config();
console.log(process.env.PORT); 
const __dirname =path.resolve();



app.use("/api/auth",authRouter);
app.use("/api/messages",MessageRouter);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));}

app.get("*", (_, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
  });






app.listen (PORT,()=>{
    console.log('Server is running on port:'+PORT );
});
