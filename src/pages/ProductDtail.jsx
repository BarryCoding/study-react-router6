import { Link, useParams } from 'react-router-dom';
import mockData from '../mocks/data'

export const ProductDtail = () => {
  const { productId } = useParams();
  const {image,name} = mockData.find(data=>data.id === productId)
  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products'>back to Products</Link>
    </section>
  );
};
