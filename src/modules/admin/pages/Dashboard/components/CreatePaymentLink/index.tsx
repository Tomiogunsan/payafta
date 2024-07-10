import PageTabs from '@components/shared/PageTabs';
import ArrowLeft from '@assets/icons/arrowLeft.svg?react';
import { useState } from 'react';
import Buyer from './Buyer';
import Seller from './Seller';
import { useNavigate } from 'react-router-dom';

const CreatePaymentLink = () => {
  const [title, setTitle] = useState('Buyer');
  const terminalTabs = ['Buyer', 'Seller'];
  const navigate = useNavigate();
  return (
    <div className="bg-[#fff] p-6 grid gap-y-4">
      <div className="flex pb-2">
        <ArrowLeft onClick={() => navigate('/admin/dashboard')} />
        <h1 className="pl-2 text-[24px] leading-[30px] font-semibold text-mainTextColor">
          Start Secure Payment
        </h1>
      </div>

      <PageTabs tabsHeadsNames={terminalTabs} setCurrentTabName={setTitle} />
      {title === 'Buyer' && <Buyer />}
      {title === 'Seller' && <Seller />}
    </div>
  );
};

export default CreatePaymentLink;
