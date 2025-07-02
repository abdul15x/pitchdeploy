# PitchBolt - AI-Powered Startup Pitch Generator

PitchBolt is a full-stack Next.js 14 application that uses OpenAI's GPT-4 to generate comprehensive startup pitches. Enter your startup idea and instantly receive an elevator pitch, SWOT analysis, pitch deck outline, and video script.

## Features

- 🚀 Generate complete startup pitches with AI
- 🎤 Get a concise elevator pitch
- 📊 Receive a detailed SWOT analysis
- 📑 Generate a structured pitch deck outline
- 🎬 Create a video pitch script
- 📄 Export results as PDF
- 🖼️ Export results as PowerPoint
- 📱 Responsive design for all devices

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS
- **Backend**: Next.js API Routes
- **AI**: OpenAI GPT-4 API
- **Export**: html2pdf.js, pptxgenjs

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- OpenAI API key

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/pitchbolt.git
cd pitchbolt
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
