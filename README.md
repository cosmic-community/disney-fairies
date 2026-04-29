# Disney Fairies - Pixie Hollow Games

![App Preview](https://imgix.cosmicjs.com/94ffa330-4406-11f1-9f85-e7af420a77a5-autopilot-photo-1503095396549-807759245b35-1777493048538.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A magical Next.js website celebrating Disney Fairies, the Pixie Hollow Games (2011), and the special circus costumes worn by Tinkerbell and Fairy Mary for Ringling Bros. and Barnum & Bailey. Built with Cosmic CMS for easy content management.

## Features

- 🧚 **Fairy Showcase** - Browse all fairies with their talents and portraits
- 🎪 **Events Gallery** - Explore Pixie Hollow Games and circus events
- 🎨 **Costume Collection** - View beautiful circus costumes with image galleries
- 📱 **Fully Responsive Design** - Optimized for all screen sizes
- ⚡ **Server-Side Rendering** - Fast page loads with Next.js 16
- 🎭 **Magical Animations** - Sparkle effects and smooth transitions
- 🖼️ **Image Optimization** - Powered by imgix for fast, responsive images

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f263fdc1f9e77b56c8a8a7&clone_repository=69f264e1c1f9e77b56c8a8db)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Disney Fairies Pixie Hollow Games (2011) Tinkerbell & Fairy Mary An Tinker Fairies Wearing Circus Costumes For Ringling Bros. and Barnum & Bailey | The Greatest Show On Earth"

### Code Generation Prompt

> Build a Next.js application for a website called "Disney Fairies". The content is managed in Cosmic CMS with the following object types: fairies, events, costumes. Create a beautiful, modern, responsive design with a homepage and pages for each content type. Disney Fairies, Pixie Hollow Games (2011), Tinkerbell & Fairy Mary An Tinker Fairies Wearing Circus Costumes For Ringling Bros. and Barnum & Bailey | The Greatest Show On Earth.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **Bun** - Fast JavaScript runtime and package manager

## Getting Started

### Prerequisites

- Bun installed on your machine
- A Cosmic account with the appropriate bucket

### Installation

1. Clone this repository
2. Install dependencies:
```bash
bun install
```

3. Set up your environment variables in `.env.local`:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

## Cosmic SDK Examples

### Fetching all fairies:
```typescript
const response = await cosmic.objects
  .find({ type: 'fairies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a single costume with related fairy:
```typescript
const response = await cosmic.objects
  .findOne({ type: 'costumes', slug: 'tinkerbell-circus' })
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with three Cosmic object types:
- **Fairies** - Character profiles with talents and portraits
- **Events** - Pixie Hollow Games and circus events
- **Costumes** - Circus costumes with worn-by relationships

## Deployment Options

- **Vercel** (Recommended for Next.js)
- **Netlify**
- Set environment variables in your hosting platform's dashboard.

<!-- README_END -->