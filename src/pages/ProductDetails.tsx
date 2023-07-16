import ProductReview from '@/components/ProductReview';
import { useSingleProductQuery } from '@/redux/features/products/productApi';

import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();

  const { data: product, isLoading, error } = useSingleProductQuery(id);

  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300 gap-10">
        <div className="w-[50%]">
          <img src={product?.image} alt="" />
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">{product?.title}</h1>
          <p className="text-xl">Author: {product?.author}</p>
          <p className="text-xl">Genre: {product?.genre}</p>
          <p className="text-xl">
            Publication Date: {product?.publicationDate}
          </p>
          <ul className="space-y-1 text-lg">
            {product?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="flex space-x-2">
            <button className="text-2xl text-red-600">&hearts;</button>
            <button className="text-2xl text-blue-600">Edit</button>
            <button className="text-2xl text-gray-600">Delete</button>
          </div>
        </div>
      </div>
      <ProductReview id={id!} />
    </>
  );
}
