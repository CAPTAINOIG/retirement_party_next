import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

const CountUpOnScroll = ({ start, end, duration }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const countUpRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);

  return (
    <div ref={countUpRef}>
      {hasStarted && <CountUp start={start} end={end} duration={duration} />}
    </div>
  );
};

export default CountUpOnScroll;
