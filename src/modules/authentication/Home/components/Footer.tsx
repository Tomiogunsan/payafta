import logo from '@assets/svg/Logo.svg';
import facebook from '@assets/svg/facebook.svg';
import twitter from '@assets/svg/twitter.svg';
import linkedin from '@assets/svg/linkedin.svg';
import instagram from '@assets/svg/instagram.svg';

const Footer = () => {
  return (
    <div>
      <div className="border border-[#03045B]" />
      <div className="flex flex-col md:flex-row items-center justify-between pt-6">
        <div className="md:w-[465px] text-[16px] leading-5">
          <img src={logo} alt="logo" />
          <p className="pt-4">
            Experience secure, swift, and intelligent transactions with our
            one-of-a-kind digital escrow payment platform across diverse
            scenarios.
          </p>
        </div>
        <div className="md:w-[403px]">
          <p className="text-[16px] leading-[22px] pb-4">
            <span className="font-semibold">Contact:</span>{' '}
            <span>Lorem ipsum dolor</span>
          </p>
          <p className="text-[16px] leading-[22px] pb-4">
            <span className="font-semibold">Nigeria: </span>
            <span>
              Lorem ipsum dolor sit amet conctetur. In dui magna convallis
              congue quis sed cras arcu nibh.
            </span>
          </p>
          <div className="flex gap-4">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
      </div>
      <p className="pt-10 pb-10 text-center text-[16px leading-5]">
        Copyright © 2023 PayAfta
      </p>
    </div>
  );
};

export default Footer;
