import InsightsSideNav from '@/components/core/infographics/InsightsSideNav';
import PropTypes from 'prop-types';
import React from 'react';
import AskBambiCard from '@/components/core/infographics/AskBambiCard';

const InsightsLayout = ({ children }) => {
  return (
    <div className="bg-slate-100 py-12 md:py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[280px_1fr_310px] gap-8 relative">
          <div>
            <div className="sticky top-32 grid gap-8">
              <InsightsSideNav />
            </div>
          </div>
          <div>{children}</div>
          <div className="hidden lg:block">
            <div className="sticky top-32 grid gap-8">
              <AskBambiCard />
            </div>
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
