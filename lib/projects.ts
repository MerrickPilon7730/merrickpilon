
import { z } from 'zod';

export const ProjectSchema = z.object({
    id: z.number(),
    title: z.string(),
    displayImage: z.string(),
    description: z.string(),
    images: z.array(z.string()),
});

export type Project = z.infer<typeof ProjectSchema>;

export const projects = [
  {
    id: 1,
    title: 'Budgeting App',
    displayImage: '/BudgetApp/overview.PNG',
    description: 'Track income and expenses with graphs.',
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
    title: 'Cerebral Solutions',
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
    title: 'Finance App',
    displayImage: '/merrick.jpg',
    description: 'Monitor stocks, crypto, and investments.',
    images: []
  },
  {
    id: 4,
    title: 'Password Manager',
    displayImage: '/merrick.jpg',
    description: 'Real-time crypto data & portfolio summary.',
    images: []
  },
  {
    id: 5,
    title: 'Task Manager',
    displayImage: '/merrick.jpg',
    description: 'Organize tasks with a beautiful UI.',
    images: [],
  },
];