# Portfolio Website

## Overview

This is a modern, minimalist personal portfolio website built using React with TypeScript, Express.js, and PostgreSQL. The application follows a premium design aesthetic inspired by Apple and Stripe, featuring clean animations, proper spacing, and a professional layout structure.

The portfolio includes essential sections: hero/intro, contact form, education, skills, experience, projects, blog posts, and footer. It's designed to be SEO-friendly, analytics-ready, and includes both light and dark mode themes.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for smooth, subtle animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Theme System**: Custom theme provider with light/dark mode support

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Session Storage**: PostgreSQL-based session storage with connect-pg-simple
- **API Design**: RESTful endpoints with proper error handling

### Build System
- **Build Tool**: Vite for fast development and optimized production builds
- **Development**: Hot module replacement and error overlay
- **Production**: Static asset optimization and ESM bundling with esbuild

## Key Components

### Database Schema
- **Users table**: Basic user management (id, username, password)
- **Contact Messages table**: Stores form submissions (id, name, email, subject, message, created_at)
- **Schema validation**: Drizzle-Zod integration for runtime type safety

### UI Components
- **shadcn/ui**: Complete component library with accessibility features
- **Custom Components**: Hero, Education, Skills, Experience, Projects, Blog, Contact, Footer
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Scroll-triggered animations with viewport detection

### Contact System
- **Form Validation**: Client-side validation with Zod schemas
- **API Integration**: POST endpoint for message submission
- **Error Handling**: Comprehensive error states and user feedback
- **Toast Notifications**: Success/error feedback system

### Analytics Integration
- **Google Analytics**: GA4 integration with custom event tracking
- **Custom Events**: Track user interactions (downloads, clicks, form submissions)
- **Environment Configuration**: Configurable measurement ID

## Data Flow

1. **Client Requests**: Vite dev server handles static assets and routing
2. **API Calls**: React components make requests to Express backend
3. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
4. **Response Handling**: TanStack Query manages caching and error states
5. **UI Updates**: React re-renders based on state changes with smooth animations

### Contact Form Flow
1. User fills out contact form with validation
2. Form data validated client-side with Zod
3. POST request sent to `/api/contact` endpoint
4. Server validates and stores message in database
5. Success/error response triggers toast notification
6. Analytics event tracked for form submission

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **UI Components**: Radix UI primitives, Lucide React icons
- **Animation**: Framer Motion, Embla Carousel
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod, @hookform/resolvers

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript
- **Database Tools**: Drizzle Kit for migrations
- **Development Utilities**: tsx for TypeScript execution

### External Services
- **Database**: Neon PostgreSQL (serverless)
- **Analytics**: Google Analytics 4
- **Images**: Unsplash for placeholder content
- **Fonts**: Google Fonts (Inter)

## Deployment Strategy

### Development Environment
- **Local Development**: `npm run dev` starts both Vite dev server and Express backend
- **Database**: Environment variable `DATABASE_URL` for connection
- **Hot Reload**: Vite HMR for frontend, tsx for backend changes

### Production Build
- **Frontend**: `vite build` creates optimized static assets
- **Backend**: `esbuild` bundles server code for Node.js deployment
- **Database**: `drizzle-kit push` for schema deployment
- **Start Command**: `npm start` runs production server

### Environment Configuration
- **Required Variables**: `DATABASE_URL` for database connection
- **Optional Variables**: `VITE_GA_MEASUREMENT_ID` for analytics
- **Build Output**: Static files in `dist/public`, server bundle in `dist/`

## Changelog

Changelog:
- July 01, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.