import React, { ReactNode, useEffect } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import { connect } from '../data/connect';

import './Page.scss';

interface StateProps {
};
interface DispatchProps {
};
interface PageProps extends StateProps, DispatchProps {
  children: ReactNode;
};

const Page = ({ children }: PageProps) => {

  return (
    <div>
      <Header />
      <Sidebar />
      <section className="odds-page-main">
        <div className="odds-page-main-content">
          {children}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default connect<{}, StateProps, DispatchProps>({
	mapStateToProps: (state) => ({
	}),
	mapDispatchToProps: {
	},
	component: Page
});
