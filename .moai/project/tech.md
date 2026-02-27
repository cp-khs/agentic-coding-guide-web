# Agentic Coding Guide - Technical Architecture

## Technology Stack Overview

### Core Framework Versions

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework with App Router and SSG |
| React | 19.2.4 | UI component library with RSC support |
| Nextra | 4.6.1 | Static site generation for documentation |
| TypeScript | 5.9+ | Type-safe language with strict mode |
| Node.js | 20+ LTS | Runtime environment |
| Turbopack | Latest | Bundler integrated with Next.js |

### Supporting Libraries

- `nextra-theme-docs` 4.6.1 - Professional documentation theme
- `@giscus/react` 3.1.0 - GitHub-backed discussions component
- `@types/react` 19.2.14 - React type definitions

## Next.js and Nextra Integration

### App Router Configuration

The project uses Next.js App Router with a dynamic catch-all route:

```
app/
├── layout.tsx           # Root layout (Nextra wrapper)
├── [[...mdxPath]]/     # Dynamic route parameter
│   └── page.tsx        # MDX page renderer
```

This structure allows Nextra to handle all `/path/to/page` routes automatically by reading from the content directory. The `[[...mdxPath]]` optional catch-all route captures all paths and passes them to Nextra's page mapper.

### Nextra Configuration

The `next.config.mjs` file applies Nextra's webpack configuration:

```javascript
const withNextra = nextra({})
export default withNextra({
  reactStrictMode: true,
  turbopack: { root: __dirname }
})
```

This minimal configuration enables:
- MDX file processing through webpack
- Automatic route generation from content structure
- Built-in search with FlexSearch
- Theme system integration

### Build System Details

**Turbopack Integration**: Next.js 16 ships with Turbopack, a Rust-based bundler providing:
- 10-30x faster cold starts compared to Webpack
- Incremental compilation for fast rebuilds
- Automatic code splitting and prefetching
- ESM module support

**Build Process**:
1. Read all `.mdx` files from content directory
2. Parse MDX with JSX extraction
3. Generate React components for each page
4. Bundle with Turbopack
5. Generate static HTML at build time
6. Output to `.next/out/` for deployment

**Static Generation**: All pages are pre-rendered at build time to HTML files. No server-side rendering occurs. The build process scans the content directory and generates a page for each MDX file.

## TypeScript Configuration

### Strict Mode Requirements

The `tsconfig.json` enforces TypeScript strict mode:

| Setting | Value | Purpose |
|---------|-------|---------|
| `strict` | true | Enable all strict type checking options |
| `noEmit` | true | Only type-check, don't emit JavaScript |
| `target` | ES2017 | Modern browser compatibility |
| `module` | esnext | ESM module output |
| `jsx` | react-jsx | React 17+ JSX transform |
| `moduleResolution` | bundler | Next.js bundler resolution |

### Path Aliases

The configuration defines path aliases for clean imports:

```typescript
"paths": {
  "@/*": ["./*"]
}
```

This allows `import { Component } from '@/components/...'` instead of relative paths.

### Compiler Options

- `allowJs: true` - Support JavaScript files alongside TypeScript
- `skipLibCheck: true` - Skip type checking in node_modules
- `esModuleInterop: true` - Enable CommonJS/ESM interop
- `resolveJsonModule: true` - Import JSON files as modules
- `incremental: true` - Cache type checking between builds

## MDX and React Component Integration

### MDX Syntax Support

MDX files (`.mdx`) combine Markdown and JSX:

```markdown
# Heading

Regular markdown content.

<Component prop="value">
  Nested content
</Component>

```javascript
code example
```
```

Nextra processes MDX files through the webpack loader, converting them to React components.

### Component Exports

The `mdx-components.ts` file exports custom components for Nextra:

- Heading components (h1-h6) with automatic anchor links
- Paragraph and text styling
- Code blocks with syntax highlighting
- Callout components for notes and warnings
- Table components with responsive behavior
- Link components with analytics tracking

### Giscus Integration

The `components/Giscus.tsx` component integrates GitHub Discussions:

- Loads via Giscus React package
- Requires `NEXT_PUBLIC_GISCUS_REPO_ID` environment variable
- Requires `NEXT_PUBLIC_GISCUS_CATEGORY_ID` environment variable
- Renders at bottom of each content page
- Requires public GitHub repository

## Build Process and Performance

### Build Steps

1. **Dependency Resolution** (2-3s)
   - npm install or pnpm install
   - Resolve 375+ packages
   - Build type definitions

2. **Next.js Compilation** (8-15s)
   - Turbopack processes all files
   - Generate routes from content structure
   - Type-check TypeScript files
   - Output to .next/ directory

3. **Asset Generation** (2-5s)
   - Generate static HTML files
   - Create CSS bundles
   - Minify and optimize assets
   - Generate manifest files

4. **Output Creation** (1-2s)
   - Copy public assets
   - Create vercel.json configuration
   - Package for deployment

**Total Build Time**: 15-30 seconds on modern hardware

### Development Server

Running `npm run dev` starts Next.js development server:

- Port 3000 (default)
- Hot module reloading enabled
- Fast refresh for React components
- Incremental compilation
- TypeScript type-checking on save

### Production Build

Running `npm run build` generates optimized output:

- Static HTML generation (~30 files)
- CSS minification and bundling
- JavaScript code splitting
- Image optimization
- Sourcemap generation (optional)

## Deployment Configuration

### Vercel (Recommended)

