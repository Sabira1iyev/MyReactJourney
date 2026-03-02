import React from 'react'

const FlexCol = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center gap-4 bg-purple-950'>
            <div className='bg-red-500 h-10 w-40  '></div>
            <div className='bg-orange-500 h-10 w-40 '></div>
            <div className='bg-blue-500 h-10 w-40  '></div>
            <div className='bg-green-500 h-10 w-40 '></div>
        </div>
    )
}

export default FlexCol
