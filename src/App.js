
import './App.css';
import { Link } from 'react-router-dom';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Employees } from './pages/Employees';
import { Home } from './pages/Home';

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import { useState } from 'react';

function App() {


  const pages = [
    {
      route: "/",
      name: "Главная",
      component: Home
    },
    {
      route: "/contacts",
      name: "Контакты",
      component: Contacts
    },
    {
      route: "/about",
      name: "О нас",
      component: About
    },
    {
      route: "/employees",
      name: "Сотрудники",
      component: Employees
    },
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {
            pages.map(({ route, component }, item) => {
              {console.log(component)}
              return <Route exact path={route} component={component} key={item} />
            })
          }

          {/* <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/contacts'>
            <Contacts></Contacts>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  )



}

export default App;
