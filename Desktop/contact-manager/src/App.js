import React from 'react';
import Contacts from './components/contacts/Contacts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Layout/Header';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import { Provider } from './context';
import About from './components/Pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contact from './components/contacts/Contact';
import Test from './components/test/Test';
import NotFound from './components/Pages/NotFound';




class App extends React.Component {
  render(){
    return (
      <Provider>
        <Router>
          <div className="App">
              <Header  branding="Contact Manager" />
                <div className="container">
                <Switch>
                  <Route exact path="/" component={Contacts} />
                  <Route exact path="/contact/add" component={AddContact} />
                  <Route exact path="/contact/edit/:id" component={EditContact} />
                  <Route exact path="/About" component={About} />
                  <Route exact path='/Test'  component={Test} />
                  <Route exact component={NotFound} />
                </Switch>
                </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
