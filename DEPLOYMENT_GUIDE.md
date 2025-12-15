# StudyBuddy CBSE Bot - Deployment Guide 🚀

## Complete Step-by-Step Guide to Launch the Bot

This guide will walk you through deploying StudyBuddy to production.

---

## Phase 1: Pre-Deployment Setup (24 hours)

### 1.1 WhatsApp Business Account

**Time: 2-4 hours**

1. Go to https://www.facebook.com/business/apps
2. Click "Create App" → Choose "Business" type
3. App Name: "StudyBuddy CBSE Bot"
4. In app, click "Add Product" → Search "WhatsApp"
5. Choose "WhatsApp Business API"
6. Get Phone Number ID & Business Account ID from dashboard
7. Create an API token:
   - Settings → API Keys → Create Token
   - Copy token (save in password manager)
8. Add webhook URL: `https://yourdomain.com/webhook`
9. Verify token in webhook settings

**Save These Credentials:**
```
WHATSAPP_API_TOKEN=xxxxx
WHATSAPP_BUSINESS_ACCOUNT_ID=xxxxx
VERIFY_TOKEN=any_random_string_you_create
```

### 1.2 MongoDB Setup

**Time: 30 minutes**

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up / Login
3. Create new project: "StudyBuddy"
4. Create Cluster (Free tier OK for testing)
5. Select "AWS" → "India (ap-south-1)"
6. Create cluster (takes 5-10 mins)
7. Create database user:
   - Username: `studybuddy_admin`
   - Password: Generate strong password
8. Whitelist IP addresses:
   - Add `0.0.0.0/0` for development
   - Later restrict to your server IP
9. Get connection string from Connect button

**Connection String Format:**
```
mongoodb+srv://username:password@cluster.mongodb.net/studybuddy?retryWrites=true&w=majority
```

### 1.3 Google Dialogflow Setup

**Time: 1 hour**

1. Go to https://cloud.google.com/dialogflow
2. Create new GCP project or use existing
3. Enable Dialogflow API
4. Create Service Account:
   - IAM & Admin → Service Accounts
   - Create new account: "studybuddy-bot"
   - Grant "Dialogflow API Client" role
   - Create JSON key file
   - Download and save as `keys/dialogflow-key.json`

5. Create Dialogflow Agent:
   - Name: "StudyBuddy"
   - Language: English (en)
   - Time Zone: IST (Asia/Kolkata)

6. Create Intents:
   ```
   Intent 1: DailyQuiz
   - Training phrases: "Quiz", "Daily quiz", "Science quiz"
   - Fulfillment: Webhook enabled
   - Response: "Starting quiz on [topic]..."
   
   Intent 2: ConceptSummary
   - Training phrases: "Summary", "Explain [topic]", "Notes"
   - Fulfillment: Webhook enabled
   - Response: "Here's the summary..."
   
   Intent 3: MockTest
   - Training phrases: "Mock test", "Full test", "Practice test"
   - Fulfillment: Webhook enabled
   - Response: "Starting mock test..."
   
   Intent 4: Progress
   - Training phrases: "My progress", "Score", "Results"
   - Fulfillment: Webhook enabled
   - Response: "Your stats..."
   ```

**Save Project ID:**
```
DIALOGFLOW_PROJECT_ID=your-project-id
```

---

## Phase 2: Local Development (2 hours)

### 2.1 Clone & Install

```bash
# Clone repository
git clone https://github.com/yourusername/StudyBuddy-CBSE-Bot.git
cd StudyBuddy-CBSE-Bot

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Edit .env with your credentials
nano .env
```

### 2.2 Test Locally

```bash
# Start development server
npm run dev

# Server should run on http://localhost:3000
# Check logs for any errors
```

**Test webhook locally using ngrok:**
```bash
# Install ngrok
brew install ngrok  # Mac
sudo apt install ngrok  # Linux

# Create tunnel
ngrok http 3000

# Copy ngrok URL and update webhook in WhatsApp settings
# Example: https://xxxxx.ngrok.io/webhook
```

**Send test message via WhatsApp:**
1. Save your WhatsApp bot number in contacts
2. Send "Hi"
3. Should receive response within 2 seconds
4. Check server logs for details

---

## Phase 3: Deployment (2 hours)

### Option A: Deploy to Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize Firebase
firebase init
# Select: Hosting, Functions
# Choose your GCP project

# Create firebase.json
cat > firebase.json << 'EOF'
{
  "hosting": {
    "public": "public",
    "rewrites": [
      {
        "source": "**",
        "function": "api"
      }
    ]
  },
  "functions": {
    "source": "."
  }
}
EOF

