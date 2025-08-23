

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./routes/book.routes.js"

const app = express();

dotenv.config();

 const PORT=process.env.PORT || 4000;
 const  URI=process.env.MongoDBURI;

 app.use(cors({
  origin: "http://localhost:5173"
}));
 

app.use(express.json());
app.use("/book",bookRoute);

 //connect to mongodb;
// try {

// mongoose.connect(URI,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
    
// });
// console.log("connect to mongodb ");
// mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
// console.log("connect to mongodb ");


    
// } catch (error) {
//    console.log("Error",error);
     
// }

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });





app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
