import { useRouter } from 'next/router'
import { Button } from '../components/Button'
import FrameLayout from '../components/layout/FrameLayout'
import WelcomeBanner from '../components/WelcomeBanner'

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/ingredients')
  }

  return (
    <>
      <section className="home-content">
        <WelcomeBanner />
        <Button label="See Menu" size="large" onClick={handleClick} />
      </section>
      <style jsx>{`
        .home-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
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

Home.Layout = FrameLayout
