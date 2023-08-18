import {Router} from "express";
import generateChat from "../controllers/chat.controller";

const chatRouter = Router();

chatRouter.post('/gen', generateChat);

export default chatRouter;
