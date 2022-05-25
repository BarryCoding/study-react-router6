import {Link, Outlet} from 'react-router-dom'
const Home = () => {
  return (
    <section className='section'>
      <h2>Home Shared Content</h2>
      <Outlet />
    </section>
  );
};
export default Home;
