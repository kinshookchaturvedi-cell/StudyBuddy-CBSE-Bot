# 🎯 FREE Deployment Guide - Zero Cost Bot Live in 30 Minutes

## 💰 Total Cost: ₹0 / $0 (Completely Free)

Deploy StudyBuddy on completely free services. No credit card required!

---

## 🚀 FASTEST FREE METHOD: Render.com

**Cost**: FREE ✅ | **Time**: 10 minutes | **Uptime**: 99.9%

### Step 1: Fork the Repository

1. Go to https://github.com/kinshookchaturvedi-cell/StudyBuddy-CBSE-Bot
2. Click **Fork** (top-right) → Create fork
3. Your repo is now ready

### Step 2: Create Render Account (1 minute)

1. Visit https://render.com
2. Click **Sign Up** → Select **Continue with GitHub**
3. Authorize Render to access your GitHub
4. Verify email

### Step 3: Deploy Backend (5 minutes)

```bash
# In Render Dashboard:
1. Click "New +" → "Web Service"
2. Select "StudyBuddy-CBSE-Bot" repository
3. Fill details:
   - Name: studybuddy-cbse-bot
   - Environment: Node
   - Build Command: npm install
   - Start Command: node server.js
   - Plan: Free
4. Add Environment Variables (click "Add Environment Variable"):
   
   WHATSAPP_API_TOKEN = your_token
   WHATSAPP_BUSINESS_ACCOUNT_ID = your_id
   VERIFY_TOKEN = any_random_string
   MONGODB_URI = your_mongodb_string
   DIALOGFLOW_PROJECT_ID = your_project_id
   NODE_ENV = production
5. Click "Deploy"
   → Your app will be live in 2-3 minutes!
   → URL: https://studybuddy-cbse-bot.onrender.com
```

### Step 4: Configure WhatsApp Webhook (2 minutes)

1. Go to WhatsApp Business Manager
2. Settings → Webhooks
3. Add Webhook URL: `https://studybuddy-cbse-bot.onrender.com/webhook`
4. Verify Token: (same as VERIFY_TOKEN in .env)
5. Subscribe to: messages
6. **DONE!** ✅

---

## 🗄️ FREE Database: MongoDB Atlas

**Cost**: FREE forever (512MB storage) ✅

### Setup (5 minutes)

```bash
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up with email (no card needed)
3. Create organization → Create project
4. Create FREE cluster:
   - Provider: AWS
   - Region: Mumbai (ap-south-1) [Fastest for India]
   - Cluster tier: M0 FREE
   - Name: studybuddy
   → Cluster created in 2-3 mins

5. Add Database User:
   - Username: studybuddy_admin
   - Password: your_strong_password
   - Role: Atlas Admin

6. Network Access:
   - Click "Add IP Address"
   - Select "Allow access from anywhere" (0.0.0.0/0)
   - Confirm

7. Get Connection String:
   - Click "Connect" → "Connect your app"
   - Driver: Node.js
   - Copy connection string:
   ```
   mongodb+srv://studybuddy_admin:YOUR_PASSWORD@cluster.mongodb.net/studybuddy?retryWrites=true&w=majority
   ```
   - Replace YOUR_PASSWORD with your password
   - This is your MONGODB_URI ✅
```

---

## 🧠 FREE NLP: Google Dialogflow

**Cost**: FREE tier sufficient for 10,000 requests/day ✅

### Setup (10 minutes)

