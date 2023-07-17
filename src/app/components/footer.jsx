import React from 'react'

const Footer = () => {
    return (
        <footer className='py-10 border-t border-slate-700/50'>
            <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-between items-center' >
                <ul className='flex justify-center items-center gap-4'>
                    <li><a href="https://www.github.com/ohyajk"><i className='bx bxl-github text-5xl hover:text-org'></i></a></li>
                    <li><a href="https://www.linkedin.com/in/ohyajk"><i className='bx bxl-linkedin text-5xl hover:text-org'></i></a></li>
                    <li><a href="https://www.instagram.com/ohyajk"><i className='bx bxl-instagram text-5xl hover:text-org'></i></a></li>
                </ul>
                <div>
                    <h2 className='sm:text-xl font-bold'>MADE WITH ❤️ BY JITENDER KUMAR</h2>
                    <span className='sm:text-xl font-bold flex items-center gap-1'>
                        <p>DESIGN BY CHINMAYEE K. :-</p>
                        <a href="https://www.instagram.com/ux.chinmayee/"><i className='bx bxl-instagram text-3xl hover:text-org'></i></a>
                        <a href="https://www.linkedin.com/in/chinmayee-khavale/"><i className='bx bxl-linkedin text-3xl hover:text-org'></i></a>
                    </span>
                </div>
                <p className='text-center text-sm'>&#169; &#174; <a className='text-org font-semibold border-b-2 border-white hover:border-org hover:text-white' href="https://www.nike.com" target="_blank" rel="noopener noreferrer">Nike & Air Jordan.</a> All logo, images and brand names are property of <a className='text-org font-semibold border-b-2 border-white hover:border-org hover:text-white' href="https://www.nike.com" target="_blank" rel="noopener noreferrer">Nike, Inc.</a><br /> I am not in any way affiliated to Nike or any brand shown in my project.<br />I invoke section 107 of the <a className='text-org font-semibold border-b-2 border-white hover:border-org hover:text-white' href="https://copyright.gov.in/Exceptions.aspx" target="_blank" rel="noopener noreferrer">Copyright Act 1976,</a> India</p>
            </div>
        </footer>
    )
}

export default Footer