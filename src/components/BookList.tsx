// BookList.tsx

import {
  addToCurrentlyReading,
  addToFinishedReading,
  addToWishlist,
  markAsFinished,
  removeFromCurrentlyReading,
  removeFromFinishedReading,
  removeFromWishlist,
} from '@/redux/features/book/bookSlice';
import { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

interface Book {
  id: number;
  title: string;
  author: string;
  finished: boolean;
}

export default function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books);

  const handleAddToWishlist = (book: Book) => {
    dispatch(addToWishlist(book));
  };

  const handleRemoveFromWishlist = (bookId: number) => {
    dispatch(removeFromWishlist(bookId));
  };

  const handleAddToCurrentlyReading = (book: Book) => {
    dispatch(addToCurrentlyReading(book));
  };

  const handleRemoveFromCurrentlyReading = (bookId: number) => {
    dispatch(removeFromCurrentlyReading(bookId));
  };

  const handleAddToFinishedReading = (book: Book) => {
    dispatch(addToFinishedReading(book));
  };

  const handleRemoveFromFinishedReading = (bookId: number) => {
    dispatch(removeFromFinishedReading(bookId));
  };

  const handleMarkAsFinished = (bookId: number) => {
    dispatch(markAsFinished(bookId));
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost">Reading or Plan</Button>
        </SheetTrigger>
        <SheetContent className="overflow-auto relative">
          <SheetHeader>
            <SheetTitle>Wish List</SheetTitle>
            {/* <h1>Total: {total.toFixed(2)}</h1> */}
          </SheetHeader>
          <h2>Wishlist</h2>
          {books.wishlist.map((book) => (
            <div key={book.id}>
              <p>{book.title}</p>
              <button onClick={() => handleRemoveFromWishlist(book.id)}>
                Remove
              </button>
              <button onClick={() => handleAddToCurrentlyReading(book)}>
                Start Reading
              </button>
            </div>
          ))}
          <h2>Currently Reading</h2>
          {books.currentlyReading.map((book) => (
            <div key={book.id}>
              <p>{book.title}</p>
              <button onClick={() => handleRemoveFromCurrentlyReading(book.id)}>
                Remove
              </button>
              {!book.finished && (
                <button onClick={() => handleMarkAsFinished(book.id)}>
                  Mark as Finished
                </button>
              )}
            </div>
          ))}
          <h2>Finished Reading</h2>
          {books.finishedReading.map((book) => (
            <div key={book.id}>
              <p>{book.title}</p>
              <button onClick={() => handleRemoveFromFinishedReading(book.id)}>
                Remove
              </button>
            </div>
          ))}
        </SheetContent>
      </Sheet>
    </div>
  );
}
