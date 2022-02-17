import Wrapper from '../assets/wrappers/smallBarCss'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Logo from './Logo'
import NavLinks from './NavLinks'

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useAppContext()
  return (
    <Wrapper>
      <div className={
        showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
      }>
        <div className='content'>
          <button type="button" className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
         <NavLinks toggleSidebar={toggleSidebar}></NavLinks>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar