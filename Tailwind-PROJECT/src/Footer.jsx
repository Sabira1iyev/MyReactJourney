import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-between bg-violet-100 text-violet-400 px-4'>
            <div>
                (this site is not real)
            </div>
            <div>
                made with <i className="fa-solid fa-heart text-red-600"></i>
                <a href="https://tailwindcss.com" target='_blank'
                    className='text-violet-500 mx-2 underline'>Tailwind css</a>
            </div>
            <div>
                by Sabir Aliyev
            </div>
        </div>
    )
}

export default Footer
