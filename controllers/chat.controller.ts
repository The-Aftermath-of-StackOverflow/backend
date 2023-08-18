import {Request, Response} from "express";
import getPrediction, {Message} from "../bin/replicate.util";


const generateChat = async (req: Request, res: Response) => {
  const messageHistory: Message[] = req.body.messages;
  const streamingURL = await getPrediction(messageHistory);

  res.send(streamingURL);
}


export default generateChat;
