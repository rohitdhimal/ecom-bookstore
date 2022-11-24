import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BookList: [],
  SingleProduct: {},
  status: 'idle',
  CartItems: []
};

export const BookStoreSlice = createSlice({
  name: "bookstore",
  initialState,
  reducers: {
    storeBookList: (state, action) => {
      state.BookList = action.payload;
    },
    fetchSingleBook: (state, action) => {
        state.SingleProduct = state.BookList.find(item => item.book_id === action.payload.id);
    },
    addToCartItems: (state, action) => {
        const Item = {
            "Item": action.payload.CartItem,
            "Count": action.payload.Count
        }
        state.CartItems.push(Item);
        alert("Item added to cart, no good GUI right now");
    },
    addCartItemsFromMinimal: (state, action) => {
        const Item = {
          "Item": state.BookList.find(item => item.book_id === action.payload.book_id),
          "Count": 1,
        };
        state.CartItems.push(Item);
        alert("Item added to cart, no good GUI right now");
    },
    removeFromCart: (state, action) => {
        state.CartItems.splice(state.CartItems.findIndex((item) => item.book_id === action.payload.book_id),1);
        alert("Item Removed from the cart");
    }
  },
});

// Action creators are generated for each case reducer function
export const { storeBookList, fetchSingleBook,addToCartItems, removeFromCart, addCartItemsFromMinimal } = BookStoreSlice.actions;
export const selectBookList = (state) => state.bookstore.BookList;
export const selectSingleBook = (state) => state.bookstore.SingleProduct;
export const selectCartItems = (state) => state.bookstore.CartItems;
export default BookStoreSlice.reducer;
