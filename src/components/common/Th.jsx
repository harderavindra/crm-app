import React from 'react'

const Th = ({ children, className = "" }) => {
    return (
        <th className={`py-2 px-3 bg-gray-200 border-b border-gray-300 text-left ${className}`}>
            {children}
        </th>
    )
}

export default Th