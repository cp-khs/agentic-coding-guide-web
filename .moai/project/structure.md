# Agentic Coding Guide - Project Structure

## Directory Tree

```
agentic-coding-guide-web/
├── app/                          # Next.js App Router configuration
│   ├── layout.tsx               # Root layout with Nextra theme
│   ├── [[...mdxPath]]/          # Dynamic routing for MDX pages
│   └── page.tsx                 # Home page component
├── content/                      # Documentation source files
│   ├── _meta.ts                 # Root navigation configuration
│   ├── index.mdx                # Home page content
│   ├── getting-started/         # Category: Getting Started
│   │   ├── _meta.ts            # Navigation for section
│   │   ├── onboarding-handbook.mdx
│   │   └── usage-modes.mdx
│   ├── claude-code/             # Category: Claude Code Fundamentals
│   │   ├── _meta.ts            # Navigation for section
│   │   ├── agent-concepts.mdx
│   │   ├── memory-system.mdx
│   │   └── teammate-vs-subagent.mdx
│   ├── moai/                    # Category: MoAI Framework
│   │   ├── _meta.ts            # Navigation for section
│   │   ├── adk-guide.mdx
│   │   └── skills-reference.mdx
│   ├── project-management/      # Category: Project Management
│   │   ├── _meta.ts            # Navigation for section
│   │   ├── cost-estimation.mdx
│   │   └── document-creation-order.mdx
│   ├── tools/                   # Category: Tools & Integration
│   │   ├── _meta.ts            # Navigation for section
│   │   ├── iterm2-tmux-tutorial.mdx
│   │   ├── mcp-troubleshooting.mdx
│   │   ├── playwright-mcp.mdx
│   │   ├── tmux-guide.mdx
│   │   └── tmux-claude-code.mdx
│   └── tutorial/                # Category: Implementation Tutorials
│       ├── _meta.ts            # Navigation for section
│       ├── index.mdx           # Tutorial overview
│       ├── automation-guide.mdx
│       ├── manual-guide.mdx
│       ├── phase-1-setup.mdx
│       ├── phase-2-backend.mdx
│       ├── phase-3-frontend.mdx
│       ├── phase-4-multi-agent.mdx
│       └── phase-5-devops.mdx
├── components/                  # React components
│   ├── Giscus.tsx              # GitHub discussion component
│   └── mdx-components.ts       # Custom MDX component exports
├── .claude/                     # Claude Code configuration
│   ├── CLAUDE.md               # Development directives & rules
│   ├── rules/                  # Project-specific rules
│   ├── skills/                 # Custom skills
│   ├── agents/                 # Custom agents
│   ├── commands/               # Custom slash commands
│   └── hooks/                  # Git and event hooks
├── .moai/                       # MoAI-ADK framework data
│   ├── config/                 # Configuration files
│   ├── specs/                  # SPEC documents for features
│   ├── docs/                   # Generated documentation
│   ├── memory/                 # Persistent agent memory
│   ├── project/                # Project documentation (THIS DIRECTORY)
│   └── manifest.json           # Project metadata
├── .next/                       # Build output (git-ignored)
├── mdx-components.ts           # MDX component configuration
├── next.config.mjs             # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
├── package-lock.json           # Locked dependency versions
├── .env.example                # Environment variables template
├── .gitignore                  # Git exclusions
└── CLAUDE.md                   # Project-wide Claude Code rules
```

## Content Organization by Category

### Getting Started (2 files, ~600 lines)

**Purpose**: Onboarding new developers to Claude Code

- `onboarding-handbook.mdx` - Comprehensive introduction covering installation, interface, and first steps
- `usage-modes.mdx` - Detailed explanation of different Claude Code usage modes and patterns

### Claude Code Fundamentals (3 files, ~2,100 lines)

**Purpose**: Deep dive into Claude Code architecture and capabilities

- `agent-concepts.mdx` - Core agent concepts, agent types, and lifecycle management
- `memory-system.mdx` - Context window management, memory persistence, and session state
- `teammate-vs-subagent.mdx` - Clear distinction between teammate agents and sub-agents with use cases

### MoAI Framework (2 files, ~1,200 lines)

**Purpose**: Complete reference for agentic development with MoAI-ADK

- `adk-guide.mdx` - Overview of MoAI-ADK, its place in the workflow, and core concepts
- `skills-reference.mdx` - Available skills, their capabilities, and integration patterns

### Project Management (2 files, ~800 lines)

**Purpose**: Strategic guidance for managing agentic projects

- `cost-estimation.mdx` - Techniques for estimating token usage and project costs
- `document-creation-order.mdx` - Optimal sequence for generating project documentation

### Tools & Integration (5 files, ~2,700 lines)

**Purpose**: Practical tutorials for essential development tools

- `iterm2-tmux-tutorial.mdx` - Terminal configuration and optimization guide
- `mcp-troubleshooting.mdx` - Common MCP issues and solutions
- `playwright-mcp.mdx` - Browser automation with Playwright MCP
- `tmux-guide.mdx` - Terminal multiplexing fundamentals and advanced patterns
- `tmux-claude-code.mdx` - Integration of tmux with Claude Code workflow

