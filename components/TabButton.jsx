import React from 'react'

const TabButton = ({active, selectTab, children}) => {
const buttonClasses = active ? "text-[#c73d3d]" : "text-[#ADB7BE]"
  return (
    <button onClick= {selectTab}> 
        <p className={`mr-6 hover:text-[#c73d3d] hover:underline font-semibold text-2xl ${buttonClasses}`}>
            {children}
        </p>
    </button>
  )
}

export default TabButton