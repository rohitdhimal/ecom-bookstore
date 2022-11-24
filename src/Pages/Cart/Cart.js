import { Fragment } from "react";
import Header from "../../Components/Header/Header";



import "./Cart.css";

const Cart = () => {
  return (
    <Fragment>
      <Header />
      <div className="mt-20 mx-auto max-w-7xl  px-5 md:px-20 sm:px-5 py-5 md:py-10 sm:py-5  rounded">
        <div className="flex flex-row md:flex-row sm:flex-col justify-between items-center gap-10 flex-mobile">
          <div className="flex-wrap sm:flex-col w-full md:w-1/2 sm:w-screen bg-green-50 p-10 rounded-xl">
            <div className="product-info">
              <p className="text-3xl font-bolder">Sandra Bullock</p>
              <p className="text-lg mt-3">
                by :{" "}
                <span className="font-bold">Hanna Montana, Hakim Zabir</span>{" "}
              </p>

              <p className="text-lg mt-3">
                Nora Stephens' life is books—shes read them all—and she is not
                that type of heroine. Not the plucky one, not the laidback dream
                girl, and especially not the sweetheart. In fact, the only
                people Nora is a heroine for are her clients, for whom she lands
                enormous deals as a cutthroat literary agent, and her beloved
                little sister Libby. Which is why she agrees to go to Sunshine
                Falls, North Carolina for the month of August when Libby begs
                her for a sisters trip away—with visions of a small town
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-col sm:flex-col justify-between items-center bg-green-50 p-10">
            <div className="flex-wrap w-full sm:w-full md:w-full">
              <div className="Product-info">
                <img
                  src="https://bookoutlet.ca/_next/image?url=https%3A%2F%2Fimages.bookoutlet.com%2Fcovers%2Flarge%2Fisbn978076%2F9780765389121-l.jpg&w=640&q=75"
                  className="rounded h-80"
                  alt="test"
                />
              </div>
            </div>
            <div className="flex-wrap w-full">
              <div>
                <p className="font-bold mt-3"> Price: $21.50 </p>
                <p className="font-bold mt-2">
                  Quantity
                  <input
                    type="number"
                    placeholder="0"
                    for="book_quantity"
                    id="book_quantity"
                    className="ml-3 w-20 border border-gray-300 shadow p-2 rounded mb-"
                  />
                </p>
                <div className="mt-10 text-center">
                  <button
                    href="/Cart"
                    className="py-3 px-10 rounded bg-green-900 hover:bg-green-700 text-lime-50 font-bold duration-300 hover:shadow-lg"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
