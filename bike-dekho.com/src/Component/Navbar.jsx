import React from 'react';

const Navbar = () => {
  return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-[35px] font-bold">Bike Dekho</a>
  </div>
  
    <button className='bg-[#E76F51] py-4.25 px-13 rounded-[5px] text-[20px] font-bold text-white'>Log In</button>
</div>
  );
};

export default Navbar;