import rightAccordion from '@assets/icons/rightAccordion.svg';
import Desktop from '@assets/svg/desktop.svg?react';

const safePaymentObj = [
  {
    smallText: 'Best escrow payment in Nigeria',
    bigText: 'The Safest Way to Pay',
    paragraph:
      'We offer you the safest way to pay for your online purchases. With Payafta, your money is held securely until you receive your goods or services as promised. Trust is at the core of what we do, and your peace of mind is our priority.',
    button: 'Get Started',
  },
];

const SafePayment = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2  pt-[38px] md:pt-[66px] pb-[30px] lg:pb-[54px] ">
      <div className="lg:flex-1">
        {safePaymentObj?.map((el, idx) => {
          return (
            <div key={idx} className="">
              <p className=" rounded-[16px] md:rounded-[24px] bg-[#86C8E9] p-2 w-[272px] text-[#fff] uppercase  text-[14px] font-600">
                {el?.smallText}
              </p>
              <h1 className=" font-[Playfair] text-[48px] lg:text-[80px] font-bold text-[#03045B]   md:w-[700px] lg:w-[539px]  leading-[65px] md:leading-[100px] uppercase mb-[10px]">
                {el?.bigText}
              </h1>
              <p className="text-[#333333] text-[16px] md:text-[20px] leading-[20px] md:leading-[25px] font-medium  md:w-[649px] mb-[24px]">
                {el?.paragraph}
              </p>
              <button className="flex gap-2  rounded-[31px] lg:rounded-[48px] bg-primary p-4 lg:p-6">
                <p className="text-[#fff]">{el?.button}</p>
                <img src={rightAccordion} alt="an accordion" />
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-16 lg:mt-0">
        <Desktop className="w-full" />
      </div>
    </div>
  );
};

export default SafePayment;
