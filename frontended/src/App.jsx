import React from 'react'
import Home from './home/Home'

import { Navigate, Route ,Routes} from 'react-router-dom';
import Courses from './courses/Courses';
import Singnup from './components/Singnup';
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';



function App() {
   const [authUser,setAuthUser]=useAuth()
    console.log(authUser);
  return (
  <>
 
  {/* <Home/>
  <Course/> */}

  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/course' 
    element={authUser ?<Courses/>: <Navigate to="/signup"/>}/>
    <Route path='/signup' element={<Singnup/>}/>
  </Routes>
  <Toaster />
  </div>

  </>
    
  )
}

export default App


