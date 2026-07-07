# CLAUDE.md

# InterviewIQ AI

Version 1.0

---

# Mission

You are building InterviewIQ AI, a production-ready AI-powered interview platform.

This is **not** a demo application.

This is **not** a tutorial project.

Build it as if it will be used by thousands of real users.

Every decision should prioritize

- scalability
- maintainability
- accessibility
- performance
- developer experience
- user experience

Never optimize for writing fewer lines of code.

Optimize for long-term maintainability.

---

# Product Goal

InterviewIQ AI helps candidates prepare for technical interviews using

- AI Resume Analysis
- AI Generated Interview Questions
- Live Video Interviews
- Whisper Speech Recognition
- AI Evaluation
- Personalized Feedback
- Analytics
- Performance Tracking

The application should feel comparable to products like

- Linear
- Vercel
- OpenAI
- Notion
- Stripe

Never imitate them directly.

---

# Tech Stack

Frontend

- Next.js 16 App Router
- React 19
- TypeScript
- TailwindCSS
- shadcn/ui
- Framer Motion
- React Query
- React Hook Form
- Zod
- LiveKit Client

Backend

- FastAPI

- Python 3.12+

- Motor

- MongoDB Atlas

- Pydantic

Authentication

- Clerk

AI

- Gemini

- Whisper

Storage

- Cloudinary

Deployment

- Docker

- Railway

- Vercel

---

# Development Philosophy

Always build features completely.

Avoid placeholders unless explicitly requested.

Never leave TODO comments as a substitute for implementation.

Always choose production-ready solutions.

---

# Code Quality

Every file should

- be strongly typed
- have meaningful names
- follow SOLID principles
- avoid duplicated logic
- remain under approximately 250 lines whenever practical
- contain descriptive comments only for complex logic

Never write unnecessary comments.

Code should explain itself.

---

# Project Structure

Use feature-first architecture.

Example

frontend/

features/

resume/

interview/

feedback/

analytics/

history/

profile/

Each feature contains

components/

hooks/

services/

types/

schemas/

constants/

utils/

api/

Never mix unrelated features.

---

# Frontend Rules

Use

Server Components

by default.

Only use

"use client"

when required.

Never convert entire pages into client components unnecessarily.

---

Use

React Query

for server state.

Do not manually synchronize API state.

---

Use

React Hook Form

for forms.

---

Validate forms with

Zod.

---

Use

TailwindCSS

for styling.

Never use inline styles.

---

Create reusable components.

Avoid duplicated UI.

---

Prefer composition over inheritance.

---

# Backend Rules

Architecture

Router

↓

Controller

↓

Service

↓

Repository

↓

MongoDB

Business logic belongs inside services.

Never place business logic inside routes.

Never access MongoDB directly inside routes.

---

Use dependency injection where appropriate.

---

All request validation uses

Pydantic.

---

Every endpoint returns

consistent JSON.

---

# API Rules

REST only.

Use nouns.

Examples

/users

/interviews

/resumes

Avoid

/getUser

/createInterview

---

Always return

success

message

data

errors

---

Pagination

Required

Filtering

Required

Sorting

Required

---

# Database Rules

MongoDB Atlas

Collections

users

resumes

resume_analysis

interviews

questions

sessions

transcripts

feedback

analytics

notifications

settings

Never duplicate data unnecessarily.

Reference documents whenever possible.

---

# Authentication

Use Clerk.

Protect every private route.

Do not trust client-side authentication.

Verify tokens on backend.

---

# AI Rules

Every AI capability should be its own module.

Examples

Resume Analyzer

Question Generator

Feedback Generator

Answer Evaluator

Learning Recommendation Engine

Never combine all prompts.

---

Always request JSON responses.

Validate every AI response.

Retry invalid responses.

---

Never trust LLM output.

Validate every field.

---

# Whisper Rules

Convert audio

↓

Transcript

↓

Store transcript

↓

Evaluate

Never evaluate raw audio.

---

# LiveKit

