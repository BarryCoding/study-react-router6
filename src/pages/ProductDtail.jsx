import { Link, useParams } from 'react-router-dom';

export const ProductDtail = () => {
  const { productId } = useParams();
  return (
    <section className='section product'>
      <h4>{productId}</h4>
      <Link to='/products'>back to Products</Link>
    </section>
  );
};
