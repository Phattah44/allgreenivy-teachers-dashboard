'use client';

import React, { useState } from 'react';

const AccordionUi = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='p-2'>
      <div
        className='flex justify-between text-[#717171] text-xs'
        onClick={() => setIsActive(!isActive)}
      >
        <div className='font-semibold'>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className='text-[#717171] text-xs'>{content}</div>}
    </div>
  );
};

export default AccordionUi;
