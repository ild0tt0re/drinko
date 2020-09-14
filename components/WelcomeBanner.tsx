import React from 'react'
import LiquidTextAnimation from './LiquidTextAnimation'

type WelcomeBannerProps = {
  text: string
  slogan: string
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ text, slogan }) => {
  return (
    <>
      <LiquidTextAnimation text={text} />
      <p className="slogan">{slogan}</p>
      <style jsx>{`
        .slogan {
          font-size: 20px;
          color: var(--brand-color);
          padding: 0px 10px 20px;
          margin-top: 0;
          text-align: center;
          font-family: 'Luckiest Guy', cursive;

          transform: translateY(50px);
          opacity: 0;
          animation: 0.5s slideUp 0.5s ease-out forwards;
        }
        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
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

export default WelcomeBanner
