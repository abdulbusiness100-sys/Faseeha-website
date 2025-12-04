# Faseeha Institute - Online Qur'an & Arabic Education Platform

## Overview

Faseeha Institute is a women-only online education platform offering structured Qur'an and Arabic language programmes. The platform features a marketing-focused website with multiple pages showcasing programmes, pricing, testimonials, and educational information. Built as a modern single-page application with React and Express, it emphasizes SEO optimization, elegant UI/UX, and accessibility for its target audience of Muslim women seeking Islamic education.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS v4 with custom theme configuration
- **UI Components**: Shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for page transitions and animations
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

**Design System:**
- Custom color palette based on brand colors (Hemlock, Westar, Mindaro)
- Three font families: Montserrat (sans-serif), Playfair Display (serif headings), Amiri (Arabic text)
- Radix UI primitives for accessible component foundations
- Responsive design with mobile-first approach

**Page Structure:**
- Home (/) - Hero section with programme highlights
- Qur'an Programme (/quran-programme) - Tajweed, fluency, and hifdh details
- Arabic Programme (/arabic-programme) - 4-level curriculum roadmap
- Pricing (/pricing) - Subscription plans
- About (/about) - Institute story and mission
- Testimonials (/testimonials) - Student feedback
- FAQ (/faq) - Common questions organized by category
- 404 Not Found page

**SEO Strategy:**
- Comprehensive meta tags in index.html (title, description, canonical, robots)
- Open Graph tags for social media sharing
- Twitter Card support
- Custom Vite plugin (vite-plugin-meta-images) to dynamically update OG image URLs for Replit deployments
- Structured content with semantic HTML
- Image optimization considerations

### Backend Architecture

**Technology Stack:**
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Build Tool**: Vite for client bundling, esbuild for server bundling
- **Development**: tsx for TypeScript execution

**Server Structure:**
- `server/index.ts` - Express server setup with middleware
- `server/routes.ts` - API route registration (placeholder for future endpoints)
- `server/static.ts` - Static file serving with SPA fallback
- `server/vite.ts` - Vite dev server integration for HMR
- `server/storage.ts` - Storage abstraction layer with in-memory implementation

**Key Architectural Decisions:**
- **In-Memory Storage**: Currently uses MemStorage class for development/demo purposes
- **Storage Interface**: IStorage interface defines CRUD operations (getUser, getUserByUsername, createUser)
- **Database Ready**: Drizzle ORM configured but not yet implemented - schema exists in shared/schema.ts
- **Middleware Chain**: JSON parsing with raw body preservation, URL encoding support
- **Request Logging**: Custom logging middleware tracking request duration and response details
- **Build Strategy**: Selective dependency bundling for server to reduce cold start times (allowlist approach)

### Data Storage Solutions

**Current Implementation:**
- In-memory storage via MemStorage class
- Simple Map-based user storage for development

**Database Schema (Drizzle - Not Yet Connected):**
- **Database**: PostgreSQL via Neon serverless driver (@neondatabase/serverless)
- **ORM**: Drizzle ORM with Drizzle-Zod for schema validation
- **Schema Location**: shared/schema.ts
- **Tables Defined**:
  - `users` table: id (UUID primary key), username (unique text), password (text)
- **Migration Directory**: ./migrations
- **Schema Validation**: Zod schemas generated from Drizzle tables via createInsertSchema

**Design Rationale:**
- Shared schema between client and server enables type safety across full stack
- Drizzle chosen for type-safe SQL queries and excellent TypeScript integration
- PostgreSQL via Neon provides serverless scalability without infrastructure management
- Migration-based approach ensures version-controlled schema changes

### Authentication and Authorization

**Current State**: Basic user schema exists but no authentication implemented yet

**Prepared Dependencies:**
- express-session for session management
- connect-pg-simple for PostgreSQL session storage
- passport and passport-local for local authentication strategy
- bcrypt/argon2 would be needed for password hashing (not currently in dependencies)

**Future Implementation Considerations:**
- Session-based authentication appears to be the intended approach
- User schema includes username/password fields
- No JWT or token-based auth dependencies present

### Build and Deployment

**Development Mode:**
- Client: Vite dev server on port 5000 with HMR
- Server: tsx watch mode with hot reload
- Vite middleware integration for seamless full-stack development
- Source maps enabled via @jridgewell/trace-mapping

**Production Build:**
- Client: Vite builds to dist/public with asset optimization
- Server: esbuild bundles to dist/index.cjs with selective dependency bundling
- Static file serving with SPA fallback routing
- Environment-aware configuration (NODE_ENV)

**Build Optimizations:**
- Allowlist approach bundles frequently-used dependencies to reduce syscalls
- External dependencies remain unbundled to reduce bundle size
- PostCSS with Tailwind and Autoprefixer for CSS processing

**Replit-Specific Features:**
- Cartographer plugin for code mapping (dev only)
- Dev banner plugin (dev only)
- Runtime error overlay modal
- Custom meta image plugin for deployment URL injection

### External Dependencies

**UI Component Libraries:**
- Radix UI (comprehensive set of 20+ primitive components)
- Lucide React (icon library)
- cmdk (command palette component)
- Embla Carousel React (carousel functionality)
- Vaul (drawer component)
- React Day Picker (calendar/date selection)
- Recharts (charting library)
- Input-OTP (OTP input component)

**Utility Libraries:**
- class-variance-authority (CVA for component variants)
- clsx and tailwind-merge (className management)
- date-fns (date manipulation)
- nanoid (ID generation)

**Development Tools:**
- TypeScript with strict mode enabled
- Path aliases (@/ for client/src, @shared/ for shared, @assets/ for attached_assets)
- ESM module format throughout
- Incremental compilation with tsBuildInfo caching

**Third-Party Services (Prepared but Not Integrated):**
- Stripe (payment processing dependency present)
- OpenAI and Google Generative AI (AI capabilities)
- Nodemailer (email functionality)
- Axios (HTTP client)
- WebSocket support via 'ws' package
- Excel file handling via 'xlsx'

**Assets:**
- Custom fonts from Google Fonts (Playfair Display, Montserrat, Amiri)
- Image assets stored in client/public directory
- Logo and marketing images referenced throughout pages
- Testimonials data imported from attached_assets text files