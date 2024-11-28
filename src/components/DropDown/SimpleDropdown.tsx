import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'

type childrenType = {
    title?:string,
    children: React.ReactNode
}

const SimpleDropdown = ({ title='PRICE',children }: childrenType) => {
    const [handleShow, setHandleShow] = useState(false);

    return (
        <div className='px-4 mt-4'>
            <div onClick={() => setHandleShow(!handleShow)} className='flex items-center justify-between mb-2 cursor-pointer'>
                <h1>{title}</h1>
                <IoMdArrowDropdown />
            </div>
            {handleShow && (
                <div className='flex flex-col gap-2'>
                    {children}
                </div>
            )}
        </div>
    )
}

export default SimpleDropdown