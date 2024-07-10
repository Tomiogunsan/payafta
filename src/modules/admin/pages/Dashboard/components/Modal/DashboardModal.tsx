import ModalBoxLayout from '@components/shared/ModalBoxLayout';
import RenderIf from '@components/shared/RenderIf';

import { useAppSelector } from 'redux/hooks';
import FundWalletModal from './FundWalletModal';
import WithdrawFundModal from './WithdrawFundModal';

const DashboardModal = () => {
  const { modalType, openModal } = useAppSelector(state => state.modal);
  return (
    <div>
      <ModalBoxLayout openModalBox={openModal}>
        <RenderIf condition={modalType === 'fundWallet'}>
          <FundWalletModal />
        </RenderIf>
        <RenderIf condition={modalType === 'withdrawFund'}>
          <WithdrawFundModal />
        </RenderIf>
      </ModalBoxLayout>
    </div>
  );
};

export default DashboardModal;
