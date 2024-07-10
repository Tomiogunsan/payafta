import CardBackground from '@assets/icons/virtualCardBackground.svg';
import Visa from '@assets/svg/Visa.svg?react';
import Logo from '@assets/icons/whiteLogo.svg?react';

const PayaftaVirtualCard = () => {
  return (
    <>
      <div className="w-full relative h-full">
        <img
          src={CardBackground}
          alt="background"
          className="w-full h-full object-cover rounded-[8px]"
        />
        <div className="absolute top-[16px] left-[11px] z-10 w-full">
          <div className="flex justify-between items-center ">
            <Logo className="ml-4" />
            <Visa className="mr-10" />
          </div>
          <div className="p-4">
            <p className="text-[#081F2B] text-[20px] leading-5">
              0000-0000-0000-0000
            </p>
            <div className="flex items-center ">
              <div className="flex flex-col">
                <p>Card Expiry</p>
                <p>00/00</p>
              </div>
              <div className="flex flex-col pl-14 pt-2">
                <p>CVV</p>
                <p>***</p>
              </div>
            </div>
            <p className="text-[#081F2B] text-[14px] leading-4 pt-[4px] ">
              Full Name
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayaftaVirtualCard;
