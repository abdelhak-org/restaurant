# La Belle Cuisine - Restaurant Website

A modern, responsive restaurant website built with Next.js 16, featuring online ordering, reservations, and a beautiful UI.

## Features

- 🍽️ Interactive menu with cart functionality
- 📱 Fully responsive design
- 🌙 Dark/Light theme toggle
- 📧 Contact form
- 🗓️ Table reservation system
- 🛒 Online ordering with checkout
- 🔍 SEO optimized with sitemap and robots.txt

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="La Belle Cuisine"
CONTACT_EMAIL=contact@restaurant.com
```

## Deployment

### Option 1: Netlify

1. Push your code to GitHub
2. Connect your repo to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Add environment variables in Netlify dashboard

### Option 2: Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### Option 3: Docker

```dockerfile
# Build the image
docker build -t restaurant-app .

# Run the container
docker run -p 3000:3000 restaurant-app
```

### Option 4: Self-Hosted (Node.js)

```bash
# Build for production
npm run build

# Start the server
npm run start
```

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI + shadcn/ui
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
