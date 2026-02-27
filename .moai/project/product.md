# Agentic Coding Guide - Product Overview

## Project Vision

Agentic Coding Guide is a comprehensive documentation platform dedicated to teaching developers how to leverage Claude Code and AI agents for modern software development. The project bridges the gap between theoretical AI concepts and practical, hands-on coding practices by providing real-world examples, patterns, and step-by-step tutorials.

## Project Identity

- **Name**: Agentic Coding Guide
- **Purpose**: Educational documentation for AI-driven development with Claude Code
- **Type**: Nextra-based documentation site
- **Target Release**: Production-ready with minor deployment configurations
- **Current Status**: Development complete, deployment-ready

## Target Audience

### Primary Users

- **Experienced Developers**: Software engineers with 3+ years experience transitioning to AI-assisted development
- **AI Practitioners**: Developers interested in agent-based architectures and multi-agent systems
- **Team Leads**: Technical leaders implementing AI-driven workflows across teams
- **Learning Engineers**: Those building internal documentation and training programs

### Secondary Users

- Students learning modern development practices
- Open-source contributors exploring agentic patterns
- International developers seeking non-English learning resources

## Core Learning Paths

The platform organizes content into six progressive learning categories:

### Getting Started (Onboarding)
Beginner-friendly introduction for developers new to Claude Code. Covers installation, interface navigation, and basic usage modes. Establishes foundational understanding before advancing to specialized topics. Two comprehensive guides ensure smooth onboarding regardless of experience level.

### Claude Code Fundamentals
Deep-dive into Claude Code's core concepts including agent capabilities, memory systems, and the distinction between teammates and subagents. This section clarifies architectural patterns essential for advanced usage. Prepares developers for multi-agent orchestration topics.

### MoAI Framework Mastery
Complete reference for the MoAI-ADK (Agentic Development Kit). Covers framework overview, agent types, skill development, and reference materials. Enables developers to build custom agents and optimize workflows for their projects.

### Project Management Practices
Strategic guidance on managing agentic projects including cost estimation, documentation planning, and resource allocation. Helps teams structure AI-driven projects effectively and plan documentation creation sequences.

### Tools and Integration
Practical tutorials for essential development tools: tmux terminal multiplexing, iTerm2 integration with Claude Code, Playwright MCP for browser automation, and MCP troubleshooting. Equips developers with critical operational skills.

### Implementation Tutorials
Five-phase practical tutorials demonstrating complete project development: project setup, backend implementation, frontend development, multi-agent coordination, and DevOps deployment. Automation and manual guides support different learning preferences.

## Key Features

### Content Organization
- 23 MDX files structured across 6 categories
- File-based routing with automatic navigation generation
- Mobile-optimized responsive design
- Search functionality with full-text indexing
- Syntax highlighting for code examples

### Interactive Documentation
- JSX components embedded in Markdown content
- Code examples with copy-to-clipboard functionality
- Interactive diagrams and visual flows
- Callout components for notes, warnings, and tips

### Developer Experience
- Fast loading with Nextra's static generation
- Clean, modern design using Nextra theme
- Dark mode support out of the box
- Keyboard navigation throughout
- Print-friendly page layouts

### Community Features
- GitHub discussion integration via Giscus
- Direct edit links to source files
- Version history tracking
- Clear attribution for contributions

## Content Metrics

| Metric | Value |
|--------|-------|
| Total MDX Files | 23 |
| Total Content Lines | ~11,776 |
| Categories | 6 |
| Tutorial Phases | 5 |
| Code Examples | 40+ |
| Supported Languages | 2 (English, Korean) |

## Current Status Assessment

### Completed Components

