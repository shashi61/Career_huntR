import { useState } from 'react'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Logo from './Logo'
import Wrapper from '../assets/wrappers/navBarCss'
const Navbar = () => {
  const { toggleSidebar } = useAppContext()
  return (
    <Wrapper>
      <div className='nav-center'>
        <button
        type="button"
          className='toggle-btn'
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>

        <div className='btn-container'>
          <button type="button" className='btn' onClick={() => console.log('show logout') }>
            <FaUserCircle />
            Shashi 
            <FaCaretDown />
          </button>
          <div className='dropdown show-dropdown'>
            <button
            type="button"
              onClick={() => console.log('logout user')}
              className='dropdown-btn'
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Navbar