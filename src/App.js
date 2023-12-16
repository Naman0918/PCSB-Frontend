import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react'
import "tailwindcss/tailwind.css"
import Search from './components/Search';
import Domain from './components/Domain';



export default class App extends Component {
  render() {

    return (
      <>
        <Navbar />
        {/* <CenteredComponet/> */}
        <div className='heading'>
          <h1 class="animate-charcter" >PCSB INTERACTION PORTAL</h1>
        </div>
        <div className="centered-div">
          <Search />
        </div>
        <Domain/>

      </>

    )
  }
}




