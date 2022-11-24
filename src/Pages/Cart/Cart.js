import { Fragment } from "react";
import Header from "../../Components/Header/Header";



import "./Cart.css";

const Cart = () => {
  return (
    <Fragment>
      <Header />
      <div className="mt-20 mx-auto max-w-7xl px-5 md:px-20 sm:px-5 py-5 md:py-10 sm:py-5 rounded bg-green-50">
        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
            <div className="flex items-start justify-between">
              <div className="text-lg font-medium text-gray-900">
                Shopping Cart
              </div>
            </div>
            <div className="border-t border-gray-200 py-6 px-4 sm:px-6"></div>
            <div className="">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                  <li className="flex py-6">
                    <div className="h-30 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src="https://m.media-amazon.com/images/I/61l+VmohEOL._AC_SY780_.jpg"
                        alt="asd"
                        className="h-30 w-full object-cover object-center "
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="/">Book Name</a>
                          </h3>
                          <p className="ml-4">Price</p>
                        </div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p className="mt-1 text-sm text-gray-500">
                            Book Author
                          </p>
                          <p className="mt-1 text-sm text-gray-500">Quantity</p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="border-t border-gray-200 py-6 px-4 sm:px-6"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
