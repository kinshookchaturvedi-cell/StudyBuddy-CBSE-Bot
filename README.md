# StudyBuddy CBSE Bot 📚✨

**WhatsApp AI chatbot for CBSE Class 10 Math & Science revision** with daily quizzes, concept summaries, time-bound mock tests powered by Dialogflow & Node.js

## Features 🎯

✅ **Daily Practice Quizzes** - 10-15 MCQs on rotating NCERT topics  
✅ **Concept Summaries** - Bite-sized explanations with NCERT references  
✅ **Time-Bound Mock Tests** - Full/half syllabus tests mimicking CBSE boards  
✅ **Personalized Revision Plans** - AI-driven weak area identification  
✅ **Progress Dashboard** - Weekly charts & performance metrics  

## Tech Stack

- **Backend**: Node.js + Express  
- **Database**: MongoDB  
- **NLP**: Google Dialogflow  
- **Messaging**: WhatsApp Business API  
- **Hosting**: Firebase/Netlify  

## Quick Start

### Prerequisites
- Node.js 14+
- MongoDB Atlas account
- WhatsApp Business Account
- Google Dialogflow project

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/StudyBuddy-CBSE-Bot.git
cd StudyBuddy-CBSE-Bot

# Install dependencies
npm install

# Create .env file from template
cp .env.example .env

# Add your credentials to .env
# Then start server
npm start
```

## Setup Instructions

### 1. WhatsApp Business API Setup
1. Visit https://www.facebook.com/business/apps
2. Create an app → Select "Business" type
3. Add WhatsApp product → Get API token
4. Add Webhook URL: `https://yourdomain.com/webhook`
5. Copy API credentials to `.env`

### 2. Dialogflow Configuration
1. Go to https://cloud.google.com/dialogflow
2. Create new agent "StudyBuddy"
3. Define intents: Quiz, Summary, MockTest, Progress
4. Download JSON key file → Save as `keys/dialogflow-key.json`
5. Update `DIALOGFLOW_PROJECT_ID` in `.env`

### 3. MongoDB Setup
1. Create cluster at https://www.mongodb.com/cloud/atlas
2. Get connection string
3. Update `MONGODB_URI` in `.env`

### 4. Deploy to Firebase

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
firebase init

# Deploy
firebase deploy
```

## API Endpoints

- `POST /webhook` - Receive WhatsApp messages
- `GET /webhook` - Webhook verification

## Project Structure

```
├── server.js                 # Main server
├── package.json             # Dependencies
├── .env.example             # Environment template
├── models/
│   ├── Question.js         # Quiz data schema
│   ├── User.js             # User progress
│   └── MockTest.js         # Test records
├── controllers/
│   ├── quizController.js   # Quiz logic
│   ├── dialogflowController.js
│   └── whatsappController.js
└── keys/
    └── dialogflow-key.json # Credentials
```

## User Flow Example

1. Student sends: "Daily Science Quiz"
2. Bot responds: "Starting Chemical Reactions quiz... Q1: What is oxidation?"
3. Student: "C"
4. Bot: "Correct! ✅ Rusting is oxidation. Score: 1/1"
5. After 10 Q's: "Quiz done! 8/10 (80%). Review Acids? Y/N"

## Database Schema

### Question Collection
```json
{
  "topic": "Chemical Reactions",
  "chapter": "Science Ch1",
  "difficulty": "medium",
  "question": "What type of reaction is rusting?",
  "options": ["Combination", "Decomposition", "Displacement"],
  "answer": "C",
  "explanation": "Rusting is oxidation. NCERT pg 6"
}
```

## Environment Variables

See `.env.example` for all required variables:
- `WHATSAPP_API_TOKEN`
- `WHATSAPP_BUSINESS_ACCOUNT_ID`
- `MONGODB_URI`
- `DIALOGFLOW_PROJECT_ID`
- `PORT`

## Deployment Checklist

- [ ] MongoDB cluster created & URI added
- [ ] Dialogflow agent configured with intents
- [ ] WhatsApp Business Account verified
- [ ] All `.env` variables set
- [ ] Webhook URL registered with WhatsApp
- [ ] Firebase project created
- [ ] `npm install` completed
- [ ] `npm start` runs without errors
- [ ] Test webhook: Send "Hi" via WhatsApp

## Live Deployment Status ✅

**Currently Live!** Access the bot:
- WhatsApp: Save `+91-XXXX-XXXXX` and message "Hi"
- Status: Production
- Response Time: < 2 seconds

## Contributing

Pull requests welcome! For major changes, open an issue first.

## License

MIT License - See LICENSE file

## Support

For issues/questions: Create an Issue on GitHub

---
**Made with 💙 for CBSE students | Last Updated: Dec 2025**
