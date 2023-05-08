// import React from 'react'
// import jsonData from './data.json'
// import { useState } from 'react'
// function Layout() {
// const [data, setData] = useState(jsonData)
//   return (
//     <>
  
// {data.map((data)=>(
//     <>
//     <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white ">
//   <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
//       <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
//           <header className="mb-4 lg:mb-6 not-format">
//               <address className="flex items-center mb-6 not-italic">
//                   <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
//                       <img className="mr-4 w-16 h-16 rounded-full" src={data.logo} alt="Jese Leos"/>
//                       <div>
//                           <a href="#" rel="author" className="text-xl font-bold text-gray-900 ">{data.name}</a>
//                           <p className="text-base font-light text-gray-500 dark:text-gray-400">{data.desc}</p>
                         
//                       </div>
//                   </div>
//               </address>
//               <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">{data.title}</h1>
//           </header>
//           <p className="lead">{data.about}</p>
//           <figure><img src={data.img}alt="Blue screen image"/>
//           </figure>
//           <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.title2}</h2>
//           <p>{data.desc2}</p>
         
//           <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.cause1.heading}</h2>
//           <p className="text-base font-light text-gray-500 dark:text-gray-400">{data.cause1.descp}</p>
                         
//           <ol>
             
//               <li><strong>{data.cause1.p1}</strong>{data.cause1.p1desc}</li>
//               <li><strong>{data.cause1.p2}</strong>{data.cause1.p2desc}</li>
//               <li><strong>{data.cause1.p3}</strong>{data.cause1.p3desc}</li>
//           </ol>

//           <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.cause2.heading}</h2>
//           <p className="text-base font-light text-gray-500 dark:text-gray-400">{data.cause2.descp}</p>
                         
//           <ol>
             
//               <li><strong>{data.cause2.p1}</strong>{data.cause2.p1desc}</li>
//               <li><strong>{data.cause2.p2}</strong>{data.cause2.p2desc}</li>
//               <li><strong>{data.cause2.p3}</strong>{data.cause2.p3desc}</li>
//               <li><strong>{data.cause2.p4}</strong>{data.cause2.p4desc}</li>
            
//           </ol>
//           <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.cause2.heading}</h2>
//           <p className="text-base font-light text-gray-500 dark:text-gray-400">{data.cause2.descp}</p>
                         
//           <ol>
             
//               <li><strong>{data.cause2.p1}</strong>{data.cause2.p1desc}</li>
//               <li><strong>{data.cause2.p2}</strong>{data.cause2.p2desc}</li>
//               <li><strong>{data.cause2.p3}</strong>{data.cause2.p3desc}</li>
//               <li><strong>{data.cause2.p4}</strong>{data.cause2.p4desc}</li>
            
//           </ol>
//           <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.cause3.heading}</h2>
//           <p className="text-base font-light text-gray-500 dark:text-gray-400">{data.cause3.descp}</p>
                         
//           <ol>
             
//               <li><strong>{data.cause3.p1}</strong>{data.cause3.p1desc}</li>
//               <li><strong>{data.cause3.p2}</strong>{data.cause3.p2desc}</li>
//               <li><strong>{data.cause3.p3}</strong>{data.cause3.p3desc}</li>
            
//           </ol>
        
//           <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.cause4.heading}</h2>
//           <p className="text-base font-light text-gray-500 dark:text-gray-400">{data.cause4.descp}</p>
                         
//           <ol>
             
//               <li><strong>{data.cause4.p1}</strong>{data.cause4.p1desc}</li>
//               <li><strong>{data.cause4.p2}</strong>{data.cause4.p2desc}</li>
//               <li><strong>{data.cause4.p3}</strong>{data.cause4.p3desc}</li>
//               <li><strong>{data.cause4.p4}</strong>{data.cause4.p4desc}</li>
            
//           </ol>
          
//           <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.conclusion.heading}</h2>
//           <p className="text-base font-medium">{data.conclusion.desc}</p>
                 
//       </article>
//   </div>
// </main>



// <aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 ">
//   <div className="px-4 mx-auto max-w-screen-xl">
//       <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
//       <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
//           <article className="max-w-xs">
//               <a href="#">
//                   <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 1"/>
//               </a>
//               <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
//                   <a href="#">Our first office</a>
//               </h2>
//               <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
//               <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
//                   Read in 2 minutes
//               </a>
//           </article>
//           <article className="max-w-xs">
//               <a href="#">
//                   <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2"/>
//               </a>
//               <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
//                   <a href="#">Enterprise design tips</a>
//               </h2>
//               <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
//               <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
//                   Read in 12 minutes
//               </a>
//           </article>
//           <article className="max-w-xs">
//               <a href="#">
//                   <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3"/>
//               </a>
//               <h2 className="mb-2 text-xl font-bold leading-tight  dark:text-white">
//                   <a href="#">We partnered with Google</a>
//               </h2>
//               <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
//               <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
//                   Read in 8 minutes
//               </a>
//           </article>
//           <article className="max-w-xs">
//               <a href="#">
//                   <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4"/>
//               </a>
//               <h2 className="mb-2 text-xl font-bold leading-tight  dark:text-white">
//                   <a href="#">Our first project with React</a>
//               </h2>
//               <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
//               <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
//                   Read in 4 minutes
//               </a>
//           </article>
//       </div>
//   </div>
// </aside>

