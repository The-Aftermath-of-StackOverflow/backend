import mongoose from "mongoose";

const mongooseURL = process.env.MONGO_URL as string;

mongoose.connect(mongooseURL, {}).then(()=>{
  console.log('connected to Mongo')
});

mongoose.connection.on('error', (e) => {
  if (e.message.code === 'ETIMEDOUT') {
    console.log(e);
  }
});
