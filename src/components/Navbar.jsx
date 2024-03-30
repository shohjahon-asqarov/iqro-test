// import image
import { logo } from '../assets/data';

// react router
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className='sticky top-0 bg-white z-50 border-b'>
            <div className="container flex justify-between py-5 md:py-6 items-center">
                <Link to="/">
                    <img className='w-32 sm:w-44' src={logo} alt="iqro logo" />
                </Link>

                <a target='_blank' rel='noreferrer' href='https://t.me/webking_result' className='btn-blue bg-light-green'>
                    <i className='bi bi-telegram mr-2'></i>
                    <span>Natijalar</span>
                </a>
            </div>
        </header>
    )
}

export default Navbar