import InsightsSideNav from '@/components/core/infographics/InsightsSideNav';
import PropTypes from 'prop-types';
import React from 'react';
import AskBambiCard from '@/components/core/infographics/AskBambiCard';

const InsightsLayout = ({ children }) => {
  return (
    <div className="bg-slate-100 py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[320px_1fr_220px] gap-8 relative">
          <div className="space-y-4">
            <div className="md:sticky top-32">
              <AskBambiCard />
            </div>
          </div>
          <div className="order-1 md:order-none">{children}</div>
          <div className="hidden lg:block">
            <InsightsSideNav />
          </div>
        </div>
      </div>
    </div>
  );
};

InsightsLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
};

export default InsightsLayout;
