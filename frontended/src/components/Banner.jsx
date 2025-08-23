import Rejact from "react";
import  banner from "../../public/Banner.jpg"


function Banner() {
  return (
   
    <>
    <div className='navbar bg-base-80 shadow-sm md:flex-row my-10'>
      <div className=' order-2  md:order-1  w-full md:w-1/2  mt-12 md:mt-32'>
     <div className='space-y-12'> 
         <h1 className='text-4xl font-bold '>hello ,welcome here to learn something <span className='text-ping-500'> new everyday!!</span></h1>
      <p className='text-xl'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus blanditiis nobis, id sed architecto saepe dicta voluptate optio! Ex blanditiis soluta quasi eos facere inventore veritatis quis error mollitia cumque?
      </p>
     

     <label className="input validator">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" required />
</label>

 </div>
<div className="validator-hint hidden">Enter valid email address

</div>
<button className="btn  mt-6 btn-secondary">Secondary</button>
      </div>
      <div className='  order-1 w-full md:w-1/2'>
    <img src={banner}  className= "w-92 h-92" alt="" />
      </div>  
    </div>
   
    </>
  )
}

export default Banner

