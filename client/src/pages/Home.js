import logo from '../assets/images/logo.png'
import main from '../assets/images/main.jpeg'
import Wrapper from '../assets/images/Wrappers/Home'


const Home = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="Career HuntR" className="logo" width="70" height="50" />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            career <span>track</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <button className='btn btn-hero'>
            Login/Register
          </button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Home;