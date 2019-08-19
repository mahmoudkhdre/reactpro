import React , {Component} from 'react';
import Home from './../Home';
import About from './../About';
import Profile from './../Profile';
import Portfolio from './../Portfolio';
import Work from './../Work';
import SocialMedia from './../SocialMedia';
import Footer from './../Footer';

class Index extends Component {
  render(){
    return (
      <div>
     
      <Home  />
      <Work  />
      <Portfolio  />
      <Profile  />
      <About  />
      <SocialMedia  />
      <Footer  />

      </div>
    )
  }
}
export default Index;
