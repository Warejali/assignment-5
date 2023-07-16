import ProductCard from '@/components/ProductCard';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useGetProductsQuery } from '@/redux/features/products/productApi';
import { IProduct } from '@/types/globalTypes';
import React, { useState } from 'react';

export default function Products() {
  const { data, isLoading, error } = useGetProductsQuery(undefined);
  const { toast } = useToast();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const genres =
    [...new Set(data?.data?.map((product: IProduct) => product.genre))] || [];
  const publicationYears =
    [
      ...new Set(
        data?.data?.map((product: IProduct) => product.publicationDate)
      ),
    ] || [];

  const filteredProducts = data?.data?.filter((product: IProduct) => {
    const matchSearchTerm =
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.publicationDate.toLowerCase().includes(searchTerm.toLowerCase());

    const matchGenre =
      selectedGenre === 'All' || product.genre === selectedGenre;

    const matchYear =
      selectedYear === 'All' || product.publicationDate === selectedYear;

    return matchSearchTerm && matchGenre && matchYear;
  });

  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <h1 className="text-2xl uppercase">Filters</h1>
        <div className="mt-3">
          <Label htmlFor="search">Search:</Label>
          <input
            id="search"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={searchTerm}
            onChange={handleSearch}
          />
          {/* <FaSearch className="mr-2" /> */}
        </div>
        <div className="mt-3">
          <Label htmlFor="genre">Genre:</Label>
          <select
            id="genre"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={selectedGenre}
            onChange={handleGenreChange}
          >
            <option value="All">All</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className="mt-3">
          <Label htmlFor="year">Publication Year:</Label>
          <select
            id="year"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            value={selectedYear}
            onChange={handleYearChange}
          >
            <option value="All">All</option>
            {publicationYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {filteredProducts?.map((product: IProduct) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
