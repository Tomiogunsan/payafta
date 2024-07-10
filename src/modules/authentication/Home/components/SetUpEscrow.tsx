import { setUpEscrow } from 'db/home';
import check from '@assets/icons/check.svg';
import phoneScreen from '@assets/svg/phoneScreen.svg';

const SetUpEscrow = () => {
  return (
    <div className="bg-[#E9F5FB] lg:h-[639px] border rounded-[24px] flex  flex-col lg:flex-row gap-4 px-[40px] pt-[40px] mt-14">
      <div className="lg:w-[729px]">
        <h1 className=" text-[47px] lg:text-[64px] leading-[67px] lg:leading-[80px] text-[#03045B] font-[Playfair] pb-6 font-bold">
          Set Up Escrow Payments with Payafta
        </h1>
        <div>
          {setUpEscrow?.map((el, i) => (
            <div key={i} className="flex gap-2 items-baseline ">
              <img src={check} alt="check" />
              <p className="mb-4">{el}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img src={phoneScreen} alt=" a phone" />
      </div>
    </div>
  );
};

export default SetUpEscrow;
