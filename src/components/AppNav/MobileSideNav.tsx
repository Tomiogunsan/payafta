import Logo from '@assets/svg/Logo.svg?react';
import Harmburger from '@assets/icons/hamburger.svg?react';
import CloseIcon from '@assets/icons/closeIcon.svg?react';
import { useState } from 'react';
import Avatar from '@assets/svg/avartar.svg?react';
import LogOutButton from '@assets/icons/power-button.svg?react';
import { NavLink, useLocation } from 'react-router-dom';
import { ADMIN_SIDENAV } from 'constant/sideNav';

const MobileSideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const pathName = location.pathname.split('/')[2];
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex items-center px-6">
        <Harmburger className="w-[44px] h-[84px] pr-2" onClick={handleToggle} />
        <Logo className="w-[110px]  h-[40px]" />
      </div>

      {isOpen && (
        <div className="bg-[#fff] w-[288px] h-[680px] absolute top-[15px] left-0 z-10 p-5">
          <div className="flex items-center">
            <CloseIcon
              className="w-[44px] h-[84px] pr-2"
              onClick={handleToggle}
            />
            <Logo className="w-[110px]  h-[40px]" />
          </div>
          <div className="pt-8 lex flex-col gap-2 ">
            {ADMIN_SIDENAV.map(sidenav => (
              <NavLink
                className="text-[#666666] text-[14px]  font-[400] active:text-[#1F7EAD] active:bg-[#E9F5FB] active:px-2  h-[56px] active:font-[400]  flex items-center gap-3"
                to={sidenav.path}
                key={sidenav.name}
                onClick={e => {
                  if (sidenav.disabled) {
                    e.preventDefault();
                    e.stopPropagation();
                  }
                }}
              >
                {pathName === sidenav.path ? (
                  <sidenav.IconBlue />
                ) : (
                  <sidenav.Icon />
                )}

                <span>{sidenav.name}</span>
              </NavLink>
            ))}
          </div>
          <div className="flex justify-between  items-center py-8 pl-4 mt-auto">
            <div className="flex items-center ">
              <Avatar />
              <p className="pl-2">Paul Simeon</p>
            </div>
            <div>
              <LogOutButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileSideNav;
