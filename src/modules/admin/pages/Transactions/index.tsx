import Table, { ITableHead } from '@components/shared/Table';
import { twMerge } from 'tailwind-merge';
import TransactionEmptyImage from '@assets/icons/transactionEmptyState.svg?react';
import PageHeader from '@components/shared/PageHeader';
import ControlledSelect from '@components/shared/Select/ControlledSelect';
import { useForm } from 'react-hook-form';

const transactionData = [
  {
    date: '12/12/2022',
    name: 'John Doe',
    type: 'Payment',
    amount: 1200,
    status: 'successful',
  },
  {
    date: '12/12/2022',
    name: 'John Doe',
    type: 'Payment',
    amount: 1200,
    status: 'successful',
  },
  {
    date: '12/12/2022',
    name: 'John Doe',
    type: 'Payment',
    amount: 1200,
    status: 'successful',
  },
];

const head: ITableHead[] = [
  {
    accessor: 'date',
    label: ' Date',
    render: (date: string) => date,
    columnClassName: 'hidden lg:table-cell',
  },
  {
    accessor: 'name',
    label: 'Name',
    columnClassName: 'hidden  lg:table-cell',
  },
  {
    accessor: 'type',
    label: 'Transaction Type',
    align: 'center',
  },
  {
    accessor: 'amount',
    label: 'Amount(₦)',
    align: 'center',
  },
  {
    accessor: 'status',
    label: 'Status',
    columnClassName: 'hidden lg:table-cell',

    render: (status: string) => {
      const className = (() => {
        switch (status) {
          case 'successful':
            return 'bg-[#E8FDEF] text-[#12BA4A]';

          default:
            return 'text-red-400 bg-red-600';
        }
      })();
      return (
        <div
          className={twMerge(
            ' text-[14px] rounded-[20px] leading-[17px] font-[500] text-center capitalize py-[12px]  ',
            className,
          )}
        >
          {status}
        </div>
      );
    },
  },
];

const Transactions = () => {
  const { control } = useForm();
  return (
    <div className="bg-[#fff] p-6 pt-2">
      <div className="lg:flex justify-between items-center  pb-4 pt-6">
        <PageHeader bigText="Transaction History" />
        <div className=" mt-4 lg:mt-0 lg:w-[25%] ">
          <ControlledSelect
            control={control}
            name="Transaction Type"
            placeholder="Transaction Type"
            options={[{ value: 'all', label: 'All' }]}
          />
        </div>
      </div>
      <Table
        body={transactionData}
        heads={head}
        emptyStateImage={<TransactionEmptyImage />}
      />
    </div>
  );
};

export default Transactions;
