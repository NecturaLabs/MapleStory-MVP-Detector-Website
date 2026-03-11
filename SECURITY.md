# Security Policy

## Scope

This repository contains the source code for the [ms-mvp.com](https://ms-mvp.com) static landing page. It is a fully static site with no backend, no user accounts, no cookies, and no data collection. The attack surface is limited to the static HTML/CSS output and the CI/CD pipeline.

The application this site links to — [MapleStory MVP Detector](https://github.com/NecturaLabs/MapleStory-MVP-Detector) — has its own security policy.

## Reporting a Vulnerability

Please **do not** open a public GitHub issue for security vulnerabilities.

Use [GitHub private vulnerability reporting](https://github.com/NecturaLabs/MapleStory-MVP-Detector-Website/security/advisories/new) to report issues confidentially. We will respond within 7 days.

## What to Report

Even for a static site, the following are worth reporting:

- Secrets or credentials accidentally committed to the repository
- Supply chain issues in CI/CD workflows (e.g. compromised GitHub Actions)
- Content injection via the Netlify deployment pipeline
- Subresource integrity issues with third-party scripts or fonts

## Out of Scope

- Issues in Netlify's infrastructure (report to Netlify)
- Issues in the MapleStory MVP Detector app itself (report to [that repo](https://github.com/NecturaLabs/MapleStory-MVP-Detector/security/advisories/new))
- Social engineering attempts
