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
   git clone https://github.com/DORMODO/yc_directory.git
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

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

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

## 📊 Performance

- **Turbopack** - Fast development builds
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic route-based code splitting
- **Font Optimization** - Local font loading

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



