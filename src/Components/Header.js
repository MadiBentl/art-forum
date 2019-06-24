import React from 'react';
import Oauth from '../Oauth';

class Header extends React.Component{
  render(){
    return(
      <div className="ui orange inverted menu">
        <a className="item">Home</a>
        <a className="item">Gallery</a>
        <div className="right menu">
          <div className="item">
            <Oauth />
          </div>
        </div>
      </div>)
  }
}

export default Header;
