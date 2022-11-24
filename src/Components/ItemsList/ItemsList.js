import { Fragment } from "react";
import { NavLink } from "react-router-dom";

import ProductList from "../../FakeData/ProductsList";

import "./ItemsList.css";

const ItemsList = () => {
  const ProductListElements = ProductList.map((item) => (
    <div className="basis-1/4">
      <NavLink to={`/product/${item.book_id}`}>
        <div className=" bg-white  rounded-lg px-8 py-8 ring-1 ring-slate-900/5 shadow-xl ">
          <div>
            <span className="inline-flex items-center justify-center p-2">
              <img
                className="rounded w-9/12 shadow-lg transition-all object-contain hover:object-cover cursor-pointer"
                src={item.image}
                alt={item.title}
              ></img>
            </span>
          </div>
          <h3 className="text-green-900 mt-5 text-xl font-bold tracking-tight">
            {item.title}
            <span style={{"float":"right"}}>
              {item.price}
            </span>
          </h3>
          <p className="text-slate-500 mt-2 text-sm">{item.Author}</p>
          <button className="mt-2 rounded-lg px-4 py-2 bg-green-900 text-neutral-50 hover:bg-green-700 duration-300 hover:shadow-lg">
            Add to Cart
          </button>
        </div>
      </NavLink>
    </div>
  ));
  return (
    <Fragment>
      <div className="container mt-20 px-20 mb-10">
        <div className="flex flex-wrap gap-10 justify-evenly items-center flex-mobile">
          {ProductListElements}
        </div>
      </div>
      
    </Fragment>
  );
};

export default ItemsList;
