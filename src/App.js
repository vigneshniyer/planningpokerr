import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import CreateProject from './components/projects/CreateProject'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateUser from './components/users/CreateUser';
import EnterRoom from './components/rooms/EnterRoom';
import Room from './components/rooms/Room';

class  App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={CreateUser} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/room/:id" component={Room} />
            <Route path="/create" component={CreateProject} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/createUser" component={CreateUser} />
            <Route path="/enterRoom" component={EnterRoom} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
