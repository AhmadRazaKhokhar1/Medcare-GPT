import Navbar from './components/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer'
import Authentication from './pages/Authentication/Authentication'
import {useAuth} from '@clerk/clerk-react'
import { useEffect } from 'react'
import About from './pages/About/About'
export default function App() {
  const {userId, isLoaded} = useAuth();
  console.log(`User Id:${userId}, isLoaded:${isLoaded}`);
  const navigate = useNavigate();
  useEffect(()=>{
  },[])
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route path='/Auth' element={<Authentication/>} />
   
        <Route path='/' index element={userId?<Home/>:<Authentication/>} />
        <Route path='/About' element={userId?<About/>:<Authentication/>} />

      </Routes>
      <Footer/>
    </div>
  )
}
