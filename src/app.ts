import express, { Request, Response } from "express";
import cors from "cors"
import peopleRouter from "routes/people.routes";

const app = express();
app.use(cors())
app.use(express.json())
app.use(peopleRouter)

app.get("/health", (req: Request, res: Response) => {
  res.status(200).send("I'm ok!");
});

app.listen(5000, () => console.log(`server is up and running`));