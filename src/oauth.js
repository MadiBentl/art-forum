import React from 'react';
import {signIn, signOut} from './actions';
import {connect} from 'react-redux';

const API_KEY= `94631634763-hnonm7ldimcfbnh9m5t7l5gff4vhsufi.apps.googleusercontent.com`;

class Oauth extends React.Component{

  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId :API_KEY,
        scope:'email'
      }).then(() =>{
        this.GoogleAuth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.GoogleAuth.isSignedIn.get());
        this.GoogleAuth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn){
      console.log(this.GoogleAuth.currentUser.get().getId());
      this.props.signIn(this.GoogleAuth.currentUser.get().getId()); //update state
    }
    else{
      console.log("is not signed in");
      this.props.signOut(); //update state
    }
  }
  onSignInClick = () =>{
    this.GoogleAuth.signIn(); //oauth fn
  }
  onSignOutClick = () =>{
    console.log(this.GoogleAuth.isSignedIn.get());
    this.GoogleAuth.signOut(); //oauth fn
    console.log(this.GoogleAuth.isSignedIn.get());

  }
  renderButton = () => {
    if (this.props.signedIn == null){
      return null;
    }else if(this.props.signedIn){
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
  return {signedIn:state.auth.signedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(Oauth);
