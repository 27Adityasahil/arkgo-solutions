# ARKGO Solutions — Solar Energy Website

A modern, responsive corporate website for **ARKGO Solutions**, a solar-energy and EPC company serving Bihar, India.

The website is designed to present ARKGO's solar services, products, system configurations, project capabilities, company information, and direct enquiry channels through a clean, engineering-focused visual system.

> **Project Type:** Public customer-facing website  
> **Current Scope:** Corporate website only  
> **Backend / CRM / Authentication:** Not part of the current public-site scope

---

## Overview

ARKGO Solutions provides solar-energy solutions for:

- Residential requirements
- Commercial requirements
- Industrial requirements
- On-grid systems
- Off-grid systems
- Hybrid systems
- Solar installation
- Solar maintenance and service

The purpose of this website is to establish a strong digital presence for ARKGO Solutions, clearly communicate its capabilities, showcase solar-related products and applications, and convert website visitors into enquiries.

The website uses an editorial, engineering-oriented design language rather than a generic SaaS aesthetic.

---

## Key Objectives

The website is designed to:

- Present ARKGO Solutions professionally
- Communicate solar services clearly
- Showcase solar products
- Explain different solar system configurations
- Present project and service capabilities
- Establish trust without making unsupported claims
- Provide direct phone and WhatsApp enquiry options
- Maintain strong usability across desktop and mobile
- Provide a consistent visual identity across all pages

---

# Website Structure

The website includes the following major areas:

## Home

The homepage introduces ARKGO Solutions and establishes its positioning around solar-energy solutions in Bihar.

Core themes include:

- ARKGO brand introduction
- Solar-energy positioning
- Residential, commercial and industrial applications
- Services
- Products
- Project capabilities
- Company credibility
- Conversion-focused enquiry CTA

---

## About

The About experience communicates:

- Company background
- Solar capabilities
- Track record
- Geographic reach
- Differentiating factors
- Company approach

The section is designed to establish credibility without relying on unsupported claims.

---

## Services

The Services page explains the complete solar project journey.

### Service Page Structure

1. Services Hero
2. Interactive Service Catalogue
3. How We Work
4. Detailed Service Capabilities
5. Solar System Configurations
6. Project Considerations + FAQ
7. Final CTA

### Services Offered

#### Solar Consultation

Understanding the project's solar requirements and possible system approach.

#### Site Survey

Assessing the site and its practical requirements before system design.

#### Solar System Design

Developing a solar system configuration around the project's requirements.

#### Solar Panel Installation

Installation of solar panels as part of the selected solar system.

#### Inverter Installation

Installation of the inverter as part of the solar power system.

#### Battery Solutions

Battery-based solutions where energy storage is part of the project requirement.

#### Solar Maintenance

Ongoing maintenance support for installed solar systems.

#### Solar Repair & Service

Repair and service support for solar systems.

---

# How We Work

The project journey is presented through five stages:

```text
01 — UNDERSTAND
02 — ASSESS
03 — DESIGN
04 — INSTALL
05 — SUPPORT
```

The section visually communicates the progression from the initial requirement through installation and post-installation support.

---

# Solar System Configurations

The website explains three conceptual solar system configurations.

## On-Grid

```text
SOLAR
  ↓
INVERTER
 ↙    ↘
LOAD  GRID
```

On-grid systems are presented conceptually as solar generation working alongside the electrical grid.

---

## Off-Grid

```text
SOLAR
  ↓
INVERTER
  ↓
BATTERY
  ↓
LOAD
```

Off-grid systems are presented conceptually with battery storage.

---

## Hybrid

```text
SOLAR
  ↓
INVERTER
 ↙      ↘
GRID   BATTERY
         ↓
        LOAD
```

Hybrid systems are presented conceptually as a combination of grid interaction and battery storage.

> These diagrams are conceptual representations. The website does not use them to make unsupported claims regarding capacity, efficiency, ROI, savings, or technical specifications.

