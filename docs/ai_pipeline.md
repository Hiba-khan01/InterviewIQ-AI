# InterviewIQ AI - AI Pipeline

Version: 1.0

AI Providers

- Gemini 2.5
- Whisper

Architecture

Modular AI Service Layer

---

# AI Overview

InterviewIQ AI uses multiple AI services working together instead of relying on one giant prompt.

Pipeline

Resume

↓

Resume Parsing

↓

Resume Analysis

↓

Question Generation

↓

Interview

↓

Speech Recognition

↓

Answer Evaluation

↓

Overall Feedback

↓

Learning Recommendations

↓

Analytics

---

# AI Modules

The AI system consists of

- Resume Analyzer

- ATS Scorer

- Resume Skill Extractor

- Interview Question Generator

- Speech-to-Text

- Answer Evaluator

- Feedback Generator

- Learning Path Generator

- Weak Skill Detector

- Progress Analyzer

Each module should be independent.

Never combine everything into one AI request.

---

# Resume Pipeline

Upload Resume

↓

Extract Text

↓

Clean Formatting

↓

Chunk Text

↓

Gemini Analysis

↓

Extract Information

↓

Generate ATS Score

↓

Generate Suggestions

↓

Store Results

---

# Resume Extraction

Extract

- Name

- Email

- Skills

- Education

- Experience

- Projects

- Certifications

- Achievements

- Technologies

- Languages

---

# Resume Analysis

Evaluate

Grammar

Formatting

Impact

ATS Optimization

Keyword Density

Action Verbs

Readability

Industry Alignment

---

# ATS Score

Calculate

Overall Score

Keyword Match

Formatting

Technical Skills

Experience Match

Education Quality

Project Quality

---

# Missing Skills

Compare resume against selected role.

Example

Backend Developer

Missing

Docker

Redis

Kubernetes

CI/CD

Microservices

Return

Priority

Importance

Learning Resources

---

# Resume Suggestions

Generate

Grammar Improvements

Project Improvements

Bullet Point Improvements

Keyword Improvements

ATS Improvements

Formatting Improvements

---

# Resume JSON Output

```json
{
  "resumeScore": 91,
  "atsScore": 88,
  "skills": [],
  "missingSkills": [],
  "strengths": [],
  "weaknesses": [],
  "suggestions": [],
  "summary": ""
}
```

---

# Question Generation Pipeline

Inputs

Resume

Job Role

Experience

Difficulty

Interview Type

Previous Interviews

↓

Gemini

↓

Questions

↓

Store Questions

---

# Question Types

Technical

Behavioral

HR

System Design

Coding

Leadership

Communication

Problem Solving

---

# Difficulty

Easy

Medium

Hard

Adaptive

Adaptive uses previous interview scores.

---

# Rules

Never repeat questions from previous interviews.

Generate realistic company-level questions.

Ask follow-up questions.

Increase difficulty gradually.

Mix easy and difficult questions.

---

# Question Output

```json
{
    "questions":[
        {
            "id":"",
            "type":"Technical",
            "difficulty":"Medium",
            "question":"",
            "expectedAnswer":""
        }
    ]
}
```

---

# Speech Recognition

Use Whisper.

Pipeline

Microphone

↓

Audio

↓

Whisper

↓

Transcript

↓

Store

↓

Gemini

---

# Whisper Requirements

High accuracy

Noise tolerance

English support

Timestamp generation

Streaming support (Future)

---

# Transcript Format

```json
{
    "question":"",
    "answer":"",
    "transcript":"",
    "confidence":0.97,
    "timestamps":[]
}
```

---

# Answer Evaluation

Input

Question

Expected Answer

Candidate Answer

Transcript

↓

Gemini

↓

Evaluation

---

# Evaluate

Technical Accuracy

Completeness

Communication

Grammar

Vocabulary

Confidence

Problem Solving

Professionalism

Behavioral Quality

---

# Scoring

Technical

30%

Communication

20%

Confidence

15%

Problem Solving

15%

Grammar

10%

Vocabulary

