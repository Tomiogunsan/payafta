import ControlledInput from '@components/shared/Input/ControlledInput';
import AddMore from '@assets/icons/addMore.svg?react';
import { useForm } from 'react-hook-form';

const ItemForm = () => {
  const { control } = useForm();
  return (
    <div>
      <label>Item 1</label>
      <ControlledInput
        name="item_name"
        placeholder="Enter Name"
        control={control}
      />
      <div className="grid lg:grid-cols-2 gap-4">
        <ControlledInput
          name="quantity"
          placeholder="Enter Quantity"
          control={control}
        />
        <ControlledInput name="amount" placeholder="₦0.00" control={control} />
      </div>
      <div className="flex justify-between">
        <p>DELETE</p>
        <AddMore />
      </div>
    </div>
  );
};

export default ItemForm;
