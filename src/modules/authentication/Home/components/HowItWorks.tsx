const cardObject = [
  {
    id: 1,
    header: 'Buyer and seller agree to terms',
    paragraph:
      'When you make a purchase or engage in a transaction, both parties agree to use Payafta for payment.',
  },
  {
    id: 2,
    header: 'Buyer submits payment to Payafta',
    paragraph:
      'The buyer makes a payment to the seller’s Payafta wallet. The funds are securely held by Payafta.',
  },

  {
    id: 3,
    header: 'Seller delivers order to buyer',
    paragraph:
      'The seller ships the product or provides the service as agreed.',
  },
  {
    id: 4,
    header: 'Buyer approves goods or services',
    paragraph:
      'Once the buyer receives the goods or services and confirms their satisfaction, Payafta releases the funds to the seller.',
  },
  {
    id: 5,
    header: 'PayAfta releases payment to seller',
    paragraph:
      'If everything is as expected, the funds are released to the seller. If not, Payafta can help mediate any disputes.',
  },
];

const HowItWorks = () => {
  return (
    <div className=" pt-[40px] md:pt-[86px] ">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" font-bold  text-[48px] md:text-[64px]  leading-[65px] md:leading-[80px] text-[#03045B] font-[Playfair]">
          How it works
        </h1>
        <p className=" text-[16px] lg:text-[20px] text-center font-medium   lg:w-[838px]  leading-[20px] lg:leading-[25px] text-[#666666]">
          We utilize state-of-the-art encryption and security measures to
          protect your financial transactions, ensuring that your money is held
          securely until both parties meet their obligations. Payafta is your
          trusted partner for worry-free financial transactions
        </p>
      </div>
      <div className=" flex flex-col lg:flex-row gap-4  pt-7">
        {cardObject.map(el => {
          return (
            <div
              key={el?.id}
              className="lg:w-[250px] border-[1px] rounded-[8px] bg-[#E6E7FE]/50 p-5"
            >
              <h3 className="text-[20px] pb-4 leading-[25px] text-[#1A1A1A] font-semibold">
                {el?.header}
              </h3>
              <p className="text-[20px] leading-[25px] text-[#333333] font-normal">
                {el?.paragraph}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
