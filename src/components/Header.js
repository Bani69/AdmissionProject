import React from 'react';
import {IMAGES} from "../images/images";

function Header() {
    return (
        <>
            <div className="h-44 w-full headerBg flex gap-4 p-2">
                <div>
                    <img src={IMAGES[0].IspscLogo} alt="logo"/>
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-lg font-sans antialiased fontHeader text-amber-300 font-bold  mb-2">Republic Of The Philippines</p>
                    <h1 className="text-3xl overline antialiased  fontHeader text-amber-300  font-bold leading-7  align-top ">ILOCOS SUR POLYTECHNIC STATE COLLEGE</h1>
                    <p className="text-lg antialiased   fontHeader text-amber-300 font-bold">ILOCUS SUR, PHILIPPINES</p>

                </div>
            </div>

        </>
    );
}

export default Header;