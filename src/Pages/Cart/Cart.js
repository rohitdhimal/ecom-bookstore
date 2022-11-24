import { Fragment } from "react";
import Header from "../../Components/Header/Header";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  removeFromCart
} from "../../Features/BookStoreSlice";

import "./Cart.css";

const Cart = () => {
  const CartItemsFromStore = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const CartElements = CartItemsFromStore.map((item, index) => (
    <li className="flex py-6" key={item.Item.book_id}>
      <div className="h-30 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={item.Item.image}
          alt={item.Item.title}
          className="h-30 w-full object-cover object-center "
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="/">{item.Item.title}</a>
            </h3>
            <p className="ml-4">item.Item.price</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className="mt-1 text-sm text-gray-500">
              Price: {item.Item.Author}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Quantity: {item.Count}
            </p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex">
            <button
              onClick={() => {
                  dispatch(removeFromCart({ book_id: item.Item.book_id }));
                }
              }
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  ));
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
                  {
                    Object.keys(CartElements).length ? CartElements : "No Items in Cart"
                  }
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
