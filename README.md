# GZ000 - Esport Content Creator Website

A modern website for Rocket League content creator GroundZero000.

## 🎮 Features

- **Leaderboards** - Player rankings for matches played on his stream
- **Live Streaming Integration** - Embedded Twitch streams for live coverage
- **Video Content** - YouTube API integration for showing recent uploads
- **Content Management** - Easy content updates through Netlify CMS, git based
- **Responsive Design** - Optimized for desktop and mobile viewing

## 🛠️ Technologies

### Frontend Framework

- **Next.js** - React-based framework for server-side rendering to boost performance and SEO
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### UI Components

- **shadcn/ui** - Modern, accessible React components built on Radix UI

### Hosting & Deployment

- **Netlify** - Modern web hosting with continuous deployment and CMS integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/gz000.git
   cd gz000
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   Create a \`.env.local\` file in the root directory:

   ```bash
   touch .env.local
   ```

   Add the following variables:

   ```env
   # YouTube API Integration
   YOUTUBE_API_KEY=your_youtube_api_key_here
   PLAYLIST_ID=your_playlist_id_here

   # Twitch Embed (use localhost for dev)
   TWITCH_PARENT_WEBSITE=localhost
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## ☁️ Netlify Integration & Deployment

This project is deployed on Netlify with a continuous deployment pipeline connected to the GitHub repository.

### How Deployment Works

- **Automatic Deploys**: Pushes to the \`main\` branch automatically trigger a new deployment on Netlify.
- **Preview Builds**: Pull requests automatically generate preview deployments to test changes before merging.
- **No Netlify Access Required for Code**: As a developer, you simply need push access to this GitHub repository to trigger updates.

### When You Need Netlify Access

While code updates deploy automatically, access to the Netlify dashboard is required for:

- **Environment Variables**: Managing API keys and secrets (Settings > Build & deploy > Environment).
- **Content Management System (CMS)**: Managing user access via Netlify Identity for the \`/admin\` dashboard.
- **Troubleshooting**: Viewing build logs if a deployment fails.

### Content Management

The site uses Netlify CMS (Decap CMS) for content updates without touching code.

- Access the admin panel at \`/admin/\`
- Requires Netlify Identity setup (Invitation via email from Netlify dashboard)
