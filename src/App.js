import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import AddBook from './components/AddBook/AddBook';
import ManageBook from './components/ManageBook/ManageBook';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
import Orders from './components/Orders/Orders';
import Deals from './components/Deals/Deals';
import NoMatch from './components/NoMatch/NoMatch';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
       
      <Navbar></Navbar>
      <Switch>
        <Route path='/home'>
            <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/deals'>
          <Deals></Deals>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <PrivateRoute path='/admin'>
          <Admin></Admin>
        </PrivateRoute>
        <PrivateRoute path='/addBook'>
          <AddBook></AddBook>
        </PrivateRoute>
        <PrivateRoute path='/manageBook'>
            <ManageBook></ManageBook>
        </PrivateRoute>
        <PrivateRoute path='/checkout/:bookId'>
            <Checkout></Checkout>
        </PrivateRoute>
        <PrivateRoute path='/orders'>
          <Orders></Orders>
        </PrivateRoute>
        <Route path='/*'>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
