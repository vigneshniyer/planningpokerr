import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import CreateUser from './components/users/CreateUser';
import EnterRoom from './components/rooms/EnterRoom';
import Room from './components/rooms/Room';
import InvalidRoom from './components/rooms/InvalidRoom'
import { Redirect } from 'react-router-dom'

class  App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={CreateUser} />
            <Route path="/room/:id" component={Room} />
            <Route path="/createUser" component={CreateUser} />
            <Route path="/enterRoom" component={EnterRoom} />
            <Route path="/invalidRoom" component={InvalidRoom} />
            <Route render={() => <Redirect to={{pathname: "/invalidRoom"}} />} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
