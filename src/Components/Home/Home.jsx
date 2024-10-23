import React from 'react'
import Api from '../Api/Api'
import About from '../About/About'
import './Home.css'
import { FaNapster } from "react-icons/fa6";
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom'

function Home() {
 
 

      
  return (
    <div>
 <BrowserRouter>
 <header>
 <h1 className='main-title'><FaNapster id='logo' /> Anime List</h1>
   <nav>
    <ul>
    <li><Link to='/' id='links'>Home</Link></li>
    <li><Link to='/about' id='links'>Notes</Link></li>
    </ul>
   </nav>
   </header>
<Routes>
<Route path='/' element={<Api/>}/>
<Route path='/about' element={<About/>}/>
</Routes>
</BrowserRouter>

    </div>
  )
}

export default Home