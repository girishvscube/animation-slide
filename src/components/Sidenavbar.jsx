import React from "react";
import { useState } from "react";
function Sidenavbar({children}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {isOpen ? (
        <div
          className={`top-0 left-0 fixed bg-blue-500 w-56 h-full p-10 translate-x-0  ease-in-out duration-100 `}
        >
          <button
            className="top-0 z-20 right-4 fixed text-white text-3xl"
            onClick={() => setOpen(false)}
          >
            x
          </button>
          <div className="flex flex-col">
            <nav>Men</nav>
            <nav>women</nav>
            <nav>kids</nav>

          </div>
          {children}
        </div>
      ) : (
        <div>
          <button
            className="fixed z-30 flex items-center cursor-pointer left-10 top-6"
            onClick={() => setOpen(true)}
          >
            <svg width="40" height="40" fill="#2563EB" viewBox="0 0 100 80">
              <rect width="100" height="10"></rect>
              <rect width="100" height="10" y="30 "></rect>
              <rect width="100" height="10" y="60"></rect>
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

export default Sidenavbar;
