import Button from '@components/shared/Button';
import ItemForm from '../components/ItemForm';
import PaymentType from '../components/PaymentType';

import BuyersInformationForm from './BuyersInformation';

const Seller = () => {
  return (
    <>
      <BuyersInformationForm />
      <ItemForm />
      <PaymentType />
      <div className="flex items-center justify-center pt-4">
        <Button disabled className="px-12 rounded-[48px] py-[12px] text-[#fff]">
          Create Payment Link
        </Button>
      </div>
    </>
  );
};

export default Seller;
