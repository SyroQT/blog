[![Netlify Status](https://api.netlify.com/api/v1/badges/e19109d4-d1d2-47bc-bb07-a6f3cfb787d6/deploy-status)](https://app.netlify.com/projects/lambent-queijadas-6957b2/deploys)
# Personal Blog - Next.js & Firebase

A modern, performant personal blog built with Next.js 14 (App Router), Firebase, and TypeScript.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Backend**: Firebase
  - Authentication
  - Firestore Database
  - Storage
  - Hosting
- **Styling**: 
  - Tailwind CSS
  - CSS Modules
- **UI Components**: 
  - Shadcn UI
  - Radix UI
- **State Management**: Zustand
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **URL State Management**: nuqs
- **Markdown**: MDX

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication routes
│   ├── (blog)/            # Blog routes
│   ├── api/               # API routes
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   ├── blog/             # Blog-specific components
│   └── layout/           # Layout components
├── lib/                  # Utility functions and configurations
│   ├── firebase/         # Firebase configuration and utilities
│   ├── utils/            # Helper functions
│   └── constants/        # Constants and configurations
├── styles/               # Global styles
├── types/                # TypeScript type definitions
└── store/                # Zustand store
```

## Features

### Phase 1: Core Setup (Week 1)
- [ ] Project initialization with Next.js
- [ ] Firebase setup and configuration
- [ ] Basic layout and navigation
- [ ] Authentication system
- [ ] Basic styling setup (Tailwind + CSS Modules)

### Phase 2: Blog Functionality (Week 2)
- [ ] Blog post creation and management
- [ ] Markdown/MDX support
- [ ] Image upload and management
- [ ] Categories and tags
- [ ] Search functionality
- [ ] Comments system

### Phase 3: User Experience (Week 3)
- [ ] Responsive design
- [ ] Dark/Light mode
- [ ] SEO optimization
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Loading states and error handling

### Phase 4: Advanced Features (Week 4)
- [ ] Analytics integration
- [ ] Newsletter subscription
- [ ] Social sharing
- [ ] Related posts
- [ ] Sitemap generation
- [ ] RSS feed

## Development Guidelines

### Code Style
- Follow Standard.js rules
- Use TypeScript for type safety
- Implement proper error handling
- Write clean, maintainable code
- Follow React best practices

### Styling
- Use Tailwind for utility classes
- Implement CSS Modules for complex components
- Follow mobile-first approach
- Maintain consistent spacing and typography

### Performance
- Optimize images and assets
- Implement proper caching
- Firebase-powered pages revalidate every hour to keep content fresh. The interval is defined by `REVALIDATE_INTERVAL` in `src/lib/constants.ts`.
- Minimize client-side JavaScript
- Use React Server Components where possible

### Security
- Implement proper authentication
- Sanitize user inputs
- Follow Firebase security rules
- Regular dependency updates

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up Firebase:
   - Create a new Firebase project
   - Add Firebase configuration to `.env.local`
4. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Deployment

The application will be deployed on Firebase Hosting. Follow these steps:

1. Build the application:
   ```bash
   npm run build
   ```
2. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
