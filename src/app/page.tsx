import Image from 'next/image'
import Logo from '../../public/assets/images/schman-logo.svg'

export default function Home() {
  return (
    <main className='grid min-h-screen place-items-center'>
      <div className='space-y-4 text-center p-4'>
        <Image src={Logo} alt="Logo" width={400} height={200} />
        <p className='text-xl text-accent-foreground'>web & it professional</p>
      </div>
    </main>
  )
}
