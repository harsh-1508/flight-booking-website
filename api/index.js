import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";
import * as dotenv from "dotenv";
import { SessionsClient } from "@google-cloud/dialogflow";
import path from "path";
import { fileURLToPath } from "url";

import userofbmsrRoutes from "./routes/userofbmsr.js";
import adminofbmsrRoutes from "./routes/adminofbmsr.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ID = "onlineflightbokking"; 
const SESSION_ID = uuidv4();
const CREDENTIALS_PATH = path.join(__dirname, "onlineflightbokking.json");

const sessionClient = new SessionsClient({ keyFilename: CREDENTIALS_PATH });

async function detectIntent(text) {
  const sessionPath = sessionClient.projectAgentSessionPath(PROJECT_ID, SESSION_ID);
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text,
        languageCode: "en",
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  return responses[0].queryResult.fulfillmentText;
}

app.post("/api/chatbot", async (req, res) => {
  const { message } = req.body;
  try {
    const responseText = await detectIntent(message);
    res.json({ reply: responseText });
  } catch (error) {
    console.error("Error communicating with Dialogflow:", error);
    res.status(500).json({ error: "Failed to communicate with chatbot" });
  }
});

app.use("/api/userofbmsr", userofbmsrRoutes);
app.use("/api/adminofbmsr", adminofbmsrRoutes);

app.listen(8081, () => {
  console.log("Server started on port 8081");
});