### Implementation Tutorials (8 files, ~4,376 lines)

**Purpose**: Complete practical examples for building real projects

- `index.mdx` - Tutorial overview and learning path guidance
- `automation-guide.mdx` - Automated setup and project generation
- `manual-guide.mdx` - Step-by-step manual development approach
- `phase-1-setup.mdx` - Project initialization and environment setup
- `phase-2-backend.mdx` - Backend API development with agentic patterns
- `phase-3-frontend.mdx` - Frontend development with agent assistance
- `phase-4-multi-agent.mdx` - Coordinating multiple agents in complex projects
- `phase-5-devops.mdx` - Deployment, monitoring, and DevOps practices

## Navigation Structure

The navigation hierarchy is configured through `_meta.ts` files in each content directory:

### Root Level Navigation
- Home page (index.mdx)
- Getting Started
- Claude Code
- MoAI Framework
- Project Management
- Tools
- Tutorial

### Dynamic Navigation
Nextra automatically generates:
- Breadcrumb navigation at top of pages
- Sidebar menu from directory structure
- Previous/next page links
- Table of contents from headings
- Mobile navigation menu

## File Relationships and Dependencies

### Content Dependencies

```
index.mdx (Home)
├── getting-started/onboarding-handbook
│   └── claude-code/agent-concepts (prerequisite)
├── getting-started/usage-modes
│   └── claude-code/memory-system (referenced)
├── claude-code/agent-concepts
│   ├── claude-code/teammate-vs-subagent
│   └── moai/adk-guide (extends)
├── claude-code/memory-system
│   └── tutorial/phase-1-setup (applied in)
├── moai/adk-guide
│   ├── moai/skills-reference
│   └── project-management/document-creation-order (workflow)
├── project-management/cost-estimation
│   └── moai/adk-guide (references)
├── tools/* (all support)
│   ├── getting-started/usage-modes
│   ├── claude-code/* (tools enable features)
│   └── tutorial/* (practical usage)
└── tutorial/*
    ├── tutorial/index (overview)
    ├── tutorial/phase-1-setup
    ├── tutorial/phase-2-backend
    ├── tutorial/phase-3-frontend
    ├── tutorial/phase-4-multi-agent
    └── tutorial/phase-5-devops (dependency chain)
```

## Metadata and Configuration Files

### Navigation Files (_meta.ts)
Each category contains a `_meta.ts` file controlling:
- File display order in navigation
- Custom display names for pages
- Category organization
- External link configuration

### Theme Configuration
- `next.config.mjs` - Next.js and Nextra integration
- `mdx-components.ts` - Custom MDX component exports
- `app/layout.tsx` - Global layout with Nextra theme

### Build Configuration
- `tsconfig.json` - TypeScript strict mode configuration
- `package.json` - Dependency versions and build scripts
- `.next/` - Build artifacts (generated, git-ignored)

## Component Structure

### Layout Components
- `app/layout.tsx` - Root layout with Navbar and Footer
- `app/[[...mdxPath]]/page.tsx` - Dynamic MDX page renderer

### Custom Components
- `components/Giscus.tsx` - GitHub discussions integration
- `components/mdx-components.ts` - Exported MDX components

### Theme Integration
- Nextra theme system provides:
  - Responsive design
  - Dark mode support
  - Search functionality
  - Sidebar navigation
  - Breadcrumb trails
  - Table of contents
  - Mobile optimization

## Content Statistics

| Metric | Count |
|--------|-------|
| Total MDX Files | 23 |
| Total Content Lines | ~11,776 |
| Total Categories | 6 |
| Total Sections | 11 |
| Code Examples | 40+ |
| Supported Languages | 2 |
| Maximum File Size | ~2,100 lines |
| Average File Size | ~512 lines |

## Routing Behavior

Nextra with App Router uses:

- `/` - Home page (content/index.mdx)
- `/getting-started` - Category page
- `/getting-started/onboarding-handbook` - Individual page
- `/claude-code/agent-concepts` - Nested page
- `/tutorial/phase-1-setup` - Multi-word filename routing

## Search and Indexing

Nextra's FlexSearch provides:
- Full-text search across all content
- Automatic indexing during build
- Search results with context snippets
- Keyboard shortcut (Cmd+K or Ctrl+K)

## Static Site Generation

All pages are pre-rendered at build time:
- ~30+ static HTML files generated
- Zero runtime computation needed
- CDN-friendly output
- SEO optimized with metadata

## Git Structure

The project uses a single main branch with:
- Content files tracked in version control
- Build artifacts (.next/) in .gitignore
- Node modules in .gitignore
- Environment files in .gitignore
- Changesets for release notes

## Supporting Documentation

Additional structural details in:
- `product.md` - Vision and overview
- `tech.md` - Technical implementation details
- `.moai/config/` - MoAI-ADK configuration
- `CLAUDE.md` - Development rules and patterns
