import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] flex items-center">
        <Outlet />
      </main>
      <Footer />
      <Toaster
        toastOptions={{
          error: {
            style: {
              color: "#333", // Darker text color
              fontWeight: "bold" 
            }
          },
          success: {
            style: {
              color: "#333", // Darker text color
              fontWeight: "bold" 
            }
          }
        }}
      />
    </>
  );
}

export default App