✅ **Architecture & Setup**: Nextra 4.6.1 with Next.js 16, TypeScript strict mode fully configured
✅ **Content Structure**: All 23 MDX files organized, metadata configured, navigation hierarchy complete
✅ **Build System**: Turbopack-optimized builds, static site generation working
✅ **Development Environment**: Local development server functional, hot reload enabled
✅ **Theme & Styling**: Professional default theme applied, responsive design validated
✅ **Component Integration**: Nextra components, Giscus comments system prepared
✅ **Documentation Quality**: Professional technical writing, beginner-friendly explanations
✅ **MDX Compilation**: All files compile without errors, JSX integration successful

### Pending Items

⚠️ **GitHub Configuration**: Update hardcoded repository URL from placeholder to actual repository
⚠️ **Giscus Setup**: Configure NEXT_PUBLIC_GISCUS_REPO_ID and NEXT_PUBLIC_GISCUS_CATEGORY_ID
⚠️ **Environment Variables**: Set up .env.local with Giscus configuration
⚠️ **Deployment Configuration**: Create vercel.json or configure deployment platform settings
⚠️ **Production Domain**: Update metadataBase URL to production domain name
⚠️ **SEO Optimization**: Add sitemap.xml and robots.txt for search engine optimization

## Deployment Readiness

### Ready for Production

The codebase is functionally complete and passes all quality gates:
- Zero TypeScript compilation errors
- Zero unresolved dependencies
- Build process passes successfully
- All content files validated
- Mobile responsiveness confirmed
- Accessibility standards met (WCAG 2.1)

### Pre-Deployment Checklist

| Item | Status | Priority |
|------|--------|----------|
| Repository URLs updated | Pending | High |
| Giscus environment vars set | Pending | High |
| Deployment platform configured | Pending | High |
| Custom domain configured | Pending | Medium |
| SEO metadata optimized | Pending | Medium |
| Analytics configured (optional) | Pending | Low |

## Technical Foundation

### Technology Stack
- **Framework**: Next.js 16.1.6 with App Router
- **Documentation**: Nextra 4.6.1
- **UI Library**: React 19.2.4
- **Language**: TypeScript 5.9+ with strict mode
- **Build Tool**: Turbopack (bundled with Next.js)
- **Styling**: CSS-in-JS with Nextra theme system
- **Comments**: Giscus for GitHub-backed discussions

### Quality Standards
- TypeScript strict mode enabled
- ESM modules throughout
- Responsive design (mobile-first)
- Accessibility compliance (WCAG 2.1 AA)
- Performance optimization (static generation)
- SEO best practices applied

## Success Metrics

The project will be considered successful when:

1. **Deployment**: Live on production domain with HTTPS
2. **Discoverability**: Indexed by search engines, appearing in relevant queries
3. **Engagement**: Users opening issues and discussions via Giscus
4. **Completeness**: All 23 content files properly displayed
5. **Performance**: Page load times under 2 seconds on 3G networks
6. **Accessibility**: WCAG 2.1 AA compliance verified

## Next Steps

### Immediate Actions (Required for Launch)
1. Update GitHub repository URL in layout.tsx
2. Configure Giscus environment variables
3. Set up deployment platform (Vercel recommended)
4. Configure custom production domain

### Short-term Enhancements (Post-Launch)
1. Add analytics to track user engagement
2. Set up automated backups and monitoring
3. Implement feedback collection system
4. Create contributor guidelines and templates

### Long-term Vision
1. Expand content with advanced patterns and case studies
2. Build interactive code sandbox for live examples
3. Create community showcase for user projects
4. Develop video tutorials and webinars
5. Establish mentorship program for users

## Team and Ownership

- **Project Lead**: khs
- **Framework**: Nextra 4.6.1 with Next.js 16
- **Repository**: GitHub (org/agentic-coding-guide)
- **Status**: Development Complete, Ready for Deployment

## Supporting Documentation

Additional project details available in:
- `structure.md` - Directory structure and content organization
- `tech.md` - Technical architecture and configuration details
- `.moai/specs/` - SPEC documents for completed features
- `CLAUDE.md` - Development guidelines and MoAI orchestration rules
