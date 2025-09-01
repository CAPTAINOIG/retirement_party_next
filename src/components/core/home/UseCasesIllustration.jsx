import { motion } from 'motion/react';
import { TbCoin, TbTrendingUp, TbUsers, TbCreditCard, TbBuilding, TbChartBar } from 'react-icons/tb';

const useCases = [
  {
    icon: <TbCoin size={32} />,
    title: 'Finance',
    category: 'Financial Analytics',
    description: 'Track financial performance, budgets, and forecasting with real-time insights.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: <TbTrendingUp size={32} />,
    title: 'Markets',
    category: 'Market Intelligence',
    description: 'Analyze market trends, competitor data, and customer behavior patterns.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <TbUsers size={32} />,
    title: 'Human Resources',
    category: 'HR Analytics',
    description: 'Monitor employee performance, recruitment metrics, and workforce analytics.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <TbCreditCard size={32} />,
    title: 'Payments',
    category: 'Payment Analytics',
    description: 'Track payment flows, transaction patterns, and revenue optimization.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: <TbBuilding size={32} />,
    title: 'Operations',
    category: 'Operational Intelligence',
    description: 'Optimize business operations, supply chain, and process efficiency.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: <TbChartBar size={32} />,
    title: 'Sales & Marketing',
    category: 'Sales Intelligence',
    description: 'Analyze sales performance, marketing ROI, and customer acquisition metrics.',
    color: 'from-pink-500 to-pink-600',
  },
];

const UseCasesIllustration = ({ isActive, isParentInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isActive && isParentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-default-100 dark:bg-default-50 rounded-3xl p-8"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive && isParentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: index * 0.05 + 0.1, ease: 'easeOut' }}
            className="p-4"
          >
            <div className={`inline-flex rounded-full bg-gradient-to-r p-2 ${useCase.color} mb-4 text-white`}>
              {useCase.icon}
            </div>
            <h4 className="mb-1 text-xl font-bold">{useCase.title}</h4>
            {/* <p className="text-default-700 line-clamp-2 text-sm leading-relaxed">{useCase.description}</p> */}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UseCasesIllustration;