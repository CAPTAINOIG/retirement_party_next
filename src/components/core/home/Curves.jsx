import React from "react";

const Curves = () => {
  return (
    <>
      <svg className="absolute bottom-0">
        <defs>
          <clipPath id="wave-hero" clipPathUnits="objectBoundingBox">
            <path
              className="st0"
              d="M1,1.24H0V0.23c0.01-0.01,0.01-0.01,0.02-0.02c0.07-0.06,0.12-0.1,0.19-0.11c0.15-0.03,0.21,0.12,0.36,0.1
  C0.67,0.2,0.69,0.12,0.8,0.04C0.86,0.01,0.93,0,1,0V1.24z"
            />
          </clipPath>
          <clipPath id="wave-high-left" clipPathUnits="objectBoundingBox">
            <path
              className="st0"
              d="M0,1h1V0.15C0.99,0.15,0.99,0.14,0.98,0.14C0.91,0.09,0.86,0.07,0.79,0.06C0.64,0.04,0.58,0.14,0.44,0.13
  C0.33,0.12,0.31,0.1,0.2,0.04C0.14,0.01,0.07,0,0,0V1z"
            />
          </clipPath>
          <clipPath id="wave-high-right" clipPathUnits="objectBoundingBox">
            <path
              className="st0"
              d="M1,1.24H0V0.23c0.01-0.01,0.01-0.01,0.02-0.02c0.07-0.06,0.12-0.1,0.19-0.11c0.15-0.03,0.21,0.12,0.36,0.1
  C0.67,0.2,0.69,0.12,0.8,0.04C0.86,0.01,0.93,0,1,0V1.24z"
            />
          </clipPath>
          <clipPath id="wave-high-left-short" clipPathUnits="objectBoundingBox">
            <path
              className="st0"
              d="M0,1h1V0.15C0.99,0.15,0.99,0.14,0.98,0.14C0.91,0.09,0.86,0.07,0.79,0.06C0.64,0.04,0.58,0.14,0.44,0.13
  C0.33,0.12,0.31,0.1,0.2,0.04C0.14,0.01,0.07,0,0,0V1z"
            />
          </clipPath>
          <clipPath id="wave-higher-left" clipPathUnits="objectBoundingBox">
            <path
              className="st0"
              d="M1.1,1H0V0c0.1,0.1,0.2,0.1,0.3,0.1C0.5,0.1,0.5,0,0.6,0c0.2,0,0.2,0.2,0.4,0.3h0V1z"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Curves;
