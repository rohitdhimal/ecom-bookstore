import { Fragment } from "react";

import "./ItemsList.css";

const ItemsList = () => {
  return (
    <Fragment>
      <div className="container mt-20 px-20 mb-10">
        <div className="flex flex-wrap gap-10 justify-evenly items-center flex-mobile">
          <div className="flex flex-row basis-0 md:basis-1/4 sm:basis-0">
            <div className=" bg-white  rounded-lg px-8 py-8 ring-1 ring-slate-900/5 shadow-xl ">
              <div>
                <span className="inline-flex items-center justify-center p-2">
                  <img
                    className="rounded w-9/12 shadow-lg transition-all object-contain hover:object-cover cursor-pointer"
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645550948i/58468990.jpg"
                    alt=""
                  ></img>
                </span>
              </div>
              <h3 className="text-green-900 mt-5 text-xl font-bold tracking-tight">
                The Paris Apartment
              </h3>
              <p className="text-slate-500 mt-2 text-sm">
                Lucy Foley
              </p>
              <button className="mt-2 rounded-lg px-4 py-2 bg-green-900 text-neutral-50 hover:bg-green-700 duration-300 hover:shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="bg-white  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
              <div>
                <span className="inline-flex items-center justify-center p-2 ">
                  <img
                    className="rounded w-9/12 shadow-lg"
                    src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590847063l/53662682._SY475_.jpg"
                    alt=""
                  ></img>
                </span>
              </div>
              <h3 className="text-green-900 mt-5  text-xl font-bold tracking-tight">
                Ichigo-Ichie
              </h3>
              <p className="text-slate-500 dark:text-green-400 mt-2 text-sm">
                Hector Gracia
              </p>
              <button className="mt-2 rounded-lg px-4 py-2 bg-green-900 text-neutral-50 hover:bg-green-700 duration-300 hover:shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="basis-1/4">
            <div className="bg-white dark:bg-green-800 rounded-lg px-6 py-8 ring-1 ring-green-900/5 shadow-xl">
              <div>
                <span className="inline-flex items-center justify-center p-2">
                  <img
                    className="rounded w-9/12 shadow-lg"
                    src="https://storage.googleapis.com/du-prd/books/images/9781538728628.jpg"
                    alt=""
                  ></img>
                </span>
              </div>
              <h3 className="text-green-900 mt-5  text-xl font-bold tracking-tight">
                The Wish
              </h3>
              <p className="text-slate-500 mt-2 text-sm">
                Sparks
              </p>
              <button className="mt-2 rounded-lg px-4 py-2 bg-green-900 text-neutral-50 hover:bg-green-700 duration-300 hover:shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
};

export default ItemsList;
