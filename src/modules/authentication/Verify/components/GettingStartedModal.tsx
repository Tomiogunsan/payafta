import ModalBoxLayout from '@components/shared/ModalBoxLayout';
import RenderIf from '@components/shared/RenderIf';

import SettlementKYCForm from './SettlementKYC/SettlementKYCForm';
import { useAppSelector } from 'redux/hooks';
import PersonalKYCForm from './PersonalKYC/PersonalKYCForm';
import TransactionPINForm from './TransactionPIN/TransactionPINForm';

const GettingStartedModal = ({ handleNext }: { handleNext: () => void }) => {
  const { modalType, openModal } = useAppSelector(state => state.modal);
  return (
    <div>
      <ModalBoxLayout openModalBox={openModal}>
        <RenderIf condition={modalType === 'settlementKYC'}>
          <SettlementKYCForm handleNext={handleNext} />
        </RenderIf>
        <RenderIf condition={modalType === 'personalKYC'}>
          <PersonalKYCForm handleNext={handleNext} />
        </RenderIf>
        <RenderIf condition={modalType === 'transactionPIN'}>
          <TransactionPINForm handleNext={handleNext} />
        </RenderIf>
      </ModalBoxLayout>
    </div>
  );
};

export default GettingStartedModal;
