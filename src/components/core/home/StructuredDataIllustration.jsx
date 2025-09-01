import { motion } from 'motion/react';
import { TbBrandMongodb, TbBrandMysql, TbCloud, TbDatabase } from 'react-icons/tb';
import { SiFacebook, SiHubspot, SiTiktok } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

const structuredSources = [
  {
    icon: <TbDatabase size={32} />,
    title: 'PostgreSQL',
    category: 'SQL Database',
    description: 'Connect to PostgreSQL databases with full query support and real-time sync capabilities.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <TbBrandMongodb size={32} />,
    title: 'MongoDB',
    category: 'NoSQL Database',
    description: 'Integrate with MongoDB collections and perform complex aggregations with ease.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: <TbBrandMysql size={32} />,
    title: 'MySQL',
    category: 'SQL Database',
    description: 'Full MySQL support with optimized queries and connection pooling for performance.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: <TbCloud size={32} />,
    title: 'Snowflake',
    category: 'Data Warehouse',
    description: 'Connect to Snowflake data warehouse for large-scale analytics and reporting.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: <SiFacebook size={32} />,
    title: 'Facebook',
    category: 'Social Media',
    description: 'Connect to Facebook APIs for social media analytics and audience insights.',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: <SiTiktok size={32} />,
    title: 'TikTok',
    category: 'Social Media',
    description: 'Access TikTok analytics and content performance data for social media intelligence.',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: <SiHubspot size={32} />,
    title: 'HubSpot',
    category: 'CRM',
    description: 'Integrate with HubSpot CRM for customer data, sales analytics, and marketing insights.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: <TbDatabase size={32} />,
    title: 'GTB',
    category: 'Database',
    description: 'Connect to GTB database systems for comprehensive data analysis and reporting.',
    color: 'from-purple-600 to-indigo-600',
  },
  {
    icon: <MdEmail size={32} />,
    title: 'Gmail',
    category: 'Email',
    description: 'Access and analyze Gmail data for communication insights and email analytics.',
    color: 'from-red-500 to-red-600',
  },
];

const StructuredDataIllustration = ({ isActive, isParentInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isActive && isParentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-default-100 dark:bg-default-50 rounded-3xl p-8"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {structuredSources.map((source, index) => (
          <motion.div
            key={source.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive && isParentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: index * 0.05 + 0.1, ease: 'easeOut' }}
            className="p-4"
          >
            <div className={`inline-flex rounded-full bg-gradient-to-r p-2 ${source.color} mb-4 text-white`}>
              {source.icon}
            </div>
            <h4 className="mb-1 text-lg leading-tight font-bold">{source.title}</h4>
            <p className="text-default-700 text-md line-clamp-2 leading-tight">{source.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StructuredDataIllustration;
