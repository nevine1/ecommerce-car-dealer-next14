"use client"
import { CustomButtonProps } from '../../types/page'

const CustomButton = ({title, handleClick, btnStyles, btnType,
     className, isDisabled}: CustomButtonProps, textStyles) => {
  return (
    <div>
        <button 
            disabled={false}
            type={ btnType || "button"}
            className={`${btnStyles} custom-btn`}
            onClick={handleClick}
            
          >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
        </button>
    </div>
  )
}

export default  CustomButton 