---

# Products

The Products section covers solar-related product categories including:

- Solar Panels
- Inverters
- Batteries
- Solar Structures
- Cables
- Installation Materials
- Solar Accessories

---

# Projects

The Projects experience is intended to communicate ARKGO's project capability and execution.

A strict distinction is maintained between:

- Authentic ARKGO project evidence
- Generic or representative solar imagery

AI-generated or representative images must **not** be presented as actual ARKGO client projects.

Project-specific claims should only be supported by authentic information and assets.

---

# Gallery

The Gallery provides visual presentation of:

- Solar installations
- Solar equipment
- Solar applications
- Engineering environments
- Relevant project imagery

Images are selected according to the surrounding content and visual composition.

---

# FAQ

The FAQ experience addresses common questions regarding:

- Solar services
- Residential, commercial and industrial solutions
- Solar system configurations
- Site surveys
- System design
- Installation
- Maintenance
- Repair
- Service availability
- Project discussions

The FAQ uses an accessible accordion-style interaction.

---

# Contact

The website prioritizes direct enquiries through:

- Phone
- WhatsApp
- Email

Rather than relying exclusively on traditional contact forms.

---

# Design System

The ARKGO website follows a defined visual system.

## Brand Colors

| Purpose | Color |
|---|---|
| Corporate Blue | `#073B73` |
| Solar Red | `#D94A32` |
| Solar Gold | `#F2B632` |
| Accent Orange | `#F28C28` |
| White | `#FFFFFF` |
| Ivory | `#FAF7F0` |
| Light Blue | `#E8F1F8` |

---

## Typography

### Montserrat

Used for:

- Headings
- Section labels
- Service titles
- Numbers
- Buttons
- Major navigation elements

### Open Sans

Used for:

- Body copy
- Supporting text
- Descriptions
- FAQ answers
- Secondary information

---

# Semantic Typography System

A semantic color system is used instead of scattering arbitrary text colors throughout components.

### Light Backgrounds

For:

- White
- Ivory
- Light blue

Use:

```text
Heading      → #073B73
Body         → #172B4D
Secondary    → #425466
Muted        → #667085
```

### Dark Backgrounds

Use:

```text
Heading      → #FFFFFF
Body         → #F4F7FA
```

This system was introduced to eliminate readability problems caused by colors such as:

```text
text-[#596773]
text-[#B8C8D5]
text-white/60
text-primary/70
```

The goal is strong, consistent contrast across the entire application.

---

# Visual Direction

The website intentionally follows a:

- Corporate
- Clean
- Engineering-oriented
- Solar-industry-focused
- Editorial
- High-contrast
- Responsive
- Conversion-focused

visual language.

The design intentionally avoids:

- Generic SaaS card grids
- Excessive gradients
- Glassmorphism
- Neon effects
- Excessive shadows
- Excessive rounded cards
- Unnecessary 3D effects
- Heavy parallax
- Excessive animation

---

# Navigation

The global navigation uses a solid header rather than a transparent overlay.

This prevents the navbar from overlapping:

- Hero headings
- Section labels
- FAQ content
- Page content

The header uses a consistent layout across the application.

Desktop navigation includes:

- Home
- About
- Services
- Products
- Projects
- Gallery
- FAQ
- Contact
- Get a Quote

---

# Interaction & Animation

The project uses restrained animation to improve hierarchy and interaction.

Where appropriate, the application uses:

- GSAP
- ScrollTrigger
- CSS transitions
- Transform/opacity-based reveals

Animations are used for:

- Section entrances
- Image reveals
- Process-line animation
- Service catalogue interaction
- FAQ transitions
- CTA entrances

The project intentionally avoids animation that exists purely for decoration.

---

# Sticky Service Catalogue

The Services page contains one major scroll-driven interaction.

Desktop:

