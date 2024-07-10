import Logo from '@assets/svg/Logo.svg';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img src={Logo} alt="company logo" />
      </div>
      <div className="flex gap-6">
        <Link to="/signin">
          <button className="border-[2px] border-[#333333] rounded-[48px] px-[18px] flex items-center py-2">
            Login
          </button>
        </Link>

        <button className="hidden md:block rounded-[48px] px-[18px] bg-primary text-[#fff]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