10%

Total

100%

---

# Question Feedback

Generate

Strengths

Weaknesses

Expected Answer

Better Answer

Suggested Resources

Difficulty Rating

---

# Question Feedback Output

```json
{
    "score":88,
    "strengths":[],
    "weaknesses":[],
    "suggestions":[],
    "expectedAnswer":"",
    "feedback":""
}
```

---

# Final Report Pipeline

Question Feedback

↓

Aggregate Scores

↓

Skill Detection

↓

Weak Areas

↓

Strengths

↓

Recommendations

↓

Generate Report

---

# Final Report

Overall Score

Grade

Communication

Technical

Grammar

Confidence

Vocabulary

Professionalism

Behavioral

Learning Path

Next Practice

---

# Report JSON

```json
{
    "overallScore":89,
    "grade":"A",
    "communication":91,
    "technical":86,
    "confidence":87,
    "grammar":93,
    "behavioral":88,
    "strengths":[],
    "weaknesses":[],
    "recommendations":[]
}
```

---

# Learning Recommendation Engine

Based on

Weak Skills

↓

Map Resources

↓

Generate Learning Plan

Example

Weak

Docker

↓

Recommend

Docker Official Docs

↓

Beginner Project

↓

Interview Questions

↓

Practice Plan

---

# Analytics Pipeline

Every interview updates

Average Score

Weak Skills

Strong Skills

Interview Count

Resume Progress

Skill Radar

Improvement Trend

---

# Prompt Engineering Rules

Every prompt must

Provide context.

Provide structured input.

Request JSON output.

Avoid unnecessary explanations.

Never request markdown.

Never allow free-form responses.

---

# Prompt Structure

Role

Context

User Resume

Interview Details

Task

Output Schema

Validation Rules

---

# JSON Validation

Every AI response must

Be valid JSON.

Follow schema exactly.

Contain no markdown.

Contain no HTML.

Contain no explanations.

---

# Retry Strategy

If AI returns invalid JSON

↓

Retry

↓

Still invalid

↓

Repair JSON

↓

Validate

↓

Store

---

# Token Optimization

Chunk resumes over 5,000 characters.

Remove unnecessary whitespace.

Compress previous transcripts before evaluation.

Reuse cached resume analysis.

---

# AI Caching

Cache

Resume Analysis

Question Sets

Learning Resources

Do not cache

Interview Answers

Feedback Reports

Live Transcripts

---

# Hallucination Prevention

Never invent

Companies

Technologies

Projects

Experience

If information is missing

Return

Unknown

instead of guessing.

---

# Safety Rules

Never generate

Offensive questions

Discriminatory questions

Medical questions

Political bias

Illegal advice

Personal attacks

---

# Error Handling

If Gemini fails

Retry

↓

Fallback Prompt

↓

Return Friendly Error

---

If Whisper fails

Retry

↓

Upload Again

↓

Manual Transcript Option

---

# AI Performance Goals

Resume Analysis

< 8 seconds

Question Generation

< 5 seconds

Speech Recognition

< 3 seconds

Answer Evaluation

< 4 seconds

Feedback Report

< 8 seconds

---

# Future AI Modules

Voice Emotion Detection

Eye Contact Analysis

Facial Expression Analysis

Body Language Detection

Coding Interview Evaluation

AI Avatar Interviewer

Company-specific Interview Simulation

AI Career Coach

Salary Prediction

Resume Rewriter

Cover Letter Generator

Job Recommendation Engine

---

# AI Design Principles

- Every AI feature is an independent service.
- Prefer multiple focused prompts over one massive prompt.
- Always validate structured outputs.
- Store AI outputs separately from raw user data.
- Make prompts deterministic where possible.
- Keep AI responses explainable and actionable.
- Design prompts to be reusable across providers if Gemini is replaced in the future.

---

# Final Goal

The AI pipeline should deliver fast, accurate, and personalized interview experiences. Every stage—from resume analysis to final feedback—must produce structured, validated, and reusable outputs that integrate cleanly with the application's backend and analytics systems.