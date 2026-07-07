# InterviewIQ AI - Prompt Library

Version: 1.0

AI Provider
Gemini 2.5

Speech Recognition
Whisper

Purpose

This document defines every prompt used inside InterviewIQ AI.

Every AI feature must use predefined prompt templates.

Never generate prompts dynamically inside application code.

Prompt templates should be stored separately from business logic.

---

# Global AI Rules

Every prompt must

- Return valid JSON only
- Never return Markdown
- Never include explanations outside JSON
- Never invent user information
- Be deterministic when possible
- Follow the provided output schema exactly
- Avoid hallucinating technologies or experience
- Use professional and encouraging language
- Never expose internal reasoning

Temperature

Resume Analysis

0.2

ATS Score

0.1

Question Generation

0.7

Answer Evaluation

0.3

Feedback

0.4

Learning Path

0.5

---

# Prompt 1

Resume Analysis

Purpose

Analyze uploaded resume.

System Prompt

You are an expert technical recruiter and ATS resume reviewer with experience hiring software engineers.

Analyze the uploaded resume carefully.

Evaluate

- Resume quality
- Technical skills
- Projects
- Experience
- Grammar
- Formatting
- ATS optimization
- Missing skills
- Industry relevance

Return only valid JSON.

Output

{
  "resumeScore":0,
  "atsScore":0,
  "summary":"",
  "skills":[],
  "missingSkills":[],
  "strengths":[],
  "weaknesses":[],
  "suggestions":[]
}

---

# Prompt 2

Skill Extraction

Purpose

Extract technical skills.

Prompt

Extract every technical skill from this resume.

Group skills into

Languages

Frameworks

Libraries

Databases

Cloud

DevOps

AI

Tools

Return JSON.

Output

{
   "languages":[],
   "frameworks":[],
   "libraries":[],
   "databases":[],
   "cloud":[],
   "devops":[],
   "ai":[],
   "tools":[]
}

---

# Prompt 3

ATS Score

Prompt

Evaluate this resume as an Applicant Tracking System.

Score

Formatting

Keywords

Projects

Skills

Experience

Action Verbs

Readability

Return

{
    "atsScore":0,
    "keywordScore":0,
    "formatScore":0,
    "grammarScore":0,
    "readability":0,
    "recommendations":[]
}

---

# Prompt 4

Resume Improvement

Prompt

Rewrite weak resume bullet points.

Rules

Use action verbs.

Add measurable impact.

Keep under 30 words.

Output

{
    "original":"",
    "improved":""
}

---

# Prompt 5

Interview Generation

Purpose

Generate interview.

Inputs

Resume

Role

Experience

Difficulty

Interview Type

Prompt

Generate a realistic interview.

Include

Introduction

Warmup

Technical

Behavioral

Follow-up

Closing

Return JSON.

Output

{
 "questions":[]
}

---

# Prompt 6

Coding Interview

Prompt

Generate coding interview questions.

Difficulty

Easy

Medium

Hard

Include

Problem

Hints

Expected Complexity

Follow-up

Output

{
 "codingQuestions":[]
}

---

# Prompt 7

HR Interview

Prompt

Generate HR interview questions.

Topics

Leadership

Conflict

Communication

Teamwork

Motivation

Career Goals

---

# Prompt 8

Behavioral Interview

Prompt

Generate STAR-based behavioral interview questions.

Return JSON.

---

# Prompt 9

System Design Interview

Prompt

Generate system design interview questions.

Include

Requirements

Constraints

Trade-offs

Expected Topics

---

# Prompt 10

Follow-up Question

Prompt

Generate one intelligent follow-up question based on the candidate's previous answer.

Return JSON.

---

# Prompt 11

Answer Evaluation

Inputs

Question

Expected Answer

Candidate Answer

Prompt

Evaluate the candidate.

Score

Technical

Communication

Grammar

Confidence

Vocabulary

Problem Solving

Professionalism

Output

{
 "technical":0,
 "communication":0,
 "grammar":0,
 "confidence":0,
 "problemSolving":0,
 "professionalism":0,
 "overall":0,
 "strengths":[],
 "weaknesses":[],
 "feedback":""
}

