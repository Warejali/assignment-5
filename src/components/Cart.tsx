import { removeFromCart } from '@/redux/features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { HiOutlineTrash } from 'react-icons/hi';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

export default function Cart() {
  const { products, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost">
          <button className="text-2xl text-red-600">&hearts;</button>
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-auto relative">
        <SheetHeader>
          <SheetTitle>Wish List</SheetTitle>
          <h1>Total: {total.toFixed(2)}</h1>
        </SheetHeader>
        <div className="space-y-5">
          {products.map((product) => (
            <div
              className="border h-44 p-5 flex justify-between rounded-md"
              key={product.title}
            >
              <div className="border-r pr-5 shrink-0">
                <img src={product?.image} alt="" className="h-full" />
              </div>
              <div className="px-2 w-full flex flex-col gap-3">
                <h1 className="text-2xl self-center">{product?.title}</h1>
                <p>{product.author}</p>
              </div>
              <div className="border-l pl-5 flex flex-col justify-between">
                <Button
                  onClick={() => dispatch(removeFromCart(product))}
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-400"
                >
                  <HiOutlineTrash size="20" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
