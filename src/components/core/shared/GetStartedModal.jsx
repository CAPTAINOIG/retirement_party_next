import CustomModal from '@/components/global/CustomModal';
import { Card } from '@heroui/react';
import { motion } from 'motion/react';
import CountryFlag from '@/components/global/CountryFlag';
import { IMMORTAL_URL, OPINIONS_URL, PREDICT_URL } from '@/lib/constants';
import { HiArrowTrendingUp, HiChartPie, HiGlobeAlt, HiNewspaper } from 'react-icons/hi2';

const products = [
  {
    name: 'Business intelligence',
    title: `Uncover insights from scattered data`,
    body: `Our AI infrastructure seamlessly aggregates and analyzes data across Africa's diverse markets, transforming fragmented information into actionable business intelligence.`,
    image: '/images/bi.png',
    link: IMMORTAL_URL,
    icon: HiChartPie,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Predictive intelligence',
    title: `Forecast Africa's economic trends`,
    body: `Harness advanced predictive models to anticipate market movements and economic shifts across the continent, empowering strategic decision-making.`,
    image: '/images/pi.png',
    link: PREDICT_URL,
    icon: HiArrowTrendingUp,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Market intelligence',
    title: `Coming soon - Join the waitlist`,
    body: `Be the first to access comprehensive market analysis powered by AI. Join our waitlist to get early access to tools that identify opportunities, assess risks, and inform investment decisions across emerging African economies.`,
    image: '/images/mi.png',
    link: null,
    icon: HiGlobeAlt,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Opinions',
    title: `AI-curated insights at your fingertips`,
    body: `Stay ahead with intelligent news summaries, data visualizations, and market reports that distill complex information into clear, actionable insights for better decision-making.`,
    image: '/images/opinions.png',
    link: OPINIONS_URL,
    icon: HiNewspaper,
    gradient: 'from-orange-500 to-red-500',
  },
];

const GetStartedModal = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <CustomModal isOpen={isOpen} onClose={handleClose} width={1200}>
      <Card
        className="grid items-center gap-10 rounded-3xl px-10 py-12 lg:grid-cols-[2fr_1.8fr] lg:px-20 lg:py-20"
        shadow="none"
      >
        <div>
          <h1 className="bg-linear-to-r from-green-600 to-blue-800 bg-clip-text text-[3.4rem] !leading-none font-bold tracking-tight text-transparent md:text-[5rem]">
            AI Powered Data Platforms for 5x scale
          </h1>
          <p className="mt-4 text-lg opacity-80 md:max-w-[70%] md:text-xl">
            Join thousands of forward-thinking individuals and organizations creating the future with data intelligence.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90 }}
            viewport={{ amount: 'some', margin: '10%' }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {[
              { code: 'NG', name: 'Nigeria' },
              { code: 'EG', name: 'Egypt' },
              { code: 'ZA', name: 'South Africa' },
            ].map((country) => {
              return (
                <div
                  key={country.code}
                  className="dark:bg-default-100 dark:hover:bg-default-200 flex cursor-pointer items-center space-x-3 rounded-full bg-slate-200 px-3 py-2 pr-6 transition-all duration-300 hover:bg-slate-300"
                >
                  <CountryFlag code={country.code} className="h-12 w-12" />
                  <p>{country.name}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 py-6">
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: products.indexOf(product) * 0.1 }}
                className="cursor-pointer"
              >
                {product.link ? (
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <Card
                      className="bg-default-100 hover:bg-default-200/50 h-full rounded-3xl px-8 py-8 transition-all duration-300"
                      shadow="none"
                    >
                      <div className="flex h-full flex-col">
                        <div
                          className={`h-12 w-12 rounded-full bg-gradient-to-r ${product.gradient} mb-4 flex items-center justify-center`}
                        >
                          <IconComponent size="30" className="text-white" />
                        </div>
                        <h3 className="text-foreground mb-2 text-lg leading-tight font-semibold capitalize">
                          {product.name}
                        </h3>
                        <p className="text-foreground/70 text-md flex-1 leading-tight">{product.title}</p>
                      </div>
                    </Card>
                  </a>
                ) : (
                  <Card
                    className="bg-default-100 hover:bg-default-200/50 h-full rounded-3xl px-8 py-8 opacity-60 transition-all duration-300"
                    shadow="none"
                  >
                    <div className="flex h-full flex-col">
                      <div
                        className={`h-12 w-12 rounded-full bg-gradient-to-r ${product.gradient} mb-4 flex items-center justify-center`}
                      >
                        <IconComponent size="30" className="text-white" />
                      </div>
                      <h3 className="text-foreground mb-2 text-lg leading-tight font-semibold capitalize">
                        {product.name}
                      </h3>
                      <p className="text-foreground/70 text-md flex-1 leading-tight">{product.title}</p>
                    </div>
                  </Card>
                )}
              </motion.div>
            );
          })}
        </div>
      </Card>
    </CustomModal>
  );
};

export default GetStartedModal;
