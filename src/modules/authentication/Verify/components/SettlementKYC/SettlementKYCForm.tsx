import CloseIcon from '@assets/icons/closeIcon.svg?react';
import Button from '@components/shared/Button';
import ControlledInput from '@components/shared/Input/ControlledInput';
import ControlledSelect from '@components/shared/Select/ControlledSelect';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'redux/hooks';

const options = [
  {
    label: 'MAN',
    value: 'man',
  },
  {
    label: 'WOMAN',
    value: 'woman',
  },
];

const SettlementKYCForm = ({ handleNext }: { handleNext: () => void }) => {
  const dispatch = useAppDispatch();
  const { control } = useForm();

  const handleNextForm = () => {
    handleNext();
    dispatch(
      setOpenModal({
        openModal: false,
        modalType: '',
      }),
    );
  };

  return (
    <div className="md:w-[500px] bg-[#fff]  rounded-2xl p-6 grid gap-y-4">
      <div className="flex justify-between">
        <h3 className="text-[20px]  text-[#333333] leading-[26px] font-semibold">
          Settlement KYC
        </h3>

        <CloseIcon
          onClick={() =>
            dispatch(
              setOpenModal({
                openModal: false,
                modalType: '',
              }),
            )
          }
        />
      </div>
      <form>
        <ControlledInput name="BVN" control={control} label=" Enter BVN" />
        <ControlledSelect
          name="bank_name"
          label="Select your bank name"
          control={control}
          options={options}
        />
        <ControlledInput
          label="Enter 10 digit account number"
          name="account_number"
          control={control}
        />
        <p className="text-[12px] text-[#999999] leading-4">Account Name</p>
        <div className="flex justify-end  pt-4">
          <Button
            className="bg-primary rounded-[40px] px-14 py-2 flex justify-end"
            onClick={handleNextForm}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SettlementKYCForm;
