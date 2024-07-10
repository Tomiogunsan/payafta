import { useState } from 'react';
import { ITabNames } from './interface';
import { twMerge } from 'tailwind-merge';

const PageTabs = ({
  tabsHeadsNames,
  setCurrentTabName,
  type,
  className,
  currentTabFromProps,
}: ITabNames) => {
  const [currentTab, setCurrentTab] = useState(
    currentTabFromProps ?? tabsHeadsNames[0],
  );
  const handleTabSwitch = (tabName: string) => {
    setCurrentTab(tabName);
    setCurrentTabName(tabName);
  };

  const activeTabClass =
    'bg-primary text-[#fff] text-[16px] leading-[20px] text-center font-[500] gap-2 items-center border-[#E2E8F0] px-[14px] py-[12px] cursor-pointer  rounded-[40px] border';
  const inactiveTabClass =
    'text-[#999] gap-2 items-center text-center font-[400] text-[16px] leading-[20px] px-[16px] py-[7px] cursor-pointer';
  return (
    <div
      className={twMerge(
        'rounded-[40px]  px-2 grid grid-cols-2 gap-10 items-center lg:w-[700px]  bg-[#F8F8F8]',
        className,
      )}
    >
      {!type &&
        tabsHeadsNames?.map(items => {
          return (
            <div key={items}>
              <div
                className={
                  currentTab === items || currentTabFromProps === items
                    ? activeTabClass
                    : inactiveTabClass
                }
                onClick={() => handleTabSwitch(items)}
                id={items}
              >
                {items}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default PageTabs;
