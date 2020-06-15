import React from 'react';
import { connect } from '../../data/connect';

import './Footer.scss';

interface StateProps {
};
interface DispatchProps {
};
interface FooterProps extends StateProps, DispatchProps {
  styles: any;
}

const Footer: React.FC<FooterProps> = ({  }) => {
  
  return (
    <footer className="odds-footer">
      
    </footer>
  )
}

export default connect<{}, StateProps, DispatchProps>({
	mapStateToProps: (state) => ({
	}),
	mapDispatchToProps: {
	},
	component: Footer
});
