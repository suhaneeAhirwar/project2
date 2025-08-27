import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./routes/book.routes.js";
//import userRoute from "./routes/user.route.js";
import userRoute from "./routes/user.route.js";

const app = express();
  app.use(cors());
app.use(express.json());



dotenv.config();

const PORT = process.env.PORT || 4001;   // ✅ use 4001 to match frontend
const URI = process.env.MongoDBURI;

// ✅ Enable CORS so frontend (5173) can call backend (4001)
// app.use(cors({
//   origin: "http://localhost:5173",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));


// ✅ Register routes BEFORE starting server
app.use("/book", bookRoute);
app.use("/user", userRoute);

// ✅ Connect to MongoDB and THEN start server
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error("❌ MongoDB connection error:", error);
});




// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
//  import cors from "cors";
// import bookRoute from "./routes/book.routes.js";
// // import userRoute from "./routes/user.route.js";

// dotenv.config();

// const app = express();   // ✅ Must come before app.use

// const PORT = process.env.PORT || 4000;
// const URI = process.env.MongoDBURI;

// // app.use(cors({
// //   origin: "http://localhost:5173"
// // }));

// app.use(express.json());
// // app.use("/book", bookRoute);
// // app.use("/user", userRoute);

// // connect to mongodb and then start server
// mongoose.connect(URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//   console.log("✅ Connected to MongoDB");
//   app.listen(PORT, () => {
//     console.log(`🚀 Server listening on http://localhost:${PORT}`);
//   });
// })
// .catch((error) => {
//   console.error("❌ MongoDB connection error:", error);
// });
// app.use("/book",bookRoute);

// app.listen(PORT, () => {
//   console.log(`🚀 Server listening on port ${PORT}`)
// });
