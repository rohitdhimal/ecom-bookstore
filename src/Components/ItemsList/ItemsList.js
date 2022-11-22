import { Fragment } from "react";

import "./ItemsList.css";

const ItemsList = () => {
  return (
    <Fragment>
      <div className="container mt-20 px-20">
        <div className="flex flex-wrap gap-10 justify-evenly items-center">
          <div class="basis-1/4">
            <div class=" bg-white dark:bg-slate-800 rounded-lg px-8 py-8 ring-1 ring-slate-900/5 shadow-xl ">
              <div>
                <span class="inline-flex items-center justify-center p-2">
                  <img
                    className="rounded w-9/12 shadow-lg transition-all"
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1645550948i/58468990.jpg"
                    alt=""
                  ></img>
                </span>
              </div>
              <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                The Paris Apartment
              </h3>
              <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation,
                including upside-down. It even works in outer space.
              </p>
              <button className="mt-2 rounded-lg px-4 py-2 bg-blue-600 text-neutral-50 hover:bg-blue-800 duration-300 hover:shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>
          <div class="basis-1/4">
            <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
              <div>
                <span class="inline-flex items-center justify-center p-2 ">
                  <img
                    className="rounded w-9/12 shadow-lg"
                    src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1590847063l/53662682._SY475_.jpg"
                    alt=""
                  ></img>
                </span>
              </div>
              <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                Ichigo-Ichie
              </h3>
              <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation,
                including upside-down. It even works in outer space.
              </p>
              <button className="mt-2 rounded-lg px-4 py-2 bg-blue-600 text-neutral-50 hover:bg-blue-800 duration-300 hover:shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>

          <div class="basis-1/4">
            <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
              <div>
                <span class="inline-flex items-center justify-center p-2">
                  <img
                    className="rounded w-9/12 shadow-lg"
                    src="https://storage.googleapis.com/du-prd/books/images/9781538728628.jpg"
                    alt=""
                  ></img>
                </span>
              </div>
              <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                The Wish
              </h3>
              <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                The Zero Gravity Pen can be used to write in any orientation,
                including upside-down. It even works in outer space.
              </p>
              <button className="mt-2 rounded-lg px-4 py-2 bg-blue-600 text-neutral-50 hover:bg-blue-800 duration-300 hover:shadow-lg">
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
