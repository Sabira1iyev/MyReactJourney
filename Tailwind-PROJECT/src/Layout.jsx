import React from 'react'



const Layout = (props) => {

    const { quote } = props;
    console.log(quote);

    return (
        <div className='flex flex-col border border-red-400 m-4'>

            <div className='bg-cyan-600 p-4 w-80'>
                {quote.text}
            </div>

            <div className='bg-slate-600 p-4'>
                {quote.author}
                {quote.bio}
            </div>


        </div>
    )
}

export default Layout
