import React from 'react';
import {connect} from 'react-redux';
import {fetchArt} from '../actions';

class HomePage extends React.Component{
  componentDidMount(){
    this.props.fetchArt(13);
  }
  renderMainImage(){
    if (this.props.images[0]){
      return(
        <div>
          <img
            className="ui large image"
            src={this.props.images[0].imageUrl}
            alt={this.props.images.title}/>
        </div>
        );
      }else{
        return <div>loading</div>
      }
  }
  render(){
    return(
      <div>
        <div>{this.renderMainImage()}</div>
        <div>Sidebar with 5 most recent images</div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {images:Object.values(state.images)}
}
export default connect(mapStateToProps, {fetchArt})(HomePage);
