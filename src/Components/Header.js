import React from 'react';
import {connect} from 'react-redux';
import Oauth from '../Oauth';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  renderAddImageLink(){
    if (this.props.signedIn){
      return(<Link to="/create" className="item">Upload</Link>)
    }
  }
  render(){
    return(
      <div className="ui orange inverted menu">
        <Link to="/" className="item">Home</Link>
        <Link to="/gallery" className="item">Cat Gallery</Link>
        <div className="right menu">
          {this.renderAddImageLink()}
          <div className="item">
            <Oauth />
          </div>
        </div>
      </div>)
  }
}

const mapStateToProps = (state) =>{
  return {signedIn: state.auth.signedIn};
}

export default connect(mapStateToProps)(Header);
