import ControlledInput from '@components/shared/Input/ControlledInput';
import SettingsReuseableComponent from './shared/SettingsReuseableComponent';
import { useForm } from 'react-hook-form';
import ControlledPhoneNumberInput from '@components/shared/InputPhoneNumber/ControlledPhoneNumberInput';
import ControlledSelect from '@components/shared/Select/ControlledSelect';

const ProfileInformation = () => {
  const { control } = useForm();
  return (
    <SettingsReuseableComponent
      title="Profile Information"
      className="border rounded-[8px] p-6 grid gap-y-4 "
      button
      buttonText="Edit Information"
    >
      <ControlledInput control={control} name="firstname" label="First Name" />
      <ControlledInput control={control} name="lastname" label="Last Name" />
      <ControlledPhoneNumberInput
        control={control}
        name="phone"
        label="Phone Number"
      />
      <ControlledInput control={control} name="email" label="Email Address" />
      <div className="grid lg:grid-cols-2 gap-2 items-center">
        <ControlledInput control={control} name="dob" label="Date of Birth" />
        <ControlledSelect
          name="gender"
          label="Gender"
          control={control}
          options={[{ label: 'male', value: 'male' }]}
        />
      </div>
    </SettingsReuseableComponent>
  );
};

export default ProfileInformation;
