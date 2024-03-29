import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = ({ isHomepage }) => {
  const [crossBar, setCrossBar] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar py-3 rounded-md sticky top-0 z-20  ${
        isHomepage && !showBackground
          ? "bg-transparent text-white"
          : "bg-base-100 backdrop-filter backdrop-blur-lg bg-opacity-30  "
      }`}
    >
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-3xl font-bold" href="/">
          Real Estate
        </Link>
      </div>

      <div className=" font-medium hidden md:flex">
        <ul className="menu menu-horizontal px-1 uppercase">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about-us">About us</Link>
          </li>
          <li>
            <details>
              <summary>Properties</summary>
              <ul className={`p-2 bg-base-100 rounded-t-none text-black`}>
                <li>
                  <Link href="/commercial">commercial</Link>
                </li>
                <li>
                  <Link href="/residential">residential</Link>
                </li>
                <li>
                  <Link href="/sco">sco</Link>
                </li>
                <li>
                  <Link href="/plots">plots</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <label className="btn btn-circle swap swap-rotate md:hidden z-10">
        <input type="checkbox" onClick={() => setCrossBar(!crossBar)} />
        <svg
          className="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <svg
          className="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
        </svg>
      </label>

      {crossBar && (
        <div className="flex flex-col  absolute top-0 left-0 w-full h-screen bg-white bg-gradient-to-br from-base-200 to-bas">
          <ul className="menu menu-vertical px-1 uppercase mt-36 text-lg font-bold text-black">
            <li>
              <Link href="/home">home</Link>
            </li>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
            <li>
              <details>
                <summary>Properties</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <Link href="/commercial">commercial</Link>
                  </li>
                  <li>
                    <Link href="/residential">residential</Link>
                  </li>
                  <li>
                    <Link href="/sco">sco</Link>
                  </li>
                  <li>
                    <Link href="/plots">plots</Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
