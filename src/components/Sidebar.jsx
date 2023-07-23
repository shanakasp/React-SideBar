import React from 'react'
import Icon from "../Images/Icon.svg"
import Profile from "../Images/profile.png"
import Dashboard from "../Images/dashboard.svg"
import Transactions from "../Images/transactions.svg"
import Performance from "../Images/performance.svg"
import News from "../Images/news.svg"
import Settings from "../Images/settings.svg"
import Support from '../pages/Support'


const Sidebar=() => {
  return (
    <div className='sidebar'>
    <div className='logoContainer'>
     <img src={Icon} alt='Icon' className='logo' /></div>
     <h2 className='title'>Prince SP</h2>
     <div className='burgerContainer'>
     <div className='burgerTrigger'></div>
     <div className='burgerMenu'></div> 
     </div>
    <div className='profileContainer'>
      <img src={Profile} alt='profile' className='profile'/>
      <p className='name'>Hello Shanka</p>
      <p>shanakaprince@gmail</p>
    </div>


     </div>

   
  )
}

export default Sidebar