const Summary = () => {
  return (
    <>
      <h3 className="text-[20px] leading-6 text-mainTextColor ">Summary</h3>
      <div className="flex flex-col ">
        <p className="text-[14px] leading-4 text-[#666]">Name</p>
        <p className="text-[#1A1A1A] text-[16px] leading-5">Paul Simeon</p>
      </div>
      <div className="flex flex-col ">
        <p className="text-[14px] leading-4 text-[#666]">Payment Method</p>
        <p className="text-[#1A1A1A] text-[16px] leading-5">Milestone</p>
      </div>

      <p className="text-[14px] leading-4 text-[#666]">Service</p>

      <div className="bg-[#F8F8F8] p-2 grid gap-y-4 rounded-sm">
        <p className="text-[#1A1A1A] text-[14px] leading-4">
          Lorem ipsum dolor sit amet consectetur. Sapien placerat mauris cras
          commodo faucibus nisl magna in{' '}
        </p>
        <div className="flex justify-between">
          <p className="text-[14px] leading-4 text-[#666]">Quantity</p>
          <p className="text-[14px] leading-4 text-[#1A1A1A]">70</p>
        </div>
        <div className="flex justify-between">
          <p className="text-[14px] leading-4 text-[#666]">Price</p>
          <p className="text-[14px] leading-4 text-[#1A1A1A]">700000</p>
        </div>
      </div>
      <p className="text-[14px] leading-4 text-[#666]">Payment Milestone</p>
      <div className="bg-[#F8F8F8] p-2 grid gap-y-4 rounded-sm">
        <p className="text-[#1A1A1A] text-[14px] leading-4">
          Lorem ipsum dolor sit amet consectetur. Sapien placerat mauris cras
          commodo faucibus nisl magna in{' '}
        </p>
        <div className="flex">
          <p className="text-[14px] leading-4 text-[#666]">Date:</p>
          <p className="text-[14px] leading-4 text-[#1A1A1A] pl-6">
            November 24, 2023
          </p>
        </div>
        <div className="flex ">
          <p className="text-[14px] leading-4 text-[#666]">Amount:</p>
          <p className="text-[14px] leading-4 text-[#1A1A1A]">₦150,000.00</p>
        </div>
      </div>
      <div className="bg-[#F8F8F8] p-2 grid gap-y-4 rounded-sm">
        <p className="text-[#1A1A1A] text-[14px] leading-4">
          Lorem ipsum dolor sit amet consectetur. Sapien placerat mauris cras
          commodo faucibus nisl magna in{' '}
        </p>
        <div className="flex">
          <p className="text-[14px] leading-4 text-[#666]">Date:</p>
          <p className="text-[14px] leading-4 text-[#1A1A1A] pl-6">
            November 24, 2023
          </p>
        </div>
        <div className="flex ">
          <p className="text-[14px] leading-4 text-[#666]">Amount:</p>
          <p className="text-[14px] leading-4 text-[#1A1A1A]">₦150,000.00</p>
        </div>
      </div>
    </>
  );
};

export default Summary;
