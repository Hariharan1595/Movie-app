import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caretIcon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'




const Navbar = () => {
  const nav = useRef()

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if(window.scrollY > 80 ){
      nav.current.classList.add('nav-dark')
    }
    else{
      nav.current.classList.remove('nav-dark')
    }
  })

},[])

  return (
    <div className='navbar'ref={nav}>
      <div className="nav-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV Shoes</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>

      </div>
      <div className="nav-right">
        <img src={searchIcon} alt="icon" className='icon' />
        <p>Children</p>
        <img src={bellIcon} alt="icon" className='icon' />
        <div className="nav-profile">
          <img src={profile} alt="icon" className='profile' />
          <img src={caretIcon} alt="icon" />
          <div className="drop-down">
            <p onClick={()=>{logout()}}>sign out</p>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}

export default Navbar
