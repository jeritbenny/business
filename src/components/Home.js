import React from 'react'
import profile from"../images/profile.png"
import logo from "../images/logo-nobackground.png";
import './Home.css'
function Home() {
  return (
    <div className='App'>
        <div className='card_logo'>
        <img className='logo' src={logo} alt='Logo'/>
      </div>
      <div className='row'>  
      <div className='col-12 col-lg-6 col-md-6 col-sm-12'>
      <img className='img' src={profile}/>
        </div>  
         <div className='col-12 col-lg-6  col-md-6 col-sm-12'>
          <h1 className='hh'>Subash Babu</h1>
          </div>
      </div>
      <div className='parent'>
      <button className='border border-warning py-2 px-4 btn rounded-pill text-white'>Add Contact</button>
      </div>
     {/* icons */}

     <div className='parent'>
      <div className='child text-warning'><i class="fa-solid fa-globe"></i></div>
      <div className='child text-warning'><i class="fa-brands fa-instagram"></i></div>
      <div className='child text-warning'><i class="fa-brands fa-twitter"></i></div>
      <div className='child text-warning'><i class="fa-brands fa-facebook"></i></div>
      <div className='child text-warning'><i class="fa-solid fa-share-nodes"></i></div>
     </div>

        <div className='more'>
          <p className='text-white fs-1'>SEE MORE</p>
        <div className='icon text-warning fs-1'><i class="fa-solid fa-circle-down"></i> </div>
        </div>
    </div>
  )
}

export default Home