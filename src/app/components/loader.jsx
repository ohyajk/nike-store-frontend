import React from 'react'

const Loader = () => {
    return (
        <div className='absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center'>
            <i className='bx bx-loader-circle bx-spin bx-flip-vertical text-org text-6xl' ></i>
        </div>
    )
}

export default Loader