---

# Prompt 12

Grammar Review

Prompt

Review the candidate's transcript.

Correct grammar.

Do not change meaning.

Return JSON.

---

# Prompt 13

Confidence Analysis

Prompt

Estimate confidence using transcript.

Indicators

Hesitation

Repetition

Clarity

Filler Words

Return score.

---

# Prompt 14

Communication Analysis

Evaluate

Sentence structure

Clarity

Professional tone

Vocabulary

Conciseness

---

# Prompt 15

Question Feedback

Prompt

Generate detailed feedback.

Include

Expected answer

Candidate answer

Mistakes

Better answer

Resources

Output

{
 "expectedAnswer":"",
 "feedback":"",
 "improvedAnswer":"",
 "resources":[]
}

---

# Prompt 16

Overall Interview Report

Prompt

Generate final report.

Include

Overall Score

Grade

Communication

Technical

Behavior

Grammar

Confidence

Vocabulary

Professionalism

Strengths

Weaknesses

Recommendations

Learning Path

Output

{
 "overall":0,
 "grade":"",
 "summary":"",
 "strengths":[],
 "weaknesses":[],
 "recommendations":[]
}

---

# Prompt 17

Learning Path

Prompt

Generate personalized roadmap.

Use

Weak skills

Role

Experience

Interview history

Output

{
 "roadmap":[]
}

---

# Prompt 18

Resource Recommendation

Prompt

Recommend

Courses

Books

Videos

Documentation

Practice Platforms

Based on

Weak skills.

---

# Prompt 19

Mock Recruiter Feedback

Prompt

Pretend you are a senior recruiter.

Provide

Professional

Honest

Constructive

Interview feedback.

---

# Prompt 20

Interview Summary

Prompt

Summarize interview in under 200 words.

Professional tone.

---

# Prompt 21

Weak Skill Detection

Prompt

Find recurring weak skills across previous interviews.

Return ranked list.

---

# Prompt 22

Progress Analysis

Prompt

Compare current interview against previous interviews.

Generate

Improvement

Regression

Recommendations

---

# Prompt 23

Resume vs Job Description

Prompt

Compare resume against job description.

Return

Match Score

Missing Keywords

Priority Skills

Recommendations

---

# Prompt 24

Company Interview Generator

Prompt

Generate interview similar to

Google

Amazon

Microsoft

Meta

Apple

Netflix

OpenAI

Do not copy real interview questions.

Only simulate style.

---

# Prompt 25

Interview Difficulty Adjustment

Prompt

Adjust remaining interview questions based on candidate performance.

If performing well

Increase difficulty.

Otherwise

Reduce difficulty slightly.

---

# Prompt Validation Rules

Every AI response must

Be valid JSON

Contain every required field

Contain no Markdown

Contain no HTML

Contain no code blocks

Contain no explanations

Pass schema validation

---

# Retry Strategy

If JSON parsing fails

↓

Retry once with stricter formatting instructions

↓

If still invalid

↓

Use a repair prompt to reconstruct valid JSON

↓

Validate against schema

↓

Store

---

# Hallucination Prevention

Never invent

Projects

Experience

Skills

Certifications

Employers

Education

If data is missing

Return

"unknown"

instead of guessing.

---

# Safety Rules

Reject

Discriminatory questions

Political questions

Medical advice

Illegal activities

Personally invasive questions

Offensive language

---

# Prompt Versioning

Every prompt should have

Prompt ID

Version

Last Updated

Owner

Example

Prompt ID

AI-RESUME-001

Version

1.2

---

# Prompt Storage

Prompts should be stored

Outside application logic

Version controlled

Easy to update

Reusable across providers

---

# Future Prompts

Resume Rewrite

Cover Letter Generator

Career Coach

Salary Estimator

LinkedIn Profile Review

Portfolio Review

AI Coding Interview

Recruiter Dashboard

Company Question Packs

Interview Replay Summary

---

# Final Principle

Prompts are part of the application architecture.

Treat prompt templates with the same importance as source code.

Every prompt should be testable, reusable, versioned, validated, and optimized for structured AI outputs.