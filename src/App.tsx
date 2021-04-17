import './assets/styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import LogIn from './components/Auth/LogIn';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/register'>
          <SignUp />
        </Route>
        <Route exact path='/login'>
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
