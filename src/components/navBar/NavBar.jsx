import { useEffect, useState } from "react";
import { navMenu } from "../../mockData/navBar/navMenu";
import { NavLink } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { GiLotus } from "react-icons/gi";

const NavBar = () => {
  const [isToggle, setIsToggle] = useState(false);

  // for navBar
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handelScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, [lastScroll]);
  return (
    <header
      className={`w-full sticky bg-amber-50 top-0 shadow-md transition-all duration-300 ease-in-out transform ${
        hidden ? "-translate-y-full opacity-0" : "-translate-y-0"
      }`}
    >
      <nav className="flex justify-between items-center md:py-3 md:px-20 py-3 px-10 bg-black">
        {/* first div for logo and name */}
        <div className="flex items-center gap-3 font-bold">
          <GiLotus className="text-red-600 text-5xl max-lg:hidden" />
          <h1 className="text-3xl text-orange-700">LoTuS BoY's HoStEl</h1>
        </div>

        {/* Second div for ul links items */}
        <ul
          className={`w-full flex flex-col items-center max-md:h-50 max-md:py-5 max-md:rounded-2xl absolute bg-[#1e1e1e] top-15 left-0 gap-2 font-semibold md:flex md:flex-row md:gap-3 md:text-lg md:font-semibold md:static md:ml-auto md:bg-transparent md:w-auto ${
            isToggle ? "flex" : "hidden"
          }`}
        >
          {navMenu.map((items) => (
            <li key={items.id}>
              <NavLink
                to={items.path}
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold text-2xl" : ""
                }
                onClick={() => setIsToggle(false)}
              >
                {items.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Third button for hamburger menu  */}
        <button
          className="md:hidden font-bold text-4xl"
          onClick={() => setIsToggle(!isToggle)}
        >
          <HiOutlineMenuAlt3 />
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
