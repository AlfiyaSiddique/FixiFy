import React from 'react'
import axios from 'axios'
import Swal from "sweetalert2";  
function Academy() {
  function handleClick(event) {
    event.preventDefault()
    var student = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value
  
    }
    axios.post("https://fixifybackend.onrender.com/academy", student).then(resp=>{
      if(resp.status==200){
        {
          Swal.fire({  
            title: 'Success', 
            icon:'success' ,
            type: 'success',  
            text: 'Your data has been submitted.',  
          }); 
              window.location.reload(false)
        }
        
      }
      else{
        {
          Swal.fire({  
            title: 'Warning', 
            icon:'warning' ,
            type: 'warning',  
            text: 'Your data is not submitted.',  
          }); 
              // window.location.reload(false)
        }
        
      }
    }).catch(error=>{
      {
        Swal.fire({  
          title: 'Warning', 
          icon:'warning' ,
          type: 'warning',  
          text: 'Incorrect Data filled please try again!',  
        }); 
            // window.location.reload(false)
      }    })

  }
  return (
    <>
      <div className="bg-white relative pt-40 pb-20 lg:pt-44 ">
        <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <h1 className="sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-black">Succeeding in career

            <br className="lg:block hidden" /> <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">goal progression.</span>.</h1>
          <div className="lg:flex">
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <p className="sm:text-lg text-gray-700  lg:w-11/12">
                This course will equip Apprentice with a comprehensive set of skills and knowledge, including key competencies such as troubleshooting and problem-solving, to succeed in their chosen field through engaging lectures, hands-on exercises, and interactive discussions.
              </p>
              <span className="block font-semibold text-gray-500 dark:text-gray-400">Make connection with us now.</span>
              <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                <a aria-label="add to slack" href="tel:9702614695" className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30">
                  <div className="flex justify-center space-x-4">
                    <img className="w-6 h-6" src="https://cdn.pixabay.com/photo/2016/11/17/16/05/icons-1831922_960_720.png" alt="call logo" loading="lazy" width="128" height="128" />
                    <span className="hidden font-medium md:block dark:text-white">Call</span>
                  </div>
                </a>
                <a aria-label="add to chat" href="https://api.whatsapp.com/send?phone=9702614695" className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-lime-600/20 dark:hover:border-green-300/30">
                  <div className="flex justify-center space-x-4">
                    <img className="w-6 h-6" src="https://cdn.pixabay.com/photo/2017/02/16/12/04/whatsapp-2071331_960_720.png" alt="whatsapp logo" loading="lazy" width="128" height="128" />
                    <span className="hidden font-medium md:block dark:text-white">WhatsApp</span>
                  </div>
                </a>
              </div>

            </div>
            <div className="mt-12 md:mt-0 lg:absolute -right-10 lg:w-7/12">
              <div className="relative w-full">
                <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div>
                <img src="https://tailus.io/sources/blocks/tech-startup/preview/images/globalization-cuate.svg" className="relative w-full" alt="wath illustration" loading="lazy" width="320" height="280" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-400 body-font">

      </section>
    
      <div className="container px-5 py-24 mx-auto lg:mt-96 ">
        <div className="text-center mb-20">

          <h1 className="sm:text-3xl text-2xl font-bold title-font text-black  mb-4">Discover top-tier learning with our institute.
          </h1>
          <p className="text-black leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-opacity-80">Explore our range of expertly curated classes to discover the perfect fit for your learning style and goals.With a   experienced instructors Mr.Janardan Jadhave and a commitment to hands-on learning. Whether you're looking to advance your career or start a new one, our training institute can help you achieve your goals.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-gray -500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white-800   mb-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16"> <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" /> </svg>
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-black font-bold text-lg title-font mb-3">Our Support Center</h2>
              <p className="leading-relaxed text-base">Need help? Our support center provides expert guidance to help you excel,for any query you can contact us on our given social media links or fill contact form.</p>

            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white   mb-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <polygon fill="var(--ci-primary-color, currentColor)" points="368 350.643 256 413.643 144 350.643 144 284.081 112 266.303 112 369.357 256 450.357 400 369.357 400 266.303 368 284.081 368 350.643" className="ci-primary" /> <path fill="var(--ci-primary-color, currentColor)" d="M256,45.977,32,162.125v27.734L256,314.3,448,207.637V296h32V162.125ZM416,188.808l-32,17.777L256,277.7,128,206.585,96,188.808,73.821,176.486,256,82.023l182.179,94.463Z" className="ci-primary" /> </svg>
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-black font-bold text-lg title-font mb-3">Batches and Fees</h2>
              <p className="leading-relaxed text-base">There two slots first batch of Mon, Wed and Saturday and second batch scheduled for Tue,Thu and Friday.Fees of the program is 9000 plus GST.With 100% placement assistant.</p>

            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white   mb-5 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16"> <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" /> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" /> </svg>
              </div>
            </div>
            <div className="flex-grow">
              <h2 className="text-black font-bold text-lg title-font   mb-3">Education Hours</h2>
              <p className="leading-relaxed text-base">Different time schedule for both batch morning batch time is 7.00 to 10.00 am and for evening batch 7.00 to 10.00 pm and sunday will be closed join the batch according as per your convenience. </p>


            </div>
          </div>

        </div>

      </div>

      <section className="text-gray-600 body-font relative ">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe className="absolute inset-0 w-full h-full" frameBorder="0" title="map" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15088.163888837613!2d73.08603712779248!3d19.017916143938688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9d390c16fad%3A0x45a26096b6c171fd!2sKamothe%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1680781193447!5m2!1sen!2sin"></iframe>

          </div>

          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Admit Now</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Fill the form below and get your training details our team will contact you asap.</p>
         
  
            <form action="#" onSubmit={handleClick}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm font-bold text-black ">Name</label>
                <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  required />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm font-bold text-black ">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  required/>
              </div>
              <div className="relative mb-4">
                <label htmlFor="phone" className="leading-7 text-sm font-bold text-black ">Phone No</label>
                <input type="number" id="phone" min={1000000000}  minLength={10} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required />
              </div>
            
                <button className="bg-black text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:shadow-black transition hover:-translate-y-1 hover:scale-110" >Submit </button> 

            </form>

          </div>
        </div>
      </section>
      
    </>
  )
}

export default Academy
