import logo from './logo.svg';
import './App.css';
import PrivateRoute from './component/PrivateRouter';
import PublicRoute from  './component/PublicRouter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect

} from "react-router-dom";
import Navbars from './component/Navbars';
import { useSelector } from 'react-redux';
import Home from './view/Home';
import Login  from './view/Login'; 
import Singup from './view/singup';
import Filter from './view/filter';
import Contact from './component/contact';
import { useState } from 'react';
import { useEffect } from 'react';
import Pull from  './view/Pull';
import Robe from './view/Robe'
import Jube from './view/Jube';
import Sousvet from './view/Souvet';
import Sac from './view/Sac'
import Pant from './view/Pant'
import Acc from './view/Acc'

function App() {
  
  const auth = useSelector(state => state.auth)
  

  return (
    <div>
       <Router>
      <div >
        {/* <button onClick={() =>setauth(!auth)} >{auth ? 'Logout' : 'Login'}</button> */}
        {/* <Filter /> */}
        <Navbars />
        
        <Switch>
        <PublicRoute auth={auth} restricted={false} exact={true} path='/' component={Home}  />
          <PublicRoute restricted={true} auth={auth} exact path='/login' component={Login} />
          <PublicRoute restricted={true} auth={auth} exact path='/singup' component={Singup} />
          <PublicRoute restricted={true} auth={auth} exact path='/contact' component={Contact} />
          <PrivateRoute auth={auth} path='/pull' component={Pull} />
          <PrivateRoute auth={auth} path='/robe' component={Robe} />
          <PrivateRoute auth={auth} path='/jube' component={Jube} />
          <PrivateRoute auth={auth} path='/sousvet' component={Sousvet} />
          <PrivateRoute auth={auth} path='/sac' component={Sac} />
          <PrivateRoute auth={auth} path='/pant' component={Pant} />
          <PrivateRoute auth={auth} path='/acc' component={Acc} />
          <Redirect from='/*' to='/' />
        </Switch>



      </div>

    </Router>
    </div>
  
  );
}

export default App;
