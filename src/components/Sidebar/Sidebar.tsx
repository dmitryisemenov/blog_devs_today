import React, { useState, useEffect, useRef } from 'react';
import { connect } from '../../data/connect';

import './Sidebar.scss';

interface StateProps {
};
interface DispatchProps {
};
interface SidebarProps extends StateProps, DispatchProps {
  
}

const Sidebar = ({  }: SidebarProps) => {

  return (
    <aside>
      
    </aside>
  )
}

export default connect<{}, StateProps, DispatchProps>({
	mapStateToProps: (state) => ({
	}),
	mapDispatchToProps: {
	},
	component: Sidebar
});
