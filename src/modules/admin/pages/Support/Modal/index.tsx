import ModalBoxLayout from '@components/shared/ModalBoxLayout';
import RenderIf from '@components/shared/RenderIf';
import { useAppSelector } from 'redux/hooks';
import GetInTouch from './components/GetInTouch';
import MessageSent from './components/MessageSent';

const SupportModal = () => {
  const { modalType, openModal } = useAppSelector(state => state.modal);
  return (
    <ModalBoxLayout openModalBox={openModal}>
      <RenderIf condition={modalType === 'getInTouch'}>
        <GetInTouch />
      </RenderIf>
      <RenderIf condition={modalType === 'messageSent'}>
        <MessageSent />
      </RenderIf>
    </ModalBoxLayout>
  );
};

export default SupportModal;
