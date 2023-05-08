import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import {useSpring, animated} from 'react-spring'

function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      to: { number: n },
      delay: 200,
      config: {  mass: 1, tension: 5, friction: 10  }
    });
  
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
  
function About() {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    return (
        <>
            {/* Heroes Section  */}
            <div className="py-20">
                <div className="container mx-auto px-6 ">
                    
                    <h2 className="text-6xl font-bold mb-2 c-font ">
                       We're Fixifyer, <br />
                        A Digital Repair <br />
                        Agency.

                    </h2>
                    <h3 className=" text-2xl mb-8 ">
                        Fixify offers proficient repair services for laptops, desktops, and printers, ensuring prompt and efficient solutions.
                    </h3>

                   <a href="#">
                   <button className="bg-black text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:shadow-black transition hover:-translate-y-1 hover:scale-110"  onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }} >
                        Get Started
                    </button>
   
                   </a>
                </div>
            
            </div>
            {/* Features Section  */}
            <section className="container mx-auto px-6 p-10" id='about' >
                {/* <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Features
      </h2> */}
                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <h4 className="text-3xl text-black font-bold mb-3">Who We Are?</h4>
                        <p className="text-gray-600 mb-8">Welcome to Fixify, your one-stop-shop for all your repairing needs. Our skilled technicians provide reliable and affordable repairing services for laptops, printers, and desktops with a focus on quality repairs and exceptional customer service. Trust us to get your devices back up and running. Contact us today! <strong> We also provide live trainings to the desire learner's to acheive greate success to the their careers.</strong> <Link to={'/academy'} className='text-blue-600 underline'><strong>Get an Admission</strong></Link></p> 
                    </div>
                    <div className="w-full md:w-1/2">
                        <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="who we are?" />
                    </div>
                </div>

                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <img src="https://www.ensureservices.com/images/why-choose-us/img1.jpg" alt="why choose us ?" />
                    </div>
                    <div className="w-full md:w-1/2 pl-10">
                        <h4 className="text-3xl text-black font-bold mb-3">Plenty Reasons to Choose Us</h4>
                        <p className="text-gray-600 mb-8">We have specialized knowledge or experience in our field that sets us apart from our competitors.Our consistently deliver high-quality products or services that meet or exceed customer expectations.We provide exceptional customer service, responding promptly and effectively to customer inquiries or issues,and offers competitive pricing or value-added services.
                        </p>
                    </div>
                </div>

                <div className="flex items-center flex-wrap mb-20">
                    <div className="w-full md:w-1/2">
                        <h4 className="text-3xl text-black font-bold mb-3">Our Experties</h4>

                        {/* Troubleshooting  */}
                        <div className="flex justify-between mb-1 mt-6">
                            <span className="text-base font-bold text-black ">Troubleshooting</span>
                            <span className="text-sm font-medium ">85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.0 dark:bg-gray-700">
                            <div className="bg-red-600  h-2.5 rounded-full" style={{ "width": "85%" }}></div>
                        </div>
                        {/* Live Training  */}
                        <div className="flex justify-between mb-1 mt-5">
                            <span className="text-base font-bold text-black ">Live Training</span>
                            <span className="text-sm font-medium ">90%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.0 dark:bg-gray-700">
                            <div className="bg-blue-600 h-2.5 rounded-full" style={{ "width": "90%" }}></div>
                        </div>
                        {/* Servicing  */}
                        <div className="flex justify-between mb-1 mt-5">
                            <span className="text-base font-bold text-black ">Servicing</span>
                            <span className="text-sm font-medium ">98%</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-2.0 dark:bg-gray-700">
                            <div className="bg-yellow-600 h-2.5 rounded-full" style={{ "width": "98%" }}></div>
                        </div>

                        {/* Selling  */}
                        <div className="flex justify-between mb-1 mt-5">
                            <span className="text-base font-bold text-black ">Selling Products</span>
                            <span className="text-sm font-medium ">100%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.0 dark:bg-gray-700">
                            <div className="bg-green-600 h-2.5 rounded-full" style={{ "width": "100%" }}></div>
                        </div>




                    </div>
                    <div className="w-full md:w-1/2">
                        <img src="https://i.postimg.cc/3xWR3vxG/company-employees-sharing-thoughts-ideas-74855-5469.jpg" alt="Our Expertise" />
                    </div>
                </div>
            </section>

            {/* Jumbotron Call To Action  */}
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-2xl dark:text-white">Get in touch with us</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Click here to directly contact with us on WhatsApp</p>
                    <a href='https://api.whatsapp.com/send?phone=9702614695' role="button" className="bg-black hover:bg-white hover:text-black hover:font-bold text-white text-sm px-4 py-2  border rounded-full">
                        Get in touch
                    </a>
                </div>
            </section>

            {/* FACTS  */}
             <div className="text-center mt-10 mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">FACTS</h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Below numbers shows our potentials</p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-gray-500 inline-flex"></div>
                </div>
            </div> 
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-bold sm:text-4xl text-3xl  text-gray-500">
                                <Number n={20}/>
                            </h2>
                            <p className="leading-relaxed">Cilents</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-500">
                                <Number n={24}/>
                            </h2>
                            <p className="leading-relaxed">Hours Of Support</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-500">
                                <Number n={9}/>
                            </h2>
                            <p className="leading-relaxed">Hard Workers</p>
                        </div>
                        <div className="p-4 sm:w-1/4 w-1/2">
                            <h2 className="title-font font-bold sm:text-4xl text-3xl text-gray-500">
                                <Number n={3}/>
                            </h2>
                            <p className="leading-relaxed">Products</p>
                        </div>
                    </div>
                </div>
            </section> 
        

            {/* Trusted By  */}
             <section className="bg-white py-10 ">
                 <div className="flex flex-col text-center w-full mb-20">
                     <h1 className="text-2xl font-bold title-font mb-4 text-gray-900 tracking-widest">TRUSTED BY  </h1>
                     <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Companies who trust on us and collaborate with us, we are very thankful of all of them.</p>
                 </div>
                 <div className="container mx-auto">
                     <div className="-mx-4 flex flex-wrap">


                         <div className="w-full px-4">
                             <div className="flex flex-wrap items-center justify-center">
                                 <a
                                                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                 >
                                     <img
                                         src="https://upload.wikimedia.org/wikipedia/commons/8/82/Dell_Logo.png"
                                         alt="image"
                                         className="h-10 w-full"
                                     />
                                 </a>
                                 <a
                                                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                 >
                                     <img
                                         src="https://i.postimg.cc/wj7jGwLx/kisspng-laptop-tablet-computers-lenovo-personal-computer-lenovo-logo-5ac3967d5c58c0-7749120615227674.png"
                                         alt="image"
                                         className="h-10 w-full"
                                     />
                                 </a>
                                 <a
                                                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                 >
                                     <img
                                         src="https://w1.pngwing.com/pngs/429/221/png-transparent-logo-red-proliant-hp-integrated-lightsout-hp-laserjet-enterprise-cp4525-ink-cartridge-text-line-sign.png"
                                         alt="image"
                                         className="h-10 w-full"
                                     />
                                 </a>
                                 <a
                                                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                                 >
                                     <img
                                         src="https://i.postimg.cc/tgfbVbMF/lg-logo-png-5a3a2023ee4c58-17953691151375875597611785.jpg"
                                         alt="image"
                                         className="h-10 w-full"
                                     />
                                 </a>
                             </div>
                         </div>
                     </div>
                 </div>
             </section>

     
        </>

    )
}

export default About
