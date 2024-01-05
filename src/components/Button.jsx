// Diff-1 : Text => Solved ส่ง props
// Diff-2 : สี => green,blue => ส่ง props "primary" | "secondary"

// 'bg-green-500 hover:bg-green-600'
// 'bg-blue-500  hover:bg-blue-600'
// Diff-3 : ฟังก์ชัน : Props

import React from 'react';

function Button({ children, color = 'primary', onClick }) {
  let finalColor = color === 'primary' ? 'green' : 'blue';
  let finalClassName = `bg-${finalColor}-500 text-white px-4 py-2 rounded-md hover:bg-${finalColor}-600`;
  return (
    <button className={finalClassName} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
