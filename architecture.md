# InterviewIQ AI - System Architecture

Version: 1.0

---

# Overview

InterviewIQ AI follows a modern SaaS architecture with a decoupled frontend and backend. The frontend communicates with the backend using REST APIs. AI services (Gemini and Whisper) are isolated into dedicated modules to keep the application scalable and maintainable.

---

# High-Level Architecture

```text
                        User
                          │
        ┌─────────────────┴─────────────────┐
        │                                   │
      Candidate                        Recruiter (Future)
        │
        ▼
+-----------------------------------------------+
|               Next.js Frontend                |
|-----------------------------------------------|
| Dashboard | Resume | Interview | Analytics    |
| History   | Profile | Feedback | Settings     |
+-----------------------------------------------+
                    │
          HTTPS REST API
                    │
+-----------------------------------------------+
|              FastAPI Backend                  |
|-----------------------------------------------|
| Auth | Resume | Interview | Feedback | AI     |
+-----------------------------------------------+
        │           │             │
        ▼           ▼             ▼
   MongoDB      Gemini API    Whisper API
        │
        ▼
  Cloudinary Storage
```

---

# Technology Stack

## Frontend

- Next.js 16 (App Router)
- React 19
- TypeScript
- TailwindCSS
- shadcn/ui
- React Query (TanStack Query)
- React Hook Form
- Zod
- Framer Motion
- Recharts
- Clerk Authentication
- LiveKit Client SDK

---

## Backend

- FastAPI
- Python 3.12+
- Motor (MongoDB)
- Pydantic
- JWT (if required)
- Background Tasks
- Uvicorn

---

## AI Services

### Gemini

Responsibilities

- Resume Analysis
- ATS Scoring
- Question Generation
- AI Evaluation
- Feedback Generation

---

### Whisper

Responsibilities

- Speech-to-text
- Transcript generation
- Timestamp extraction

---

## Database

MongoDB Atlas

Collections

- users
- resumes
- interviews
- transcripts
- feedback
- analytics
- settings

---

## Storage

Cloudinary

Stores

- Resume PDFs
- Interview recordings
- User avatars

---

# Project Structure

```text
InterviewIQ-AI/

frontend/
│
├── app/
│   ├── dashboard/
│   ├── interview/
│   ├── resume/
│   ├── analytics/
│   ├── feedback/
│   ├── history/
│   ├── settings/
│   ├── profile/
│   └── auth/
│
├── components/
│
│   ├── ui/
│   ├── charts/
│   ├── forms/
│   ├── dashboard/
│   ├── interview/
│   ├── feedback/
│   ├── resume/
│   ├── analytics/
│   └── shared/
│
├── hooks/
├── lib/
├── services/
├── store/
├── types/
├── utils/
├── constants/
├── styles/
└── public/

backend/

app/

api/

auth/

resume/

interview/

feedback/

analytics/

transcript/

services/

gemini/

whisper/

database/

models/

schemas/

repositories/

middlewares/

utils/

config/

tests/

Dockerfile

docker-compose.yml

README.md
```

---

# Feature-Based Architecture

Every feature follows the same structure.

```text
feature/

components/

hooks/

api/

schemas/

types/

utils/

constants/

services/
```

Example

```text
resume/

components/

ResumeUploader.tsx

ResumeAnalysis.tsx

ResumeHistory.tsx

api/

resume.api.ts

hooks/

useResume.ts

types/

resume.ts

schemas/

resumeSchema.ts
```

---

# Frontend Architecture

Pages

↓

Layouts

↓

Feature Components

↓

Shared Components

↓

API Layer

↓

Backend

Never call APIs directly from UI components.

Always use service functions.

---

# Backend Architecture

Controller

↓

Service

↓

Repository

↓

Database

Controllers never contain business logic.

Business logic belongs inside services.

Database queries belong inside repositories.

---

# API Flow

User uploads resume

↓

Frontend Validation

↓

FastAPI Endpoint

↓

Cloudinary Upload

↓

Resume Parser

↓

Gemini Analysis

↓

MongoDB Save

↓

Return Result

---

# AI Pipeline

Resume

↓

Extract Text

↓

Gemini Analysis

↓

Skill Extraction

↓

ATS Score

↓

Store Analysis

↓

Generate Suggestions

↓

Dashboard

---

Interview Flow

Generate Questions

↓

Video Interview

↓

Speech Recording

↓

Whisper

↓

Transcript

↓

Gemini Evaluation

↓

Feedback Generation

↓

Dashboard

---

# Authentication Flow

User Login

↓

Clerk Authentication

↓

JWT Session

↓

Protected Routes

↓

Backend Authorization

↓

API Access

---

# Database Relationships

User

↓

Resume

↓

Interview

↓

Transcript

↓

Feedback

↓

Analytics

One user can own

Many resumes

Many interviews

Many feedback reports

Many analytics entries

---

# State Management

Use

React Query

For

- API Data
- Server Cache

Use

React Context

For

- Theme
- Authentication
- User Preferences

Avoid Redux unless necessary.

---

# UI Component Hierarchy

Layout

↓

Sidebar

↓

Header

↓

Feature Page

↓

Cards

↓

Charts

↓

Forms

↓

Dialogs

↓

Tables

↓

Buttons

---

# Routing

Public

/

login

register

Forgot Password

Protected

/dashboard

/resume

/interview

/history

/feedback

/analytics

/profile

/settings

---

# Error Handling

Frontend

Toast notifications

Loading states

Skeletons

Retry buttons

Backend

Global Exception Handler

Validation Errors

Meaningful HTTP Responses

---

# Logging

Log

API Errors

AI Errors

Authentication Errors

Database Errors

Do not log

Passwords

API Keys

Sensitive user data

---

# Performance

Lazy Loading

Dynamic Imports

Code Splitting

Server Components

Optimized Images

API Caching

Memoization

Pagination

Virtualized Lists

---

# Security

HTTPS Only

Environment Variables

Protected APIs

Input Validation

Rate Limiting

Secure File Upload

Sanitized Prompts

---

# Deployment

Frontend

Vercel

Backend

Railway

Database

MongoDB Atlas

Storage

Cloudinary

---

# Environment Variables

Frontend

NEXT_PUBLIC_CLERK_KEY

NEXT_PUBLIC_API_URL

NEXT_PUBLIC_LIVEKIT_URL

Backend

MONGODB_URI

GEMINI_API_KEY

WHISPER_API_KEY

CLOUDINARY_URL

CLERK_SECRET_KEY

JWT_SECRET

---

# Scalability

Future services

Notification Service

Email Service

Recommendation Engine

Career Coach

Recruiter Dashboard

Payment Service

Interview Scheduling

WebSockets

Microservices can be introduced without changing the frontend architecture.

---

# Development Phases

Phase 1

Authentication

Layout

Dashboard

Phase 2

Resume Upload

Resume Analysis

Phase 3

Interview Generator

Live Video

Phase 4

Whisper

Transcript

AI Evaluation

Phase 5

Feedback Dashboard

Analytics

History

Phase 6

Testing

Optimization

Deployment

---

# Engineering Principles

- Feature-first architecture
- Separation of concerns
- Reusable components
- Type safety everywhere
- Clean APIs
- Modular AI services
- Responsive UI
- Accessibility first
- Production-ready code
- Comprehensive error handling
- Maintainable folder structure

---

# Final Goal

The architecture should support thousands of users, allow future AI feature expansion, and remain easy to maintain by following modern full-stack engineering best practices.