import React from 'react';
import "../index.css"

import { ENROLLMENT_PROCEDURE } from '../admissionData/AdmissionData';

console.log(ENROLLMENT_PROCEDURE)
function EnrollmentProcedure(props) {
    return (
        <div className="h-auto w-full">

            <h1 className=" opacity-70 text-shadow-md font-extrabold text-5xl sm:text-5xl lg:text-5xl tracking-tight text-center text-pretty ">
                Enrollment Procedure
            </h1>
            <div className=' h-full p-10 flex flex-col justify-center place-items-center gap-5'>
                <h1 className=" font-extrabold  text-green-500 tracking-[0.01rem] leading-6 opacity-70 text-4xl pb-2">Start</h1>




                {ENROLLMENT_PROCEDURE.map((data, i) => {
                    return (

                        data.Student.map((data, i) => (
                            <div key={i} className='w-3/5 relative shadow-lg  h-auto p-5 '>
                                <h1 className=" font-extrabold  text-red-900 tracking-[0.01rem] leading-6 opacity-70 text-2xl pb-2">{data.Office}</h1>
                                {data.Name?.map((data, i) => (<p className='text-slate-600 text-right'>{data}</p>))}
                                <h1 className=" font-extrabold  text-slate-800 tracking-[0.01rem] leading-6 opacity-70 text-lg pb-">Personnel</h1>
                                {data.Personnel.map((data, i) => (<p className='text-slate-600 '>{data}</p>))}
                                <h1 className=" font-extrabold  text-slate-800 tracking-[0.01rem] leading-6 opacity-70 text-lg pb-1">Student</h1>
                                {data.requirements.map((data, i) => (<p className='text-slate-600 '>{data}</p>))}
                                <div className='h-full  place-items-center justify-center w-9 top-2 absolute -left-16 pb-7'>
                                <div className=' bg-red-900/70 border-4 text-white flex  rounded-full justify-center h-9 w-9 place-items-center '>{1 + i}</div>
                                <div className='h-full  w-full flex justify-center pt-1'><span className='bg-red-900/70 w-2 rounded-md'></span></div>
                                </div>
                            </div>
                        ))
                    )
                }
                )
                }



            </div>



        </div>
    );
}

export default EnrollmentProcedure;