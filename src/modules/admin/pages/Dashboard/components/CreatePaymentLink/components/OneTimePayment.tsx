import Date from '@components/shared/Date/Date';

import ControlledRadio from '@components/shared/Radio/ControlledRadio';
import { payType } from '@utils/enums';
import { useForm } from 'react-hook-form';

const OneTimePayment = () => {
  const { control } = useForm();
  return (
    <div className="pt-4">
      <div className="lg:w-1/2 pb-4">
        <Date
          name="date"
          control={control}
          label="Select Delivery Date"
          asteric
        />
      </div>

      <ControlledRadio
        name="transaction_fee"
        label="Transaction Fee"
        options={payType}
        control={control}
        asteric
      />
    </div>
  );
};

export default OneTimePayment;
