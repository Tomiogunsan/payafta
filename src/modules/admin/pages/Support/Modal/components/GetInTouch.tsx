import Button from '@components/shared/Button';
import ControlledInput from '@components/shared/Input/ControlledInput';
import { setOpenModal } from 'features/modalPopUp/modalPopSlice';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from 'redux/hooks';

const GetInTouch = () => {
  const { control } = useForm();
  const dispatch = useAppDispatch();
  return (
    <div className="w-[600px] bg-[#fff] rounded-[8px] p-4 grid gap-y-2">
      <h3 className="text-[24px] leading-7 font-semibold text-[#1A1A1A]">
        Get in Touch
      </h3>
      <p className="text-[14px] leading-4 text-[#666]">
        24/7 Support: Our team is ready to assist you anytime.
      </p>
      <form>
        <div className="grid md:grid-cols-2 gap-4">
          <ControlledInput
            label="First Name"
            name="firstname"
            control={control}
          />
          <ControlledInput
            label="Last Name"
            name="lastname"
            control={control}
          />
        </div>
        <ControlledInput label="Email" name="email" control={control} />
        <ControlledInput
          label="Message"
          name="message"
          control={control}
          multiline
          rows={3}
        />
        <div className="md:w-[320px] mx-auto pt-4">
          <Button
            className=" w-full bg-primary text-[#fff] py-[10px] rounded-[48px]"
            onClick={() =>
              dispatch(
                setOpenModal({
                  modalType: '',
                  openModal: false,
                }),
              )
            }
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GetInTouch;
