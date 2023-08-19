import express, {Application, Request, Response} from "express";
import {config} from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/index.router'

const app: Application = express();
config();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3001', 'https://fashnet.live']
}));

app.use('/', router)

app.get("/", (req: Request, res: Response) => {
  res.send("Healthy");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
