import { BrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Work from './Work'
import Projectapp from './Projectapp'
import Contact from './Contact'

function App() {


  return (
    <>
    <BrowserRouter>
    <div className='bg-slate-900   bg-no-repeat bg-cover bg-center w-full text-white pb-20'>
    <Navbar/>
    <Hero />
    <About />
    <Work /> 
    <Projectapp />
    <Contact />
    </div>
    </BrowserRouter>
   
    </>
  )
}

export default App
