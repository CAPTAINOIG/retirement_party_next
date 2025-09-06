import { motion } from 'motion/react';
import {
  TbBrandSlack,
  TbChartBar,
  TbCoin,
  TbCreditCard,
  TbShoppingCart,
  TbBuildingBank,
  TbChecklist,
  TbNotes,
  TbTrendingUp,
} from 'react-icons/tb';
import { FaChartLine } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const unstructuredSources = [
  {
    icon: <TbChartBar size={32} />,
    title: 'NBS',
    category: 'Government Data',
    description:
      "Access comprehensive economic statistics and demographic data from Nigeria's National Bureau of Statistics.",
    color: 'from-green-600 to-green-700',
  },
  {
    icon: <FaChartLine size={32} />,
    title: 'NGX',
    category: 'Stock Exchange',
    description: 'Real-time market data, stock prices, and trading insights from the Nigerian Exchange Group.',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: <TbShoppingCart size={32} />,
    title: 'Jumia',
    category: 'E-commerce',
    description: "Analyze e-commerce trends, product data, and consumer behavior from Africa's leading marketplace.",
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: <TbCreditCard size={32} />,
    title: 'Paystack',
    category: 'Fintech',
    description: "Payment processing data and transaction insights from Nigeria's premier payment gateway.",
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: <TbTrendingUp size={32} />,
    title: 'Flutterwave',
    category: 'Fintech',
    description: 'Cross-border payment data and financial transaction analytics across African markets.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: <TbBuildingBank size={32} />,
    title: 'Moniepoint',
    category: 'Banking',
    description: "Digital banking insights and financial services data from Nigeria's fastest-growing fintech.",
    color: 'from-purple-600 to-purple-700',
  },
  {
    icon: <TbChecklist size={32} />,
    title: 'Asana',
    category: 'Project Management',
    description: 'Team productivity metrics and project management data for business intelligence insights.',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: <TbNotes size={32} />,
    title: 'Notion',
    category: 'Workspace',
    description: 'Collaborative workspace data and knowledge management insights for organizational analysis.',
    color: 'from-gray-600 to-gray-700',
  },
  {
    icon: <TbBrandSlack size={32} />,
    title: 'Slack',
    category: 'Communication',
    description: 'Team communication patterns and collaboration insights from workplace messaging data.',
    color: 'from-purple-500 to-pink-500',
  },
];

const SourceCard = ({ source, index, isActive, isParentInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isActive && isParentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.3, delay: index * 0.05 + 0.1, ease: 'easeOut' }}
    className="p-4"
  >
    <div className={`inline-flex rounded-full bg-gradient-to-r p-2 ${source.color} mb-4 text-white`}>{source.icon}</div>
    <h4 className="mb-1 text-lg leading-tight font-bold">{source.title}</h4>
    <p className="text-default-700 text-md line-clamp-2 leading-tight">{source.description}</p>
  </motion.div>
);

const UnstructuredDataIllustration = ({ isActive, isParentInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isActive && isParentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-default-100 dark:bg-default-50 overflow-hidden rounded-3xl p-8"
    >
      {/* Desktop Grid */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {unstructuredSources.map((source, index) => (
            <SourceCard
              key={source.title}
              source={source}
              index={index}
              isActive={isActive}
              isParentInView={isParentInView}
            />
          ))}
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="block lg:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          className="pb-12"
        >
          {unstructuredSources.map((source, index) => (
            <SwiperSlide key={source.title}>
              <SourceCard source={source} index={index} isActive={isActive} isParentInView={isParentInView} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default UnstructuredDataIllustration;
