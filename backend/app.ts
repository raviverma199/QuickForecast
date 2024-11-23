import express from "express";
import cors from "cors";
import morgan from "morgan";
import MainRoute from "./routes/route";

const app = express();

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use("/", MainRoute);

app
  .listen(2020, () => {
    console.log("server is running in 2020");
  })
  .on("error", (err) => {
    console.log(err);
  });
