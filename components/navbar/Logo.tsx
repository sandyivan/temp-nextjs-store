import Link from 'next/link'
import { Button } from '../ui/button'
import { FaRocket } from 'react-icons/fa'

function Logo() {
  return (
    <Button size='icon' asChild>
      <Link href='/'>
        <FaRocket className='w-6 h-6' />
      </Link>
    </Button>
  )
}
export default Logo
