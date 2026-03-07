import React from 'react'



const Layout = (props) => {

    const { quote } = props;

    return (
        <div className='flex flex-col m-4'>

            <div className='bg-cyan-600 py-8 px-6 w-[400px] text-cyan-200 rounded-t-lg'>
                {quote.text}
            </div>

            <div className='bg-stone-100 p-4 flex flex-col items-center rounded-b-lg 
            border-stone-200'>
                <div className='text-cyan-600 text-3xl mb-2'>
                    {quote.author}
                </div>
                <div className='text-slate-400'>
                    {quote.bio}
                </div>
            </div>
        </div>
    )
}

export default Layout
