import { ReactNode } from 'react';

export type IPageHeaderProps = {
  bigText: string;
  icon?: ReactNode;
  smallText?: string;
  onClick?: () => void;
  className?: string;
  card?: boolean;
};
