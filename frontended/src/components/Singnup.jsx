import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Singnup() {
  return (
    <>
    <div  className='flex h-screen items-center justify-center'>
         <div className=" w-[600px] ">
        <div className=" ">
          <form method="dialog">
            {/* close button */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg ">signup</h3>

          {/* Email */}
          <div className='mt-4 space-y-2'>
             <span>name</span>   
              {/* <label htmlFor="email" className="font-medium">Email</label>  */}
            <br />
            <input type="text" 
              placeholder='Enter your  fullname'
              className='w-80 py-1 px-3 border rounded-md outline-none ' />
          </div>

          {/* Password */}
          <div className='mt-4 space-y-2'>
            <span>Password</span>  
            <br />
            <input type="password" 
              placeholder='Enter your password'
              className='w-80 py-1 px-3 border rounded-md outline-none ' />
          </div>
<div className='flex justify-around mt-4'>

    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'> Signup</button>
 <p className='text-xl'> have account?{" "} <button
  to="/" className='underline text-blue-500 cursor-pointer'  onClick={()=> 
    document.getElementById("my_modal_3").showModal()
  }  >login</button>{" "}
  <Login/>
  </p>
</div>

        </div>
        </div>
    </div>
    </>
  )
}

export default Singnup
