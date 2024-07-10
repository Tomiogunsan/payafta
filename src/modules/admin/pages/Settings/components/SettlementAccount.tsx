import SettingsReuseableComponent from './shared/SettingsReuseableComponent';

const SettlementAccount = () => {
  return (
    <SettingsReuseableComponent
      title="Settlement Account"
      className="border rounded-[8px] p-6 bg-[#F8F8F8] text-mainTextColor"
      button
      buttonText="Edit Bank Details"
    >
      <p className="text-[14px] leading-4 ">Sterling Bank</p>
      <h1 className="text-[24px] leadimng-5">0011223344</h1>
      <p className="text-[14px] leading-4 ">Paul Falade</p>
    </SettingsReuseableComponent>
  );
};

export default SettlementAccount;
