import React from 'react';
import {connect} from 'react-redux';
import {fetchImages} from '../actions';

class HomePage extends React.Component{
  componentDidMount(){
    this.props.fetchImages();
  }
  generateRandomNumber(){
    this.randomNumber = Math.floor(Math.random() * this.props.images.length)
  }
  renderMainImage(){
    this.generateRandomNumber();
    console.log(this.randomNumber)
    if (this.props.images[this.randomNumber]){
      return(
        <div>
          <img
            className="ui large image"
            src={this.props.images[this.randomNumber].imageUrl}
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
export default connect(mapStateToProps, {fetchImages})(HomePage);
