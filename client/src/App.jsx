import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className='min-h-[75vh]'>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default App