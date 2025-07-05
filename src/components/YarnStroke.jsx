import React, { useEffect, useRef } from 'react';

const YarnStroke = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set up stroke dash properties
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    // Trigger animation
    path.style.animation = 'drawStroke 3s ease-out forwards';
  }, []);

  return (
    <svg
      width="521"
      height="142"
      viewBox="0 0 521 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute bottom-0 left-0 md:left-auto md:bottom-10 z-10"
    >
      <g filter="url(#filter0_d_64_41)">
        <path
          ref={pathRef}
          d="M370.683 3.79333C373.344 3.14078 377.927 2.50217 382.843 3.07166C387.761 3.64154 393.206 5.44782 397.295 9.8783C401.41 14.3376 403.88 21.1597 403.413 31.1957C402.948 41.199 399.566 54.5375 391.834 72.2982C380.225 98.9652 357.928 114.019 335.009 121.439C344.847 126.395 356.272 130.078 369.523 131.784C448.572 141.959 502.331 124.979 516.185 118.797L517.815 122.45C503.304 128.925 448.805 146.022 369.013 135.751C353.644 133.773 340.588 129.21 329.535 123.064C317.125 126.433 304.717 127.683 293.842 127.421C282.768 127.155 273.143 125.318 266.688 122.452L266.479 122.343C253.868 114.852 239.911 103.51 221.515 98.0297C203.367 92.6239 180.917 93.0117 151.856 109.701C92.0116 144.069 25.7255 124.014 0.0273438 109.714L1 107.966L1.97266 106.219C27.0159 120.154 91.7124 139.628 149.864 106.232C179.802 89.039 203.381 88.4536 222.657 94.1957C241.63 99.8473 256.463 111.72 268.417 118.84C274.222 121.392 283.229 123.164 293.938 123.422C303.336 123.648 313.938 122.706 324.661 120.175C303.912 107.074 290.983 88.4042 283.259 72.1722C279.143 63.5226 276.49 55.5347 274.911 49.3939C274.122 46.3242 273.597 43.7016 273.293 41.6752C273.141 40.6631 273.043 39.7831 272.995 39.0609C272.95 38.3815 272.94 37.7097 273.025 37.1801C273.487 34.329 274.52 25.8706 279.174 18.1517C283.916 10.2871 292.379 3.24952 307.338 3.24939C317.572 3.24939 325.489 11.5094 331.205 21.1615C335.584 28.5564 338.926 37.1855 341.228 44.7806C343.889 37.1994 348.244 28.9768 352.864 21.9681C355.929 17.3188 359.157 13.1317 362.159 9.95935C363.66 8.37409 365.131 7.01275 366.523 5.96912C367.889 4.94525 369.304 4.13136 370.683 3.79333Z" 
          stroke="#709814"
          strokeWidth="4"
          strokeLinejoin="bevel"
          shapeRendering="crispEdges"
          fill="none"
        />
      </g>
      <defs>
<filter id="filter0_d_64_41" x="0.0274658" y="0.850952" width="520.787" height="141.11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_64_41"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_64_41" result="shape"/>
</filter>
</defs>
    </svg>
  );
};

export default YarnStroke;