```bash
1. Go to https://cloud.google.com/dialogflow/es/docs/quick/setup
2. Sign in with Google account
3. Create new GCP project:
   - Project name: studybuddy-cbse
   - Click "Create"

4. Enable Dialogflow API:
   - Search "Dialogflow API"
   - Click "Enable"

5. Create Service Account:
   - Go to: IAM & Admin → Service Accounts
   - Click "Create Service Account"
   - Name: studybuddy-bot
   - Description: CBSE Bot NLP
   - Click "Create and Continue"

6. Grant Permissions:
   - Role: "Dialogflow API Admin"
   - Click "Continue"
   - Click "Done"

7. Create JSON Key:
   - Click on the service account you created
   - Tab: Keys
   - Click "Add Key" → "Create new key"
   - Key type: JSON
   - Click "Create"
   → JSON file downloads automatically
   → Save as: keys/dialogflow-key.json in your repo

8. Get Project ID:
   - Go to: Cloud Console → Project Settings
   - Copy "Project ID"
   - This is your DIALOGFLOW_PROJECT_ID ✅

9. Create Dialogflow Agent:
   - Go to: https://dialogflow.cloud.google.com
   - Click "Create Agent"
   - Agent name: StudyBuddy
   - Language: English (en)
   - Time zone: IST
   - Click "Create"

10. Create Intents:
    - Intent 1: Quiz
      - Training phrases: "quiz", "daily quiz", "science quiz"
      - Fulfillment: Enable webhook
    - Intent 2: Summary
      - Training phrases: "summary", "explain", "notes"
      - Fulfillment: Enable webhook
    - Intent 3: Progress
      - Training phrases: "progress", "score", "results"
      - Fulfillment: Enable webhook
```

---

## 🔑 WhatsApp Business API (FREE for testing)

**Cost**: FREE for first 1,000 messages/month 🎉

### Setup (10 minutes)

```bash
1. Go to https://www.facebook.com/business/apps
2. Click "Create App"
   - App name: StudyBuddy CBSE
   - Type: Business
   - Click "Create App"

3. Add WhatsApp Product:
   - Search for "WhatsApp"
   - Click "Set Up"
   - Choose "WhatsApp Business API"

4. Get Credentials:
   - App Dashboard → WhatsApp → API Setup
   - Copy:
     - Permanent Access Token (WHATSAPP_API_TOKEN)
     - Phone Number ID (PHONE_NUMBER_ID)
     - Business Account ID (WHATSAPP_BUSINESS_ACCOUNT_ID)
     - VERIFY_TOKEN (you create this - any random string)

5. Test Number:
   - You can use any number to test
   - Add your number in "From" field
   - Send test message via WhatsApp
   → You'll receive it! ✅
```

---

## ✅ COMPLETE DEPLOYMENT CHECKLIST

### Credentials Collected
- [ ] `WHATSAPP_API_TOKEN` (from Facebook)
- [ ] `WHATSAPP_BUSINESS_ACCOUNT_ID` (from Facebook)
- [ ] `VERIFY_TOKEN` (you created it)
- [ ] `MONGODB_URI` (from MongoDB Atlas)
- [ ] `DIALOGFLOW_PROJECT_ID` (from GCP)
- [ ] `keys/dialogflow-key.json` (downloaded from GCP)