Video interviews should support

Camera

Microphone

Recording

Chat

Captions

Timer

Screen Share

Connection Status

---

# Error Handling

Always handle

Loading

Empty

Success

Failure

Retry

Offline

Never leave blank screens.

---

# Logging

Log

AI failures

API failures

Database failures

Validation failures

Do not log

Passwords

Tokens

API Keys

Personal user data

---

# Performance

Lazy loading

Dynamic imports

Memoization

Server Components

Image optimization

Virtualized lists

Caching

Streaming

Always prefer fast first paint.

---

# Accessibility

Keyboard navigation

Screen reader support

ARIA labels

Visible focus

Semantic HTML

Color contrast

Reduced motion

Accessibility is mandatory.

---

# Responsive Design

Support

Mobile

Tablet

Desktop

Large Desktop

Never build desktop-only layouts.

---

# Styling

TailwindCSS only.

Design system

Buttons

Cards

Dialogs

Forms

Tables

Badges

Charts

Avatars

Everything should reuse components.

---

# Charts

Use

Recharts.

Charts must include

Tooltips

Legends

Animations

Responsive sizing

Loading states

Empty states

---

# Animations

Framer Motion

Keep animations subtle.

Use

Fade

Slide

Scale

Layout animation

Avoid distracting effects.

---

# Forms

Validation

Instant

Inline errors

Loading state

Disabled state

Keyboard accessible

---

# Tables

Search

Pagination

Sorting

Filtering

Sticky headers

Responsive

---

# Dashboard

Must contain

Resume Score

Interview Score

Recent Interviews

Radar Chart

Activity

Quick Actions

Weak Skills

Strong Skills

Learning Suggestions

---

# Resume

Support

Upload

Replace

Delete

History

Comparison

Analysis

ATS Score

Suggestions

---

# Interviews

Generate AI questions.

Support

Technical

Behavioral

HR

Mixed

Coding

System Design

---

# Feedback

Generate

Overall Score

Question Scores

Communication

Technical

Confidence

Grammar

Vocabulary

Learning Resources

Improvement Plan

---

# Analytics

Charts

Resume Progress

Interview Progress

Weak Skills

Strong Skills

Skill Radar

Interview Frequency

---

# History

Every interview stores

Transcript

Recording

Questions

Feedback

Resume Version

Score

Duration

---

# Future Ready

Architecture must support

Recruiters

Organizations

Payments

Subscriptions

Enterprise

Certificates

Coding Interviews

AI Coach

Company Question Banks

without major refactoring.

---

# Testing

Frontend

Vitest

React Testing Library

Backend

Pytest

Coverage target

80%+

---

# Documentation

Every feature should include

README

API docs

Types

Schemas

Reusable hooks

---

# Git

Commit style

feat:

fix:

refactor:

docs:

test:

perf:

style:

chore:

---

# Environment Variables

Never hardcode secrets.

Always read from environment.

Validate required variables on startup.

---

# Security

HTTPS

Rate limiting

Input sanitization

File validation

JWT verification

CORS

Helmet

Secure headers

Prompt injection protection

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

Docker support required.

---

# Decision Rules

Whenever there are multiple implementation options

Choose the solution that

- is scalable
- has better developer experience
- reduces technical debt
- improves maintainability
- follows modern React and FastAPI best practices

Never choose shortcuts.

---

# Completion Checklist

Before considering any feature complete, verify

✅ Types created

✅ API created

✅ Validation added

✅ Loading state

✅ Empty state

✅ Error state

✅ Responsive

✅ Accessible

✅ Dark mode

✅ Unit tested

✅ Reusable

✅ Documented

---

# Final Objective

InterviewIQ AI should be indistinguishable from a professional SaaS application.

The final project should demonstrate

- Advanced Full Stack Development
- AI Engineering
- Modern React Architecture
- FastAPI Best Practices
- Clean System Design
- Excellent UI/UX
- Production-Ready Code Quality

Every implementation decision should move the project toward this objective.