Vercel provides seamless Next.js deployment:

```javascript
// vercel.json (required)
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next/out",
  "env": {
    "NEXT_PUBLIC_GISCUS_REPO_ID": "@GISCUS_REPO_ID",
    "NEXT_PUBLIC_GISCUS_CATEGORY_ID": "@GISCUS_CATEGORY_ID"
  }
}
```

Setup steps:
1. Connect GitHub repository
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main
4. Configure custom domain via Vercel settings
5. Enable automatic HTTPS and caching

### Environment Variables

The project requires these environment variables for full functionality:

| Variable | Usage | Required |
|----------|-------|----------|
| NEXT_PUBLIC_GISCUS_REPO_ID | GitHub repo ID for discussions | Yes |
| NEXT_PUBLIC_GISCUS_CATEGORY_ID | Giscus category ID | Yes |
| NEXT_PUBLIC_BASE_URL | Base URL for SEO metadata | Optional |

These are loaded from `.env.local` at build time. The `NEXT_PUBLIC_` prefix makes them available to browser JavaScript.

## Performance Characteristics

### Page Load Metrics

**First Contentful Paint (FCP)**: < 1.5 seconds
- All pages are static HTML
- No server computation needed
- CSS inlined in head for faster rendering

**Largest Contentful Paint (LCP)**: < 2.5 seconds
- Images optimized through Next.js Image component
- Font loading optimized
- Script deferment

**Cumulative Layout Shift (CLS)**: < 0.1
- Fixed layout dimensions
- No late-loading ads or popups
- Stable sidebar menu

**Time to Interactive (TTI)**: < 3 seconds
- Minimal JavaScript required
- React hydration fast
- No blocking third-party scripts

### File Size Analysis

| Asset Type | Size | Count |
|------------|------|-------|
| HTML pages | 50-150 KB (gzipped) | ~30 |
| Main CSS | 30-50 KB | 1 |
| JavaScript bundle | 80-120 KB | 1 |
| Total transfer | ~200-300 KB | - |

### Caching Strategy

- **HTML files**: Cache-Control: public, max-age=60 (1 minute)
- **JavaScript/CSS**: Cache-Control: public, immutable, max-age=31536000 (1 year)
- **Images**: Cache-Control: public, max-age=31536000 (1 year)
- **API responses**: Cache-Control: no-cache

## Development Scripts

### Available Commands

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Generate production build
npm start        # Run production server (requires build first)
```

### Build Process Diagram

```
source files (.mdx, .tsx)
    ↓
TypeScript compilation
    ↓
Turbopack bundling
    ↓
Static HTML generation
    ↓
Optimization & minification
    ↓
.next/out/ (production output)
    ↓
Deployment to Vercel/Server
```

## Known Limitations

### Current Constraints

1. **Single Language Per Build**: While content supports multiple languages, Nextra generates separate builds for each language. Current implementation supports English and Korean content in the same build but requires separate configuration for i18n routing.

2. **Static Generation Only**: Dynamic content requires rebuild. No server-side features available without custom Next.js API routes.

3. **Client-Side Search**: FlexSearch runs in the browser. Large content sites (1000+ pages) may see slower search performance.

4. **GitHub Discussions Requirement**: Giscus requires a public GitHub repository for comments to function.

5. **No Server-Side Analytics**: Built-in analytics require external services. GitHub discussions provide user engagement data only.

### Scalability Notes

- Content up to 100+ MDX files builds successfully
- Build time scales linearly with file count
- Search performance degrades with 1000+ pages
- Bundle size remains constant regardless of content

## Security Configuration

### Content Security Policy

The project implements standard Next.js security practices:

- No inline scripts in production
- External font loading from trusted CDN
- GitHub Giscus iframe sandboxing
- Input validation for external links

### TypeScript Safety

Strict mode provides compile-time safety:
- No implicit `any` types
- Mandatory null/undefined handling
- Type narrowing requirements
- Property access validation

## Accessibility Standards

### WCAG 2.1 Compliance

The Nextra theme provides:
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (developer responsibility)
- Keyboard navigation throughout
- Screen reader support for navigation
- High contrast mode support
- Focus indicators on all interactive elements

## Development Workflows

### Local Development

1. Install dependencies: `npm install`
2. Start server: `npm run dev`
3. Edit `.mdx` files in content/
4. Browser refreshes automatically (hot reload)
5. Check TypeScript errors: `npx tsc --noEmit`

### Building for Production

1. Run `npm run build`
2. Test locally: `npm start`
3. Verify all routes work
4. Commit to git
5. Push to GitHub (Vercel deploys automatically)

### Code Quality

- TypeScript strict mode catches type errors
- ESLint not configured but recommended
- Prettier not configured but recommended
- Manual code review recommended before deployment

## Version History

- **Next.js 16.1.6**: Latest stable with Turbopack
- **Nextra 4.6.1**: Latest major version with App Router support
- **React 19.2.4**: Latest with Server Components ready

All versions are pinned in `package-lock.json` for reproducible builds.

## Supporting Systems

### Project Management
- `.moai/` - MoAI-ADK project data
- `CLAUDE.md` - Development rules and orchestration

### Code Organization
- `.claude/` - Claude Code configuration
- `.gitignore` - Version control exclusions
- `.env.example` - Environment variables template

### Documentation Links

Additional technical details:
- `product.md` - Product overview and vision
- `structure.md` - Directory organization
- `CLAUDE.md` - Development standards
- `package.json` - Dependency manifest
