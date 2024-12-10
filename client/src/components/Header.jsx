import React from 'react'
import logo from '../assets/logo.png'
import Search from './Search';
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className="h-20 shadow-md sticky top-0">
      <div className='container mx-auto justify-between flex items-center h-full px-2'>
        {/**logo */}
        <div className='h-full'>
          <Link to={"/"}  className='h-full flex items-center justify-center'>
            <img src={logo} width={170} height={60} alt="logo" className='hidden lg:block' />
            <img src={logo} width={120} height={60} alt="logo" className='lg:hidden' />
          </Link>
        </div>

        {/**search */}
         <div>
          <Search/>
         </div>
        {/**login and my cart */}
         <div>
          cart and login
         </div>
      </div>
    </header>
  );
}

export default Header