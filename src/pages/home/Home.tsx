import React from 'react';
import homeLogo from '../../assets/circle.gif'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-black flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Welcome to my Store</h2>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Explore</button>
              </div>
            </div>
  
            <div className="circle">
              <img src={homeLogo} alt="circle rgb"  />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;