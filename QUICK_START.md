# 🚀 StudyBuddy - 15 Minute Quick Start

## Step 1: Prep (5 mins)

### Get WhatsApp Credentials
1. Go to https://www.facebook.com/business/apps
2. Create Business App → Add WhatsApp product
3. Copy: `WHATSAPP_API_TOKEN`, `WHATSAPP_BUSINESS_ACCOUNT_ID`, create `VERIFY_TOKEN`

### Get MongoDB Link
1. https://www.mongodb.com/cloud/atlas → Create cluster
2. Copy connection string: `mongodb+srv://user:pass@cluster.mongodb.net/studybuddy`

### Get Dialogflow Project ID
1. https://cloud.google.com/dialogflow → Create agent
2. Copy `DIALOGFLOW_PROJECT_ID`
3. Download JSON key as `keys/dialogflow-key.json`

## Step 2: Setup (5 mins)

```bash
# Clone
git clone https://github.com/yourusername/StudyBuddy-CBSE-Bot.git
cd StudyBuddy-CBSE-Bot

# Install
npm install

# Configure
cp .env.example .env
# Edit .env with your credentials above

# Test locally
npm run dev
# Visit http://localhost:3000
```

## Step 3: Deploy (5 mins)

### Option A: Firebase (Easiest)

```bash
npm install -g firebase-tools
firebase login
firebase init  # Select Hosting + Functions
firebase deploy

# Copy the URL from output
# Go to WhatsApp Manager → Webhooks
# Paste: https://your-firebase-url/webhook
```

### Option B: Heroku

```bash
echo "web: node server.js" > Procfile
heroku login
heroku create your-app-name
heroku config:set WHATSAPP_API_TOKEN=xxxxx
heroku config:set MONGODB_URI=xxxxx
heroku config:set DIALOGFLOW_PROJECT_ID=xxxxx
git push heroku main
```

## ✅ Done!

**Test your bot:**
- WhatsApp: Send "Hi" to bot number
- Should reply in < 2 seconds
- Send "Quiz" to start

## 📊 Next Steps

1. **Add Questions:** Update MongoDB with NCERT content
2. **Configure Intents:** Create Dialogflow intents (Quiz, Summary, Progress)
3. **Monitor:** Check logs for errors: `heroku logs --tail`
4. **Scale:** Add more students & test load handling

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Webhook not responding | Check WhatsApp URL + VERIFY_TOKEN |
| MongoDB connection failed | Verify connection string + IP whitelist |
| Dialogflow not working | Check JSON key path in .env |
| Slow responses | Check API quotas, enable caching |

## 📚 Full Docs

- **README.md** - Complete feature list
- **DEPLOYMENT_GUIDE.md** - Detailed setup for production
- **Package.json** - All dependencies

---

**Questions?** Create an issue on GitHub or check README.md

**Made with 💙 for CBSE students | Dec 2025**
