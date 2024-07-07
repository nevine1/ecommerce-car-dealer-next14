"use client"
import { CustomButtonProps } from '../../types/page'

const CustomButton = ({title, handleClick, btnStyles}: CustomButtonProps) => {
  return (
    <div>
        <button 
            disabled={false}
            type="button"
            className={`${btnStyles} custom-btn`}
            onClick={handleClick}
          >
            <span className={`flex-1`}>
                {title}
            </span>
        </button>
    </div>
  )
}

export default  CustomButton 