import { Logo } from '../components';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/homeCss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Wrapper>
      <nav>
       <Logo/>
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            career <span>healer</span> app
          </h1>
          <p>
            <h4>Organize your Job Search</h4>
            Track your Job applications and keep your Job Search organized, all in one place.
          </p>
          <Link to="/register" className='btn btn-hero'>
            Sign up for free
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Home;