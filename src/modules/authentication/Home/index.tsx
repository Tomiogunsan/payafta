import HowItWorks from './components/HowItWorks';
import BuyerProtection from './components/BuyerProtection';
import Navbar from './components/Navbar';
import WhatCanYouBuy from './components/WhatCanYouBuy';
import SellerProtection from './components/SellerProtection';
import SafePayment from './components/SafePayment';
import SetUpEscrow from './components/SetUpEscrow';
import Faq from './components/Faq';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="px-[24px] lg:px-[48px] mt-[24px]">
      <Navbar />
      <SafePayment />
      <HowItWorks />
      <BuyerProtection />
      <SellerProtection />
      <WhatCanYouBuy />
      <SetUpEscrow />
      <Faq />
      <h1 className="text-center text-3xl text-red-700 underline">p</h1>
      <Footer />
    </div>
  );
};

export default Home;
