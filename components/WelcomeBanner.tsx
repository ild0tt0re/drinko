import React from 'react'
import LiquidTextAnimation from './LiquidTextAnimation'

const WelcomeBanner: React.FC<any> = ({ children }) => {
  return (
    <>
      <LiquidTextAnimation />
      <style jsx>{`
        .welcome-banner-container {
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
