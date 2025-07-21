import { Link } from 'react-router-dom';

const Header = ({ user, onLogout }) => {
  return (
    <div className='h-[50px] p-3 m-2 bg-[#3f3939] flex justify-between'>
        <div>
            <span className='font-bold text-white'>LOCAL SKILL HUB</span>
        </div>
        <div className='flex text-white font-semibold justify-between w-[40%]'>
            <Link to="/" className='hover:text-yellow-400'>Home</Link>
            <Link to="/contact" className='hover:text-yellow-400'>Contact</Link>
            <Link to="/categories" className='hover:text-yellow-400'>Categories</Link>

            {user ? (
              <div onClick={onLogout} className="hover:cursor-pointer hover:text-red-400">Logout</div>
            ) : (
              <>
                <Link to="/signup" className='hover:text-yellow-400'>Signup</Link>
                <Link to="/login" className='hover:text-yellow-400'>Login</Link>
              </>
            )}
        </div>
    </div>
  );
};

export default Header;
