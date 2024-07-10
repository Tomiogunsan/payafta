import Button from '@components/shared/Button';
import { virtualCardPayment } from 'db/virtualCard';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import { useAppDispatch } from 'redux/hooks';

const CardBalance = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-4">
        <h3 className="text-[16px] leading-5">Card Balance</h3>
        <p className="text-[24px] leading-7 font-semibold">₦24,543.00</p>
      </div>
      {virtualCardPayment.map((el, idx) => {
        return (
          <div key={idx} className="flex justify-between py-4">
            <p className="text-[#666] leading-[20px] text-[16px] font-[500]">
              {el.title}
            </p>
            <p className="text-[16px] text-[#333] leading-[20px] font-[500]">
              {el.name}
            </p>
          </div>
        );
      })}

      <div className="flex items-center justify-center pt-4 gap-2 w-full px-2">
        <Button
          className="rounded-[48px] py-[10px] bg-primary w-full"
          onClick={() => {
            dispatch(
              setOpenModal({
                openModal: true,
                modalType: 'fundVirtualCard',
              }),
            );
          }}
        >
          Fund Card
        </Button>
        <Button
          className="w-full rounded-[48px] py-[10px] !border-[1px] !border-primary text-primary "
          onClick={() => {
            dispatch(
              setOpenModal({
                openModal: true,
                modalType: 'withdrawVirtualCard',
              }),
            );
          }}
        >
          {' '}
          Withdrawal
        </Button>
      </div>
    </>
  );
};

export default CardBalance;
