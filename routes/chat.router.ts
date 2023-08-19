import {Router} from "express";
import {streamChat, generateChat} from "../controllers/chat.controller";
import {verify} from "../middlewares/auth";

const chatRouter = Router();

chatRouter.post('/gen', verify, generateChat);
chatRouter.get('/stream/:id', streamChat);
export default chatRouter;
