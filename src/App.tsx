import React from 'react';
import './App.css';
import { AppContextProvider } from './data/AppContext';
import { connect } from './data/connect';

import './App.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import ListPostsPage from './pages/ListPostsPage';
import SinglePostPage from './pages/SinglePostPage';
import CreatePostPage from './pages/CreatePostPage';

const App: React.FC = () => {
  
  return (
    <AppContextProvider>
      <OddsAppConnected />
    </AppContextProvider>
  )
}

interface StateProps {
};
interface DispatchProps { };
interface OddsAppProps extends StateProps, DispatchProps {};

const OddsApp: React.FC <OddsAppProps> = ({ }) => {

  return (
    <main className="odds-page">
      <Switch>
        <Route exact path="/" component={ListPostsPage} />
        <Route exact path="/posts/new" component={CreatePostPage} />
        <Route path="/posts/:id" component={SinglePostPage} />
      </Switch>
    </main>
  )
}

export default App;

const OddsAppConnected = connect<{}, StateProps, DispatchProps>({
  mapStateToProps: (state) => ({
  }),
  mapDispatchToProps: {

  },
  component: OddsApp
})
