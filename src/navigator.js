import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import SingleState from './components/singeState/singleState';
import Home from './container/home/home';
import States from './container/states/states';

const Navigator = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Redirect path="/home" exact to="/"></Redirect>
          <Redirect path="/india" exact to="/"></Redirect>

          <Route path="/states" exact component={States}></Route>
          <Route
            path="/states/:id"
            exact
            component={(...path) => (
              <SingleState
                statecode={path[0].location.pathname.split('/').pop()}
              ></SingleState>
            )}
          ></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Navigator;
