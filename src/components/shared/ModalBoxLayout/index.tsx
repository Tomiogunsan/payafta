import { IModalBox } from '@interfaces/modal.interface';

const ModalBoxLayout = ({
  openModalBox,
  children,
  onBackgroundClick,
}: IModalBox) => {
  return (
    openModalBox && (
      <div className="relative">
        <div
          className="fixed inset-0 z-[30] transition-opacity bg-gray-500 bg-opacity-75 overflow-auto"
          onClick={onBackgroundClick}
        >
          <div className="flex fixed inset-0 z-10 overflow-y-auto overflow-x-hidden">
            <div
              className="h-max m-auto relative"
              onClick={e => {
                e.stopPropagation();
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalBoxLayout;
