import React from 'react'

type LiquidTextAnimationProps = {
  text: string
}

const LiquidTextAnimation: React.FC<LiquidTextAnimationProps> = ({ text }) => {
  return (
    <>
      <div className="liquid-text-animation-container">
        <h1>{text}</h1>
        <h1>{text}</h1>
      </div>

      <style jsx>{`
        .liquid-text-animation-container {
          position: relative;
          height: 70px;
          padding: 30px 10px;

          transform: translateY(-50px);
          opacity: 0;
          animation: .4s slideUp .5s ease-out forwards;
        }
        h1 {
          position: absolute;
          color: #fff;
          transform: translate(-50%, -50%);
          font-size: 5em;
          padding: 0;
        }
        h1:nth-child(1) {
          color: transparent;
          -webkit-text-stroke: 2px var(--brand-color);
        }
        h1:nth-child(2) {
          color: var(--brand-color);
          animation: animate 4s ease-in-out infinite;
        }
        @keyframes slideUp {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
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
