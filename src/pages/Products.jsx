import { Link } from 'react-router-dom';
import mockData from '../mocks/data';
const Products = () => {
  return (
    <section className='section'>
      <h2>Products Page</h2>
      <div className='products'>
        {mockData.map(({ id, name }) => {
          return (
            <article key={id}>
              <h5>{name}</h5>
              <Link to={`/products/${id}`}>detail</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Products;
