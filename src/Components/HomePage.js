import React from 'react';
import {connect} from 'react-redux';
import {fetchArt} from '../actions';

class HomePage extends React.Component{
  componentDidMount(){
    this.props.fetchArt(13);
  }
  render(){
    if (this.props.images[0]){
      return(<div>
        <div>
          <img
            src={this.props.images[0].imageUrl}
            alt={this.props.images.title}/>
          </div>
        <div>Sidebar with 5 most recent images</div>
        </div>);
      }else{
        return <div>loading</div>
      }
  }
}

const mapStateToProps = state =>{
  return {images:Object.values(state.images)}
}
export default connect(mapStateToProps, {fetchArt})(HomePage);