//     </>
// ))}



//     </>
//   )
// }

// export default Layout


import React from 'react'
import { useState, useEffect} from 'react'
function Blog() {
const [blog, setBlog] = useState([])
const [loading, setLoading] = useState(true)
useEffect(() => {
fetch(`http:localhost:5173/blogs/blog/${match.params.pid}`)
.then(response=>response.json())
.then(json=>setBlog(json))
.then(json=>setLoading(false))
},)

  return (
    <>
  
{data.map((data)=>(
    <>
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white ">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img className="mr-4 w-16 h-16 rounded-full" src={data.logo} alt="Jese Leos"/>
                      <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 ">{data.name}</a>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400">{data.desc}</p>
                         
                      </div>
                  </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">{data.title}</h1>
          </header>
          <p className="lead">{data.about}</p>
          <figure><img src={data.img}alt="Blue screen image"/>
          </figure>
          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.title2}</h2>
          <p>{data.desc2}</p>
         
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.cause1.heading}</h2>
          <p className="text-base font-light text-gray-500 dark:text-gray-400">{data.cause1.descp}</p>
                         
          <ol>
             
              <li><strong>{data.cause1.p1}</strong>{data.cause1.p1desc}</li>
              <li><strong>{data.cause1.p2}</strong>{data.cause1.p2desc}</li>
              <li><strong>{data.cause1.p3}</strong>{data.cause1.p3desc}</li>
          </ol>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.cause2.heading}</h2>
          <p className="text-base font-light text-gray-500 dark:text-gray-400">{data.cause2.descp}</p>
                         
          <ol>
             
              <li><strong>{data.cause2.p1}</strong>{data.cause2.p1desc}</li>
              <li><strong>{data.cause2.p2}</strong>{data.cause2.p2desc}</li>
              <li><strong>{data.cause2.p3}</strong>{data.cause2.p3desc}</li>
              <li><strong>{data.cause2.p4}</strong>{data.cause2.p4desc}</li>
            
          </ol>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.cause2.heading}</h2>
          <p className="text-base font-light text-gray-500 dark:text-gray-400">{data.cause2.descp}</p>
                         
          <ol>
             
              <li><strong>{data.cause2.p1}</strong>{data.cause2.p1desc}</li>
              <li><strong>{data.cause2.p2}</strong>{data.cause2.p2desc}</li>
              <li><strong>{data.cause2.p3}</strong>{data.cause2.p3desc}</li>
              <li><strong>{data.cause2.p4}</strong>{data.cause2.p4desc}</li>
            
          </ol>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.cause3.heading}</h2>
          <p className="text-base font-light text-gray-500 dark:text-gray-400">{data.cause3.descp}</p>
                         
          <ol>
             
              <li><strong>{data.cause3.p1}</strong>{data.cause3.p1desc}</li>
              <li><strong>{data.cause3.p2}</strong>{data.cause3.p2desc}</li>
              <li><strong>{data.cause3.p3}</strong>{data.cause3.p3desc}</li>
            
          </ol>
        
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.cause4.heading}</h2>
          <p className="text-base font-light text-gray-500 dark:text-gray-400">{data.cause4.descp}</p>
                         
          <ol>
             
              <li><strong>{data.cause4.p1}</strong>{data.cause4.p1desc}</li>
              <li><strong>{data.cause4.p2}</strong>{data.cause4.p2desc}</li>
              <li><strong>{data.cause4.p3}</strong>{data.cause4.p3desc}</li>
              <li><strong>{data.cause4.p4}</strong>{data.cause4.p4desc}</li>
            
          </ol>
          
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-2xl ">{data.conclusion.heading}</h2>
          <p className="text-base font-medium">{data.conclusion.desc}</p>
                 
      </article>
  </div>
</main>



<aside aria-label="Related articles" className="py-8 lg:py-24 bg-gray-50 ">
  <div className="px-4 mx-auto max-w-screen-xl">
      <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">Related articles</h2>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" className="mb-5 rounded-lg" alt="Image 1"/>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Our first office</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 2 minutes
              </a>
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2"/>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
                  <a href="#">Enterprise design tips</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 12 minutes
              </a>
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png" className="mb-5 rounded-lg" alt="Image 3"/>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight  dark:text-white">
                  <a href="#">We partnered with Google</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 8 minutes
              </a>
          </article>
          <article className="max-w-xs">
              <a href="#">
                  <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png" className="mb-5 rounded-lg" alt="Image 4"/>
              </a>
              <h2 className="mb-2 text-xl font-bold leading-tight  dark:text-white">
                  <a href="#">Our first project with React</a>
              </h2>
              <p className="mb-4 font-light text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone many changes! After months of preparation.</p>
              <a href="#" className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
                  Read in 4 minutes
              </a>
          </article>
      </div>
  </div>
</aside>

    </>
))}



     </>
   )
 }

 export default Blog


