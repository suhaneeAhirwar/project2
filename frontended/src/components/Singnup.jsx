import React from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location =useLocation();
  const navigate=useNavigate()
  const form=location.state?.form?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    // Backend request with axios
    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
       
                 toast.success('Signup successfully');
                //  <Navigate to="/"/>
                navigate(form,{replace:true});
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
  
          toast.error("ERROR: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-[400px] text-white relative">

        {/* Close Button */}
        <button
          onClick={() => document.getElementById("signup_modal").close()}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"
        >
          ✕
        </button>

        {/* Title */}
        <h3 className="font-bold text-xl text-center mb-4">Signup</h3>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full py-2 px-3 rounded-md text-black outline-none"
              {...register("fullname", { required: "Fullname is required" })}
            />
            {errors.fullname && (
              <p className="text-red-400 text-sm">{errors.fullname.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-2 px-3 rounded-md text-black outline-none"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full py-2 px-3 rounded-md text-black outline-none"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="bg-pink-500 w-full py-2 rounded-md hover:bg-pink-700 transition"
          >
            Signup
          </button>
        </form>

        {/* Login redirect */}
        <p className="mt-4 text-center">
          Have account?{" "}
          <button
            className="underline text-blue-400 cursor-pointer"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Login
          </button>
        </p>

        {/* Login Component */}
        <Login />
      </div>
    </div>
  );
}

export default Signup;









// import React from 'react'
// import { Link } from 'react-router-dom'
// import Login from './Login'
// import { useForm } from 'react-hook-form';

// function Singnup() {
//   const{
//   register,
//   handleSubmit,
//   formState:{errors},
//   }=useForm();
//    const onSubmit=(data)=>{
//     // const  userInfo={
//     //   fullname:data.fullname,
//     //   email:data.email,
//     //   password:data.password,
//     // }
//     // axios.post()
//     console.log(" form data :",data);
    
//    };
//   return (
//     <>
//     <div  className='flex h-screen items-center justify-center'>
//          <div className=" w-[600px] ">
//         <div className=" ">
//           <form method="dialog">
//             {/* close button */}
//             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//           </form>
//           <h3 className="font-bold text-lg ">signup</h3>

//           {/* Email */}
//           <div className='mt-4 space-y-2'>
//              <span>name</span>   
//               {/* <label htmlFor="email" className="font-medium">Email</label>  */}
//             <br />
//             <input type="text" 
//               placeholder='Enter your  fullname'
//               className='w-80 py-1 px-3 border rounded-md outline-none '
//               {...register("fullname",{required:true})}
//                />
//           </div>

//           {/* Password */}
//           <div className='mt-4 space-y-2'>
//             <span>Password</span>  
//             <br />
//             <input type="password" 
//               placeholder='Enter your password'
//               className='w-80 py-1 px-3 border rounded-md outline-none ' />
//           </div>
// <div className='flex justify-around mt-4'>

//     <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'> Signup</button>
//  <p className='text-xl'> have account?{" "} <button
//   to="/" className='underline text-blue-500 cursor-pointer'  onClick={()=> 
//     document.getElementById("my_modal_3").showModal()
//   }  >login</button>{" "}
//   <Login/>
//   </p>
// </div>

//         </div>
//         </div>
//     </div>
//     </>
//   )
// }

// export default Singnup
