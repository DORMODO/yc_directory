# 🚀 YC Directory

A modern startup directory platform where entrepreneurs can pitch their ideas, connect with other founders, and get noticed in virtual competitions.

![YC Directory](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Sanity](https://img.shields.io/badge/Sanity-CMS-F03E2F?style=for-the-badge&logo=sanity)

## ✨ Features

- 🔐 **GitHub Authentication** - Secure login with NextAuth.js
- 📝 **Startup Pitches** - Create and share startup ideas with markdown support
- 🔍 **Search & Discovery** - Find startups by category, title, or author
- 👥 **User Profiles** - Showcase your startup portfolio
- 📊 **Analytics** - Track views and engagement
- 🎨 **Modern UI** - Beautiful, responsive design with custom styling
- ⚡ **Performance** - Built with Next.js 15 and Turbopack
- 🛡️ **Security** - XSS protection and input sanitization
- 📱 **Mobile-First** - Fully responsive design

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Backend & Database
- **Sanity CMS** - Headless content management
- **NextAuth.js** - Authentication with GitHub provider
- **Server Actions** - Type-safe server-side mutations

### Development & Monitoring
- **Sentry** - Error monitoring and performance tracking
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Turbopack** - Fast bundling and development

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun
- GitHub account (for authentication)
- Sanity account (for CMS)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yc_directory.git
   cd yc_directory
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in the following variables:
   ```env
   # Sanity Configuration
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-09-01
   SANITY_WRITE_TOKEN=your_write_token
   
   # NextAuth Configuration
   AUTH_SECRET=your_auth_secret
   AUTH_GITHUB_ID=your_github_client_id
   AUTH_GITHUB_SECRET=your_github_client_secret
   
   # Sentry Configuration (Optional)
   NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
   ```

4. **Set up Sanity Studio**
   ```bash
   npm run sanity:dev
   ```
   Visit `http://localhost:3333` to configure your content types.

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
yc_directory/
├── app/                    # Next.js App Router
│   ├── (root)/            # Route groups
│   │   ├── page.tsx       # Home page
│   │   ├── startup/       # Startup pages
│   │   └── user/          # User profile pages
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── StartupCard.tsx   # Startup display component
│   ├── StartupForm.tsx   # Startup creation form
│   └── Navbar.tsx        # Navigation component
├── lib/                  # Utility functions
│   ├── actions.ts        # Server actions
│   ├── utils.ts          # Helper functions
│   ├── validation.ts     # Zod schemas
│   └── markdown.ts       # Markdown rendering
├── sanity/               # Sanity CMS configuration
│   ├── lib/              # Sanity client setup
│   ├── schemaTypes/      # Content schemas
│   └── structure.config.ts
└── public/               # Static assets
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Sanity CMS
npm run sanity:dev   # Start Sanity Studio
npm run sanity:build # Build Sanity Studio
npm run sanity:deploy # Deploy Sanity Studio

# Utilities
npm run clean        # Clean build artifacts
```

## 🎨 Customization

### Styling
The project uses a custom design system built on Tailwind CSS. Key files:
- `app/globals.css` - Design tokens and component styles
- `components/ui/` - Reusable UI components
- `tailwind.config.js` - Tailwind configuration

### Content Types
Modify Sanity schemas in `sanity/schemaTypes/`:
- `startup.ts` - Startup pitch schema
- `author.ts` - User profile schema

### Authentication
Configure providers in `auth.ts`:
- Currently supports GitHub OAuth
- Easy to extend with other providers

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security Features

- **XSS Protection** - All user content is sanitized
- **CSRF Protection** - Built-in NextAuth.js protection
- **Input Validation** - Zod schema validation
- **Environment Variables** - Secure configuration management
- **Rate Limiting** - API rate limiting (recommended for production)

## 📊 Performance

- **Turbopack** - Fast development builds
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic route-based code splitting
- **Font Optimization** - Local font loading
- **Bundle Analysis** - Use `npm run analyze` to analyze bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Sanity](https://www.sanity.io/) - The headless CMS
- [Tailwind CSS](https://tailwindcss.com/) - The CSS framework
- [Radix UI](https://www.radix-ui.com/) - The component primitives
- [Lucide](https://lucide.dev/) - The icon library

## 📞 Support

If you have any questions or need help:
- Open an issue on GitHub
- Check the documentation


