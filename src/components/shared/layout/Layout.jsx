import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <>
            <div>
                <Header />
            </div>

            <div className='flex'>
                <div className=' '>
                    <Sidebar />

                </div>
                <div className=''>
                    {children}


                </div>
            </div>
        </>
    )
}

export default Layout