# Deploy
firebase deploy

# Get hosting URL from output
# Update webhook URL in WhatsApp settings
```

### Option B: Deploy to Heroku

```bash
# Install Heroku CLI
brew tap heroku/brew && brew install heroku

# Create Procfile
echo "web: node server.js" > Procfile

# Login and deploy
heroku login
heroku create studybuddy-cbse-bot

# Set environment variables
heroku config:set WHATSAPP_API_TOKEN=xxxxx
heroku config:set MONGODB_URI=xxxxx
heroku config:set DIALOGFLOW_PROJECT_ID=xxxxx

# Deploy
git push heroku main

# Get URL
heroku apps:info -a studybuddy-cbse-bot
```

### Option C: Deploy to AWS Lambda + API Gateway

```bash
# Install serverless framework
npm install -g serverless

# Create serverless.yml
cat > serverless.yml << 'EOF'
service: studybuddy-cbse-bot

provider:
  name: aws
  runtime: nodejs14.x
  region: ap-south-1
  environment:
    MONGODB_URI: ${ssm:/studybuddy/mongodb}
    WHATSAPP_API_TOKEN: ${ssm:/studybuddy/whatsapp}

functions:
  api:
    handler: server.handler
    events:
      - http: ANY /webhook
      - http: ANY /webhook/{proxy+}
EOF

# Deploy
serverless deploy
```

---

## Phase 4: Post-Deployment (1 hour)

### 4.1 Webhook Configuration

1. Go to WhatsApp Business Manager
2. Settings → Webhooks
3. Add your deployment URL: `https://yourdomain.com/webhook`
4. Verify token matches `.env` file
5. Subscribe to messages event

### 4.2 Test in Production

```bash
# Monitor logs
heroku logs --tail  # Heroku
firebase functions:log  # Firebase
serverless logs -f api  # Serverless

# Send test message via WhatsApp
# Check response time (should be < 2 seconds)
# Verify in logs
```

### 4.3 Load Testing

```bash
# Install Artillery
npm install -g artillery

# Create load test
cat > load-test.yml << 'EOF'
config:
  target: 'https://yourdomain.com'
  phases:
    - duration: 60
      arrivalRate: 10
scenarios:
  - name: "Webhook Test"
    flow:
      - post:
          url: "/webhook"
          json:
            entry:
              - changes:
                  - value:
                      messages:
                        - from: "919999999999"
                          text:
                            body: "Quiz"
EOF

# Run test
artillery run load-test.yml
```

---

## Phase 5: Monitoring & Maintenance

### 5.1 Set Up Monitoring

1. **Error Tracking:**
   - Sentry.io integration
   - LogRocket for session replay

2. **Uptime Monitoring:**
   - UptimeRobot (free)
   - PagerDuty for alerts

3. **Performance Tracking:**
   - Response time < 2 seconds
   - Error rate < 0.1%
   - Daily active users

### 5.2 Daily Checks

```bash
# Check logs for errors
grep ERROR logs.txt

# Monitor database
mongodb atlas: Dashboard → Metrics

# WhatsApp message delivery
WhatsApp Manager: Messages → Sent/Delivered rate
```

### 5.3 Backup & Recovery

```bash
# Backup MongoDB
mongodump --uri="mongodb+srv://username:password@cluster.mongodb.net/studybuddy"

# Backup code
git push origin main

# Test restore monthly
mongorestore --uri="mongodb+srv://..." dump/
```

---

## Troubleshooting

### Webhook Not Receiving Messages
- ✅ Check webhook URL in WhatsApp Manager
- ✅ Verify VERIFY_TOKEN matches
- ✅ Check firewall allows incoming requests
- ✅ Review server logs for errors

### Slow Response Times
- ✅ Check MongoDB connection
- ✅ Review Dialogflow API latency
- ✅ Scale server resources
- ✅ Enable response caching

### Dialogflow Intent Not Matching
- ✅ Add more training phrases
- ✅ Adjust confidence threshold
- ✅ Review Dialogflow test console

---

## Success Metrics

Once deployed, track:
- ✅ Webhook response time < 2 seconds
- ✅ 99.9% uptime
- ✅ Daily active users > 100
- ✅ Error rate < 0.5%
- ✅ User satisfaction > 4/5 stars

---

## Need Help?

Check:
- GitHub Issues: https://github.com/yourusername/StudyBuddy-CBSE-Bot/issues
- README.md for API docs
- Server logs for detailed errors

**Last Updated:** December 2025
