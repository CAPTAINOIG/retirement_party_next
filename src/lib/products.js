import { IconDatabase, IconFileText, IconMessageChatbot, IconUserCheck } from "@tabler/icons-react";
import React from "react";

const products = [
  {
    name: 'Sensiii',
    description: `An advanced embedded AI assistant`,
    backgroundColor: 'bg-blue-500',
    textColor: 'text-blue-500',
    icon: IconMessageChatbot,
    homeLink: '/sensii',
    dashboardLink: '/dashboard/sensii',
  },
  {
    name: 'BeTrue',
    description: `A customer eligibility platform for businesses`,
    backgroundColor: 'bg-red-500',
    textColor: 'text-red-500',
    icon: IconUserCheck,
    homeLink: '/betrue',
    dashboardLink: '/dashboard/betrue',
  },
  {
    name: 'Statement',
    description: `Analyze any bank statement in seconds`,
    backgroundColor: 'bg-teal-500',
    textColor: 'text-teal-500',
    icon: IconFileText,
    homeLink: '/statement',
    dashboardLink: '/dashboard/statement',
  },
  {
    name: 'MineMe',
    description: `A bespoke customer data analyzed for businesses`,
    backgroundColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    icon: IconDatabase,
    homeLink: '/mineme',
    dashboardLink: '/dashboard/mineme',
  }
];

export default products
