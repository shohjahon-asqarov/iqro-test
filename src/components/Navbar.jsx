import React from 'react'
import { logo } from '../assets/data'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='sticky top-0 bg-white z-50 border-b'>
            <div className="container flex justify-between py-5 md:py-6 items-center">
                <Link to="/">
                    <img className='w-32 sm:w-44' src={logo} alt="web king logo" />
                </Link>

                <div className='space-x-2'>
                    <a target='_blank' href='https://t.me/webking_result' className='btn-blue bg-light-green'>
                        <i className='bi bi-telegram mr-2'></i>
                        Natijalar
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navbar