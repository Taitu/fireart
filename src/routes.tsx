import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Root from './components/Root';
import QuizContainer from './containers/QuizContainer'

const Routes: React.SFC = () => (
  <Root>
    <Switch>
      <Route exact path='/' component={ QuizContainer } />
      <Route component={ () => <div>Not Found</div> } />
    </Switch>
  </Root>
)

export default Routes;