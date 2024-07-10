import ControlledInput from '@components/shared/Input/ControlledInput';
import ControlledPhoneNumberInput from '@components/shared/InputPhoneNumber/ControlledPhoneNumberInput';
import ControlledSelect from '@components/shared/Select/ControlledSelect';
import { useForm } from 'react-hook-form';

const BuyersInformationForm = () => {
  const { control } = useForm();
  return (
    <div className="pt-6">
      <div className="grid lg:grid-cols-2 gap-2 items-center">
        <ControlledSelect
          name="transaction_type"
          options={[
            { label: 'gu', value: 'so' },
            { label: 'ju', value: 'sem' },
          ]}
          label="Transaction Type"
          control={control}
          asteric
          placeholder="Select"
        />
        <ControlledInput
          name="buyer_name"
          label="Buyer’s Name"
          asteric={true}
          control={control}
        />
      </div>
      <div className="grid lg:grid-cols-2 items-center">
        <ControlledInput
          name="buyer_email"
          label="Buyer’s Email Address "
          asteric
          control={control}
          //   multiline
          //   rows={3}
        />
        <ControlledPhoneNumberInput
          name="buyer_phone"
          label="Buyer’s Phone Number"
          control={control}
          asteric
        />
      </div>
    </div>
  );
};

export default BuyersInformationForm;
