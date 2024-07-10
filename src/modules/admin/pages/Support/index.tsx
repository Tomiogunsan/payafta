import PageHeader from '@components/shared/PageHeader';
import FrequentlyAskedQuestions from './components/FrequentlyAskedQuestions';
import HavingTrouble from './components/HavingTrouble';
import SupportModal from './Modal';

const Support = () => {
  return (
    <div className="bg-[#fff] p-6 rounded-[8px]">
      <PageHeader bigText="Support" className="py-2" />
      <p className=" text-[14px] text-[#999] font-[500] leading-4">
        Elevate your experience with dedicated support and helpful resources.
      </p>

      <FrequentlyAskedQuestions />
      <HavingTrouble />
      <SupportModal />
    </div>
  );
};

export default Support;
