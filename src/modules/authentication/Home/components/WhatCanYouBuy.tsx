import { physicalProducts, services } from 'db/home';
import check from '@assets/icons/check.svg';

const WhatCanYouBuy = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <h1 className="lg:w-[1248px] text-center  text-[48px] lg:text-[64px]  leading-[65px] lg:leading-[80px] text-[#03045B] font-bold font-[Playfair]">
        What Can You Buy & Sell Using PayAfta?
      </h1>
      <div className="flex flex-col md:flex-row gap-10 lg:gap-24 pt-6">
        <div className=" flex-1">
          <h3 className="font-[Millik] text-[22px] leading-[27px] text-[#333] font-bold pb-4">
            Physical Products
          </h3>
          {physicalProducts.map((el, i) => {
            return (
              <div key={i} className="flex gap-2">
                <img src={check} alt=" check" />
                <p className="">{el}</p>
              </div>
            );
          })}
        </div>
        <div className="">
          <h3 className="font-[Millik] text-[22px] leading-[27px] text-[#333] font-bold  pb-4">
            Services
          </h3>
          {services.map((el, i) => {
            return (
              <div key={i} className="flex gap-2">
                <img src={check} alt=" check" />
                <p>{el}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatCanYouBuy;
