import logo from '@/assets/images/logo.png';
import { RiFacebookBoxFill, RiInstagramLine } from 'react-icons/ri';
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="bg-[#242630] text-secondary p-20">
      <div className="flex justify-between">
        <div>
          <img className="h-10" src={logo} alt="Logo" />
        </div>
        <div className="flex gap-20">
          <ul className="space-y-2">
            <li>Upcoming Book</li>

            <li>How can open the book</li>
          </ul>
          <ul className="space-y-2">
            <li>Contact</li>
            <li>Writer</li>
          </ul>
          <ul className="space-y-2">
            <li>List your book</li>
            <li>Contact author</li>
          </ul>
        </div>
        <div className="flex gap-2 text-2xl">
          <RiFacebookBoxFill />
          <RiInstagramLine />
        </div>
      </div>
      <div className="flex w-full mt-20 gap-5">
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p className="ml-auto"> &#169; Book {year}</p>
      </div>
    </div>
  );
}
