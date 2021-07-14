import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from'./page/Login'
import Main from './page/Main'
import MainP from './page/petshop/MainP';
import MainC from './page/customer/MainC';
import Registrasi from'./page/petshop/Registrasi'
import Registrasic from'./page/customer/Registrasic'
import Produk from'./page/petshop/Produk'
import Layanan from'./page/petshop/Layanan'
import BerandaC from './page/BerandaC';
import About from './page/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/registrasi-petshop">
          <Registrasi/>
        </Route>
        <Route path="/registrasi-customer">
          <Registrasic/>
        </Route>
        <Route path="/petshop">
          <MainP/>
        </Route>
        <Route path="/customer">
          <MainC/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
