// Importing dependencies using ES module syntax
import express from "express";
import connectDB from "./config/db.mjs";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.mjs";
import { notFound, errorHandler } from "./middleware/errorMiddleware.mjs";
import exp from "constants";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

const handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "Api is running"
  };
};

export { handler };


app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Using ES module syntax for exporting
app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
