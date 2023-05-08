import React from 'react'
import Swal from "sweetalert2";
import axios from 'axios';
function handleClick(event) {
    event.preventDefault();
    var customer = {
        name: event.target.elements.name.value
        , phone: event.target.elements.phone.value
        , equipment: event.target.elements.equipment.value
        , os: event.target.elements.os.value
        // , modelno: event.target.elements.modelno.value
        , serialno: event.target.elements.serialno.value
        , status: event.target.elements.status.value
        , location: event.target.elements.location.value
        , previous: event.target.elements.previous.value

    }
    axios.post("https://fixifybackend.onrender.com/customer", customer).then(resp => {
        if (resp.status == 200) {
            {
                Swal.fire({
                    title: 'Success',
                    icon: 'success',
                    type: 'success',
                    text: 'Your data has been submitted.',
                });
                // window.location.reload(false)

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
function Customer() {
    return (
        <div>
            <section className="bg-white ">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 "> Need a Repair? Fill Out Our Form</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Welcome to our repair request form. Please provide us with the details of your laptop, desktop or printer issue so we can help diagnose and repair the problem quickly and efficiently. Fill out the form below with as much detail as possible, and be sure to include your device type, brand, model number, and any relevant warranty information. Thank you for choosing our repair service!</p>
                    <form className="space-y-8" onSubmit={handleClick} >
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-bold text-black ">Your Name</label>
                            <input type="text" name='name' id="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Lewis" required />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm  font-bold text-black ">Phone No</label>
                            <input type="text" name='phone' id="phone" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your phone number" required />
                        </div>

                        <div>

                            <label htmlFor="equipment" className="block mb-2 text-sm font-bold text-black ">Select an Equipment Type</label>
                            <select id="equipment" name='equipment' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required>
                                <option value="desktop">Desktop</option>
                                <option value="laptop">Laptop</option>
                                <option value="printer">Printer</option>
                            </select>

                        </div>

                        <div>
                            <label htmlFor="os" className="block mb-2 text-sm  font-bold text-black ">Select OS Type</label>
                            <select id="os" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" >
                                <option value="linux">Linux</option>
                                <option value="windows">Windows</option>
                                <option value="macos">MacOS</option>
                                <option value="other">Other</option>
                            </select>

                        </div>

                        {/* <div>
                            <label htmlFor="modelno" className="block mb-2 text-sm  font-bold text-black ">Modal Number</label>
                            <input type="number" name='modelno' id="modelno" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your Modal Number"  />
                        </div> */}
                        <div>
                            <label htmlFor="serialno" className="block mb-2 text-sm  font-bold text-black ">Serial Number</label>
                            <input type="number" name='serialno' id="serialno" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your Serial Number" />
                        </div>

                        <div>
                            <label htmlFor="status" className="block mb-2 text-sm  font-bold text-black ">Warranty Status </label>
                            <select id="status" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" >
                                <option value="under warranty">Under Warranty</option>
                                <option value="out of warranty">OutOf Warranty</option>
                            </select>

                        </div>


                        <div>

                            <label htmlFor="location" className="block mb-2 text-sm  font-bold text-black ">Select Your Nearest Location</label>
                            <select id="location" name='location' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required >
                                <option value="mumbai">Mumbai</option>
                                <option value="navi mumbai">Navi Mumbai</option>
                                <option value="thane">Thane</option>
                            </select>

                        </div>
                        <div>

                            <label htmlFor="previous" className="block mb-2 text-sm  font-bold text-black ">Previous Repair </label>
                            <textarea id="previous" name='previous' rows="4" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Previous Repairs details if any..."></textarea>

                        </div>
                        <button className="bg-black text-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:shadow-black transition hover:-translate-y-1 hover:scale-110" >Submit </button>

                    </form>
                </div>
            </section>
        </div>
    )
}

export default Customer
