import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        relative overflow-hidden 
        border-1 border-[#02b677] text-[#02b677]
        font-medium text-[17px] rounded-md 
       btn z-10 
        transition-colors duration-500 
        hover:text-white
        before:content-[''] 
        before:absolute 
        before:w-[250px] before:h-[150px] 
        before:rounded-full 
        before:bg-[#02b677] 
        before:top-[100%] before:left-[100%] 
        before:-z-10 
        before:transition-all 
        before:duration-700 
        hover:before:top-[-30px] hover:before:left-[-30px]
        active:before:bg-[#02b677] active:before:duration-[0ms]
      "
    >
      {children}
    </button>
  );
};

export default Button;
