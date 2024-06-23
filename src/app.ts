import express, { Request, Response } from "express";

const app = express();
//parser
app.use(express.json());
//application routes

// app.use("/api/products", ProductRoutes);
// app.use("/api/orders", OrderRoutes);

//Route error
app.all("*", (req, res) => {
  res.json({
    success: false,
    message: "Route not found",
  });
});

app.get("/", async (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
