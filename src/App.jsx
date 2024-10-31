
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'

import Coffe from './Components/Coffe';
import { useState } from 'react';
import { FaCoffee } from 'react-icons/fa';

function App() {
  const loderCoffe = useLoaderData()
  const [coffes, setcoffes] = useState(loderCoffe)
  return (
    <>
      <nav className="bg-nav-bar-img text-6xl text-white font-rachno flex justify-center items-center gap-3 py-2">
        <img src="/logo1 1.png" alt="" />
        <h3 className='text-3xl font-semibold'>Espresso Emporium</h3>
      </nav>
      <div className='bg-headers-img min-h-[500px] pl-56 pt-40 space-y-5'>
        <h3 className='font-rachno text-5xl text-white'>Would you like a Cup of Delicious Coffee?</h3>
        <p className='text-white font-raleway '>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
        <button className='h-12 w-28 text-[#242222] bg-[#E3B577] border-none font-rachno text-2xl'>Learn More</button>
      </div>
      <div className='bg-[#ECEAE3] flex gap-5 p-8'>
        <div className='space-y-3'>
          <img src="/public/1 1.png" alt="" />
          <h3 className='text-[#331A15] font-rachno text-4xl'>Awesome Aroma</h3>
          <p className='font-raleway text-[#1B1A1A] max-w-[330px]'>You will definitely be a fan of the design & aroma of your coffee</p>
        </div>
        <div className='space-y-3'>
          <img src="/public/2 1.png" alt="" />
          <h3 className='text-[#331A15] font-rachno text-4xl'>High Quality</h3>
          <p className='font-raleway text-[#1B1A1A] max-w-[330px]'>We served the coffee to you maintaining the best quality</p>
        </div>
        <div className='space-y-3'>
          <img src="/public/3 1.png" alt="" />
          <h3 className='text-[#331A15] font-rachno text-4xl'>Pure Grades</h3>
          <p className='font-raleway text-[#1B1A1A] max-w-[310px]'>The coffee is made of the green coffee beans which you will love</p>
        </div>
        <div className='space-y-3'>
          <img src="/public/4 1.png" alt="" />
          <h3 className='text-[#331A15] font-rachno text-4xl'>Proper Roasting</h3>
          <p className='font-raleway text-[#1B1A1A] max-w-[330px]'>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
      <div className='mt-10 space-y-3'>
        <p className='text-center text-xl font-raleway'>--- Sip & Savor ---</p>
        <h3 className='text-[#331A15] font-rachno text-6xl text-center'>Our Popular Products</h3>
        <Link to='/addcoffe' className='bg-[#E3B577] mt-3 flex mx-auto w-36 p-3 items-center gap-3 text-2xl text-white font-rachno'>Add Coffe <span className='text-[#331A15]'><FaCoffee></FaCoffee></span></Link>
      </div>
      <div className='grid grid-cols-2 max-w-[1170px] mx-auto'>
        {
          coffes.map((coffe, idx) => <Coffe key={idx} coffes={coffes} setcoffes={setcoffes} coffe={coffe}></Coffe>)
        }
      </div>

      <div className='mt-10'>
        <p className='text-center text-xl font-raleway'>Follow Us Now</p>
        <h3 className='text-[#331A15] font-rachno text-6xl text-center'>Follow on Instagram</h3>
      </div>
      <div className='grid grid-cols-4 max-w-[1170px] mx-auto gap-3 mt-5'>
        <img src="/public/Rectangle 9.png" alt="" />
        <img src="/public/Rectangle 10.png" alt="" />
        <img src="/public/Rectangle 11.png" alt="" />
        <img src="/public/Rectangle 12.png" alt="" />
        <img src="/public/Rectangle 13.png" alt="" />
        <img src="/public/Rectangle 14.png" alt="" />
        <img src="/public/Rectangle 15.png" alt="" />
        <img src="/public/Rectangle 16.png" alt="" />

      </div>
    </>
  )
}

export default App
