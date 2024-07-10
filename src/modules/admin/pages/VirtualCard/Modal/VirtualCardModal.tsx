import ModalBoxLayout from '@components/shared/ModalBoxLayout';
import RenderIf from '@components/shared/RenderIf';
import { useAppSelector } from 'redux/hooks';
import CreateVirtualCardModal from './CreateVirtualCardModal';
import { IVirtualCardModalProps } from '@interfaces/virtualCard.interface';
import FundVirtualCardModal from './FundVirtualCardModal';
import WithdrawalModal from './WithdrawalModal';

const VirtualCardModal = ({ setCreateCard }: IVirtualCardModalProps) => {
  const { modalType, openModal } = useAppSelector(state => state.modal);
  return (
    <div>
      <ModalBoxLayout openModalBox={openModal}>
        <RenderIf condition={modalType === 'createVirtualCard'}>
          <CreateVirtualCardModal setCreateCard={setCreateCard} />
        </RenderIf>
        <RenderIf condition={modalType === 'fundVirtualCard'}>
          <FundVirtualCardModal />
        </RenderIf>
        <RenderIf condition={modalType === 'withdrawVirtualCard'}>
          <WithdrawalModal />
        </RenderIf>
      </ModalBoxLayout>
    </div>
  );
};

export default VirtualCardModal;
