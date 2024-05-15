import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UseAuth from "../UseAuth/UseAuth";

const Header = () => {
  const { user, logOutUser,theme,setTheme } = UseAuth();
  
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleChange = (e) => {
    setTheme(e.target.checked ? "dracula" : "light");
  };
  const navigate = useNavigate()
  const [showName, setShowName] = useState(false);

  const handleMouseEnter = () => {
    setShowName(true);
  };

  const handleMouseLeave = () => {
    setShowName(false);
  };
// -------------------------------------------------------------


  const navbar = (
    <>
      <div className="lg:flex list-none gap-4">
        <li>
          <NavLink to="/">Home</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/add-book"> Add Book</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/all-book">All Book</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/borrowed-book"> Borrowed Book</NavLink>{" "}
        </li>
        <li className="lg:hidden">
          <Link to="/login">
            <button className="bg-sky-400 text-black btn ">Login</button>{" "}
          </Link>
        </li>
      </div>
    </>
  );


  return (
    <div className=''>
      <div className="navbar :bg-zinc-200 shadow-md shadow-slate-700 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul

              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbar}
            </ul>
          </div>
          <a  onClick={()=>navigate('/')} className="items-center btn btn-ghost text-xl"> <span className=""><img className="w-10 rounded-full h-full " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPfXLK1KjACQYScfqsGQRPhpXhgE0SdvNdSp1jFqxNu4ntvAe-rKZoShi4L_hpxqV6fn4&usqp=CAU" alt="" /></span> Library </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="  px-1"> {navbar} </ul>
        </div>
        
        <div className="navbar-end list-none flex relative">
          <div className="mr-2">
            <label className="swap swap-rotate">
              <input
                onChange={handleChange}
                type="checkbox"
                className="theme-controller"
                checked={theme === "dracula"}
              />
              <svg
                className="swap-off fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              <svg
                className="swap-on fill-current w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {user ? (
            <>
              <div
                className="flex relative items-center gap-2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {showName && (
                  <h1 className="font-sans w-auto absolute top-14 bg-gray-600 px-4 rounded-md text-white border-b-8 z-50 border-b-blue-400">
                    {user?.displayName}
                  </h1>
                )}

                <div className="w-12 h-12 bg-accent rounded-full p-1">
                  {user && (
                    <img
                      className="w-full rounded-full h-full "
                      src={user.photoURL || 'nai'}
                      alt=""
                    />
                  )}
                </div>

                <button className="btn-ghost btn btn-success" onClick={logOutUser}>
                  {" "}
                  log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <button className=" p-3 z-0 hidden lg:block">Login</button>{" "}
                </Link>
              </li>
              <li className=" ">
                <Link to="/register">
                  <button className="bg-black btn pr-10 z-[999] text-white rounded-full ">
                    Sign Up
                  </button>
                </Link>{" "}
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;