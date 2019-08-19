import React , {Component} from 'react';
import { BrowserRouter , Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Index from './components/index';
import Contact from './components/Contact';





class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Index}  />
        <Route  path="/contact" component={Contact}  />

      

      </BrowserRouter>
    )
  }
}
export default App;
