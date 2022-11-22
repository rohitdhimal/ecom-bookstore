import { Fragment } from 'react'

import './Header.css';

const Header = () => {
  return (
    <Fragment>
      <nav className="fixed top-0 left-0 bg-gray-100 w-full shadow">
        <div className="container ml-10 flex justify-between items-center text-gray-700">
          <ul className="hidden md:flex items-center text-base font-semibold cursor-pointer">
            <li className="hover:bg-gray-200 py-4 px-6">Home</li>
            <li className="hover:bg-gray-200 py-4 px-6">Products</li>
            <li className="hover:bg-gray-200 py-4 px-6">Cart</li>
          </ul>
          <button className="block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group">
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="w-5 h-1 bg-gray-600 mb-1"></div>
            <div className="absolute top-0 -right-full opacity-0 h-screen w-8/12 bg-white border transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
              <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Home</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Products</li>
                <li className="hover:bg-gray-200 py-4 px-6 w-full">Cart</li>
              </ul>
            </div>
          </button>
        </div>
      </nav>

    </Fragment>
  );
}

export default Header