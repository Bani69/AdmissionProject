import React from 'react';
import  "../index.css"
function Welcome(props) {
    return (
     <div className="flex flex-col relative place-items-center justify-center p-10 bg-blue w-full mt-13 h-full">
         <h1 className=" opacity-70 text-shadow-md font-extrabold text-5xl sm:text-5xl lg:text-7xl tracking-tight text-center text-pretty ">Welcome to Our <span className="text-6xl font-extrabold text-red-900">ISPSC  </span><span className="text-red-900">Library</span> <br/> Admission Page
         </h1>
        <p className="mt-4  text-lg  text-slate-500 text-center max-w-3xl mx-auto dark:text-slate-500">Empowering Dreams, Igniting Futures: Your Journey Begins Here Welcome to Admission at <br/> ILOCOS SUR POLYTECHNIC STATE COLLEGE</p>
<div className="flex justify-center mt-8">

    <a href="#adm"
        className="animate-bounce  bg-red-900 p-2 w-10 h-10 ring-1 ring-slate-900/5  shadow-lg rounded-full flex items-center justify-center">
        <svg className="w-6 h-6 text-amber-300" fill="none" strokeLinecap="round" strokeLinejoin="round"
             strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
    </a>

</div>

     </div>
    );
}

export default Welcome;