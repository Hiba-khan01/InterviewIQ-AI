# InterviewIQ AI - API Specification

Version: 1.0

Architecture: REST API

Authentication: Clerk JWT

Content-Type: application/json

Backend: FastAPI

Database: MongoDB Atlas

---

# Base URL

Development

```
http://localhost:8000/api/v1
```

Production

```
https://api.interviewiq.ai/api/v1
```

---

# Authentication

Every protected request must include

```
Authorization: Bearer <JWT_TOKEN>
```

Public routes

- Login
- Register
- Health Check

All other routes require authentication.

---

# Response Format

Success

```json
{
    "success": true,
    "message": "",
    "data": {}
}
```

---

Failure

```json
{
    "success": false,
    "message": "",
    "errors": []
}
```

---

# Authentication APIs

## Get Current User

GET

```
/users/me
```

Response

```json
{
    "name": "",
    "email": "",
    "avatar": ""
}
```

---

## Update Profile

PUT

```
/users/profile
```

Request

```json
{
    "name": "",
    "bio": "",
    "github": "",
    "linkedin": "",
    "portfolio": ""
}
```

---

## Delete Account

DELETE

```
/users/account
```

---

# Resume APIs

## Upload Resume

POST

```
/resumes/upload
```

Body

Multipart Form Data

Fields

- file

Returns

```json
{
    "resumeId": "",
    "resumeScore": 89
}
```

---

## Get Resume

GET

```
/resumes
```

---

## Delete Resume

DELETE

```
/resumes/{resumeId}
```

---

## Resume Analysis

GET

```
/resumes/{resumeId}/analysis
```

Returns

```json
{
    "resumeScore": 92,
    "atsScore": 88,
    "skills": [],
    "missingSkills": [],
    "strengths": [],
    "weaknesses": [],
    "suggestions": []
}
```

---

## Compare Resumes

GET

```
/resumes/compare
```

Query

```
resume1

resume2
```

---

# Interview APIs

## Create Interview

POST

```
/interviews
```

Request

```json
{
    "jobRole":"Backend Developer",
    "difficulty":"Medium",
    "type":"Technical",
    "duration":30
}
```

Returns

```json
{
    "interviewId":""
}
```

---

## Get Interview

GET

```
/interviews/{id}
```

---

## Get All Interviews

GET

```
/interviews
```

Query Parameters

- page
- limit
- role
- type
- difficulty

---

## Delete Interview

DELETE

```
/interviews/{id}
```

---

# Question APIs

## Generate Questions

POST

```
/interviews/{id}/questions/generate
```

Response

```json
{
    "questions":[]
}
```

---

## Get Questions

GET

```
/interviews/{id}/questions
```

---

## Regenerate Question

POST

```
/questions/{id}/regenerate
```

---

# Live Interview APIs

## Create Live Session

POST

```
/sessions
```

Returns

```json
{
    "roomId":"",
    "token":""
}
```

---

## Join Session

POST

```
/sessions/{id}/join
```

---

## End Session

POST

```
/sessions/{id}/end
```

---

## Session Details

GET

```
/sessions/{id}
```

---

# Transcript APIs

## Upload Audio

POST

```
/transcripts/audio
```

Multipart

Audio File

---

## Get Transcript

GET

```
/transcripts/{sessionId}
```

---

## Update Transcript

PUT

```
/transcripts/{id}
```

---

# Whisper APIs

## Convert Speech

POST

```
/whisper/transcribe
```

Multipart

Audio File

Returns

```json
{
    "transcript":"..."
}
```

---

# Gemini APIs

## Analyze Resume

POST

```
/ai/resume/analyze
```

---

## Generate Questions

POST

```
/ai/questions/generate
```

---

## Evaluate Answer

POST

```
/ai/evaluate
```

Request

```json
{
    "question":"",
    "answer":""
}
```

Returns

```json
{
    "score":87,
    "feedback":"..."
}
```

---

## Generate Final Feedback

POST

```
/ai/report
```

