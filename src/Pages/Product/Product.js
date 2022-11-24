import { Fragment } from "react"
import { useParams } from "react-router-dom"
import Header from "../../Components/Header/Header";
import ProductList from "../../FakeData/ProductsList";

const Product = () => {
    const params = useParams();
    const item = ProductList.find(item => item.book_id === params.id);
    return (
      <Fragment>
        <Header/>
        <div className="mt-20 mx-auto max-w-7xl  px-5 md:px-20 sm:px-5 py-5 md:py-10 sm:py-5  rounded">
          <div className="flex flex-row md:flex-row sm:flex-col justify-between items-center gap-10 flex-mobile">
            <div className="flex-wrap sm:flex-col w-full md:w-1/2 sm:w-screen bg-green-50 p-10 rounded-xl">
              <div className="product-info">
                <p className="text-3xl font-bolder">{item.title}</p>
                <p className="text-lg mt-3">
                  by :{" "}
                  <span className="font-bold">{item.Author}</span>{" "}
                </p>

                <p className="text-lg mt-3">
                  {item.Description}
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-col sm:flex-col justify-between items-center bg-green-50 p-10">
              <div className="flex-wrap w-full sm:w-full md:w-full">
                <div className="Product-info">
                  <img
                    src={item.image}
                    className="rounded h-80"
                    alt={item.title}
                  />
                </div>
              </div>
              <div className="flex-wrap w-full">
                <div>
                  <p className="font-bold mt-3"> Price: {item.price} </p>
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
      </Fragment>
    );
}

export default Product