### Render Deployment
- [ ] Forked repository to GitHub
- [ ] Created Render account
- [ ] Created Web Service on Render
- [ ] Added all 6 environment variables
- [ ] Deployment successful (green checkmark)
- [ ] Got deployment URL (https://studybuddy-cbse-bot.onrender.com)

### WhatsApp Configuration
- [ ] Registered webhook URL with WhatsApp
- [ ] Verified webhook VERIFY_TOKEN
- [ ] Added webhook to WhatsApp Business Manager
- [ ] Subscribed to messages event
- [ ] Tested sending message
- [ ] Received response in WhatsApp

---

## 🧪 TEST YOUR BOT (2 minutes)

```bash
# Method 1: Direct WhatsApp Test
1. Save bot phone number in contacts
2. Open WhatsApp → Start chat with bot
3. Send: "Hi"
4. Expected: Bot replies with greeting message
5. Send: "Quiz"
6. Expected: Bot starts quiz

# Method 2: Webhook Test (via cURL)
curl -X POST https://your-render-url/webhook \
  -H "Content-Type: application/json" \
  -d '{
    "entry": [{
      "changes": [{
        "value": {
          "messages": [{
            "from": "919999999999",
            "text": {"body": "Hi"}
          }]
        }
      }]
    }]
  }'
```

---

## 🛠️ TROUBLESHOOTING

### Bot Not Responding
```
❌ Problem: Send message to bot, no response
✅ Solution:
   1. Check Render logs: Dashboard → Logs
   2. Verify VERIFY_TOKEN matches in WhatsApp
   3. Check webhook URL is correct
   4. Ensure MongoDB connection works
   5. Test with curl command above
```

### Deployment Failed
```
❌ Problem: Render shows "Failed" status
✅ Solution:
   1. Check build logs: Click deployment → Logs
   2. Verify package.json exists
   3. Check environment variables are set
   4. Ensure server.js starts correctly
   5. Run locally first: npm install && npm start
```

### MongoDB Connection Error
```
❌ Problem: Error connecting to MongoDB
✅ Solution:
   1. Check MONGODB_URI format
   2. Verify IP whitelist (should be 0.0.0.0/0)
   3. Confirm username/password in connection string
   4. Check cluster is created in MongoDB Atlas
```

### Dialogflow Not Recognizing Commands
```
❌ Problem: Bot doesn't understand "Quiz" or "Summary"
✅ Solution:
   1. Add more training phrases to intents
   2. Enable webhook fulfillment for each intent
   3. Test in Dialogflow console
   4. Check DIALOGFLOW_PROJECT_ID is correct
```

---

## 📊 FREE TIER LIMITS (More Than Enough!)

| Service | Free Limit | Your Usage | Status |
|---------|-----------|-----------|--------|
| **Render** | 750 hours/month | ~22 hours/day | ✅ Enough |
| **MongoDB** | 512 MB storage | ~100 MB for 5000 Qs | ✅ Plenty |
| **Dialogflow** | 10K requests/day | ~100 requests/day | ✅ Sufficient |
| **WhatsApp** | 1000 msgs/month | ~300 msgs for 50 students | ✅ Perfect |

---

## 🚨 IMPORTANT: Keep Render Running

Render free tier stops after 15 minutes of inactivity. To keep bot always online:

**Option 1: Auto-ping (Recommended)**
```bash
# Add this file to your repo: ping-service.js
setInterval(() => {
  https.get(process.env.RENDER_URL || 'http://localhost:3000');
}, 14 * 60 * 1000); // Every 14 minutes
```

**Option 2: Uptimerobot Monitoring (FREE)**
1. Go to https://uptimerobot.com
2. Sign up (free)
3. Add monitor:
   - URL: your-render-url/webhook
   - Check every: 5 minutes
4. Set check interval to keep bot active 24/7 ✅

---

## 🎉 YOU'RE LIVE!

**Your bot is now:**
- ✅ Live on Render (Free)
- ✅ Using MongoDB Atlas (Free)
- ✅ With Dialogflow NLP (Free)
- ✅ Connected to WhatsApp
- ✅ Responding to student queries
- ✅ Zero cost forever

**Next Steps:**
1. Share bot number with students
2. Monitor Render logs daily
3. Add more questions to MongoDB
4. Track usage in WhatsApp dashboard
5. Scale up when ready (Render has paid tiers)

---

## 📞 SUPPORT

- **Render Logs**: Dashboard → Logs
- **MongoDB Monitoring**: Atlas → Metrics
- **Dialogflow Testing**: Console → Test Agent
- **WhatsApp Delivery**: Business Manager → Messages

---

**Cost Breakdown:**
- ❌ ₹0 for server (Render Free)
- ❌ ₹0 for database (MongoDB Free)
- ❌ ₹0 for AI (Dialogflow Free)
- ❌ ₹0 for messaging (WhatsApp Free tier)
- **Total: ₹0 per month** ✅

**Made with 💙 for CBSE Students | Free Forever | Dec 2025**
