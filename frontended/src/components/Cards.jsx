import React from 'react'


function Cards({item}) {
    console.log(item);
    
  return (
   <>
   <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-sm hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
  <figure>
{/* className="w-full h-40 object-cover" */}
        {/* <img src="/Banner.jpg" alt="shoes" />   */}
     <img src={item.image} alt={item.name}  /> 
     {/* <img src="/Banner.jpg" alt="Banner" className="w-full h-60 object-cover" /> */}
{/* 
     <img
  src={item.image ? item.image : "/Banner.jpg"}
  alt={item.name || "book"}
  className="w-full h-40 object-cover"
/> */}

  
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline cursor-pointer border-[2px]  rounded-full px-2 px-1 hover:bg-pink-500 hover:text-white    duration-200">Buy Now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Cards
