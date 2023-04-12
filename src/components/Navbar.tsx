import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { shallow } from "zustand/shallow";
import { useState } from "react";
import { cookies } from "../stores/useUserStore";

export default function Navbar() {
  const [isAuth, setIsAuth] = useState(cookies.get("user-token"));

  const [user, loggedIn, signIn, signOutAccount] = useUserStore(
    (state) => [state.user, state.loggedIn, state.signIn, state.signOutAccount],
    shallow
  );

  const signInAccount = async () => {
    signIn();
    setIsAuth(cookies.get("user-token"))
  };

  const signOut = async () => {
    signOutAccount();
    setIsAuth(false);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen flex flex-wrap items-center justify-between mx-[60px] p-4">
          <Link to="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              BlogZu
            </span>
          </Link>
          <div className="flex md:order-2">
            {!isAuth && !loggedIn ? (
              <button
                type="button"
                onClick={signIn}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:focus:ring-blue-800"
              >
                Sign Up
              </button>
            ) : (
              <button
                type="button"
                onClick={signOut}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:focus:ring-blue-800"
              >
                Sign Out
              </button>
            )}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/write"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Write
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
