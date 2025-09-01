import { motion } from 'motion/react';
import {
  TbBrandEvernote,
  TbBrandGmail,
  TbBrandInstagram,
  TbBrandSlack,
  TbPhoto,
  TbVideo,
  TbWorld,
} from 'react-icons/tb';
import { FaFilePdf, FaFileWord } from 'react-icons/fa6';

const unstructuredSources = [
  {
    icon: <TbBrandGmail size={32} />,
    title: 'Gmail',
    category: 'Email',
    description: 'Analyze email data, attachments, and communication patterns from your Gmail account.',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: <FaFilePdf size={32} />,
    title: 'PDF Documents',
    category: 'Document',
    description: 'Extract and analyze text, tables, and images from PDF documents automatically.',
    color: 'from-red-600 to-red-700',
  },
  {
    icon: <FaFileWord size={32} />,
    title: 'Word Documents',
    category: 'Document',
    description: 'Process Microsoft Word documents and extract structured insights from text content.',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: <TbPhoto size={32} />,
    title: 'Images',
    category: 'Media',
    description: 'Analyze images using computer vision to extract text, objects, and patterns.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <TbVideo size={32} />,
    title: 'Video Content',
    category: 'Media',
    description: 'Process video files to extract audio transcripts and visual content analysis.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: <TbWorld size={32} />,
    title: 'Web Content',
    category: 'Web',
    description: 'Scrape and analyze web pages, social media, and online content sources.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: <TbBrandEvernote size={32} />,
    title: 'Evernote',
    category: 'Note Taking',
    description: 'Import and analyze notes, documents, and attachments from your Evernote account.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: <TbBrandSlack size={32} />,
    title: 'Slack',
    category: 'Communication',
    description: 'Analyze team conversations, files, and communication patterns from Slack channels.',
    color: 'from-purple-600 to-pink-600',
  },
  {
    icon: <TbBrandInstagram size={32} />,
    title: 'Instagram',
    category: 'Social Media',
    description: 'Extract insights from Instagram posts, stories, and engagement data for analysis.',
    color: 'from-pink-500 to-orange-500',
  },
];

const UnstructuredDataIllustration = ({ isActive, isParentInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isActive && isParentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-default-100 dark:bg-default-50 rounded-3xl p-8"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {unstructuredSources.map((source, index) => (
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
            <p className="text-default-700 text-md line-clamp-2 leading-relaxed">{source.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UnstructuredDataIllustration;
