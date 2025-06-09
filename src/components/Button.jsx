import React from 'react'
function Button({ children, onClick, disabled, variant = 'primary' }) {
  const baseStyles = "px-4 py-2 rounded transition";
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600"
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} disabled:bg-gray-400`}
    >
      {children}
    </button>
  );
}

export default Button;
