import React from 'react'

const Button = ({ onClick, children, className = "", type = "button", disabled }) => {
    const baseStyles = ` px-4 h-[40px] py-2 ${disabled ? " bg-gray-400 cursor-not-allowed hover:bg-gray-400" : "bg-brand-green text-white  hover:bg-primary  focus:ring-primary"}  rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition flex gap-2 items-center`;

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles}  ${className}`}>{children}</button>
    )
}

export default Button