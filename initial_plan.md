# Proposal: Lightweight GitHub-Based Lab Website for a University of Pittsburgh DBMI Research Group

## Overview

This proposal outlines a practical, low-maintenance approach for creating a professional research lab website hosted on GitHub using GitHub Pages. The goal is to provide a clean, academically credible web presence for the lab that highlights:

- Research projects
- Publications
- Team members
- Collaborators
- News and updates (optional)
- Contact information
- Training opportunities or datasets/tools (optional)

The proposed approach prioritizes:

- Minimal hosting cost
- Easy long-term maintenance
- Version-controlled content
- Professional appearance
- Compliance with University of Pittsburgh branding and accessibility standards
- Easy onboarding for future students/staff

GitHub Pages is well-suited for relatively static academic sites with infrequent updates.

---

# Recommended Architecture

## Preferred Stack

| Component | Recommendation | Reason |
|---|---|---|
| Hosting | GitHub Pages | Free, reliable, academic-friendly |
| Source Control | GitHub | Versioning + collaboration |
| Site Generator | Jekyll or Quarto | Native GitHub Pages support |
| Styling | Minimal Pitt-branded CSS | Clean and maintainable |
| Domain | Optional custom domain | More professional branding |
| Content Format | Markdown | Easy editing and long-term maintainability |

---

# Why GitHub Pages?

GitHub Pages is commonly used by research labs and academic groups because it provides:

- Free hosting
- HTTPS by default
- Git-based version history
- Simple deployment workflow
- Long-term maintainability
- Easy collaboration with students/research staff
- No server administration requirements

Because the lab content is expected to remain mostly stable, this architecture avoids unnecessary complexity like databases, CMS platforms, or backend infrastructure.

---

# Recommended Site Structure

## Suggested Navigation

```text
Home
Research
Projects
Publications
Team
Collaborators
Software / Data Resources
News (optional)
Contact