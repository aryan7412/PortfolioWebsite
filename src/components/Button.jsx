import React from 'react'

function Button({ ButtonText , ButtonLogo:Icon }) {
  return (
    <div className='w-50 h-10 border rounded-3xl gap-3 bg-black text-white flex flex-row items-center justify-center space-x-2'>
        { ButtonText }
        {Icon && <Icon className="text-white w-4 h-4" />}
    </div>
  )
}

export default Button