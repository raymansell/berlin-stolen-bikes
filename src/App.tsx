import React from 'react';
import './assets/styles/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import LogIn from './components/Auth/LogIn';
import BikesList from './components/BikesList';
import {
  AuthenticationProvider,
  useAuth,
} from './context/Authentication/AuthenticationContext';
import Layout from './components/Layout';

interface PrivateRouteProps extends RouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children, ...routeProps }: PrivateRouteProps) => {
  const {
    state: { user },
  } = useAuth();
  const isAuthenticated = Boolean(user?.token);
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...routeProps}
      render={({ location }) => {
        return isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        );
      }}
    />
  );
};

const App = () => {
  return (
    <AuthenticationProvider>
      <Router>
        <Layout>
          <Switch>
            <PrivateRoute exact path='/'>
              <BikesList />
            </PrivateRoute>
            <Route exact path='/register'>
              <SignUp />
            </Route>
            <Route exact path='/login'>
              <LogIn />
            </Route>
            <Route path='*'>
              <h1>Oops, page not found</h1>
            </Route>
          </Switch>
        </Layout>
      </Router>
    </AuthenticationProvider>
  );
};

export default App;
