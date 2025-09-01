import React from 'react';
import { motion } from 'framer-motion';
import { RiAppleLine, RiAmazonLine, RiGoogleLine, RiMicrosoftLine } from 'react-icons/ri';
import { SiTesla } from 'react-icons/si';
import { TbBuildingBank } from 'react-icons/tb';

const stocks = [
  {
    icon: <TbBuildingBank size={32} />,
    name: 'Dangote Cement',
    symbol: 'DANGCEM',
    price: '₦485.50',
    change: '+3.45%',
    market: 'NGX',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: <RiAppleLine size={32} />,
    name: 'Apple Inc.',
    symbol: 'AAPL',
    price: '$170.58',
    change: '-0.77%',
    market: 'NASDAQ',
    color: 'from-gray-500 to-gray-600',
  },
  {
    icon: <RiAmazonLine size={32} />,
    name: 'Amazon',
    symbol: 'AMZN',
    price: '$124.48',
    change: '+1.22%',
    market: 'NASDAQ',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: <RiGoogleLine size={32} />,
    name: 'Alphabet Inc.',
    symbol: 'GOOGL',
    price: '$104.48',
    change: '+2.22%',
    market: 'NASDAQ',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <RiMicrosoftLine size={32} />,
    name: 'Microsoft',
    symbol: 'MSFT',
    price: '$378.85',
    change: '+1.45%',
    market: 'NASDAQ',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    icon: <SiTesla size={32} />,
    name: 'Tesla Inc.',
    symbol: 'TSLA',
    price: '$248.42',
    change: '-2.15%',
    market: 'NASDAQ',
    color: 'from-red-500 to-red-600',
  },
];

const PopularStocksIllustration = ({ isActive, isParentInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isActive && isParentInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="bg-default-100 dark:bg-default-50 rounded-3xl p-8"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {stocks.map((stock, index) => (
          <motion.div
            key={stock.symbol}
            initial={{ opacity: 0, y: 20 }}
            animate={isActive && isParentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: index * 0.05 + 0.1, ease: 'easeOut' }}
            className="p-4"
          >
            <div className={`inline-flex rounded-full bg-gradient-to-r p-2 ${stock.color} mb-4 text-white`}>
              {stock.icon}
            </div>
            <h4 className="mb-1 text-xl font-bold">{stock.name}</h4>
            <p className="text-default-600 mb-2 text-sm">
              {stock.symbol} • {stock.market}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">{stock.price}</span>
              <span
                className={`text-sm font-medium ${stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}
              >
                {stock.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default PopularStocksIllustration;
