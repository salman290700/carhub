"use Client";
import { CustomButtonProps } from '@/types';
import Image from 'next/image';
import React from 'react';


const CustomButton = ({ title, btnType,containerStyles, textStyles, rightIcon, handleClick}: CustomButtonProps) => {
  return (
    <button
        disabled = { false }
        type = {btnType || "button"}
        className={`custom-btn ${ containerStyles }`}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            { title }
        </span>

        {/* Contain Right Icon */}
        {
          rightIcon && (<>
            <div className="relative w-6 h-6">
              <Image
                src = {rightIcon}
                alt = "right Icon"
                fill
                className = "object-contain"
              />
            </div>
          </>)
        }
    </button>
  )
}

export default CustomButton