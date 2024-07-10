import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IJSON = { [key: string | number]: any };
// type AnyValue = string | number |
export type ITableHead = {
  label: ReactNode;
  accessor: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (val: any, rowData: any) => ReactNode;
  align?: 'left' | 'center' | 'right';
  headClassName?: string;
  columnClassName?: string;
};

type ITableBody = IJSON;

type ITableProps = {
  heads: ITableHead[];
  body: ITableBody[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMenuClick?: (rowData: any) => void;
  showView?: boolean;
  emptyStateImage?: ReactNode;
};

const Table = ({ heads, body, showView, emptyStateImage }: ITableProps) => {
  return (
    <>
      {body.length === 0 ? (
        <>
          <div className="flex justify-between items-center bg-[#F8F8F8] font-medium">
            {heads.map(({ label, accessor }) => {
              return (
                <p
                  className={`shadow-sm bg-[#F8F8F8] p-4 font-medium h-[48px] border-r-[1px] last:border-r-0`}
                  key={accessor}
                >
                  {label}
                </p>
              );
            })}
            {showView && (
              <p className="hidden lg:table-cell shadow-sm bg-[#F8F8F8] p-4 font-medium h-[48px]">
                View
              </p>
            )}
          </div>
          <div className="flex items-center justify-center mt-28">
            {emptyStateImage}
          </div>
        </>
      ) : (
        <table className="w-full bg-[#fff]">
          <thead>
            {heads.map(
              ({ label, accessor, align, headClassName, columnClassName }) => {
                return (
                  <th
                    className={twMerge(
                      'shadow-sm bg-[#F8F8F8] p-4 font-medium h-[48px] border-r-[1px] last:border-r-0',
                      columnClassName,
                      headClassName,
                    )}
                    align={align || 'left'}
                    key={accessor}
                  >
                    {label}
                  </th>
                );
              },
            )}
            {showView && (
              <th className="hidden lg:table-cell shadow-sm bg-[#F8F8F8] p-4 font-medium h-[48px]">
                View
              </th>
            )}
          </thead>
          <tbody>
            {body.map((data, idx) => {
              return (
                <tr key={idx} className="border-b-[1px] ">
                  {heads.map(({ accessor, align, render, columnClassName }) => {
                    return (
                      <td
                        align={align || 'left'}
                        key={accessor}
                        className={twMerge('p-4', columnClassName)}
                      >
                        {render ? render(data[accessor], data) : data[accessor]}
                      </td>
                    );
                  })}
                  {showView && (
                    <td className="hidden lg:table-cell text-center">View</td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table;
