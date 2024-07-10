import Bell from '@assets/icons/bell.svg?react';
import DashboardSettings from '@assets/icons/dashboardSettings.svg?react';

const Header = () => {
  return (
    <div className="flex justify-between bg-[#fff] p-4 h-[64px] ">
      <p>Hi Paul</p>
      <div className="flex">
        <Bell className="mr-4" />
        <DashboardSettings />
      </div>
    </div>
  );
};

export default Header;
