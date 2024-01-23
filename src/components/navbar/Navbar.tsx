import React from 'react'
import homeLogo from '../../assets/icons8-circle-64 (1).png'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-slate-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg ">
            
            <div className='text-2xl text-[#fff] font-bold uppercase flex items-center  '><img src={homeLogo} alt="" />Games Store V </div>

            <div className='flex gap-4 items-center uppercase'>
              <div className='hover:underline'>Home</div>
              <div className='hover:underline'>Categorias</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar