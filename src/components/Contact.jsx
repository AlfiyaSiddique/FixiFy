import React from 'react'
import { Link } from 'react-router-dom'
function Contact() {
  return (
   <>
        <div className="text-center mt-20">
        
        <h1 className="sm:text-3xl text-2xl font-bold title-font text-black  mb-4">Select Your Requirement Type . 
  </h1>
        <p className="text-black leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-opacity-80">At our company, we value open communication and believe that every voice deserves to be heard. We are committed to providing exceptional customer service and look forward to hearing from you. Our knowledgeable and friendly team is here to assist you with any questions or concerns you may have.</p>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-gray -500 inline-flex"></div>
        </div>
      </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
    
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
     
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
       <Link to={'/engineer'}> <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white-800   mb-5 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,15c-2.67,0-8,1.34-8,4v2h16v-2C17,16.34,11.67,15,9,15z"/><path d="M22.1,6.84c0.01-0.11,0.02-0.22,0.02-0.34c0-0.12-0.01-0.23-0.03-0.34l0.74-0.58c0.07-0.05,0.08-0.15,0.04-0.22l-0.7-1.21 c-0.04-0.08-0.14-0.1-0.21-0.08L21.1,4.42c-0.18-0.14-0.38-0.25-0.59-0.34l-0.13-0.93C20.36,3.06,20.29,3,20.2,3h-1.4 c-0.09,0-0.16,0.06-0.17,0.15L18.5,4.08c-0.21,0.09-0.41,0.21-0.59,0.34l-0.87-0.35c-0.08-0.03-0.17,0-0.21,0.08l-0.7,1.21 c-0.04,0.08-0.03,0.17,0.04,0.22l0.74,0.58c-0.02,0.11-0.03,0.23-0.03,0.34c0,0.11,0.01,0.23,0.03,0.34l-0.74,0.58 c-0.07,0.05-0.08,0.15-0.04,0.22l0.7,1.21c0.04,0.08,0.14,0.1,0.21,0.08l0.87-0.35c0.18,0.14,0.38,0.25,0.59,0.34l0.13,0.93 C18.64,9.94,18.71,10,18.8,10h1.4c0.09,0,0.16-0.06,0.17-0.15l0.13-0.93c0.21-0.09,0.41-0.21,0.59-0.34l0.87,0.35 c0.08,0.03,0.17,0,0.21-0.08l0.7-1.21c0.04-0.08,0.03-0.17-0.04-0.22L22.1,6.84z M19.5,7.75c-0.69,0-1.25-0.56-1.25-1.25 s0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25S20.19,7.75,19.5,7.75z"/><path d="M19.92,11.68l-0.5-0.87c-0.03-0.06-0.1-0.08-0.15-0.06l-0.62,0.25c-0.13-0.1-0.27-0.18-0.42-0.24l-0.09-0.66 C18.12,10.04,18.06,10,18,10h-1c-0.06,0-0.11,0.04-0.12,0.11l-0.09,0.66c-0.15,0.06-0.29,0.15-0.42,0.24l-0.62-0.25 c-0.06-0.02-0.12,0-0.15,0.06l-0.5,0.87c-0.03,0.06-0.02,0.12,0.03,0.16l0.53,0.41c-0.01,0.08-0.02,0.16-0.02,0.24 c0,0.08,0.01,0.17,0.02,0.24l-0.53,0.41c-0.05,0.04-0.06,0.11-0.03,0.16l0.5,0.87c0.03,0.06,0.1,0.08,0.15,0.06l0.62-0.25 c0.13,0.1,0.27,0.18,0.42,0.24l0.09,0.66C16.89,14.96,16.94,15,17,15h1c0.06,0,0.12-0.04,0.12-0.11l0.09-0.66 c0.15-0.06,0.29-0.15,0.42-0.24l0.62,0.25c0.06,0.02,0.12,0,0.15-0.06l0.5-0.87c0.03-0.06,0.02-0.12-0.03-0.16l-0.52-0.41 c0.01-0.08,0.02-0.16,0.02-0.24c0-0.08-0.01-0.17-0.02-0.24l0.53-0.41C19.93,11.81,19.94,11.74,19.92,11.68z M17.5,13.33 c-0.46,0-0.83-0.38-0.83-0.83c0-0.46,0.38-0.83,0.83-0.83s0.83,0.38,0.83,0.83C18.33,12.96,17.96,13.33,17.5,13.33z"/><path d="M4.74,9h8.53c0.27,0,0.49-0.22,0.49-0.49V8.49c0-0.27-0.22-0.49-0.49-0.49H13c0-1.48-0.81-2.75-2-3.45V5.5 C11,5.78,10.78,6,10.5,6S10,5.78,10,5.5V4.14C9.68,4.06,9.35,4,9,4S8.32,4.06,8,4.14V5.5C8,5.78,7.78,6,7.5,6S7,5.78,7,5.5V4.55 C5.81,5.25,5,6.52,5,8H4.74C4.47,8,4.25,8.22,4.25,8.49v0.03C4.25,8.78,4.47,9,4.74,9z"/><path d="M9,13c1.86,0,3.41-1.28,3.86-3H5.14C5.59,11.72,7.14,13,9,13z"/></svg>
        </div></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-black font-bold text-lg title-font mb-3">Enroll for a job</h2>
          <p className="leading-relaxed text-base">Want to join as an employee in our company,go through this</p>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <Link to={'/customer'}><div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white   mb-5 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M112.1 79.03C122.3 88.4 122.3 103.6 112.1 112.1C103.6 122.3 88.4 122.3 79.03 112.1L7.029 40.97C-2.343 31.6-2.343 16.4 7.029 7.029C16.4-2.343 31.6-2.343 40.97 7.029L112.1 79.03zM599 7.029C608.4-2.343 623.6-2.343 632.1 7.029C642.3 16.4 642.3 31.6 632.1 40.97L560.1 112.1C551.6 122.3 536.4 122.3 527 112.1C517.7 103.6 517.7 88.4 527 79.03L599 7.029zM7.029 471L79.03 399C88.4 389.7 103.6 389.7 112.1 399C122.3 408.4 122.3 423.6 112.1 432.1L40.97 504.1C31.6 514.3 16.4 514.3 7.029 504.1C-2.343 495.6-2.343 480.4 7.029 471V471zM527 432.1C517.7 423.6 517.7 408.4 527 399C536.4 389.7 551.6 389.7 560.1 399L632.1 471C642.3 480.4 642.3 495.6 632.1 504.1C623.6 514.3 608.4 514.3 599 504.1L527 432.1zM256 192C256 156.7 284.7 128 320 128C355.3 128 384 156.7 384 192C384 227.3 355.3 256 320 256C284.7 256 256 227.3 256 192zM265.5 289.5C266.3 289.3 267.1 289.1 267.1 288.1C271.9 288.3 275.9 288 280 288H360C364.1 288 368.1 288.3 372 288.1C396.6 293.1 416.9 309.7 426.3 331.1C426.9 333.3 427.4 334.6 427.9 336C430.6 343.5 432 351.6 432 360C432 373.3 421.3 384 408 384H232C218.7 384 208 373.3 208 360C208 351.6 209.4 343.5 212.1 336C220.4 312.5 240.6 294.6 265.5 289.5V289.5zM127.8 176C127.8 149.5 149.3 128 175.8 128C202.3 128 223.8 149.5 223.8 176C223.8 202.5 202.3 224 175.8 224C149.3 224 127.8 202.5 127.8 176V176zM218.7 256C227.8 256 236.5 258.3 244 262.4C211.6 274.3 186.8 301.9 178.8 336H122.7C107.9 336 96 324.1 96 309.3C96 279.9 119.9 256 149.3 256H218.7zM517.3 336H461.2C453.2 301.9 428.4 274.3 395.1 262.4C403.5 258.3 412.2 256 421.3 256H490.7C520.1 256 544 279.9 544 309.3C544 324.1 532.1 336 517.3 336H517.3zM416 176C416 149.5 437.5 128 464 128C490.5 128 512 149.5 512 176C512 202.5 490.5 224 464 224C437.5 224 416 202.5 416 176z"/></svg>
        </div></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-black font-bold text-lg title-font mb-3">Need a Repairer </h2>
          <p className="leading-relaxed text-base">Want a repairer to repair your equipment, go through this form</p>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <Link to={'/complain'}><div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-white   mb-5 flex-shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21,12.22C21,6.73,16.74,3,12,3c-4.69,0-9,3.65-9,9.28C2.4,12.62,2,13.26,2,14v2c0,1.1,0.9,2,2,2h1v-6.1 c0-3.87,3.13-7,7-7s7,3.13,7,7V19h-8v2h8c1.1,0,2-0.9,2-2v-1.22c0.59-0.31,1-0.92,1-1.64v-2.3C22,13.14,21.59,12.53,21,12.22z"/><circle cx="9" cy="13" r="1"/><circle cx="15" cy="13" r="1"/><path d="M18,11.03C17.52,8.18,15.04,6,12.05,6c-3.03,0-6.29,2.51-6.03,6.45c2.47-1.01,4.33-3.21,4.86-5.89 C12.19,9.19,14.88,11,18,11.03z"/></svg>
        </div></Link>
        </div>
        <div className="flex-grow">
          <h2 className="text-black font-bold text-lg title-font  mb-3">Problem with Equipment</h2>
          <p className="leading-relaxed text-base">Want to get service's for corrupt device, go through this</p>
         
       
        </div>
      </div>
    
    </div>
    
   </>
  )
}

export default Contact
