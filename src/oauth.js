import React from 'react';

const API_KEY= `94631634763-hnonm7ldimcfbnh9m5t7l5gff4vhsufi.apps.googleusercontent.com`;
const CLIENT_SECRET=`ofs6XyoDnK_NRm-PdSCbfdA2`;

class Oauth extends React.Component{
  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        'clientId':API_KEY,
        'scope':'profile'
      }).then(function(){
        console.log(window.gapi.auth2.googleAuth);
      });
    });
  }
  render(){
    return<div>oauth</div>
  }
}

var GoogleAuth;
/*function initClient(){
  window.gapi.client.init({
    'apiKey':API_KEY,
    'clientID': CLIENT_SECRET
  }).then(function(){
    GoogleAuth = window.gapi.auth2.getAuthInstance();
  })
}

initClient();*/
//GoogleAuth.signIn();
export default Oauth;
