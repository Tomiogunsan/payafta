import PageHeader from '@components/shared/PageHeader';
import CreateCard from './components/CreateCard';
import Table, { ITableHead } from '@components/shared/Table';
import TransactionEmptyImage from '@assets/icons/transactionEmptyState.svg?react';
import { twMerge } from 'tailwind-merge';
import PayaftaVirtualCard from './components/PayaftaVirtualCard';

const VirtualCard = () => {
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
      columnClassName: 'hidden lg:table-cell',
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
  return (
    <div className="bg-[#fff] p-6 rounded-[8px]">
      <PageHeader bigText="Virtual Card" />
      <div className=" mt-6 grid  md:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-14">
        <div className=" w-full h-[190px]">
          <PayaftaVirtualCard />
        </div>
        <div className=" lg:col-span-2 rounded-[16px] border-[2px] border-[#f2f2f2] p-2  h-[466px]">
          <CreateCard />
        </div>
      </div>

      <h3 className=" py-8 text-[20px] leading-[25px] font-semibold text-mainTextColor">
        Transaction History
      </h3>
      <Table
        body={transactionData}
        heads={head}
        emptyStateImage={<TransactionEmptyImage />}
      />
    </div>
  );
};

export default VirtualCard;
