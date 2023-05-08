import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

function Form() {

  function handleClick(event) {
    event.preventDefault()
    var user = {

      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      phone: event.target.elements.phone.value,
      // manufactured: event.target.elements.manufactured.value,
      complain: event.target.elements.complain.value
    }

    axios.post("https://fixifybackend.onrender.com/complain", user).then(resp => {
      if (resp.status == 200) {
        {
          Swal.fire({
            title: 'Success',
            icon: 'success',
            type: 'success',
            text: 'Your data has been submitted.',
          });
          window.location.reload(false)
        }
      }

    }).catch(error => {
      {
        Swal.fire({
          title: 'Warning',
          icon: 'warning',
          type: 'warning',
          text: 'Your data is not submitted.',
        });
      }
    })
  }
  return (
    <div>
      <section className="bg-white ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 "> Complain Here </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Please fill the below form. We will consider the complaint carefully and give a resolution as soon as possible</p>
          <form action="#" className="space-y-8" onSubmit={handleClick} >
            <div>
              <label htmlFor="name" className="block mb-2 text-sm   text-black font-bold">Your Name</label>
              <input type="text" name='name' id="text" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Lewis" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm   text-black font-bold">Your Email</label>
              <input type="email" name='email' id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="john@gmail.com" required />
            </div>
            <div>
              <label htmlFor="Phone No" className="block mb-2 text-sm   text-black font-bold">Phone No</label>
              <input type="text" name='phone' id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter Phone number " required />
            </div>
            {/* <div>
              <label htmlFor="manufactured " className="block mb-2 text-sm   text-black font-bold">Manufactured By</label>
              <input type="text" name='manufactured' id="manufactured"  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name Of Manufacturer" required/>
          </div> */}
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm   text-black font-bold">Your Complain </label>
              <textarea id="message" name='complain' rows="6" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Complain Here!" required></textarea>
            </div>
            <button className="bg-black text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:shadow-black transition hover:-translate-y-1 hover:scale-110" >Submit </button>

          </form>
        </div>
      </section>
    </div>
  )
}

export default Form
