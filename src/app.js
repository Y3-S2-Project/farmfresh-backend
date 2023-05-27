require("dotenv").config();
import express from "express";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import connectDB from "./database/mongo";
import router from "./routes/index";
import { makeResponse } from "./utils/response";
import logger from "./utils/logger";

const app = express();

app.use(helmet());

app.use(compression());

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ limit: "1mb" }));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.status(200).json({ message: "FarmFresh Server Up and Running" })
);
app.use("/api", router);

app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message} | Stack: ${err.stack}`);
  if (err.expose) {
    return makeResponse({ res, status: err.status, message: err.message });
  } else
    return makeResponse({
      res,
      status: 500,
      message: "Just patching things up. This'll be over soon!",
    });
});

connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`FarmFresh server successfully started at port ${port}`);
});
