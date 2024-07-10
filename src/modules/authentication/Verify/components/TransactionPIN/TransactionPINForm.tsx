import Button from '@components/shared/Button';
import ControlledInput from '@components/shared/Input/ControlledInput';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'redux/hooks';

const TransactionPINForm = ({ handleNext }: { handleNext: () => void }) => {
  const dispatch = useAppDispatch();
  const handleNextForm = () => {
    handleNext();
    dispatch(
      setOpenModal({
        openModal: false,
        modalType: '',
      }),
    );
  };
  const { control } = useForm({
    defaultValues: {
      token: ['', '', '', ''],
    },
  });
  return (
    <div className="  lg:w-[500px] bg-[#fff]  rounded-2xl p-6 grid gap-y-2">
      <form>
        <p>Enter Verification code</p>
        <div className="flex w-full max-w-[360px] gap-[10px]">
          {Array.from({ length: 4 }).map((_digit, idx) => (
            <ControlledInput
              key={idx}
              type="text"
              name={`token.${idx}`}
              inputMode="numeric"
              autoComplete="one-time-code"
              control={control}
              //   pattern="\d{1}"

              // maxLength={valueLength}
              // value={digit}

              className="w-full h-[40px] border-[1px] rounded-[5px] text-center font-bold text-[32px] leading-3"
              //   {...register(`token.${idx}`)}
            />
          ))}
        </div>
        <p>Confrim Verification code</p>
        <div className="flex w-full max-w-[360px] gap-[10px]">
          {Array.from({ length: 4 }).map((_digit, idx) => (
            <ControlledInput
              key={idx}
              type="text"
              name={`token.${idx}`}
              inputMode="numeric"
              autoComplete="one-time-code"
              control={control}
              //   pattern="\d{1}"

              // maxLength={valueLength}
              // value={digit}

              className="w-full h-[40px] border-[1px] rounded-[5px] text-center font-bold text-[32px] leading-3"
              //   {...register(`token.${idx}`)}
            />
          ))}
        </div>
      </form>
      <div className="flex justify-end">
        <Button
          className="bg-primary rounded-[40px] px-14 py-2 flex justify-end"
          onClick={handleNextForm}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default TransactionPINForm;
