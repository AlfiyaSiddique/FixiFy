import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Homepage() {
  const [text, setText] = useState('');

  useEffect(() => {
    const words = ['Desktop', 'Printer', 'Laptop'];
    let i = 0;

    const intervalId = setInterval(() => {
      setText(words[i]);
      i = (i + 1) % words.length;
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"></h2>
          <h1 className="sm:text-3xl text-4xl font-bold  uppercase tracking-wider">{text} Repair</h1>
          <p className="lg:w-4/3  mx-auto leading-relaxed text-2xl">Trusted. Exceptional. Affordable.</p>
          <p className="lg:w-4/3 mx-auto leading-relaxed  text-2x1">Best rated Electronic Accessories repairs by our customers.</p>
        </div>
        
      </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Everything that we do is

              <br className="hidden lg:inline-block" />designed around you
            </h1>
            <p className="mb-8 leading-relaxed">Be it curated protection plans or a dedicated 24x7 customer care helpline <br />
            <Link to="/contact" className='text-blue-500 font-bold underline
            '>Get in touch </Link>

            </p>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 " >
            <img className="object-cover  rounded" alt="hero" src="https://previews.123rf.com/images/norgal/norgal2105/norgal210500153/169730116-technician-reparing-a-broken-computer-computer-service-and-repair-concept.jpg" />
          </div>
        </div>
      </section>
      <section className="text-gray-600 mt-20 body-font">
        <div className="container px-5  mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">We ensure your safety during every accessories service
            </h1>
            
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <p className="leading-relaxed text-base">We have all important details of our engineer, so in case of emergency we can contact them.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <p className="leading-relaxed text-base">Any riskful task will be done in our office not at your home, that makes you more satisfy by our services.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <p className="leading-relaxed text-base">Experienced engineer we have,no chance to make problem in your equipment</p>
              </div>
            </div>

          </div>

        </div>
      </section>

  

      <div className="container px-5 py-24 mx-auto  ">
        <div className="text-center mb-20">

          <h1 className="sm:text-3xl text-2xl font-bold title-font text-black  mb-4">Trusted Customer Deliverered
          </h1>

          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-gray -500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white-800   mb-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" /> </svg>
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-black font-bold text-lg title-font mb-3">4.8 Rating</h2>
              <p className="leading-relaxed text-base">by customers for repairs</p>

            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white   mb-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z" /> <path d="M13 18v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z" /> </g> </svg>
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-black font-bold text-lg title-font mb-3">10,000+</h2>
              <p className="leading-relaxed text-base">Electronic Accessories repairs done since last 12 years</p>

            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white   mb-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16"> <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" /> </svg>
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-black font-bold text-lg title-font   mb-3">Pay after service available</h2>
              <p className="leading-relaxed text-base">in selected locations  </p>


            </div>
          </div>

        </div>

      </div>

      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">Charges</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Below chart descibes our charges </p>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Component</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Cost</th>           
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3">Visit  </td>
            <td className="px-4 py-3">250 rs</td>
        
          
          </tr>
          <tr>
            <td className="px-4 py-3">Diagnostic  </td>
            <td className="px-4 py-3">250 rs</td>
            
          
          </tr>
        
      <p className='font-bold'>*Repairing Charges Apply after service</p>
        </tbody>
      </table>
    </div>
 
  </div>
</section>


    </>
  );
}

export default Homepage;
