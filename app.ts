import express, {Application, json, Request, Response} from "express";
import mongoose from 'mongoose';
import {config} from 'dotenv'

const app: Application = express();
config();
app.use(json());
app.use(express.urlencoded({extended: true}));
const mongo_url = process.env.MONGO_URL as string
mongoose.connect(mongo_url, {}).then(() => {
  console.log('Connected to DB')
});
app.get("/", (req: Request, res: Response) => {
  res.send("Healthy");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
