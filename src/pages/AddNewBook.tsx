import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { ChangeEvent, FormEvent, useState } from 'react';
import { usePostBookMutation } from '../redux/features/products/productApi';

interface IBook {
  title: string;
  author: string;
  genre: string;
  image: string;
  publicationDate: string;
}

export default function AddNewBook() {
  const [formValues, setFormValues] = useState<IBook>({
    title: '',
    author: '',
    genre: '',
    image: '',
    publicationDate: '',
  });

  const [postBook, { isLoading, isSuccess, isError }] = usePostBookMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formValues);
    console.log(isLoading, isSuccess, isError);

    try {
      const response = await postBook({ data: formValues });
      if ('data' in response) {
        toast({
          description: 'The Book has been saved',
        });
        console.log('Product saved:', response.data);
      } else {
        toast({
          description: 'The Book not saved',
        });
        console.log('Error saving product:', response.error);
      }
    } catch (error) {
      console.log('Error saving product:', error);
      toast({
        description: 'The Book not saved',
      });
    }

    setFormValues({
      title: '',
      author: '',
      genre: '',
      publicationDate: '',
      image: '',
    });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="max-w-5xl mx-auto mt-5">
      <form
        className="flex gap-5 items-center flex-col"
        onSubmit={handleSubmit}
      >
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={formValues.title}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="author"
          placeholder="Author"
          value={formValues.author}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formValues.genre}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="image"
          placeholder="Paste image Link"
          value={formValues.image}
          onChange={handleChange}
        />
        <Input
          type="date"
          name="publicationDate"
          placeholder="Publication Date"
          value={formValues.publicationDate}
          onChange={handleChange}
        />
        <Button type="submit" className="">
          POST BOOK
        </Button>
      </form>
    </div>
  );
}
