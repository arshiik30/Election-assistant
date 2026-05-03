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
