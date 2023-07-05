"use client"
import Link from 'next/link'

const page = () => {

    const getCookieValue = (cookieName) => {
        const cookieString = document.cookie;
        const cookieArray = cookieString.split(';');

        let cookieValue = null;
        cookieArray.forEach(cookie => {
            const [name, value] = cookie.split('=');
            const trimmedName = name.trim();
            if (trimmedName === cookieName) {
                cookieValue = value.trim();
            }
        });

        return cookieValue;
    };

    // Usage
    const myCookie = getCookieValue('id');
    console.log(myCookie);
    if (myCookie) {
        return (
            <div>
                <h1>Welcome, user!</h1>
            </div>
        )
    } else {
        return (
            <div className='flex justify-center items-center flex-grow flex-col gap-2'>
                <h2 className='font-semibold text-2xl uppercase'>You need to login to be able checkout...</h2>
                <Link href='/login' className="bg-org text-white px-4 py-2 font-semibold" >Click Here to Login</Link>
            </div>
        )
    }
}

export default page