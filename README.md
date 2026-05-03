# 🗳️ ElectEd – Interactive Election Process Guide

An interactive, educational web application that guides users through the complete democratic election process — from announcement to government formation.

---

## 🌐 Live Demo

> Deployed on Google Cloud Run:  
> **[https://election-assistant-xxxxxxxx-uc.a.run.app](https://election-assistant-xxxxxxxx-uc.a.run.app)**  
> *(Replace with your actual Cloud Run URL after deployment)*

---

## 📌 Features

- **📢 6 Phase Overview** – Click-to-expand cards covering every major election phase
- **📅 Interactive Timeline** – Filter events by Pre-Election, Election Day, and Post-Election
- **🪜 Step-by-Step Guide** – Detailed breakdown of 8 key election steps with navigation
- **✅ Voter Journey Checklist** – Interactive progress tracker for individual voters
- **🧠 Knowledge Quiz** – 8-question quiz with instant feedback and scoring
- **🤖 AI Assistant** – Rule-based chatbot that answers common election questions

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Structure | HTML5 |
| Styling | Vanilla CSS (Glassmorphism + Dark Mode) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts – Inter & Outfit |
| Deployment | Google Cloud Run + Docker (Nginx) |

---

## 📁 Project Structure

```
election-assistant/
├── index.html       # Main HTML structure
├── style.css        # All styles and animations
├── app.js           # Data, logic, and interactivity
├── Dockerfile       # Docker config for Cloud Run deployment
└── README.md        # Project documentation
```

---

## 🚀 Deployment (Google Cloud Run)

### Prerequisites
- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed
- A Google Cloud project with billing enabled

### Steps

```bash
# 1. Authenticate
gcloud auth login

# 2. Set your project
gcloud config set project bamboo-drive-495208-q0

# 3. Enable required APIs
gcloud services enable run.googleapis.com cloudbuild.googleapis.com

# 4. Deploy from source
gcloud run deploy election-assistant \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

After deployment, you'll receive a **Cloud Run URL** — use that as your deployed link.

---

## 💻 Run Locally

No build step needed — just open in a browser:

```bash
# Option 1: Open directly
start index.html

# Option 2: Use VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## 🧩 How the Assistant Works

The built-in AI assistant uses a **keyword-matching knowledge base** with topics including:

- Voter registration
- Electoral College (USA)
- Vote counting process
- Candidate eligibility
- Primary elections
- EVMs vs paper ballots
- Election fraud prevention
- Polling station info

---


## 👨‍💻 Author

**Arshiik30**  
GitHub: [@arshiik30](https://github.com/arshiik30)

---

## 📄 License

This project is built as an **educational resource**.  
Content is generalized for learning purposes and does not represent any specific country's electoral laws.
