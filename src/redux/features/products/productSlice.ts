import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface IProduct {
  _id: string;
  title: string;
  author: string;
  genre: string;
  image: string;
  publicationDate: string;
}

const initialState: IProduct = {
  _id: '',
  title: '',
  author: '',
  genre: '',
  image: '',
  publicationDate: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setAuthor: (state, action: PayloadAction<string>) => {
      state.author = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },

    deleteProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product: IProduct) => product._id !== action.payload
      );
    },
  },
});

export const { setGenre, setAuthor, setTitle, deleteProduct } =
  productSlice.actions;

export default productSlice.reducer;
