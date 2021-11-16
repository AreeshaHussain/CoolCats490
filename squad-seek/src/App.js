import React from "react";
//Import of different pages
import RegisterUser from "./pages/RegisterUser";
import MainHeader from "./Components/MainHeader/MainHeader";
import Groups from "./pages/Groups";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
//import styling
import styles from './App.module.css'
//import of router to go to different pages
import { Redirect,Switch } from "react-router";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      {/* Call to the top navigation */}
      <MainHeader />

      <div className={styles.wrapper}>
      <Switch>
          
          <Redirect from="/" to="/welcome" exact/>
          <Redirect from="/groups" to="/groups/create" exact/>

          {/* route to the welcome page and call welcome component */}
          <Route path="/welcome" exact>
            <Welcome />
          </Route>
          {/* route to the register page and call welcome component */}
          <Route path="/register" exact>
            <RegisterUser />
          </Route>
          {/* route to the groups page and call welcome component */}
          
          <Route path="/groups" >
            <Groups />
          </Route>
          
          
          {/* route to the login page and call welcome component */}
          <Route path="/login" exact>
            <Login />
          </Route>
          </Switch>
      </div>
    </React.Fragment>
  );
};

export default App;
