import { logo, iconClose, iconHamburger } from "../images";
import { links } from "../constants";
import { useState } from "react";

function Nav() {

    const [ toggle, setToggle ] = useState(false);

    return(

        <nav className="flex items-center justify-between w-[1500px] max-w-[90%] mx-auto py-[70px]">

            <img src={logo} alt="logo" />

            <ul className="hidden sm:flex items-center justify-center gap-10">

                {links.map((link) => (

                    <li key={link.id}>

                        <a href="#" className="text-white font-alata font-alataRegular">{link.link}</a>

                    </li>

                ))}

            </ul>

            <div className="sm:hidden block">

                <img 
                    src={iconHamburger} 
                    alt="Hamburger"
                    className="cursor-pointer w-[40px]"
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'block' : 'hidden'} fixed top-0 right-0 w-full h-screen bg-black px-[15px] xs:px-[40px] pt-[50px]`}>

                    <div className="flex items-center justify-between mb-[50px] xs:mb-[100px]">

                        <img src={logo} alt="logo" className="cursor-pointer w-[160px] xs:w-auto" />

                        <img 
                            src={iconClose} 
                            alt="icon close" className="cursor-pointer w-[30px] xs:w-[40px]"
                            onClick={() => setToggle((prev) => !prev)}
                        />

                    </div>

                    <ul className="flex flex-col items-start justify-center gap-[25px]">

                        {links.map((link) => (

                            <li key={link.id}>

                                <a href="#" className="text-white text-[30px] xs:text-[35px] uppercase font-alata font-alataRegular">{link.link}</a>

                            </li>

                        ))}

                    </ul>

                </div>

            </div>

        </nav>

    )
}

export default Nav;