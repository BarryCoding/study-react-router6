import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const isActiveLink = ({isActive}) => (isActive ? 'link active' : 'link')
  return (
    <nav className='navbar'>
      <NavLink to='/' className={isActiveLink} >Home</NavLink>
      <NavLink to='/about' className={isActiveLink} >About</NavLink>
      <NavLink to='/products'className={isActiveLink} >Products</NavLink>
      <NavLink to='/login'className={isActiveLink} >Login</NavLink>
    </nav>
  );
};
export default Navbar;