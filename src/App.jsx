import React from 'react'
import Blogs from './views/Blogs'
// import Layout from './views/Blog'
import Team from './views/Team'
import Form from './components/Form'
// import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About.jsx'
import Academy from './components/Academy'
import Customer from './components/Customer'
import EngineerForm from './components/EngineerForm'
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage'
import { gapi } from 'gapi-script'
import './App.css'
import Contact from './components/Contact'
import PrivacyPolicy from './Legal/PrivacyPolicy'
import Blog from './views/Blog'
import PageNotFound from './views/PageNotFound'
 
function App() {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "*****.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });
  
  return (
   <>
   <Header/>
   <Routes>
         <Route path="/" element={<Homepage/>}/>
         <Route path="/blogs" element={<Blogs/>} />
         <Route path="/about" element={<About/>}/>
         <Route path="/blog/:pid" element={<Blog/>} />
         <Route path="/team" element={<Team/>} />
         <Route path="/complain" element={<Form/>} />
         <Route path="/academy" element={<Academy/>} />
         <Route path="/customer" element={<Customer/>} />
         <Route path="/contact" element={<Contact/>} />
         {/* <Route path="/login" element={<Login/>} /> */}
         <Route path="/engineer" element={<EngineerForm/>} />
         <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
         <Route path="*" element={<PageNotFound />} />

       </Routes> 

       <Footer/>
   </>
  )
}

export default App
