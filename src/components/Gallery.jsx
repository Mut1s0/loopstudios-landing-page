import { creations } from "../constants";

function Gallery() {

    return(

        <section>

            <div className="w-[1500px] max-w-[90%] mx-auto">

                <div className="flex items-center justify-center md:justify-between pb-[50px]">

                    <h1 className="uppercase text-black font-josefinSans text-[30px] xs:text-[40px]">our creations</h1>
                    <span className="hidden md:flex border-2 border-black uppercase text-black py-[5px] px-[30px] cursor-pointer font-alata font-alataRegular">see all</span>

                </div>

                <div className="grid gap-[25px] md:grid-cols-4 md:gap-x-[30px] md:gap-y-[40px]">

                    {creations.map((gallery) => (

                        <div key={gallery.id} className="relative">

                            <picture>

                                <source media="(min-width: 1024px)" srcSet={gallery.desktopIcon} />
                                <img src={gallery.mobileIcon} alt="Gallery" className="w-full" />

                            </picture>

                            <h2 className="uppercase text-[20px] xs:text-[30px] text-white font-josefinSans font-josefinSansLight absolute bottom-[10px] md:bottom-[40px] left-[20px]">{gallery.title}</h2>

                        </div>

                    ))}

                </div>

                <div className="flex items-center justify-center py-[50px]">

                    <span className="flex md:hidden border-2 border-black uppercase text-black py-[5px] px-[30px] cursor-pointer font-alata font-alataRegular">see all</span>

                </div>

            </div>

        </section>

    )
}

export default Gallery;