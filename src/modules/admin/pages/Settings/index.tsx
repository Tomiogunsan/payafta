import PageHeader from '@components/shared/PageHeader';

import ProfileInformation from './components/ProfileInformation';
import SettlementAccount from './components/SettlementAccount';
import SecurityAndPrivacy from './components/SecurityAndPrivacy';

import LegalCompliance from './components/LegalCompliance';

const Settings = () => {
  return (
    <div className="bg-[#fff] p-6 rounded-[8px]">
      <PageHeader bigText="Settings" />
      <ProfileInformation />
      <SettlementAccount />
      <SecurityAndPrivacy />
      <LegalCompliance />
    </div>
  );
};

export default Settings;
