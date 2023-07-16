import banner from '@/assets/images/Book.jpg';
import hero from '@/assets/images/hero.jpg';
import { Button } from '@/components/ui/button';
import Footer from '@/layouts/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
        <div>
          <h1 className="text-6xl font-black text-primary mb-2">
            printed <br /> work consisting
          </h1>
          <p className="text-secondary font-semibold text-xl">
            It can also be handwritten or printed work
          </p>
          <div className="text-primary mt-20">
            <p>A book is a medium for recording </p>
            <p>information in the form of writing or images</p>
          </div>
          <Button className="mt-5">Learn more</Button>
        </div>
        <div className="relative -right-14">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className="mb-96">
        <div>
          <img className="mx-auto" src={hero} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl font-black text-primary uppercase mt-10">
            The future of tech is here
          </h1>
          <Button className="mt-10" asChild>
            <Link to="/products">Brows all products</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
