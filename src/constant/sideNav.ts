import Dashboard from '@assets/icons/dashboard.svg?react';
import DashboardBlue from '@assets/icons/dashboardIconBlue.svg?react';
import Transactions from '@assets/icons/transactionIcon.svg?react';
import TransactionsBlue from '@assets/icons/transactionBlueIcon.svg?react';
import PaymentLinks from '@assets/icons/paymentLinkIcon.svg?react';
import PaymentLinksBlue from '@assets/icons/paymentLinkBlue.svg?react';
import VirtualCard from '@assets/icons/virtualCardIcon.svg?react';
import VirtualCardBlue from '@assets/icons/virtualCardBlueIcon.svg?react';
import Settings from '@assets/icons/setting.svg?react';
import SettingsBlue from '@assets/icons/settingsBlueIcon.svg?react';
import Support from '@assets/icons/support.svg?react';
import SupportBlue from '@assets/icons/supportBlueIcon.svg?react';

import { DashboardPath } from './paths';

type SvgInHtml = typeof Dashboard;

type NavLink = {
  name: string;
  path: string;
  Icon: SvgInHtml;
  IconBlue: SvgInHtml;
  disabled?: boolean;
};

const ADMIN_SIDENAV: NavLink[] = [
  {
    name: 'Dashboard',
    path: DashboardPath.DASHBOARD,
    Icon: Dashboard,
    IconBlue: DashboardBlue,
    // disabled: true,
  },
  {
    name: 'Transactions',
    path: DashboardPath.TRANSACTIONS,
    Icon: Transactions,
    IconBlue: TransactionsBlue,
  },
  {
    name: 'Payment',
    path: DashboardPath.PAYMENT_LINKS,
    Icon: PaymentLinks,
    IconBlue: PaymentLinksBlue,
  },
  {
    name: 'Virtual Card',
    path: DashboardPath.VIRTUAL_CARD,
    Icon: VirtualCard,
    IconBlue: VirtualCardBlue,
  },
  {
    name: 'Settings',
    path: DashboardPath.SETTINGS,
    Icon: Settings,
    IconBlue: SettingsBlue,
  },
  {
    name: 'Support',
    path: DashboardPath.SUPPORT,
    Icon: Support,
    IconBlue: SupportBlue,
  },
];

export { ADMIN_SIDENAV };
