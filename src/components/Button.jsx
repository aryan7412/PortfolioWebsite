import React from 'react'

function Button({ ButtonText, ButtonLogo: Icon, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (ButtonText === "Download Resume") {
      // Replace with your actual resume file path
      window.open('/Aryan Samal V2.pdf', '_blank');
    }
  };

  return (
    <button 
      onClick={handleClick}
      className='w-50 h-10 border rounded-3xl gap-3 bg-black text-white flex flex-row items-center justify-center space-x-2 hover:bg-gray-800 transition-colors duration-200'
    >
      {ButtonText}
      {Icon && <Icon className="text-white w-4 h-4" />}
    </button>
  )
}

export default Button