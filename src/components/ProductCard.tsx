import { addToCart } from '@/redux/features/cart/cartSlice';
import { useAppDispatch } from '@/redux/hook';
import { IProduct } from '@/types/globalTypes';
import { Link } from 'react-router-dom';
import { toast } from './ui/use-toast';

interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {
  const dispatch = useAppDispatch();

  const handleAddProduct = (product: IProduct) => {
    if (product) {
      dispatch(addToCart(product));
      toast({
        description: 'Wishlist Added',
      });
    } else {
      toast({
        description: 'You have already added this book to your wishlist',
      });
    }
  };
  return (
    <div>
      <div className="rounded-2xl h-[580px] flex flex-col items-start justify-between p-5 overflow-hidden shadow-md border border-gray-100 hover:shadow-2xl hover:scale-[102%] transition-all gap-2">
        <Link to={`/product-details/${product._id}`} className="w-full">
          <img src={product?.image} alt="product" />
          <h1 className="text-xl font-semibold"> Title: {product?.title}</h1>
        </Link>
        <p>Author: {product?.author}</p>
        <p className="text-sm">Genre: {product?.genre}</p>
        <p className="text-sm">publication Date: {product?.publicationDate}</p>

        <button
          className="text-2xl text-red-600"
          onClick={() => handleAddProduct(product)}
        >
          &hearts;
        </button>
      </div>
    </div>
  );
}
