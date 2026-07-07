# InterviewIQ AI - Component Library

Version: 1.0

Design System

Modern SaaS

Reusable Components

Accessibility First

---

# Overview

Every UI element should be reusable.

No page should create its own buttons, cards, dialogs, forms, or tables unless absolutely necessary.

Components should be

- Generic
- Reusable
- Typed
- Accessible
- Responsive
- Theme Aware
- Animated
- Easy to extend

---

# Folder Structure

components/

ui/

layout/

forms/

dashboard/

charts/

interview/

resume/

analytics/

feedback/

shared/

---

# Naming Convention

Use PascalCase.

Examples

Button.tsx

Card.tsx

StatCard.tsx

InterviewCard.tsx

ResumeUploader.tsx

Avoid

button.tsx

BUTTON.tsx

myCard.tsx

---

# Component Rules

Every component should

Accept props

Be reusable

Support dark mode

Support loading state

Support disabled state

Support accessibility

Avoid business logic

Never call APIs directly

---

# Button

Purpose

Reusable action button.

Variants

Primary

Secondary

Outline

Ghost

Danger

Success

AI Gradient

Sizes

Small

Medium

Large

Props

variant

size

loading

disabled

icon

fullWidth

onClick

Accessibility

Keyboard navigation

ARIA labels

Visible focus

---

# IconButton

Used for

Settings

Notifications

Theme Toggle

Close

Delete

Edit

Sizes

32px

40px

48px

---

# Card

Purpose

Generic content container.

Variants

Default

Elevated

Outlined

Glass

Interactive

Props

title

description

icon

actions

children

loading

---

# StatCard

Used on Dashboard.

Contains

Icon

Title

Value

Change Percentage

Mini Chart

Trend Arrow

Loading Skeleton

---

# ProgressCard

Displays

Progress

Percentage

Status

Remaining

Target

Examples

Resume Score

ATS Score

Interview Progress

Learning Progress

---

# Badge

Variants

Success

Warning

Danger

Info

AI

Neutral

Sizes

Small

Medium

Large

Rounded Pill

---

# Avatar

Supports

Image

Fallback Initials

Status Indicator

Sizes

Small

Medium

Large

Extra Large

---

# Input

Supports

Label

Placeholder

Helper Text

Validation

Error Message

Prefix

Suffix

Icons

Password Toggle

---

# Textarea

Auto Resize

Character Counter

Validation

---

# Select

Supports

Search

Single Select

Grouped Options

Disabled Options

Clear Button

---

# MultiSelect

Used for

Skills

Technologies

Tags

Experience

---

# Checkbox

States

Checked

Unchecked

Indeterminate

Disabled

---

# Radio Group

Single Selection

Keyboard Navigation

---

# Toggle Switch

Used for

Dark Mode

Notifications

Settings

---

# Date Picker

Used for

Interview Scheduling

Reports

History Filters

Supports

Single Date

Range

---

# SearchBar

Features

Debounced Search

Keyboard Shortcut

Clear Button

Loading Indicator

Recent Searches (Future)

---

# Table

Features

Sorting

Filtering

Pagination

Sticky Header

Row Selection

Responsive

Loading

Empty State

---

# DataTable

Reusable table wrapper.

Supports

Search

Filters

Actions

Bulk Selection

Export

---

# Pagination

Features

Page Numbers

Next

Previous

Jump To Page

Items Per Page

---

# Modal

Variants

Default

Confirmation

Fullscreen

Side Drawer

Features

ESC Close

Overlay Close

Focus Trap

Animation

---

# Alert Dialog

Used for

Delete

Logout

Dangerous Actions

---

# Drawer

Mobile Navigation

Filters

Settings

---

# Tabs

Used for

Dashboard

Analytics

Resume

Feedback

History

Supports

Icons

Badges

---

# Accordion

Used for

FAQ

Question Feedback

AI Explanation

---

# Tooltip

Delay

200ms

Placement

Top

Bottom

Left

Right

---

# Popover

Used for

Profile

Notifications

Quick Actions

---

# Dropdown Menu

Supports

Icons

Groups

Shortcuts

Nested Menus

---

# Breadcrumb

Automatically generated.

Supports

Icons

Current Page

---

# Sidebar

Features

Collapsible

Nested Navigation

Badges

Icons

Search

---

# Header

Contains

Breadcrumb

Search

Notifications

Theme Toggle

Profile Menu

Quick Actions

---

# Loading Components

SkeletonCard

SkeletonTable

SkeletonChart

SkeletonProfile

SkeletonInterview

---

# Empty State

Contains

Illustration

Title

Description

Primary Action

Secondary Action

---

# Error State

Contains

Icon

Message

Retry Button

Support Link

---

# Toast

Variants

Success

Error

Warning

Info

AI

Auto Dismiss

Pause On Hover

---

# Chart Components

Library

Recharts

Reusable Charts

LineChart

AreaChart

BarChart

PieChart

DonutChart

RadarChart

ProgressChart

ScoreChart

Features

Responsive

Tooltip

Legend

Animation

Loading

Empty State

---

# Resume Components

ResumeUploader

ResumeViewer

ResumeScoreCard

ATSCard

MissingSkillsCard

ResumeHistory

ResumeComparison

SuggestionCard

---

# Interview Components

InterviewSetupForm

QuestionCard

VideoPanel

TranscriptPanel

Timer

QuestionProgress

MicrophoneButton

CameraButton

LeaveButton

RecordingIndicator

---

# Feedback Components

OverallScoreCard

SkillBreakdown

RadarChart

QuestionFeedbackCard

RecommendationCard

LearningResourceCard

DownloadReportButton

---

# Analytics Components

TrendChart

ScoreHistory

WeakSkillsChart

StrongSkillsChart

ResumeGrowthChart

InterviewFrequencyChart

---

# Dashboard Components

WelcomeBanner

QuickActions

RecentInterviews

ActivityFeed

ResumeWidget

PerformanceWidget

SkillRadar

StatGrid

---

# Profile Components

ProfileCard

ExperienceCard

SocialLinks

SkillsSection

EditProfileDialog

---

# Settings Components

ThemeSwitcher

NotificationSettings

LanguageSelector

DangerZone

---

# AI Components

AIBadge

AIInsightCard

AIGenerationStatus

AIConfidenceIndicator

RegenerateButton

AIExplanation

---

# Animation Components

FadeIn

SlideUp

ScaleIn

PageTransition

CountUp

HoverCard

---

# Accessibility

Every component must support

Keyboard Navigation

Focus Management

ARIA Labels

Screen Readers

Reduced Motion

Color Contrast

---

# Responsive Behavior

Mobile

Tablet

Desktop

Large Desktop

No component should overflow horizontally.

---

# Component Documentation

Every reusable component should include

Description

Props

Examples

Accessibility Notes

Variants

States

---

# Component Testing

Every shared component should have

Unit Tests

Accessibility Tests

Snapshot Tests (where appropriate)

---

# Component Principles

Single Responsibility

Composable

Reusable

Typed

Accessible

Performant

Theme Aware

Animation Friendly

No Business Logic

No Direct API Calls

---

# Future Components

Code Editor

Whiteboard

AI Avatar

Emotion Indicator

Eye Contact Tracker

Voice Waveform

Interview Replay

Timeline Player

Career Roadmap

Recruiter Dashboard Widgets

---

# Final Goal

The component library should allow the entire application to be built from reusable building blocks.

Every screen in InterviewIQ AI should be composed from these components instead of creating one-off UI elements.