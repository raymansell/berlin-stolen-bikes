import './assets/styles/App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import LogIn from './components/Auth/LogIn';
import UserList from './components/UserList';
import { AuthenticationProvider } from './context/Authentication/AuthenticationContext';

const App = () => {
  return (
    <AuthenticationProvider>
      <Router>
        <Switch>
          <Route exact path='/register'>
            <SignUp />
          </Route>
          <Route exact path='/login'>
            <LogIn />
          </Route>
          <Route exact path='/users'>
            <UserList />
          </Route>
        </Switch>
      </Router>
    </AuthenticationProvider>
  );
};

export default App;
