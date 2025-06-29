
import { z } from 'zod';

export const TechnologiesSchema = z.object({
  languages: z.string(),
  frontend: z.string(),
  backend: z.string(),
  tools: z.string(),
});


export const ProjectSchema = z.object({
    id: z.number(),
    url: z.string(),
    title: z.string(),
    displayImage: z.string(),
    description: z.string(),
    images: z.array(z.string()),
    imageDescription: z.array(z.string()),
    technologies: TechnologiesSchema,
    content: z.string(),
    features: z.array(z.string()),
});

export type ProjectType = z.infer<typeof ProjectSchema>;

export const projects = [
  {
    id: 1,
    title: 'BUDGETING APP',
    url: 'Not Hosted',
    displayImage: '/BudgetApp/overview.PNG',
    description: 'Track your monthly income and expenses.',
    images: [
      '/BudgetApp/signin.PNG', 
      '/BudgetApp/overview.PNG', 
      '/BudgetApp/transactions.PNG', 
      '/BudgetApp/import.PNG', 
      '/BudgetApp/accounts.PNG', 
      '/BudgetApp/categories.PNG',
    ],
    imageDescription:[
      "Sign-in page.",
      "Dashboard with insights on income and expenses for the past month.",
      "Transaction history page.",
      "Importing all transactions from a monthly CSV from your bank.",
      "Accounts page, (your checking, savings, etc. account)",
      "Categories page, (money spent on food, hobbies, clothing, etc.)"
    ],
    technologies: {
      languages: "TypeScript, JavaScript",
      frontend: "Next.js, React, Tailwind CSS, Shadcn UI, Zod, Recharts, TanStack Query, Zustand, Sonner",
      backend: "Drizzle ORM, PostgreSQL, Hono, Clerk, Neon.tech",
      tools: "Tools",
    },
    content: "An app that allows users to visualize and track all income and expenses on a monthly basis.",
    features: [
      "Import a monthly CVS report from your bank, or add single transactions.",
      "Allows the tracking of multiple accounts.",
      "Categorize your transactions to enable insights into spending habbits.",
      "Displays your monthly profit/savings to better understand your finances."
    ],
  },
  {
    id: 2,
    title: 'CEREBRAL SOLUTIONS',
    url: 'Not Hosted',
    displayImage: '/Cerebral-Solutions/landing.PNG',
    description: 'AI-Powered mental health tracker.',
    images: [
      '/Cerebral-Solutions/landing.PNG', 
      '/Cerebral-Solutions/dashboard.PNG',
      '/Cerebral-Solutions/login.PNG',
      '/Cerebral-Solutions/survey.PNG',
      '/Cerebral-Solutions/report.PNG',
      '/Cerebral-Solutions/all-reports.PNG',
      '/Cerebral-Solutions/call.PNG',
      '/Cerebral-Solutions/library.PNG'
    ],
    imageDescription:[
      "Landing page for Cerebral Solutions.",
      "Dashboard to keep track of your progress.",
      "Cerebral Solutions login page.",
      "AI powered, mental health survey.",
      "Mental health report from your survey.",
      "A look at all of your mental health reports.",
      "Connect virtually with a mental health specialist.",
      "Our resource library for mental health topics.",
    ],
    technologies: {
      languages: "TypeScript, JavaScript",
      frontend: "Next.js, React,Tailwind CSS, Shadcn UI, Zod, Recharts, Sonner",
      backend: "Prisma ORM, PostgreSQL, NextAuth, Neon.tech",
      tools: "Vercel, Concurrently, bcrypt",
    },
    content: "Scalable web platform offering AI-powered assessments and real-time video sessions." ,
    features: [
      "Set and track goals for your mental health journey.",
      "Book a virtual appointment with a mental health specialist.",
      "Take an AI-powered survey to gain insights into your mental health.",
      "Watch videos in our resource library to supliment your appointments."
    ],
  },
  {
    id: 3,
    title: 'MY WEBSITE!',
    url: 'www.merrickpilon.ca',
    displayImage: '/Website/website.PNG',
    description: "You're already here! Dont go down the rabbit hole...",
    images: [
      '/Website/website.PNG', 
      '/Website/light.PNG'
    ],
    imageDescription:[
      "My website, dark theme.", 
      "My website, light theme."
    ],
    technologies: {
      languages: "TypeScript, JavaScript",
      frontend: "Next.js, React, Tailwind CSS, Shadcn UI, Zod",
      backend: "No backend needed!",
      tools: "AWS Amplify, AWS Route 53",
    },
    content: "A website created by Merrick Pilon (that's me!) to showcase current, past, and furture projects!",
    features: [
      "Links to Github, LinkedIn, and my projects.",
      "Carousels to display my projects.",
      "Download my Resume!"
    ],
  },
  {
    id: 4,
    title: 'TICKER TRACKER(IN PROGRESS)',
    url: 'main.duhl94hce2rn6.amplifyapp.com/',
    displayImage: '/TickerTracker/search.PNG',
    description: "Real-time stock market tracker.",
    images: ['/TickerTracker/search.PNG'],
    imageDescription:[
      "Search page to find stocks."
    ],
    technologies: {
      languages: "TypeScript, JavaScript",
      frontend: "Next.js, React, Tailwind CSS, Shadcn UI, Recharts, Zod, TanStack Query, Zustand, Sonner",
      backend: "AWS DynamoDB, Hono, Clerk",
      tools: "AWS Ampify",
    },
    content: "A real-time stock market tracker.",
    features: [
      "Search through daily top stock gainers/losers, and most traded.",
      "Search for individual stocks to recieve real time data."
    ],
  },
];