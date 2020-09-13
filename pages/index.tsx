import { useRouter } from 'next/router'
import HelloWorld from '../components'
import { Button } from '../components/Button'

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push('/ingredients')
  }

  return (
    <div>
      <h1>DRINKO</h1>
      <p>Drink in your way</p>
      <HelloWorld />
      <Button label="See Menu" onClick={handleClick}/>
    </div>
  )
}
