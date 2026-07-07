# InterviewIQ AI - Database Schema

Version: 1.0

Database: MongoDB Atlas

ODM: Motor + Pydantic

---

# Overview

InterviewIQ AI uses MongoDB because it is flexible, scalable, and well-suited for storing AI-generated content such as interview reports, transcripts, analytics, and resume analysis.

Collections are designed to minimize duplication while supporting future features like recruiter dashboards, AI career coaching, and company-specific interview packs.

---

# Collections

The application contains the following collections.

- users
- resumes
- interviews
- interview_questions
- interview_sessions
- transcripts
- feedback_reports
- analytics
- notifications
- settings

---

# Collection: users

Purpose

Stores user account information.

```json
{
  "_id": "ObjectId",

  "clerkId": "string",

  "name": "string",

  "email": "string",

  "avatar": "string",

  "bio": "string",

  "experience": "Fresher",

  "currentRole": "Student",

  "skills": [],

  "linkedin": "",

  "github": "",

  "portfolio": "",

  "location": "",

  "theme": "dark",

  "language": "en",

  "createdAt": "Date",

  "updatedAt": "Date"
}
```

Indexes

- clerkId
- email

---

# Collection: resumes

Purpose

Stores uploaded resumes.

```json
{
  "_id": "ObjectId",

  "userId": "ObjectId",

  "fileName": "",

  "fileUrl": "",

  "fileType": "pdf",

  "cloudinaryId": "",

  "isActive": true,

  "createdAt": "",

  "updatedAt": ""
}
```

Relationship

One User

↓

Many Resumes

---

# Collection: resume_analysis

Stores AI-generated resume analysis.

```json
{
  "_id": "",

  "resumeId": "",

  "resumeScore": 92,

  "atsScore": 88,

  "grammarScore": 90,

  "formattingScore": 85,

  "industryMatch": 94,

  "skills": [],

  "missingSkills": [],

  "strengths": [],

  "weaknesses": [],

  "suggestions": [],

  "learningResources": [],

  "createdAt": ""
}
```

---

# Collection: interviews

Stores interview templates.

```json
{
  "_id": "",

  "userId": "",

  "jobRole": "Backend Developer",

  "company": "Google",

  "difficulty": "Medium",

  "interviewType": "Technical",

  "duration": 30,

  "status": "Completed",

  "createdAt": ""
}
```

---

# Collection: interview_questions

Purpose

Stores AI-generated questions.

```json
{
  "_id": "",

  "interviewId": "",

  "order": 1,

  "question": "",

  "type": "Technical",

  "difficulty": "Medium",

  "expectedAnswer": "",

  "followUpQuestions": [],

  "createdAt": ""
}
```

---

# Collection: interview_sessions

Stores actual interview sessions.

```json
{
  "_id": "",

  "interviewId": "",

  "livekitRoomId": "",

  "startedAt": "",

  "endedAt": "",

  "duration": 28,

  "recordingUrl": "",

  "status": "Completed"
}
```

---

# Collection: transcripts

Stores Whisper-generated transcripts.

```json
{
  "_id": "",

  "sessionId": "",

  "questionId": "",

  "question": "",

  "candidateAnswer": "",

  "transcript": "",

  "confidence": 0.98,

  "timestamps": [

  ],

  "createdAt": ""
}
```

---

# Collection: feedback_reports

Stores AI evaluation.

```json
{
  "_id": "",

  "sessionId": "",

  "overallScore": 88,

  "communication": 91,

  "technical": 84,

  "grammar": 90,

  "confidence": 86,

  "behavioral": 89,

  "problemSolving": 82,

  "professionalism": 95,

  "strengths": [],

  "weaknesses": [],

  "improvements": [],

  "learningResources": [],

  "grade": "A",

  "createdAt": ""
}
```

---

# Collection: question_feedback

Stores evaluation per question.

```json
{
  "_id": "",

  "reportId": "",

  "questionId": "",

  "question": "",

  "answer": "",

  "score": 84,

  "strengths": [],

  "weaknesses": [],

  "expectedAnswer": "",

  "aiFeedback": ""
}
```

---

# Collection: analytics

Stores aggregated analytics.

```json
{
  "_id": "",

  "userId": "",

  "averageScore": 84,

  "highestScore": 97,

  "lowestScore": 61,

  "resumeScoreHistory": [],

  "interviewHistory": [],

  "weeklyProgress": [],

  "monthlyProgress": [],

  "weakSkills": [],

  "strongSkills": [],

  "updatedAt": ""
}
```

---

# Collection: notifications

```json
{
  "_id": "",

  "userId": "",

  "title": "",

  "message": "",

  "type": "info",

  "read": false,

  "createdAt": ""
}
```

---

# Collection: settings

```json
{
  "_id": "",

  "userId": "",

  "theme": "dark",

  "language": "English",

  "emailNotifications": true,

  "pushNotifications": true,

  "createdAt": ""
}
```

---

# Relationships

User

↓

Resume

↓

Resume Analysis

↓

Interview

↓

Questions

↓

Interview Session

↓

Transcript

↓

Feedback Report

↓

Analytics

---

# Entity Relationship Diagram

```
User
│
├── Resume
│      │
│      └── Resume Analysis
│
├── Interview
│      │
│      ├── Questions
│      └── Interview Session
│               │
│               ├── Transcript
│               └── Feedback Report
│                        │
│                        └── Question Feedback
│
├── Analytics
│
├── Notifications
│
└── Settings
```

---

# Indexing Strategy

Users

- email
- clerkId

Resumes

- userId

Interviews

- userId
- createdAt

Questions

- interviewId

Sessions

- interviewId

Feedback

- sessionId

Analytics

- userId

Notifications

- userId
- read

---

# Validation Rules

Email

- unique

Resume

- only one active resume

Interview Duration

- minimum 5 minutes

- maximum 120 minutes

Difficulty

Allowed values

- Easy

- Medium

- Hard

- Adaptive

Interview Types

Allowed values

- Technical

- HR

- Behavioral

- Mixed

- Coding

- System Design

---

# Future Collections

These are intentionally excluded from MVP but should be supported later.

- recruiter_accounts

- organizations

- coding_submissions

- coding_test_results

- interview_templates

- interview_sharing

- certificates

- ai_chat_history

- job_recommendations

- company_question_bank

- subscriptions

- payments

- invoices

- referral_program

- leaderboard

- achievements

- interview_bookmarks

---

# Storage Strategy

MongoDB

Stores

- structured data

Cloudinary

Stores

- resume PDFs

- profile pictures

- interview recordings

Redis (Future)

Stores

- sessions

- caching

- rate limiting

- AI response cache

---

# Database Design Principles

- Normalize where appropriate.

- Avoid duplicated AI responses.

- Store AI reports separately from interviews.

- Archive previous resumes instead of deleting them.

- Keep interview recordings separate from metadata.

- Design collections for horizontal scalability.

- Support future recruiter and enterprise features without schema redesign.

---

# Estimated Scale

MVP

- 10,000 users

- 100,000 interviews

Growth

- 1 million users

- 50 million interview sessions

Architecture should remain performant with proper indexing and pagination.

---

# Final Notes

The schema is designed for a production-grade AI SaaS platform. It prioritizes flexibility, scalability, and maintainability while keeping AI-generated data modular and future-proof.