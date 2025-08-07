# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Essential Commands

**Development:**
```bash
npm run dev        # Start Vite dev server on port 3000
npm run build      # TypeScript compilation + Vite production build  
npm run lint       # ESLint with TypeScript rules
npm run preview    # Preview production build locally
```

**Deployment:**
- Vercel auto-deploys from main branch
- `vercel.json` handles SPA routing (all routes → index.html)

## Project Architecture

This is a **React 18 + TypeScript** PWA for KOMIPO's power plant safety management, built with **Vite** and **Tailwind CSS**.

### Key Architectural Patterns

**Component Structure:**
- `components/` - Reusable UI components (Layout, StatCard, KPIChart, etc.)
- `pages/` - Route-based page components wrapped in Layout (except Landing)
- **Layout Pattern**: All authenticated routes use `<Layout>` wrapper with sidebar navigation

**Routing (React Router v6):**
- `/` → Landing (public marketing page)
- `/dashboard` → Main dashboard with KPI charts and safety heatmap
- `/monitoring`, `/learning`, `/reports`, `/profile` → Feature-specific pages

**Data & State:**
- **Local state only** (useState) - no global state management yet
- **Mock data generation** in components (realistic demo data)
- **No backend integration** yet - frontend-only application

### Custom Design System

**Tailwind Configuration:**
- Primary color: `#2C5AA0` (KOMIPO blue)
- Custom component classes in `index.css`: `.btn-primary`, `.card`, `.status-*`
- Korean-language support with Inter font family

**Key Components:**
- `KPIChart.tsx` - Custom bar chart implementation (no external chart library)
  - Uses pixel-based height calculations with 85% grid constraint
  - Handles y-axis scaling to prevent overflow above 100% line
- `Layout.tsx` - Responsive sidebar (desktop) / hamburger menu (mobile)
- `SafetyHeatmap.tsx` - Grid-based safety visualization

### Technology Decisions

- **No Chart Libraries**: Custom SVG/CSS implementations for data visualization
- **PWA Ready**: Service worker (`public/sw.js`) and manifest for offline use
- **TypeScript Strict**: All components fully typed with interfaces
- **Vercel Deployment**: SPA configuration for client-side routing support

### Domain Context

This is an **industrial safety platform** for Korean power plants focusing on:
- Real-time worker monitoring and safety alerts
- Knowledge transfer between veteran and new workers  
- ESG compliance reporting (IFRS S1/S2 standards)
- Age-friendly UI design for industrial environments

### Development Notes

- **Korean-first design** - all UI text should maintain Korean language support
- **Mock data patterns** - Components generate realistic demo data with `Math.random()` variations
- **Chart height calculations** - Use `availableHeight * 0.85` pattern to stay within grid bounds
- **Responsive design** - Mobile-first with `lg:` breakpoints for desktop
- **No testing framework** currently configured

### Future Integration Points

The architecture supports adding:
- Backend API integration (RESTful)
- WebSocket for real-time data streams  
- Global state management (Redux Toolkit/Zustand)
- Authentication system
- Testing framework (Vitest recommended for Vite projects)