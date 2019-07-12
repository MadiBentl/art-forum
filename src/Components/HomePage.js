import React from 'react';
import {connect} from 'react-redux';
import {fetchImages} from '../actions';

class HomePage extends React.Component{
  componentDidMount(){
    this.props.fetchImages();
    this.randomNumber = 0;
  }
  generateRandomNumber(){
    this.randomNumber = Math.floor(Math.random() * this.props.images.length);
  }
  generateRecentImages(){
    if (this.props.images){
      return (
        this.props.images.map(image=>{
          return(
          <div className="ui small image" key={image.id}>
            <img src={image.imageUrl} />
          </div>)
        })
      )
    }
    else{
      return <p>loading...</p>
    }
  }
  renderMainImage(){
    if (this.randomNumber == 0){
      this.generateRandomNumber();
    }
    if (this.randomNumber){
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
      <div className="ui stackable grid">
        <div>{this.renderMainImage()}</div>
        <div>
          Latest Cats
          {this.generateRecentImages()}
          </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {images:Object.values(state.images)}
}
export default connect(mapStateToProps, {fetchImages})(HomePage);
