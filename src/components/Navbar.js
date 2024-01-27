import React from 'react';
import { IMAGES } from "../images/images";

function Navbar(props) {

    return (
        <nav className="relative z-10 shadow-2xl flex justify-between px-16 p-3 ">
            <div className="flex items-center md:gap-x-12">
                <a aria-label="Home" href="#" className=" ">
                    <img src={IMAGES[0].navbarlogo} alt=""
                        className=" h-10 logo-filter" />

                </a>
            
                <div className="hidden md:flex md:gap-x-6 ">

                    <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 font-medium hover:bg-slate-100 hover:text-blue-600"
                        href="#" >Home</a>
                    <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 font-medium  hover:bg-slate-100 hover:text-blue-600"
                        href="#" >Admission</a>
                    <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700  font-medium hover:bg-slate-100 hover:text-blue-600"
                        href="#" >Contacts</a>
                    <a className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700  font-medium hover:bg-slate-100 hover:text-blue-600"
                        href="#">About</a>

                </div>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">

                <div className="-mr-1 md:hidden">
                    <div data-headlessui-state="">

                        <button
                            className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
                            aria-label="Toggle Navigation" type="button" aria-expanded="false" data-headlessui-state=""
                            id="shownavbar">

                            <svg aria-hidden="true" className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                                fill="none"
                                strokeWidth="2" strokeLinecap="round">
                                <path d="M0 1H14M0 7H14M0 13H14" className="origin-center transition"></path>
                                <path d="M2 2L12 12M12 2L2 12"
                                    className="origin-center transition scale-90 opacity-0"></path>
                            </svg>
                        </button>

                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;