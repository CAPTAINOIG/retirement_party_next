import { motion } from 'motion/react';
import { TbBrandGmail, TbBrandMongodb, TbBrandMysql, TbCloud, TbDatabase } from 'react-icons/tb';
import { FaFileExcel, FaGoogleDrive } from 'react-icons/fa6';
import { GrOnedrive } from 'react-icons/gr';

const sources = [
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
    icon: <FaGoogleDrive size={32} />,
    title: 'Google Drive',
    category: 'Storage provider',
    description: 'Access files and documents stored in Google Drive with seamless integration and real-time sync.',
    color: 'from-blue-400 to-green-500',
  },
  {
    icon: <FaFileExcel size={32} />,
    title: 'Excel',
    category: 'File',
    description: 'Import and analyze data from Excel spreadsheets with automatic schema detection and updates.',
    color: 'from-green-600 to-green-700',
  },
  {
    icon: <GrOnedrive size={32} />,
    title: 'OneDrive',
    category: 'Storage provider',
    description: 'Connect to Microsoft OneDrive for secure access to your cloud-stored files and documents.',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: <TbBrandGmail size={32} />,
    title: 'Gmail',
    category: 'Email',
    description: 'Analyze email data, attachments, and communication patterns from your Gmail account.',
    color: 'from-red-500 to-red-600',
  },
];

const BiIllustration = ({ isActive, isParentInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isActive && isParentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-default-100 dark:bg-default-50 rounded-3xl p-8 overflow-hidden"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {sources.map((source, index) => (
          <motion.div
            key={source.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive && isParentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
            className="p-4"
          >
            <div className={`inline-flex rounded-full bg-gradient-to-r p-2 ${source.color} mb-4 text-white`}>
              {source.icon}
            </div>
            <h4 className={`mb-1 text-xl font-bold`}>{source.title}</h4>
            <p className="text-default-700 line-clamp-2 text-sm leading-relaxed">{source.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BiIllustration;
