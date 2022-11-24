import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Header from '../../Components/Header/Header';
import ItemsList from "../../Components/ItemsList/ItemsList";

import './Home.css';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="mt-12 h-screen mb-20">
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="relative h-96 px-1 py-6 md:px-0 sm:px-0 bg-green-200 shadow-md">
              <div className="absolute md:w-1/2 sm:w-full px-10">
                <h1 className="ml-1 md:ml-12 sm:ml-3 md:mt-20 sm:mt-10 text-3xl stylish-font-2">
                  The Easiest Way to find and Buy your favourite Books
                </h1>
                <p className="mt-5 ml-1 md:ml-12 sm:ml-3 mb-5">
                  Where you can enjoy shopping your favourite books
                </p>
                <button
                  href="/"
                  className=" ml-1 md:ml-12 sm:ml-3 px-3 bg-green-900 py-2 text-md rounded-lg hover:bg-green-700 duration-300 cursor-pointer text-white"
                >
                  <NavLink to={"/Products"}>Shop Now</NavLink>
                </button>
              </div>
              <div className="absolute md:w-1/2 sm:w-full top-0 right-0 hidden-mobile">
                <img
                  className="h-80 w-96"
                  src="https://cdni.iconscout.com/illustration/premium/thumb/boy-reading-book-4517581-3742782.png"
                  alt="text"
                />
              </div>
            </div>
          </div>
          <ItemsList />
        </main>
      </div>
    </Fragment>
  );
}

export default Home