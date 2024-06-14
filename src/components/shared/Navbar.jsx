import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      alert("Log out");
    }
  };

  return (
    <div className="navbar fixed z-10 bg-opacity-25 text-white bg-black max-w-screen-xl">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-opacity-25 text-white bg-black shadow  rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Our Menu</Link>
            </li>
            {!user?.email ? (
              <></>
            ) : (
              <li>
                <Link className="" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Course Gallery
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Our Menu</Link>
          </li>
          {!user?.email ? (
            <></>
          ) : (
            <li>
              <Link className="" to="/dashboard">
                Dashboard
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {!user?.email ? (
          <>
            <Link to={"/login"} className="btn">
              Login
            </Link>
            <Link to={"/register"} className="btn">
              Register
            </Link>
          </>
        ) : (
          <div className="flex gap-4 items-center">
            <button onClick={handleSignOut} className="btn">
              Logout
            </button>
            <div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-11">
                  <span className="text-xs">{user?.photoURL}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
