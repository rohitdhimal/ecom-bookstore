import { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../Components/Header/Header";

import { useSelector, useDispatch } from "react-redux";
import { selectSingleBook, fetchSingleBook, addToCartItems } from "../../Features/BookStoreSlice";

const Product = () => {
    const dispatch = useDispatch();
    const SingleBookFromStore = useSelector(selectSingleBook);

    const params = useParams();
    useEffect(() => {
        dispatch(fetchSingleBook({id:params.id}));
    }, [SingleBookFromStore]);
    const [CurrentItem, setCurrentItem] = useState(1);
    const updateCartItem = (e) => {
        setCurrentItem(e.target.value);
    };
    const addToCart = () => {
        dispatch(addToCartItems({CartItem:SingleBookFromStore, Count:CurrentItem}));
    }

    return (
      <Fragment>
        <Header />
        { 
            typeof(SingleBookFromStore) !== 'undefined' && 
            
            <div className="mt-20 mx-auto max-w-7xl  px-5 md:px-20 sm:px-5 py-5 md:py-10 sm:py-5  rounded">
            <div className="flex flex-row md:flex-row sm:flex-col justify-between items-center gap-10 flex-mobile">
                <div className="flex-wrap sm:flex-col w-full md:w-1/2 sm:w-screen bg-green-50 p-10 rounded-xl">
                <div className="product-info">
                    <p className="text-3xl font-bolder">{SingleBookFromStore.title}</p>
                    <p className="text-lg mt-3">
                    by : <span className="font-bold">{SingleBookFromStore.Author}</span>{" "}
                    </p>

                    <p className="text-lg mt-3">{SingleBookFromStore.Description}</p>
                </div>
                </div>
                <div className="flex flex-col md:flex-col sm:flex-col justify-between items-center bg-green-50 p-10">
                <div className="flex-wrap w-full sm:w-full md:w-full">
                    <div className="Product-info">
                    <img
                        src={SingleBookFromStore.image}
                        className="rounded h-80"
                        alt={SingleBookFromStore.title}
                    />
                    </div>
                </div>
                <div className="flex-wrap w-full">
                    <div>
                    <p className="font-bold mt-3"> Price: {SingleBookFromStore.price} </p>
                    <p className="font-bold mt-2">
                        Quantity
                        <input
                            type="number"
                            placeholder="0"
                            htmlFor="book_quantity"
                            id="book_quantity"
                            defaultValue={1}
                            onChange={(e) => updateCartItem(e)}
                            className="ml-3 w-20 border border-gray-300 shadow p-2 rounded mb-"
                        />
                    </p>
                    <div className="mt-10 text-center">
                        <button
                        onClick={addToCart}
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
        }
      </Fragment>
    );
}

export default Product