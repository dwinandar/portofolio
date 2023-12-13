import { NavLink } from "react-router-dom";
import ThemeController from "./ThemeController";
import { NavLinks } from "../assets/data";

const Navbar = () => {
  const closeSidebar = () => {
    const drawerToggle = document.getElementById("my-drawer-3");
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };

  return (
    <div className='drawer'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='flex flex-col items-end drawer-content lg:items-center'>
        {/* Navbar */}
        <div className='w-full navbar max-w-fit'>
          <div className='flex-none lg:hidden'>
            <label
              htmlFor='my-drawer-3'
              aria-label='open sidebar'
              className='btn btn-square btn-ghost'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-6 h-6 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </label>
          </div>
          <div className='flex-none hidden px-4 mt-5 mb-10 rounded-full lg:block glassmorph'>
            <ul className='text-lg font-medium bg-transparent menu menu-horizontal'>
              {/* Navbar menu content here */}

              {NavLinks.map((link) => (
                <NavLink to={link.href} key={link.link}>
                  <li className='hover:border-b-2 border-b-pink-700/70'>
                    <p>{link.link}</p>
                  </li>
                </NavLink>
              ))}
              <ThemeController />
            </ul>
          </div>
        </div>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='min-h-full p-4 menu w-80 bg-base-200'>
          {/* Sidebar content here */}
          <li className='max-w-fit'>
            <ThemeController />
          </li>
          {NavLinks.map((link) => (
            <NavLink to={link.href} key={link.link} onClick={closeSidebar}>
              <li className='hover:border-b-2 border-b-pink-700/70'>
                <p>{link.link}</p>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
