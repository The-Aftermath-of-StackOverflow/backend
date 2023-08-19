<p align="center">
   <img src="https://github.com/The-Aftermath-of-StackOverflow/backend/assets/76521428/61c526ff-f593-4868-a36e-d240ba5cce0c" />
</p>

# FashNet

The Fashnet is an innovative application that uses AI to create personalized fashion recommendations. Users input preferences and style choices in a general conversational way, and the AI generates unique outfit suggestions, considering trends, colors, and occasions. As users engage, the AI refines its suggestions, offering a creative way to explore fashion and even find shopping options.

This repository is a server-side application for the Fashnet website, build using Express Server and TypeScript.

## Getting Started

Here are the steps you need to do:

1. **Clone the repository** in your system, by using this command in your Git bash/Command Prompt. <br />
   ```bash
   git clone https://github.com/The-Aftermath-of-StackOverflow/backend.git
   ```

2. In the project directory, go to `server` folder and run the following command in terminal: 
   ```bash
   npm install
   ```

3. Add the `.env.local` file in the following format:
    ```
    MONGO_URL="<Your_MongoDB_Database_Connection_URL>"
    REPLICATE_API_KEY="<Your_Replicate_API_Token>"
    ```

    You can create a Replicate API Key using the Replicate [HTTP API Reference Docs](https://replicate.com/docs/reference/http)

4. Then, run the development server:
    ```bash
    npm start
    ```

Server is now running on [http://localhost:8000](http://localhost:8000) and you can check this by making a GET request on this URL. The expected response will be a `Healthy` message on the screen. 
