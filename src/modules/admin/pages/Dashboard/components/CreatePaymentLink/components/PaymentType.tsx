import ControlledInput from '@components/shared/Input/ControlledInput';

import Radio from '@components/shared/Radio';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import OneTimePayment from './OneTimePayment';
import MileStonePayment from './MileStonePayment';

// Pay gradually to the seller after reaching an agreement.
// Pay the agreed amount to the seller at once immediately after reaching an agreement.

function PaymentType() {
  const [title, setTitle] = useState('One time Payment');
  const opt = ['One time Payment', 'Milestone Payment'];
  const { control } = useForm();
  return (
    <div className="pt-4 grid gap-y-2">
      <ControlledInput
        name="description"
        label="Give more Details about the expected Item"
        multiline
        rows={4}
        control={control}
      />

      <Radio
        options={opt.map(tab => ({
          label: tab,
          value: tab,
        }))}
        onChange={setTitle}
        value={title}
        label="Payment Type"
        asteric
      />

      {title === 'One time Payment' && <OneTimePayment />}
      {title === 'Milestone Payment' && <MileStonePayment />}
    </div>
  );
}

export default PaymentType;
