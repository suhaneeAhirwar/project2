
import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
// import list from "../components/data/list.json"; // ✅ Corrected path
import list from "../components/data/list.json";



function Courses() {
  
  return (
    <>

       <Navbar /> 
      <div className="min-h-screen">
       <Course />
        </div>
    
       <Footer />

     

</>
    
  );
}

export default Courses;