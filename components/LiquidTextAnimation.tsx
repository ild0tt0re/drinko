import React from 'react'

const LiquidTextAnimation: React.FC<any> = ({ children }) => {
  return (
    <>
      <div className="liquid-text-animation-container">
        <h1>DRINKO</h1>
        <h1>DRINKO</h1>
      </div>

      <style jsx>{`
        .liquid-text-animation-container {
          position: relative;
          height: 60px;
          padding: 30px 10px;
        }
        .liquid-text-animation-container h1 {
          
          position: absolute;
          color: #fff;
          transform: translate(-50%, -50%);
          font-size: 3em;
        }
        .liquid-text-animation-container h1:nth-child(1) {
          color: transparent;
          -webkit-text-stroke: 2px #03a9f4;
        }
        .liquid-text-animation-container h1:nth-child(2) {
          color: #03a9f4;
          animation: animate 4s ease-in-out infinite;
        }

        @keyframes animate {
          0%,
          100% {
            clip-path: polygon(
              0% 44%,
              11% 41%,
              24% 43%,
              38% 49%,
              53% 56%,
              67% 61%,
              82% 59%,
              100% 54%,
              100% 100%,
              0% 100%
            );
          }
          50% {
            clip-path: polygon(
              0 63%,
              11% 69%,
              29% 69%,
              47% 64%,
              60% 54%,
              75% 49%,
              86% 48%,
              100% 50%,
              100% 100%,
              0% 100%
            );
          }
        }
        /* Medium devices (tablets)*/
        @media (min-width: 768px) {
        }
        /* Large devices (desktops)*/
        @media (min-width: 992px) {
        }
        /* Extra large devices (large desktops) */
        @media (min-width: 1200px) {
        }
      `}</style>
    </>
  )
}

export default LiquidTextAnimation