import sellerProtection from '@assets/svg/SellerProtection.svg';

const SellerProtection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 items-center justify-center pt-16">
      <div className="flex-1">
        <h1 className=" lg:w-[524px] text-[48px] lg:text-[64px] leading-[80px] text-[#03045B] font-bold font-[Playfair]">
          Seller Protection with Payafta
        </h1>
        <p className="lg:w-[624px] text-[20px] leading-[25px] font-medium text-[#333333] pt-4">
          Sellers, we've got your back too. Payafta provides seller protection
          by ensuring that you receive payment once you fulfill your part of the
          deal. You can trust us to hold the buyer's funds securely until the
          transaction is complete. We're committed to making your online sales
          as smooth and secure as possible.
        </p>
      </div>
      <div className=" pt-10">
        <img src={sellerProtection} alt=" a happy man" />
      </div>
    </div>
  );
};

export default SellerProtection;
