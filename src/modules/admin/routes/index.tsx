
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Transactions from '../pages/Transactions';
import PaymentLinks from '../pages/PaymentLinks';
import VirtualCard from '../pages/VirtualCard';
import Settings from '../pages/Settings';
import Support from '../pages/Support';
import CreatePaymentLink from '../pages/Dashboard/components/CreatePaymentLink';

import PaymentStatusProgress from '../pages/PaymentLinks/pages/PaymentStatusProgress';
import { DashboardPath } from '../../../constant/paths';

const Adminroute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />
      <Route path={DashboardPath.DASHBOARD} element={<Dashboard />} />
      <Route path={DashboardPath.TRANSACTIONS} element={<Transactions />} />
      <Route path={DashboardPath.PAYMENT_LINKS} element={<PaymentLinks />} />
      <Route path={DashboardPath.VIRTUAL_CARD} element={<VirtualCard />} />
      <Route path={DashboardPath.SETTINGS} element={<Settings />} />
      <Route path={DashboardPath.SUPPORT} element={<Support />} />
      <Route path="/dashboard/create-payment" element={<CreatePaymentLink />} />

      <Route path="/payment-links/status" element={<PaymentStatusProgress />} />

      <Route path="*" element={<Navigate to="/pageNotFound" replace />} />
    </Routes>
  );
};

export default Adminroute;