```text
┌──────────────────┬─────────────────────────┐
│                  │ Service 01              │
│                  │                         │
│   Sticky Image   │ Service 02              │
│                  │                         │
│                  │ Service 03              │
│                  │                         │
│                  │ Service 04              │
└──────────────────┴─────────────────────────┘
```

The image remains visually anchored while the service catalogue progresses.

The sticky behavior is restricted to the Service Catalogue section and releases naturally when the section ends.

On mobile, the sticky interaction is disabled in favor of normal document flow.

---

# Image Strategy

Images are treated as an important part of the website's content hierarchy.

The image system is designed around:

- Solar installations
- Commercial rooftops
- Residential applications
- Industrial solar environments
- Solar equipment
- Installation work
- Maintenance
- Engineering environments

Images should be:

- Photorealistic
- Professionally composed
- Relevant to the surrounding content
- Correctly cropped
- Responsive
- Optimized for web delivery

---

## Image Authenticity

The website must maintain a clear distinction between representative imagery and actual project evidence.

### Do

Use authentic project photography when making actual project claims.

### Do not

Present AI-generated imagery as:

- Actual ARKGO projects
- Client installations
- Completed installations
- Specific project evidence

unless the image is genuinely based on verified ARKGO project material.

This is important for maintaining business credibility.

---

# Responsive Design

The website is designed for:

- Desktop
- Laptop
- Tablet
- Mobile

Important target breakpoints include:

```text
1440px
1280px
1024px
768px
430px
390px
360px
```

Responsive behavior includes:

- Desktop navigation
- Mobile navigation
- Stacked mobile layouts
- Responsive typography
- Responsive image crops
- Mobile-friendly CTAs
- Vertical process layouts
- Mobile FAQ accordions
- Disabled desktop-only sticky interactions where appropriate

---

# Accessibility

The website follows accessibility-oriented design practices including:

- Semantic headings
- Strong text contrast
- Keyboard-accessible interactive components
- Accessible FAQ accordion behavior
- Meaningful image alt text
- Appropriate handling of decorative imagery
- Reduced-motion considerations

Important body text should maintain strong contrast against its background.

The design aims for at least:

```text
4.5:1
```

for normal text, with stronger contrast preferred wherever practical.

---

# SEO

The website is structured around relevant solar-energy and geographic search themes.

Core topics include:

- Solar company in Bihar
- Solar services in Bihar
- Solar installation
- Residential solar
- Commercial solar
- Industrial solar
- On-grid solar
- Off-grid solar
- Hybrid solar
- Solar maintenance
- Solar repair and service

SEO should remain natural.

The project avoids keyword stuffing in:

- Headings
- Body copy
- Image alt text
- Navigation
- Metadata

---

# Performance

Performance considerations include:

- Responsive images
- Modern image formats where supported
- Lazy loading below-the-fold imagery
- Optimized image sizes
- Limited use of large assets
- Transform/opacity-based animations
- Avoidance of unnecessary continuous scroll listeners
- Lightweight mobile interactions

Hero imagery may be prioritized where appropriate.

Below-the-fold imagery should not be unnecessarily preloaded.

---

# Technology Stack

The project uses a modern React-based frontend stack.

## Core

- React
- Next.js
- Tailwind CSS

## Styling

- Tailwind CSS
- Global CSS
- Semantic design tokens
- Responsive utility classes

## Animation

- GSAP
- ScrollTrigger

## Architecture

- Component-based React architecture
- Reusable UI sections
- Responsive layouts
- Shared design system
- Reusable image components

> Exact dependency versions should be taken directly from `package.json`.

---

# Project Architecture

The application follows a component-oriented structure.

