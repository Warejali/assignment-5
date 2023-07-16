import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Book {
  id: number;
  title: string;
  author: string;
  finished: boolean;
}

interface BooksState {
  wishlist: Book[];
  currentlyReading: Book[];
  finishedReading: Book[];
}

const initialState: BooksState = {
  wishlist: [],
  currentlyReading: [],
  finishedReading: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addToWishlist(state, action: PayloadAction<Book>) {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist(state, action: PayloadAction<number>) {
      state.wishlist = state.wishlist.filter(
        (book) => book.id !== action.payload
      );
    },
    addToCurrentlyReading(state, action: PayloadAction<Book>) {
      state.currentlyReading.push(action.payload);
    },
    removeFromCurrentlyReading(state, action: PayloadAction<number>) {
      state.currentlyReading = state.currentlyReading.filter(
        (book) => book.id !== action.payload
      );
    },
    addToFinishedReading(state, action: PayloadAction<Book>) {
      state.finishedReading.push(action.payload);
    },
    removeFromFinishedReading(state, action: PayloadAction<number>) {
      state.finishedReading = state.finishedReading.filter(
        (book) => book.id !== action.payload
      );
    },
    markAsFinished(state, action: PayloadAction<number>) {
      const book = state.currentlyReading.find(
        (book) => book.id === action.payload
      );
      if (book) {
        book.finished = true;
      }
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  addToCurrentlyReading,
  removeFromCurrentlyReading,
  addToFinishedReading,
  removeFromFinishedReading,
  markAsFinished,
} = bookSlice.actions;

export default bookSlice.reducer;
