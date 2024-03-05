import { links, socials } from "../constants";
import { logo } from "../images";

function Footer() {

    return(

        <footer className="bg-black py-[50px]">

            <div className="w-[1500px] max-w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between gap-[50px] md:gap-0">

                <div className="flex flex-col items-center md:items-start justify-center gap-[40px]">

                    <img src={logo} alt="logo" />

                    <ul className="flex flex-col md:flex-row md:items-center justify-center md:justify-start gap-[35px]">

                        {links.map((link) => (

                            <li key={link.id}>

                                <a href="#" className="text-white hover:border-b-2 hover:border-b-white pb-1">{link.link}</a>

                            </li>

                        ))}

                    </ul>

                </div>

                <div className="flex flex-col items-center md:items-end justify-center gap-[20px]">

                    <ul className="flex items-center justify-end gap-[30px]">

                        {socials.map((social) => (

                            <li key={social.id}>

                                <img src={social.icon} alt="" className="cursor-pointer hover:border-b-4 hover:border-b-white pb-2" />

                            </li>

                        ))}

                    </ul>

                    <p className="text-darkGray text-[14px] xs:text-[20px]">&#169; 2021 Loopstudios. All rights reserved.</p>

                </div>

            </div>

        </footer>

    )
}

export default Footer;