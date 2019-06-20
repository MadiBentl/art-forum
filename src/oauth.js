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
      }).then(function(){
        var GoogleAuth = window.gapi.auth2.getAuthInstance();
        //add to state
        //listening function here
      });
    });
  }

  renderButton(){
    if (true){
      console.log("is signed in");
    }else{
      console.log("is not signed in");
    }
  }

  render(){
    return<div onClick={this.renderButton()}>oauth</div>
  }
}
const mapStateToProps=(state)=>{
  return {isSignedIn:state.auth.isSignedIn}
}
//GoogleAuth.signIn();
export default connect(mapStateToProps, {signIn, signOut})(Oauth);
