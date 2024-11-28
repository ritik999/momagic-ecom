import { Button } from 'flowbite-react'
import React from 'react'
import Header from './components/Header/Header.tsx'
import Home from './pages/Home/Home'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer.tsx'

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App