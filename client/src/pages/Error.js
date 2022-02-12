import { Link } from 'react-router-dom';
import img from '../assets/images/error404.svg'
import Wrapper from '../assets/wrappers/errorCss'

const Error = () => {
    return (
        <Wrapper className='full-page'>
            <div>
                <img src={img} alt='not found' />
                <Link to='/'>back home</Link>
            </div>
         </Wrapper>
    )
}
export default Error;