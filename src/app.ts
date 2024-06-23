import express, { Request, Response } from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes";

const app = express();
//parser
app.use(express.json());

//application routes
app.use("/api/auth", router);

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
//Route error
app.use(notFound);

export default app;
