import React from 'react'
import LiquidTextAnimation from './LiquidTextAnimation'

const WelcomeBanner: React.FC<any> = ({ children }) => {
  return (
    <>
      <LiquidTextAnimation />
      <p className="slogan">"Drinks in your way"</p>
      <style jsx>{`
        .slogan {
          font-size: 20px;
          color: var(--brand-color);
          padding: 0px 10px 20px;
          margin-top: 0;
          text-align: center;
          font-family: 'Luckiest Guy', cursive;
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
