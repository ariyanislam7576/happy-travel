import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvidor';
import AddService from './Pages/AddService/AddService';
import Cart from './Pages/Cart/Cart';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home';
import ManageOrder from './Pages/ManageOrder/ManageOrder';
import MyBooking from './Pages/MyBooking/MyBooking';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/PrivateRoute/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/manageorder'>
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/mybooking'>
              <MyBooking></MyBooking>
            </PrivateRoute>
            <PrivateRoute exact path='/addservice'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path='/addservice/:id'>
              <Cart></Cart>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
