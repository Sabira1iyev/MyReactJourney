import React from 'react'

const Layout3 = (props) => {

    const { quote } = props;

    return (
        <div className='flex flex-col items-start'>
            <div className="bg-rose-400 text-white p-6 text-lg rounded-t-lg rounded-br-lg">
                {quote.text}
            </div>

            <div className="border-l-2 border-b-2 border-r-2 border-rose-400 p-4 bg-rose-100 rounded-b-lg">
                <div className='text-rose-700 text-lg'>
                    {quote.author}
                </div>
                <div className='text-rose-500'>
                    {quote.bio}
                </div>
            </div>

        </div>
    )
}

export default Layout3
