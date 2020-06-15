import React from 'react';
import { connect } from '../../data/connect';
import to_top from '../../images/to_top.svg';

import './Header.scss';

interface ScrollState {
  intervalId: any;
}

interface ScrollProps {
  scrollStepInPx: any;
  delayInMs: any;
}

class ScrollButton extends React.Component<ScrollProps, ScrollState> {
  constructor(props: any) {
    super(props);

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return (
        <div className="odds-header-toTop" onClick={ () => { this.scrollToTop(); }}>
          <img src={to_top} alt=""/>
        </div>
      )
   }
} 

interface StateProps {
};
interface DispatchProps {
};

interface HeaderProps extends StateProps, DispatchProps {};

interface HeaderState {
  time: any;
  date: any;
  isModalOpen: boolean;
  isNotsOpen: boolean;
  isProfileGot: boolean;
  isSocialOpen: boolean;
  lang: string;
  odd: string;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  timerID: any;

  constructor(props: any) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date(),
      isModalOpen: false,
      isNotsOpen: false,
      isProfileGot: false,
      isSocialOpen: false,
      lang: 'En',
      odd: 'Fractional 5/2'
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
      date: new Date()
    });
  }
  
  render() {
    return (
      <header className="odds-header">
        
      </header>
    )
  }

}

export default connect<{}, StateProps, DispatchProps>({
	mapStateToProps: (state) => ({
	}),
	mapDispatchToProps: {
	},
	component: Header
});