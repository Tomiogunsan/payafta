import CloseIcon from '@assets/icons/closeIcon.svg?react';
import Button from '@components/shared/Button';
import Date from '@components/shared/Date/Date';
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

const PersonalKYCForm = ({ handleNext }: { handleNext: () => void }) => {
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
    <div className="md:w-[500px] bg-[#fff]  rounded-2xl p-6 grid gap-y-2">
      <div className="flex justify-between">
        <h3 className="text-[20px]  text-[#333333] leading-[26px] font-semibold">
          Personal Information
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
        <ControlledInput
          name="firstname"
          label="First Name"
          control={control}
        />
        <ControlledInput name="lastname" label="Last Name" control={control} />

        <div className="flex items-center ">
          <ControlledSelect
            label="Gender"
            options={options}
            name="gender"
            control={control}
            labelClassName="text-[#333333]"
          />
          <Date name="date" control={control} label="Date of birth" />
        </div>

        <ControlledInput
          label="Instagram Username (optional)"
          name="instagram"
          control={control}
          placeholder="@"
        />
        <ControlledInput
          label="Facebook Username (optional)"
          name="facebook"
          control={control}
          placeholder="www.facebook.com/"
        />
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

export default PersonalKYCForm;
