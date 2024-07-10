import { useState } from 'react';
import VirtualCardEmptyState from '@assets/icons/virtualCardEmptyState.svg?react';
import Button from '@components/shared/Button';
import { useAppDispatch } from 'redux/hooks';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import VirtualCardModal from '../Modal/VirtualCardModal';
import CardBalance from './CardBalance';

const CreateCard = () => {
  const [createCard, setCreateCard] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <div>
      {createCard === false && (
        <div className=" mt-24 flex flex-col items-center">
          <VirtualCardEmptyState className="mb-6" />

          <Button
            className="bg-primary rounded-[48px] text-[#fff] w-full lg:w-[320px] py-2"
            onClick={() => {
              dispatch(
                setOpenModal({
                  openModal: true,
                  modalType: 'createVirtualCard',
                }),
              );
            }}
          >
            Create Card
          </Button>
        </div>
      )}
      <div>{createCard && <CardBalance />}</div>

      <VirtualCardModal setCreateCard={setCreateCard} />
    </div>
  );
};

export default CreateCard;
