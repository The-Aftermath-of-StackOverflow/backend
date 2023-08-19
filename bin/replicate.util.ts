import {config} from "dotenv";
import axios from "axios";

config();

const ReplicateAPIKey = process.env.REPLICATE_API_KEY;
const systemPrompt = 'Act as if you are a shopkeeper trying to sell clothes';

export interface Message {
  isUser: boolean,
  value: string
}

const approxTokenCount = (prompt: string) => {
  return Math.ceil(prompt.length * 0.4);
}

const createPrompt = (messages: Message[]) => {
  const SNIP = "<!-- snip -->";

  let prompt = messages
    .map((message) =>
      message.isUser ? `[INST] ${message.value} [/INST]` : `${message.value}`)
    .join('\n');

  while (approxTokenCount(prompt) > 4096) {
    if (messages.length < 3) {
      throw Error('Message is too long');
    }
    messages.splice(1, 2);

    // Recreate the prompt
    prompt = `${SNIP}\n${createPrompt(messages)}\n`;
  }
  return prompt;
}

const getPrediction = async (messages: Message[]) => {
  const prompt = createPrompt(messages)
  const res = await axios.post('https://api.replicate.com/v1/predictions', {
    version: '58d078176e02c219e11eb4da5a02a7830a283b14cf8f94537af893ccff5ee781',
    stream: true,
    input: {
      prompt: prompt,
      system_prompt: systemPrompt,
      max_new_tokens: 4096,
      temperature: 0.75,
      repetition_penalty: 1,
      top_p: 1,
    }
  }, {
    headers: {
      Authorization: `Token ${ReplicateAPIKey}`
    }
  });
  // const prediction = await replicate.predictions.create();
  // console.log(res.data.urls.stream);
  return res.data.urls.stream;
}


export default getPrediction;
