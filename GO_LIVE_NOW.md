# 🔴 GO LIVE NOW - StudyBuddy Bot (2025)

## ✅ YOUR BOT IS READY - Deploy in 5 Minutes!

Follow this exact checklist to make your bot LIVE today.

---

## Step 1: Collect Credentials (Done in Parallel)

### 1a. WhatsApp API Token
```
1. Go: https://www.facebook.com/business/apps
2. Create App (Business) → WhatsApp
3. Copy these 3 values:
   - WHATSAPP_API_TOKEN
   - WHATSAPP_BUSINESS_ACCOUNT_ID
   - Create VERIFY_TOKEN (any random string like: abc123xyz)
4. Save in notepad
   Time: 2 minutes ⏱️
```

### 1b. MongoDB Connection
```
1. Go: https://www.mongodb.com/cloud/atlas
2. Sign up (email only, no card)
3. Create FREE cluster:
   - Region: Mumbai (ap-south-1)
   - Tier: M0 FREE
4. Create user: studybuddy_admin / password123
5. Network: Allow 0.0.0.0/0
6. Get connection string:
   mongodb+srv://studybuddy_admin:password123@...studybuddy?retryWrites=true&w=majority
7. Save in notepad
   Time: 5 minutes ⏱️
```

### 1c. Google Dialogflow Keys
```
1. Go: https://cloud.google.com/dialogflow
2. Sign in with Google
3. Create GCP project
4. Enable Dialogflow API
5. IAM → Service Account → Create → studybuddy-bot
6. Keys → Add Key → JSON → Download
7. Save file: keys/dialogflow-key.json (in repo)
8. Copy DIALOGFLOW_PROJECT_ID from Cloud Console
9. Save in notepad
   Time: 10 minutes ⏱️
```

**Total Prep Time: 17 minutes**

---

## Step 2: Deploy on Render (5 minutes)

```
1. Go: https://github.com/kinshookchaturvedi-cell/StudyBuddy-CBSE-Bot
2. Click: Fork (top-right) → Create fork
3. Go: https://render.com
4. Sign up → GitHub → Authorize
5. Click: "New" → "Web Service"
6. Select: StudyBuddy-CBSE-Bot (from fork)
7. Fill form:
   Name: studybuddy-cbse-bot
   Environment: Node
   Build: npm install
   Start: node server.js
   Plan: Free ✅

8. Environment Variables (click "Add"):
   KEY                          | VALUE (from notepad)
   WHATSAPP_API_TOKEN          | xxx
   WHATSAPP_BUSINESS_ACCOUNT_ID| xxx
   VERIFY_TOKEN                | abc123xyz
   MONGODB_URI                 | mongodb+srv://...
   DIALOGFLOW_PROJECT_ID       | xxx
   NODE_ENV                    | production

9. Click: Deploy
   ⏳ Wait 2-3 minutes...
   ✅ Green checkmark = LIVE!
   
10. Copy URL from dashboard:
    https://studybuddy-cbse-bot.onrender.com
```

---

## Step 3: Connect WhatsApp Webhook (2 minutes)

```
1. Go: WhatsApp Business Manager
2. Settings → Webhooks
3. Add webhook:
   URL: https://studybuddy-cbse-bot.onrender.com/webhook
   Verify Token: abc123xyz (same as above)
4. Subscribe to: messages
5. Click: Verify
   ✅ Should turn green!
```

---

## 🎉 TEST YOUR BOT (1 minute)

```
1. Open WhatsApp on your phone
2. Save bot number in contacts
3. Send message: "Hi"
4. ✅ Bot replies!
5. Send: "Quiz"
6. ✅ Bot starts quiz!
```

---

## 📊 DONE! Your Bot is LIVE

**Total Time: 25 minutes**
- Prep credentials: 17 mins
- Deploy: 5 mins
- Connect: 2 mins
- Test: 1 min

**Cost: ₹0 / $0 forever** ✅

---

## 🚀 Next: Keep Bot Active 24/7

Render free tier stops after 15 minutes idle. Keep it alive:

```
1. Go: https://uptimerobot.com
2. Sign up (free)
3. Add monitor:
   URL: https://studybuddy-cbse-bot.onrender.com/webhook
   Interval: 5 minutes
✅ Bot stays online forever
```

---

## 📱 Share Bot with Students

```
WhatsApp message template:

"Hi Students! 👋

Excited to introduce StudyBuddy - Your AI revision buddy for CBSE!

📚 Daily Quizzes
📝 Concept Summaries  
⏱️ Mock Tests
📊 Progress Tracking

Save this number and message 'Hi' to start!

+91-XXXX-XXXXX

FREE forever! 🎉"
```

---

## ⚠️ Common Issues

### "Deployment Failed"
- Check: package.json exists
- Check: server.js in root folder
- Check: Environment variables all set
- Redeploy: Button → Redeploy

### "Bot Not Responding"
- Check: Webhook URL correct in WhatsApp
- Check: VERIFY_TOKEN matches
- Check: Render logs (click deployment → Logs)
- Test: curl https://your-url/webhook

### "MongoDB Error"
- Check: IP whitelist = 0.0.0.0/0 in Atlas
- Check: Connection string correct
- Test: Connection from MongoDB CLI

---

## 📚 Documentation

- **This file**: GO_LIVE_NOW.md (you are here)
- **Free setup**: FREE_DEPLOYMENT.md
- **Detailed guide**: DEPLOYMENT_GUIDE.md
- **Code**: server.js, package.json
- **Config**: render.yaml

---

## ✨ You're Ready!

**Your StudyBuddy bot is now:**
- ✅ Code ready on GitHub
- ✅ Documentation complete
- ✅ Deployment automated
- ✅ Free to deploy
- ✅ 5 minutes away from LIVE

**Go deploy now! 🚀**

**Made with 💙 for CBSE Students | Dec 2025**
