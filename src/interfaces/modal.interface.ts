import { ReactNode } from 'react';

export type IModalPopType = {
  openModal: boolean;

  modalType: string;
  // isDone: number[];
  // isActive: string | number
};

export type IModalBox = {
  openModalBox: boolean;
  children?: ReactNode;
  onBackgroundClick?: () => void;
};
