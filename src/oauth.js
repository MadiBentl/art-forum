import React from 'react';
import {signIn, signOut} from './actions';
const API_KEY= `94631634763-hnonm7ldimcfbnh9m5t7l5gff4vhsufi.apps.googleusercontent.com`;
const CLIENT_SECRET=`ofs6XyoDnK_NRm-PdSCbfdA2`;

class Oauth extends React.Component{

  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        'clientId':API_KEY,
        'scope':'profile'
      }).then(function(){
        this.GoogleAuth = window.gapi.auth2.getAuthInstance();
        //add to scope
        //listening function here
      });
    });
  }

  renderButton(){

  }

  render(){
    return<div onClick={this.renderButton()}>oauth</div>
  }
}

//GoogleAuth.signIn();
export default Oauth;
