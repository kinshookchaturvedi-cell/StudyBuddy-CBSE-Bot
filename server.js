const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const dialogflow = require('dialogflow');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/studybuddy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// WhatsApp Webhook Endpoint
app.post('/webhook', async (req, res) => {
  try {
    const { messages } = req.body.entry[0].changes[0].value;
    
    if (!messages) {
      return res.sendStatus(200);
    }

    messages.forEach(async (message) => {
      const from = message.from;
      const text = message.text.body;
      const messageId = message.id;

      // Send to Dialogflow for intent recognition
      const response = await detectIntent(text, from);
      
      // Send response via WhatsApp API
      await sendWhatsAppMessage(from, response, messageId);
    });

    res.sendStatus(200);
  } catch (error) {
    console.error('Webhook error:', error);
    res.sendStatus(500);
  }
});

// Verify webhook token
app.get('/webhook', (req, res) => {
  const token = process.env.VERIFY_TOKEN;
  const mode = req.query['hub.mode'];
  const challenge = req.query['hub.challenge'];
  const verifyToken = req.query['hub.verify_token'];

  if (mode === 'subscribe' && verifyToken === token) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Dialogflow Intent Detection
async function detectIntent(text, userId) {
  try {
    const sessionClient = new dialogflow.SessionsClient({
      keyFilename: process.env.DIALOGFLOW_KEY_PATH,
    });

    const projectId = process.env.DIALOGFLOW_PROJECT_ID;
    const sessionId = userId; // Use user phone as session ID
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: text,
          languageCode: 'en-US',
        },
      },
    };

    const [response] = await sessionClient.detectIntent(request);
    const fulfillmentText = response.queryResult.fulfillmentText;
    
    return fulfillmentText || "Sorry, I didn't understand that. Try: Quiz, Summary, or Mock Test";
  } catch (error) {
    console.error('Dialogflow error:', error);
    return "Error processing your request. Please try again.";
  }
}

// Send WhatsApp Message
async function sendWhatsAppMessage(to, message, replyTo) {
  try {
    await axios.post(
      `https://graph.instagram.com/v18.0/${process.env.WHATSAPP_BUSINESS_ACCOUNT_ID}/messages`,
      {
        messaging_product: 'whatsapp',
        to: to,
        type: 'text',
        text: {
          body: message,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('WhatsApp send error:', error);
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`StudyBuddy server running on port ${PORT}`);
});