A conceptual structure is:

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.*
│   └── page.*
│
├── components/
│   ├── layout/
│   ├── home/
│   ├── about/
│   ├── services/
│   ├── products/
│   ├── projects/
│   ├── gallery/
│   ├── faq/
│   └── contact/
│
├── assets/
│   └── ...
│
└── ...
```

The exact folder structure should follow the repository implementation.

---

# Getting Started

## Prerequisites

Install:

- Node.js
- npm

Use the Node.js version specified by the repository configuration if one is provided.

---

## Clone the Repository

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd <repository-folder>
```

---

## Install Dependencies

```bash
npm install
```

---

## Start Development Server

```bash
npm run dev
```

Open the local development URL provided by Next.js.

---

## Production Build

```bash
npm run build
```

---

## Start Production Server

```bash
npm start
```

---

# Environment Variables

The current public website does not require:

- Customer authentication
- Employee authentication
- Admin authentication
- CRM
- Payment gateway
- Customer database
- Employee database

If environment variables are introduced later, document them in:

```text
.env.example
```

Never commit:

```text
.env
.env.local
```

or any secret credentials to GitHub.

---

# Current Scope

The current project is a:

**Public customer-facing corporate website.**

It does not currently include:

- Customer dashboard
- Employee dashboard
- Admin dashboard
- CRM
- Customer database
- Employee management
- Authentication
- Payment processing
- Order management
- Backend API

These would be separate application requirements and should not be assumed to exist simply because the website contains enquiry CTAs.

---

# Contact Information

## ARKGO Solutions

**Office**

Subaidya Complex,  
Sakra Faridpur, Dholi,  
Muzaffarpur, Bihar 843105

**Phone**

6207596334

**WhatsApp**

7979055407

**Email**

arkgosolutions@gmail.com

---

# Development Guidelines

When extending the website, follow these principles.

## 1. Content Before Decoration

Every visual element should support a communication or conversion objective.

## 2. Strong Contrast

Readability takes priority over subtle visual effects.

## 3. Authenticity

Never manufacture evidence of company performance or completed projects.

## 4. Reusability

Components should be reusable and easy to maintain.

## 5. Responsive by Design

Mobile layouts should be intentionally composed rather than simply scaled down from desktop.

## 6. Restrained Motion

Animation should communicate:

- hierarchy
- progression
- interaction

rather than exist only for visual novelty.

## 7. Consistency

New components should use the existing ARKGO design system.

Avoid introducing one-off colors, typography or UI patterns.

---

# Content Rules

When adding new content:

### Use

- Clear solar terminology
- Factual statements
- Concise descriptions
- Professional language
- Real project evidence where applicable

### Do Not Invent

- Project capacities
- Client names
- Project locations
- Installation statistics
- ROI figures
- Savings figures
- Unsupported technical specifications
- Unverified project claims

---

# Future Expansion

The current repository is focused on the public website.

Potential future application functionality may include:

- Customer portal
- Employee portal
- Admin dashboard
- CRM
- Lead management
- Enquiry tracking
- Customer notifications
- WhatsApp API integration
- OTP authentication
- Payment workflows
- Database-backed project management

These features are outside the current public website scope and should be treated as separate product requirements.

---

# Project Status

**Status: Active Development**

The project is being developed and refined as a professional customer-facing website for ARKGO Solutions.

The current development focus includes:

- Visual refinement
- Responsive behavior
- Typography and contrast
- Service-page interactions
- Image replacement and optimization
- Accessibility
- Performance
- Cross-device QA

---

# License

This project is proprietary to **ARKGO Solutions** unless a separate license is explicitly provided by the project owner.

The repository should not be:

- Redistributed
- Resold
- Reused commercially
- Republished

without appropriate permission.

---

# Contact

For ARKGO Solutions enquiries:

**Phone:** 6207596334  
**WhatsApp:** 7979055407  
**Email:** arkgosolutions@gmail.com

**Office:**  
Subaidya Complex, Sakra Faridpur, Dholi, Muzaffarpur, Bihar 843105

---

## Built for ARKGO Solutions

A responsive, modern and conversion-focused digital presence for solar-energy solutions across Bihar.