import Table from '@components/shared/Table';
import { paymentLinkData } from 'db/paymentLinks';
import { ITableHead } from '@components/shared/Table';
import { twMerge } from 'tailwind-merge';
import PageHeader from '@components/shared/PageHeader';
import CreatePaymentIcon from '@assets/icons/createPayment.svg?react';
import SearchFilter from '@components/shared/SearchFilter';
import ControlledSelect from '@components/shared/Select/ControlledSelect';
import { useForm } from 'react-hook-form';

export const head: ITableHead[] = [
  {
    accessor: 'date',
    label: ' Date',
    render: (date: string) => date,
    columnClassName: 'hidden lg:table-cell',
  },
  {
    accessor: 'name',
    label: 'Name',
  },
  {
    accessor: 'type',
    label: 'Type',
    align: 'center',
    columnClassName: 'hidden lg:table-cell',
  },
  {
    accessor: 'amount',
    label: 'Amount(₦)',
    align: 'center',
    columnClassName: 'hidden lg:table-cell',
  },
  {
    accessor: 'status',
    label: 'Status',
    align: 'center',

    render: (status: string) => {
      const className = (() => {
        switch (status) {
          case 'agreement':
            return 'bg-[#E8FDEF] text-[#12BA4A]';
          case 'payment':
            return 'bg-[#E9F5FB] text-[#1F7EAD]';
          case 'shipping':
            return 'bg-[#E6E7FE]  text-[#03045B] ';
          case 'closed':
            return 'bg-[#F2F2F2] text-[#333]';
          case 'delivery':
            return 'bg-[#E6E7FE] text-[#03045B]';
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

const PaymentLinks = () => {
  const { control } = useForm();
  return (
    <div className="bg-[#fff] p-6 rounded-[8px]">
      <PageHeader
        bigText="Payment Link"
        icon={<CreatePaymentIcon />}
        smallText="Create Payment"
        card
        className="pt-8"
      />
      <div className="flex flex-col lg:flex-row justify-between items-center pb-4">
        <div className=" w-full lg:w-[45%] grid grid-flow-col gap-2">
          <SearchFilter placeholder="Search" />
        </div>

        <div className="flex  gap-4 w-full lg:w-[39%]">
          <div className="flex flex-grow">
            <ControlledSelect
              name="paymentType"
              placeholder="Payment Type"
              control={control}
              options={[{ label: 'All', value: 'd' }]}
            />
          </div>
          <div className="flex flex-grow">
            <ControlledSelect
              name="status"
              placeholder="Status"
              control={control}
              options={[{ label: 'All', value: 'd' }]}
            />
          </div>
        </div>
      </div>

      <Table body={paymentLinkData} heads={head} showView />
    </div>
  );
};

export default PaymentLinks;
