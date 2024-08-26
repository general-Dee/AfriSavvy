import Link from 'next/link';
import React from 'react'
import { TiShoppingBag } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white '>
        <div className='container h-full w-full px-4 md:px-0 items-center justify-between flex'>
          {/* LOGO */}
            <Link href='/' className='logo'>
              <span className='customLogoText'>U</span >rban<span className='customLogoText'>S</span>avanna
            </Link>
            {/* SHOPPIN CART */}
            <button className='cart-icon'>
                <TiShoppingBag />
                <span className='cart-iten-qty'>0</span>
            </button>
        </div>
    </div>
  )
}

export default Navbar