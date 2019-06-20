import React from 'react';
import {signIn, signOut} from './actions';
import {connect} from 'react-redux';

const API_KEY= `94631634763-hnonm7ldimcfbnh9m5t7l5gff4vhsufi.apps.googleusercontent.com`;
const CLIENT_SECRET=`ofs6XyoDnK_NRm-PdSCbfdA2`;

class Oauth extends React.Component{

  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        'clientId':API_KEY,
        'scope':'profile'
      }).then(() =>{
        this.GoogleAuth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.GoogleAuth.isSignedIn.get());
        this.GoogleAuth.isSignedIn.listen(this.onAuthChange());
      });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (!isSignedIn){
      this.props.signIn(this.GoogleAuth.currentUser.Ab.El);
    }
    else{
      this.props.signOut();
    }
  }
  onSignInClick = () =>{
    this.GoogleAuth.signIn();
  }
  onSignOutClick = () =>{
    this.GoogleAuth.signOut();
  }
  renderButton = () => {
    if (this.props.isSignedIn){
      return <button onClick={this.onSignOutClick}>Sign Out</button>
    }
    else{
      return <button onClick={this.onSignInClick}>Sign In</button>
    }
  }


  render(){
    return<div>{this.renderButton()}</div>
  }
}
const mapStateToProps=(state)=>{
  return {isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(Oauth);
