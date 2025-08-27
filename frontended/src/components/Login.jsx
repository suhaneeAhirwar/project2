import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSubmit =  async(data) => {
 const userInfo = {

      email: data.email,
      password: data.password,
    };

    // Backend request with axios
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          
          toast.success('logged successfully');
             document.getElementById("my_modal_3").close();
          setTimeout(() => {
              localStorage.setItem("Users", JSON.stringify(res.data.user));
             
                      window.location.reload()
          }, 1000);
        
    
        }
      
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
         
          toast.error("ERROR: " + err.response.data.message);
          setTimeout(() => {
            
          }, 3000);

        }
      });

}

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-gray-800 text-white rounded-xl shadow-lg relative">
          {/* Close Button */}
          <button
            onClick={() => document.getElementById("my_modal_3").close()}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white"
          >
            ✕
          </button>

          {/* Title */}
          <h3 className="font-bold text-xl mb-4 text-center">Login</h3>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <p className="text-red-400 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 transition"
              >
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-400 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;






// import React from 'react'
// import { Link } from 'react-router-dom';
// import { useForm } from "react-hook-form"

// function Login() {


//    const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm()

//   const onSubmit = (data) => console.log("login data:",data)
//   return (
//     <div>
 
//       <dialog id="my_modal_3" className="modal">
//         <div className="modal-box bg-gray-800 text-white rounded-xl shadow-lg relative">
//           <form  onSubmit={handleSubmit(onSubmit)}  method="dialog">
//             {/* close button */}
//             <Link to="/"  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 " onClick={()=>document.getElementById("my_modal_3").close()}>
//             ✕
//             </Link>
//              </form>
           
           

          
//           <h3 className="font-bold text-lg ">Login</h3>

//           {/* Email */}
//           <div className='mt-4 space-y-2'>
//              <span>Email</span>   
//               {/* <label htmlFor="email" className="font-medium">Email</label>  */}
//             <input type="email" 
//               placeholder='Enter your email'
//               className='w-80 py-1 px-3 border rounded-md outline-none ' 
//               {...register("email", { required: true })}
//               />
      
//                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
//           </div>

//           {/* Password */}
//           <div className='mt-4 space-y-2'>
//             <span>Password</span>  
//             <br />
//             <input type="password" 
//               placeholder='Enter your password'
//               className='w-80 py-1 px-3 border rounded-md outline-none ' 

//               {...register("password", { required: true })}
//               />
//               <br />
//         {errors.password && <span>This field is required</span>}
//           </div>
// <div className='flex justify-around mt-4'>

//     <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'> login</button>
//  <p> not registered?{" "} <Link to="/signup" className='underline text-blue-500 cursor-pointer'>signup</Link>{" "}</p>
// </div>

//         </div>
//       </dialog>
//     </div>
//   )
// }

// export default Login;
