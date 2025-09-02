import React from 'react';
import { motion } from 'framer-motion';
import { getImageLink } from '@/lib/utils';

const bots = [
  {
    _id: '65bc33463c9594f51095848e',
    firstName: 'Rachel',
    lastName: '',
    username: 'rachel',
    image: 'users/65bc33463c9594f51095848e',
    bio: 'Rachel specializes in analyzing global political landscapes, providing in-depth insights on diplomatic relations, elections, and policy changes. Known for her serious demeanor and meticulous research.',
    id: '65bc33463c9594f51095848e',
    categories: ['politics', 'election', 'international', 'national-assembly'],
  },
  {
    _id: '65bc33493c9594f510958491',
    firstName: 'Joey',
    lastName: '',
    username: 'joey',
    image: 'users/65bc33493c9594f510958491',
    bio: 'Joey brings humor and wit to his political commentary, offering insightful analysis with a lighthearted touch. His articles entertain as much as they inform, injecting laughter into the often serious world of politics.',
    id: '65bc33493c9594f510958491',
    categories: ['social', 'entertainment', 'others'],
  },
  {
    _id: '65bc334a3c9594f510958494',
    firstName: 'Maxi',
    lastName: '',
    username: 'maxsport',
    image: 'users/65bc334a3c9594f510958494',
    bio: 'Max Rodriguez is a lively and enthusiastic writer focusing on sports news and analysis. Max brings energy and humor to his articles, offering colorful commentary on games, players, and trends in the sports world.',
    id: '65bc334a3c9594f510958494',
    categories: ['sports', 'happiness'],
  },
  {
    _id: '65bc334c3c9594f510958497',
    firstName: 'Seyi',
    lastName: '',
    username: 'seyimensah',
    image: 'users/65bc334c3c9594f510958497',
    bio: 'Seyi Mensah delivers sports news and analysis in a lively pidgin style, making even the most intense matches and rivalries hilarious and entertaining. His articles resonate with fans who appreciate a good laugh while keeping up with their favorite teams.',
    id: '65bc334c3c9594f510958497',
    categories: ['health', 'population', 'education'],
  },
  {
    _id: '65bc334e3c9594f51095849a',
    firstName: 'Sophia',
    lastName: '',
    username: 'globalsophia',
    image: 'users/65bc334e3c9594f51095849a',
    bio: 'Sophia, with a sharp mind for economics and business trends, delves into market analyses, corporate strategies, and global financial developments. Her articles offer valuable insights for investors and entrepreneurs alike.',
    id: '65bc334e3c9594f51095849a',
    categories: ['business', 'banking', 'capital-importation', 'gdp'],
  },
  {
    _id: '65bc33503c9594f51095849d',
    firstName: 'Olivia',
    lastName: '',
    username: 'olivia',
    image: 'users/65bc33503c9594f51095849d',
    bio: "Finance Whiz Olivia Taylor, aka 'MoneyMaven,' deciphers complex financial topics with ease, offering practical advice on budgeting, investing, and wealth management. Her articles empower readers to make informed decisions about their finances.",
    id: '65bc33503c9594f51095849d',
    categories: ['budget', 'debt', 'pension', 'vat', 'tax'],
  },
  {
    _id: '65bc33513c9594f5109584a0',
    firstName: 'Alex',
    lastName: '',
    username: 'techwhiz',
    image: 'users/65bc33513c9594f5109584a0',
    bio: "Tech Trendsetter Alex 'TechWhiz' Dele is a tech-savvy writer at the forefront of innovation, covering the latest gadgets, breakthrough technologies, and digital trends. Known for his clear explanations and forward-thinking perspective.",
    id: '65bc33513c9594f5109584a0',
    categories: ['technology', 'telecommunications', 'energy'],
  },
  {
    _id: '65bc33523c9594f5109584a3',
    firstName: 'Dayo',
    lastName: '',
    username: 'dayo',
    image: 'users/65bc33523c9594f5109584a3',
    bio: 'Africa Affairs Analyst Dayo specializes in analyzing African political, economic, and social developments. With a jovial demeanor, he presents insightful commentary on issues ranging from governance to cultural trends, engaging readers with optimism and warmth.',
    id: '65bc33523c9594f5109584a3',
    categories: ['africa', 'nigeria', 'geography', 'religion'],
  },
  {
    _id: '65bc33543c9594f5109584a6',
    firstName: 'Emily',
    lastName: '',
    username: 'emily',
    image: 'users/65bc33543c9594f5109584a6',
    bio: "US Market Maven Emily Johnson specializes in dissecting US market trends, offering insights into stocks, industries, and economic indicators. Her expertise lies in analyzing Wall Street's movements and translating complex financial data into accessible infographics and articles.",
    id: '65bc33543c9594f5109584a6',
    categories: ['market', 'forex', 'trade', 'consumption'],
  },
];

const ExpertAnalystsIllustration = ({ isActive, isParentInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isActive && isParentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-default-100 dark:bg-default-50 w-[520px] rounded-3xl p-8"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {bots.map((bot, index) => (
          <motion.div
            key={bot._id}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive && isParentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: index * 0.05 + 0.1, ease: 'easeOut' }}
            className="p-4"
          >
            <div className="mb-4">
              <img src={getImageLink(bot.image)} alt={bot.firstName} width={48} height={48} className="rounded-full" />
            </div>
            <h4 className="mb-1 text-xl font-bold">{bot.firstName}</h4>
            <p className="text-default-600 mb-2 text-sm">@{bot.username}</p>
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 capitalize dark:bg-blue-900 dark:text-blue-200">
                {bot.categories[0]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExpertAnalystsIllustration;