import * as hello from 'hellojs';

const API_KEY= `94631634763-hnonm7ldimcfbnh9m5t7l5gff4vhsufi.apps.googleusercontent.com`;
const CLIENT_SECRET=`ofs6XyoDnK_NRm-PdSCbfdA2`;

console.log("hi");
hello.init({
  google:API_KEY
})

/*var GoogleAuth;
function initClient(){
  gapi.client.init({
    'apiKey':API_KEY,
    'clientID': CLIENT_SECRET
  }).then(function(){
    GoogleAuth = gapi.auth2.getAuthInstance();
  })
}*/

//GoogleAuth.signIn();
