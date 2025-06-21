
import { z } from 'zod';

export const ProjectSchema = z.object({
    id: z.number(),
    url: z.string(),
    title: z.string(),
    displayImage: z.string(),
    description: z.string(),
    images: z.array(z.string()),
});

export type ProjectType = z.infer<typeof ProjectSchema>;

export const projects = [
  {
    id: 1,
    title: 'BUDGETING APP',
    url: '',
    displayImage: '/BudgetApp/overview.PNG',
    description: 'Track your monthly income and expenses.',
    images: [
      '/BudgetApp/signin.PNG', 
      '/BudgetApp/overview.PNG', 
      '/BudgetApp/transactions.PNG', 
      '/BudgetApp/import.PNG', 
      '/BudgetApp/accounts.PNG', 
      '/BudgetApp/categories.PNG',
    ]
  },
  {
    id: 2,
    title: 'CEREBRAL SOLUTIONS',
    url: '',
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
    ]
  },
  {
    id: 3,
    title: 'MY WEBSITE!',
    url: 'www.merrickpilon.ca',
    displayImage: '/Website/website.PNG',
    description: "You're already here! Dont go down the rabbit hole...",
    images: ['/Website/website.PNG']
  },
  {
    id: 4,
    title: 'TICKER TRACKER (IN PROGRESS)',
    url: '',
    displayImage: '/TickerTracker/search.PNG',
    description: "Real-time stock market tracker.",
    images: ['/TickerTracker/search.PNG']
  },
];