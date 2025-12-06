
import express from 'express';
import dotenv from 'dotenv';
import authRouter from'./routes/auth.route.js';
import MessageRouter from'./routes/message.route.js';
const app=express();
const PORT=process.env.PORT || 3000;
dotenv.config();
console.log(process.env.PORT); 



app.use("/api/auth",authRouter);
app.use("/api/messages",MessageRouter);








app.listen (PORT,()=>{
    console.log('Server is running on port:'+PORT );
});
