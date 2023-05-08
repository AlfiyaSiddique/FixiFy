import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import blogs from './data.json'
const data =[ 
{
"id": 1,
"category":"Laptops",
"date":"12 March 2023",
"heading":"4 Common Causes Of Blue Screen",
"desc":"A blue screen of death (BSOD) is an error screen that is displayed on a Windows computer system after a fatal system error. The error message usually includes the name of the file that caused the error, and can also include other important information such as memory addresses and process identifiers."
},
{
"id": 2,
"category":"Laptops",
"date":"12 March 2023",
"heading":"4 Common Causes Of Blue Screen",
"desc":"A blue screen of death (BSOD) is an error screen that is displayed on a Windows computer system after a fatal system error. The error message usually includes the name of the file that caused the error, and can also include other important information such as memory addresses and process identifiers."
},
{
"id": 3,
"category":"Laptops",
"date":"12 March 2023",
"heading":"4 Common Causes Of Blue Screen",
"desc":"A blue screen of death (BSOD) is an error screen that is displayed on a Windows computer system after a fatal system error. The error message usually includes the name of the file that caused the error, and can also include other important information such as memory addresses and process identifiers."
}
]
function Blogs() {``
  const [blog, setBlog] = useState(blogs)
  // const [loading, setLoading] = useState(false)


  return (

 <>
 
 <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-gray-900">Say
        <br className="hidden lg:inline-block"/> Goodbye 
        <br className="hidden lg:inline-block"/>Frustrations
      </h1>
      <p className="mb-8 leading-relaxed"> Don't let technical issues bring you down. Our blog is here to help you troubleshoot and solve common problems with desktops, laptops, and printers. With our easy-to-follow guides and expert advice, you can say goodbye to tech frustrations for good.</p>
    
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://i.postimg.cc/ZK1X0jv8/illustration-characters-fixing-cogwheel-53876-40796.jpg"/>
    </div>
  </div>
</section>

  {data.map((data)=>(
   
  
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-6 mx-auto" >
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap" >
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col " >
              <span className="font-semibold title-font text-gray-700">{data.category}</span>
              <span className="mt-1 text-gray-500 text-sm">{data.date}</span>
            </div>
            <div className="md:flex-grow">
              <h2 className="text-2xl font-medium text-black title-font mb-2">{data.heading}</h2>
              <p className="leading-relaxed">{data.desc}</p>
              <Link className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer"
               to={`blog/${data.id}`} key={data.id}>
              Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
         
        </div>
      </div>
      <hr />
    </section>
  ))}
   
  );

 </>

  )
}

export default Blogs

