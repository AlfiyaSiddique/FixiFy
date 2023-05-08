import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';

function Form() {

   function handleClick(event) {
      event.preventDefault()
      var engineer = {

         name: event.target.elements.name.value,
         email: event.target.elements.email.value,
         phone: event.target.elements.phone.value,
         address: event.target.elements.address.value,
         aadharno: event.target.elements.aadharno.value,
         panno: event.target.elements.panno.value,
         licenseno: event.target.elements.licenseno.value,
         skills: event.target.elements.skills.value,
         qualification: event.target.elements.qualification.value,
         experience: event.target.elements.experience.value,
         emergencyno: event.target.elements.emergencyno.value,
         institute: event.target.elements.institute.value,
         // certificate: event.target.elements.certificate.value, 

      }
      axios.post("https://fixifybackend.onrender.com/engineer", engineer).then(resp => {
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
               text: 'Incorrect Data filled please try again!',
            });
            // window.location.reload(false)
         }
      })


   }
   return (
      <div>
         <section className="bg-white ">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
               <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center "> Enroll as an Engineer </h2>
               <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Welcome to our repair service company.Want to work with us please fill the form below and our team will send you response as soon as possible, make sure share your information proper and valid otherwise we won't be able to connect with you.Thanking you.</p>
               <form className="space-y-8" encType="multipart/form-data" method="POST" onSubmit={handleClick} >
                  <div>
                     <label htmlFor="name" className="block mb-2 text-sm   text-black font-bold">Your Name</label>
                     <input type="text" name='name' id="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Lewis" required />
                  </div>


                  <div>
                     <label htmlFor="phone" className="block mb-2 text-sm   text-black font-bold">Phone No</label>
                     <input type="tel" name='phone' id="phone" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter phone number " required />
                  </div>
                  <div>
                     <label htmlFor="email" className="block mb-2 text-sm   text-black font-bold">Your Email</label>
                     <input type="email" name='email' id="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="john@gmail.com" required />
                  </div>
                  <div>
                     <label htmlFor="qualification" className="block mb-2 text-sm   text-black font-bold">Your Qualification</label>
                     <input type="text" name='qualification' id="qualification" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Qualification...." />
                  </div>
                  <div>
                     <label htmlFor="skills" className="block mb-2 text-sm   text-black font-bold">Your Skills</label>
                     <input type="text" name='skills' id="skills" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Relevent Skills...." />
                  </div>
                  <div>
                     <label htmlFor="experience" className="block mb-2 text-sm   text-black font-bold">Year Of Experience </label>
                     <select id="experience" name='experience' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder='Year Of Experience'>
                        <option value="fresher">Fresher</option>
                        <option value="0-3">0-3</option>
                        <option value="3-5">3-5</option>
                        <option value="5-10">5-10</option>
                     </select>

                  </div>
                  <div>
                     <label htmlFor="institute" className="block mb-2 text-sm   text-black font-bold">Your Institute Name</label>
                     <input type="text" name='institute' id="institute" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder=" Your Institute Name...." required />
                  </div>
                  {/* <div>
   
<label className="block mb-2 text-sm   text-gray-900 dark:text-white" htmlFor="file_input">Upload Institute Certificate,Skills Certificates (If Any) </label>
<input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

</div> */}
                  <div>
                     <label htmlFor="aadharno" className="block mb-2 text-sm    text-black font-bold">Aadhar No</label>
                     <input type="number" name='aadharno' id="aadharno" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Aadhar Number" />
                  </div>

                  <div>
                     <label htmlFor="licenseno" className="block mb-2 text-sm   text-black font-bold">Driving License Number (If Have) </label>
                     <input type="number" name='licenseno' id="licenseno" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Driving License " />
                  </div>
                  <div>
                     <label htmlFor="panno" className="block mb-2 text-sm   text-black font-bold">Pan Number </label>
                     <input type="text" name='panno' id="panno" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Driving License " />
                  </div>


                  <div>
                     <label htmlFor="emergencyno" className="block mb-2 text-sm   text-black font-bold">Emergency Phone Number</label>
                     <input type="text" name='emergencyno' id="emergencyno" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder=" Emergency Phone Number" />
                  </div>

                  <div>
                     <label htmlFor="address" className="block mb-2 text-sm   text-black font-bold">Your Address</label>
                     <textarea id="address" name='address' rows="4" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Address Here!"></textarea>
                  </div>
                  <button className="bg-black text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:shadow-black transition hover:-translate-y-1 hover:scale-110" >Submit </button>

               </form>
            </div>
         </section>
      </div>
   )
}

export default Form
