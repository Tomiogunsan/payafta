import MobileSideNav from '@components/AppNav/MobileSideNav';
import SideNav from '@components/AppNav/SideNav';
import Header from '@components/Header/Header';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <section className="grid lg:grid-cols-[260px_1fr] h-screen overflow-auto bg-[#f9f9f9]   lg:p-6">
      <aside className="lg:h-[680px]  lg:sticky lg:top-0 ">
        <SideNav />
        <div className="lg:hidden">
          <MobileSideNav />
        </div>
      </aside>
      <main className="grid grid-rows-[80px_1fr] lg:auto-rows-max-auto overflow-auto px-6 pt-4 lg:pt-0 h-screen">
        <div>
          <Header />
        </div>
        {/* <h1>hi</h1> */}
        <div>{children}</div>
      </main>
    </section>
  );
};

export default RootLayout;

// className =
//   ' h-screen lg:grid lg:auto-rows-max-auto overflow-auto px-6 pt-4 lg:pt-0';
