import { Outlet } from 'react-router-dom';
const SharedLayout = () => {
  return (
    <section className='section'>
      <h2>Products Page</h2>
      <Outlet />
    </section>
  );
};
export default SharedLayout;
