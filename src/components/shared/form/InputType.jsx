import React from 'react'

const InputType = ({
    labelText,
    labelFor,
    inputType,
    value,
    onChange,
    name,
}) => {
    return (
        <>
            <div>
                <label htmlFor={labelFor} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{labelText}</label>
                <input type={inputType} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    name={name}
                    value={value}
                    onChange={onChange}
                    required />
            </div>
        </>)
}

export default InputType