# InterviewIQ AI - UI / UX Guidelines

Version: 1.0

Design Style

Modern SaaS

Minimal

Premium

AI-first

---

# Design Philosophy

InterviewIQ AI should feel like a premium AI product rather than a traditional educational website.

Every screen should communicate

- Simplicity
- Trust
- Intelligence
- Speed
- Professionalism

Users should never feel overwhelmed.

Whitespace is a feature.

---

# Design Inspiration

Primary Inspiration

- Linear
- Vercel
- OpenAI
- Stripe

Secondary Inspiration

- Arc Browser
- Notion
- Perplexity
- Raycast
- Cursor

Do NOT clone any product.

Only use them for inspiration.

---

# Design Principles

Every page should follow

Hierarchy

↓

Consistency

↓

Accessibility

↓

Responsiveness

↓

Performance

↓

Animations

↓

Feedback

---

# Layout

Desktop

```
+----------------------------------------------------+

Sidebar

Content

Header

Content

Footer

+----------------------------------------------------+
```

---

Tablet

```
Drawer

↓

Header

↓

Content

↓

Footer
```

---

Mobile

```
Header

↓

Content

↓

Bottom Navigation
```

---

# Sidebar

Width

280px

Collapsed

80px

Background

Surface Color

Rounded

16px

Navigation Icons

Lucide React

Hover Animation

150ms

---

# Header

Height

72px

Contains

Search

Notifications

Theme Toggle

Profile

Breadcrumb

Quick Actions

Sticky

Yes

---

# Grid System

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Gap

24px

Container

1280px Max Width

---

# Spacing Scale

4px

8px

12px

16px

20px

24px

32px

40px

48px

64px

Never use arbitrary spacing.

---

# Border Radius

Buttons

12px

Cards

16px

Dialogs

20px

Inputs

12px

Badges

999px

Charts

16px

---

# Shadows

Small

Cards

Medium

Dialogs

Large

Feature Cards

Avoid heavy shadows.

---

# Color System

Primary

Blue

Secondary

Purple

Success

Green

Warning

Amber

Danger

Red

Information

Cyan

Neutral

Slate

Never exceed six primary UI colors.

---

# Typography

Font

Inter

Fallback

Geist

Weights

300

400

500

600

700

Sizes

Display

48px

H1

36px

H2

30px

H3

24px

Body

16px

Small

14px

Caption

12px

Line Height

1.6

---

# Buttons

Primary

Filled

Blue

Secondary

Outlined

Ghost

Transparent

Danger

Red

AI

Gradient Blue → Purple

Buttons should always contain icons when appropriate.

---

# Forms

Validation

Instant

Error Messages

Inline

Required Fields

Marked

Disabled State

Visible

Loading State

Spinner

---

# Inputs

Rounded

12px

Padding

16px

Focus Ring

Blue

Error Border

Red

Placeholder

Gray

---

# Cards

Cards should include

Title

Description

Content

Actions

Padding

24px

Radius

16px

---

# Dashboard Cards

Display

Icon

Title

Primary Value

Secondary Value

Trend

Mini Chart (Optional)

Hover Lift

Yes

---

# Tables

Rounded

12px

Sticky Header

Yes

Row Hover

Yes

Pagination

Bottom

Search

Top Right

---

# Charts

Library

Recharts

Supported

Line

Area

Bar

Radar

Pie

Donut

Heatmap (Future)

Charts should include

Tooltip

Legend

Animation

Empty State

Loading State

---

# Dashboard Layout

Row 1

Welcome

Statistics

Row 2

Resume Score

Interview Score

Skill Radar

Row 3

Recent Interviews

Weak Skills

Activity

Row 4

Quick Actions

Learning Path

AI Suggestions

---

# Resume Page

Sections

Upload

Resume Viewer

Analysis

ATS Score

Suggestions

Missing Skills

History

---

# Interview Page

Layout

Question

↓

Video

↓

Transcript

↓

Controls

Controls

Camera

Microphone

Leave

Screen Share

Recording

Timer

Progress

---

# Feedback Page

Overall Score

↓

Radar Chart

↓

Question Feedback

↓

Suggestions

↓

Learning Resources

↓

Download Report

---

# Analytics Page

Charts

Score Trend

Skill Trend

Resume Progress

Interview Frequency

Heatmaps

Weak Skills

Learning Progress

---

# Empty States

Every empty state should include

Illustration

Title

Description

Primary Action

Never show blank pages.

---

# Loading States

Use

Skeleton Loaders

Avoid spinners whenever possible.

---

# Error States

Display

Friendly Message

Retry Button

Error Details (Development Only)

---

# Toast Notifications

Top Right

Success

Green

Error

Red

Info

Blue

Duration

3 seconds

---

# Modals

Rounded

20px

Max Width

600px

Background Blur

Enabled

Close

ESC

Overlay Click

Optional

---

# Animations

Library

Framer Motion

Use

Fade

Slide

Scale

Layout Animation

Hover Lift

Avoid

Bounce

Rotate

Flash

Long animations

---

# Motion Duration

Hover

150ms

Page Transition

250ms

Dialog

200ms

Chart

400ms

---

# Icons

Library

Lucide React

Sizes

16

20

24

32

Consistent stroke width

---

# Avatars

Circle

Initials

Image Upload

Fallback Color

Random pastel

---

# Status Badges

Success

Green

Running

Blue

Pending

Amber

Failed

Red

Cancelled

Gray

---

# Accessibility

Minimum Contrast

4.5:1

Keyboard Navigation

Required

Focus Ring

Always Visible

ARIA Labels

Required

Screen Reader Support

Required

Reduced Motion

Supported

---

# Responsive Breakpoints

Mobile

<640px

Tablet

640–1024px

Desktop

1024–1440px

Large Desktop

1440px+

---

# Mobile UX

Bottom Navigation

Large Touch Targets

Minimum Button Height

44px

Swipe Gestures

Optional

---

# Dark Mode

Use semantic colors.

Never invert colors directly.

Cards should remain distinguishable.

Charts should adapt automatically.

---

# Component Library

Every component must be reusable.

Buttons

Cards

Inputs

Dialogs

Tables

Charts

Badges

Tooltips

Dropdowns

Sidebars

Breadcrumbs

Tabs

Accordions

Avatars

Empty States

Skeletons

Forms

---

# Design Tokens

Spacing

Radius

Typography

Colors

Shadows

Animations

Icons

should all come from centralized design tokens.

Never hardcode values inside components.

---

# AI Elements

Every AI-generated section should include

✨ AI Generated Badge

Tooltip

Generated Timestamp

Regenerate Button

Confidence Indicator (where applicable)

---

# Micro-interactions

Hover Elevation

Button Ripple (Optional)

Card Lift

Smooth Page Transition

Animated Counters

Progress Bars

Chart Animation

Success Checkmark

Copy-to-Clipboard Feedback

---

# Performance

Lazy load charts.

Lazy load PDFs.

Virtualize long lists.

Optimize images.

Use Server Components whenever possible.

---

# Overall Experience

The product should feel

Premium

Fast

Minimal

Confident

AI-native

Every screen should look polished enough to be showcased in a portfolio, presented in a hackathon demo, or used as the foundation of a commercial SaaS product.