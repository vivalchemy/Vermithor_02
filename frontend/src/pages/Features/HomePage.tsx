import { Header } from '@/base components/Header'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "../../components/3d";

export function HomePage() {
  return (
    <>
      <Header />
      <div className='relative z-0 bg-background'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}

        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  )
}
