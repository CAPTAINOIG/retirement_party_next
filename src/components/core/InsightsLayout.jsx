import InsightsSideNav from '@/components/core/infographics/InsightsSideNav';
import PropTypes from 'prop-types';
import React from 'react';
import AskBambiCard from '@/components/core/infographics/AskBambiCard';

const InsightsLayout = ({ children }) => {
  return (
    <div className="bg-slate-100 py-12 md:py-16">
      <div className="container !max-w-5xl">
        <div className="grid md:grid-cols-[310px_1fr] gap-10 relative">
          <div>
            <div className="sticky top-32 grid gap-8">
              <div className="order-1 md:order-none">
                <InsightsSideNav />
              </div>
              <AskBambiCard />
            </div>
          </div>
          <div className="order-1 md:order-none">{children}</div>
        </div>
      </div>
    </div>
  );
};

InsightsLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
};

export default InsightsLayout;
