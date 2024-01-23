import React from 'react'
import homeLogo from '../../assets/icons8-circle-64 (1).png'
import { Link } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-slate-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg ">
            
            <Link to='/home' className='text-2xl text-[#fff] font-bold uppercase flex items-center  '><img src={homeLogo} alt="" />Games Store V </Link>

            <div className='flex gap-4 items-center uppercase'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/cadastrarCategorias' className='hover:underline'>Cadastrar Categoria</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar