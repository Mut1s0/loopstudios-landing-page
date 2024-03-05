import { desktopInteractive, mobileInteractive } from "../images";

function Features() {

    return(

        <section className="py-[100px]">

            <div className="w-[1400px] max-w-[90%] mx-auto md:flex md:relative">

                <div className="">

                    <picture>

                        <source media="(min-width: 768px)" srcSet={desktopInteractive} />
                        <img 
                            src={mobileInteractive} alt="Interactive" 
                            className="w-full"
                        />

                    </picture>

                </div>

                <article className="text-center md:text-left pt-[50px] md:p-[80px] md:absolute md:top-[200px] md:right-[-90px] md:w-[65%] md:h-[350px] md:flex md:flex-col md:items-start md:justify-center bg-white">

                    <h1 className="uppercase text-black font-josefinSans mb-[20px] text-[30px] ss:text-[50px] md:leading-[60px]">the leader in <br /> interactive vr</h1>

                    <p className="text-darkGray font-alata font-alataRegular">Founded in 2011, Loopstudio has been producing world-class <br className="hidden md:flex"/> virtual reality projects for some of the companies around the <br className="hidden md:flex"/> globe. Our award-winning creations have transformed <br className="hidden md:flex"/> business through digital experiences that bind to their brand.</p>

                </article>

            </div>

        </section>

    )
}

export default Features;