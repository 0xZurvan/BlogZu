import { Link } from "react-router-dom";
import { Button, Navbar } from "flowbite-react";
import { useUserStore } from "../stores/useUserStore";
import { shallow } from "zustand/shallow";
import { useState } from "react";
import { cookies } from "../stores/useUserStore";

export default function Nav() {
  const [isAuth, setIsAuth] = useState(cookies.get("user-token"));

  const [user, loggedIn, signIn, signOutAccount] = useUserStore(
    (state) => [state.user, state.loggedIn, state.signIn, state.signOutAccount],
    shallow
  );

  const signInAccount = async () => {
    signIn();
    setIsAuth(cookies.get("user-token"));
  };

  const signOut = async () => {
    signOutAccount();
    setIsAuth(false);
  };

  return (
    <div>
      <Navbar className="!bg-transparent w-full z-20 border-b border-gray-600">
        <Navbar.Brand >
          <span className="self-center whitespace-nowrap text-2xl font-extrabold text-white">
            BlogZu
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
        {!isAuth && !loggedIn ? (
              <Button
                type="button"
                onClick={signIn}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-[2px] text-center mr-3 md:mr-0 dark:focus:ring-blue-800"
              >
                Sign Up
              </Button>
            ) : (
              <Button
                type="button"
                onClick={signOut}
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-[2px] text-center mr-3 md:mr-0 dark:focus:ring-blue-800"
              >
                Sign Out
              </Button>
            )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 xl:bg-transparent lg:bg-transparent bg-gray-800 dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block xl:text-base font-semibold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="block xl:text-base font-semibold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/write"
                className={
                  !isAuth && !loggedIn
                    ? "hidden"
                    : "block xl:text-base font-semibold py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Write
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

{
  /* <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
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
                  className={
                    !isAuth && !loggedIn
                      ? "hidden"
                      : "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Write
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
 */
}
