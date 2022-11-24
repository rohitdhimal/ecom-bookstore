import { Fragment } from "react";

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
                  Shop Now
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

          {/* <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 bg-gray-50 shadow-lg mb-20">
            <p className="text-xl font-bold bottom-line">
              Popular{" "}
              <span className="float-right hover:text-blue-700 cursor-pointer">
                {" "}
                View More{" "}
              </span>{" "}
              <span className="bottom-line-underline"></span>
            </p>
            <div className="flex justify-evenly gap-10 md:flex-row sm:flex-col">
              <div className=" w-full flex-wrap flex justify-center items-center">
                <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-3xl">
                  <img
                    className="h-40 object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt=""
                  />
                  <div className="p-2">
                    <h2 className="font-bold text-lg mb-2 ">
                      The Lovely Paris
                    </h2>
                    <p className="text-sm text-gray-600">Anna Hathway</p>
                  </div>
                  <div className="m-2">
                    <a
                      role="button"
                      href="/"
                      className="text-white bg-green-600 px-3 py-1 rounded-md hover:bg-green-700"
                    >
                      Add To Cart 
                    </a>
                  </div>
                </div>
              </div>
              <div className=" w-full gap-4 flex-wrap flex justify-center items-center">
                <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                  <img
                    className="h-40 object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt=""
                  />
                  <div className="p-2">
                    <h2 className="font-bold text-lg mb-2 ">The New Book</h2>
                    <p className="text-sm text-gray-600">
                      Hakim Zabra
                    </p>
                  </div>
                  <div className="m-2">
                    <a
                      role="button"
                      href="/"
                      className="text-white bg-green-600 px-3 py-1 rounded-md hover:bg-green-700"
                    >
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className=" w-full gap-4 flex-wrap flex justify-center items-center">
                <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                  <img
                    className="h-40 object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt=""
                  />
                  <div className="p-2">
                    <h2 className="font-bold text-lg mb-2 ">Modern Cinderella</h2>
                    <p className="text-sm text-gray-600">
                      Tim Howard
                    </p>
                  </div>
                  <div className="m-2">
                    <a
                      role="button"
                      href="/"
                      className="text-white bg-green-600 px-3 py-1 rounded-md hover:bg-green-700"
                    >
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className=" w-full gap-4 flex-wrap flex justify-center items-center">
                <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                  <img
                    className="h-40 object-cover rounded-xl"
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt=""
                  />
                  <div className="p-2">
                    <a href="/" className="font-bold text-lg mb-2 cursor-pointer text-green-800">How to get hired in 5 sec</a>
                    <p className="text-sm text-green-600">
                      Nina Santos
                    </p>
                  </div>
                  <div className="m-2">
                    <a
                      role="button"
                      href="/"
                      className="text-white bg-green-600 px-3 py-1 rounded-md hover:bg-green-700"
                    >
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </main>
      </div>
    </Fragment>
  );
}

export default Home