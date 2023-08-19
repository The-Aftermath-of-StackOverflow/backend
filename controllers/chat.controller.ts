import {Request, Response} from "express";
import getPrediction, {Message} from "../bin/replicate.util";
import {config} from "dotenv";
import eventsource from 'eventsource';

config();

const ReplicateAPIKey = process.env.REPLICATE_API_KEY;


export const generateChat = async (req: Request, res: Response) => {
  let messageHistory: Message[] = req.body.messages.slice(1);
  console.log(messageHistory);
  // const streamingURL = await getPrediction(messageHistory);
  const id = 'ki2kp43bdxd7lkvyftpvnmutgi'
  const streamingURL = `https://streaming-api.svc.us.c.replicate.net/v1/predictions/${id}`
  console.log(streamingURL);
  const ids = streamingURL.split('/');
  const lastId = ids[ids.length-1];
  console.log(lastId);
  return res.send(lastId);
}

export const streamChat = async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log(id);
  if(!id){
    res.status(400).send({
      error: "Bad Request: please send the streaming id"
    });
  }
  const streamingURL = `https://streaming-api.svc.us.c.replicate.net/v1/predictions/${id}`
  console.log(streamingURL)
  const headers = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache',
  };
  res.writeHead(200, headers);
  console.log(headers);

  const event = new eventsource(streamingURL);

  event.addEventListener('output', (data: any) => {
    console.log(data.data);
    res.write(`data: ${data.data}\n\n`);
  });

  event.addEventListener('done', (data: any) => {
    console.log('done');
    res.end('done');
    event.close();
  });


  event.addEventListener('error', (err: any) => {
    console.log(err.type);
    // res.end(err);
    event.close();
  });
}


