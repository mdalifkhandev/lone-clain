'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import logo from "../assets/logo.png";
import { useAuthStore } from "../store/authStore";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { user, isLoggedIn } = useAuthStore();
  const pathname = usePathname();
  const first = user?.email ? user.email.charAt(0) : '';
  const firstLetter = first.toUpperCase();

  console.log(user);
  

  const handleMenuClick = () => {
    setMenu(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center py-2 px-4 md:px-16 lg:px-20 bg-white shadow-md">
        <Link href="/">
          <Image src={logo} alt="logo" width={80} height={40} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-3 text-[15px] text-gray-600">
            <li>
              <Link href="/" className={pathname === '/' ? 'font-bold text-black' : ''}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={pathname === '/about' ? 'font-bold text-black' : ''}>About</Link>
            </li>
          </ul>
        </div>

        {/* User/Auth Button */}
        <div className="md:block hidden">
          {isLoggedIn ? (
            <div className="dropdown dropdown-bottom">
  <div
    tabIndex={0}
    role="button"
    className="btn btn-circle bg-red-950 text-white text-2xl"
  >
    {firstLetter}
  </div>
  <ul
    tabIndex={0}
    className="dropdown-content menu bg-gray-200 text-black rounded-box z-1 w-24 p-2 shadow left-1/2 -translate-x-1/2 justify-center items-center"
  >
    <li>
      <Link
        href={user?.role==="user"?'/profile':"/home"}
        className={`${pathname === '/profile' ? 'font-bold text-black' : ''} hover:bg-red-950 hover:text-white text-center`}
      >
        {user?.role==="user"?"Profile":"Dashboard"}
      </Link>
    </li>
    <li>
      <Link
        href={user?.role==="user"?'/account':"/"}
        className={`${pathname === '/account' ? 'font-bold text-black' : ''} hover:bg-red-950 hover:text-white text-center`}
      >
        {user?.role==="user"?"Account":""}
      </Link>
    </li>
  </ul>
</div>


          ) : (
            <Link href="/signup" passHref>
              <button className="bg-red-900 rounded-sm px-2 text-white text-[13px] py-1 cursor-pointer">
                Sign Up
              </button>
            </Link>
          )}
        </div>

        {/* Responsive Menu Button */}
        <button className="cursor-pointer md:hidden" onClick={() => setMenu(!menu)}>
          <RiMenu2Line size={20} className="text-black" />
        </button>
      </div>

      {/* Responsive Menu */}
      <div className={`${menu ? "block" : "hidden"} md:hidden`}>
        <div className="relative">
          <ul className="text-[14px] text-gray-600 w-full absolute top-0 right-0 bg-gray-200 px-7 py-4 z-10">
            <li>
              <Link href="/" onClick={handleMenuClick}>Home</Link>
            </li>
            <li>
              <Link href="/about" onClick={handleMenuClick}>About</Link>
            </li>
            <li>
              <Link href="/client" onClick={handleMenuClick}>Client</Link>
            </li>
            {isLoggedIn ? (
              <li className="mt-2">
                <Link href="/profile" onClick={handleMenuClick}>
                  <Image
                    src={logo}
                    alt="profile img"
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full border border-blue-700"
                  />
                </Link>
              </li>
            ) : (
              <li className="mt-2">
                <Link href="/signup" onClick={handleMenuClick} passHref>
                  <button className="bg-red-900 rounded-sm px-2 text-white text-[13px] py-1 cursor-pointer">
                    Sign Up
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;