// import React from 'react'


// const FancyButton = (props) => {

//     const { children, large } = props;

//     const largeStyle = large ? "text-3xl rounded-full" : "text-base rounded-md";

//     return (

//         <button className={`bg-blue-200 border-2 border-blue-700 text-blue-700 px-10 py-2 m-4 rounded-md${largeStyle}`}>
//             {children}
//         </button>
//     );
// }

// export default FancyButton;


import React from 'react'

const FancyButton = ({ style, children }) => {

    const buttonStlye = style ? "text-3xl bg-red-600 text-white px-6 py-2 rounded-md mb-3"
        : "text-2xl bg-blue-500 text-green px-5 py-2 rounded-full mt-2";


    return (
        <div>
            <button className={buttonStlye}>{children}</button>
        </div>
    )
}

export default FancyButton;