---

# Feedback APIs

## Get Report

GET

```
/feedback/{sessionId}
```

---

## Get Question Feedback

GET

```
/feedback/{sessionId}/questions
```

---

## Download PDF

GET

```
/feedback/{sessionId}/pdf
```

---

## Download JSON

GET

```
/feedback/{sessionId}/json
```

---

# Analytics APIs

## Dashboard

GET

```
/analytics/dashboard
```

Returns

```json
{
    "averageScore":88,
    "resumeScore":91,
    "totalInterviews":18
}
```

---

## Score Trend

GET

```
/analytics/scores
```

---

## Skill Progress

GET

```
/analytics/skills
```

---

## Weekly Progress

GET

```
/analytics/weekly
```

---

## Monthly Progress

GET

```
/analytics/monthly
```

---

# History APIs

## Interview History

GET

```
/history
```

Supports

Pagination

Filtering

Sorting

---

## History Details

GET

```
/history/{id}
```

---

# Notification APIs

## Get Notifications

GET

```
/notifications
```

---

## Mark Read

PUT

```
/notifications/{id}
```

---

## Delete Notification

DELETE

```
/notifications/{id}
```

---

# Settings APIs

## Get Settings

GET

```
/settings
```

---

## Update Settings

PUT

```
/settings
```

Request

```json
{
    "theme":"dark",
    "language":"en"
}
```

---

# Search API

GET

```
/search
```

Query

```
?q=backend
```

Searches

- Interviews

- Reports

- Questions

- Resume

---

# File Upload APIs

## Upload Avatar

POST

```
/upload/avatar
```

---

## Upload Recording

POST

```
/upload/recording
```

---

# Health Check

GET

```
/health
```

Returns

```json
{
    "status":"healthy"
}
```

---

# Pagination

Request

```
?page=1&limit=10
```

Response

```json
{
    "page":1,
    "limit":10,
    "total":120,
    "pages":12,
    "items":[]
}
```

---

# Filtering

Supported

Date

Role

Difficulty

Interview Type

Score

Company

---

# Sorting

Supported

Newest

Oldest

Highest Score

Lowest Score

Role

Duration

---

# Status Codes

200

Success

201

Created

204

Deleted

400

Validation Error

401

Unauthorized

403

Forbidden

404

Not Found

409

Conflict

422

Invalid Input

429

Rate Limited

500

Internal Server Error

503

AI Service Unavailable

---

# Validation Rules

Resume

PDF

DOCX

Maximum Size

10 MB

---

Interview Duration

Minimum

5 Minutes

Maximum

120 Minutes

---

Question Count

Minimum

5

Maximum

30

---

Audio Upload

Formats

mp3

wav

m4a

Maximum Size

100 MB

---

# Rate Limits

Resume Upload

5/hour

Question Generation

30/hour

AI Evaluation

100/hour

Login

10/minute

General APIs

300/hour

---

# API Versioning

Current

```
/api/v1
```

Future

```
/api/v2
```

Versioning must be backward compatible whenever possible.

---

# Future APIs

Recruiter Dashboard

Organizations

Company Templates

Payments

Subscriptions

Certificates

Coding Challenges

Leaderboard

Achievements

AI Career Coach

Job Recommendations

Email Service

Calendar Integration

Slack Integration

Microsoft Teams

---

# API Design Principles

- RESTful resource naming.
- Consistent JSON response format.
- Stateless authentication using Clerk JWT.
- Idempotent GET, PUT, DELETE endpoints.
- Validation before database operations.
- AI operations should be asynchronous when processing may take more than a few seconds.
- Return meaningful error messages with appropriate HTTP status codes.
- Keep endpoints modular and feature-based for future scalability.

---

# Summary

The API layer serves as the contract between the Next.js frontend, FastAPI backend, MongoDB, LiveKit, Gemini, Whisper, and Cloudinary. It is designed to be secure, scalable, and easy to extend as InterviewIQ AI evolves into a production-ready SaaS platform.