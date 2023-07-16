import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export default function EditProduct() {
  const { id } = useParams();
  const history = useHistory();

  // State to hold the edited product details
  const [product, setProduct] = useState({
    title: '',
    author: '',
    genre: '',
    publicationDate: '',
    features: [],
  });

  useEffect(() => {
    // Fetch the existing product details and populate the form
    fetchProductDetails();
  }, []);

  const fetchProductDetails = () => {
    // Fetch the product details using the product id
    // Assuming there is a getProductById function available
    const existingProduct = getProductById(id);

    // Set the existing product details in the state
    setProduct(existingProduct);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleFeatureChange = (e, index) => {
    const { value } = e.target;
    setProduct((prevProduct) => {
      const features = [...prevProduct.features];
      features[index] = value;
      return {
        ...prevProduct,
        features,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the update operation with the edited product details
    // Assuming there is an updateProduct function available
    updateProduct(product);
    history.push(`/products/${id}`); // Redirect to the updated product details page
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={product.author}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Genre:</label>
          <input
            type="text"
            name="genre"
            value={product.genre}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Publication Date:</label>
          <input
            type="text"
            name="publicationDate"
            value={product.publicationDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Features:</label>
          {product.features.map((feature, index) => (
            <input
              key={index}
              type="text"
              value={feature}
              onChange={(e) => handleFeatureChange(e, index)}
            />
          ))}
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
