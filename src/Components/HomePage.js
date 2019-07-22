import React from 'react';
import {connect} from 'react-redux';
import {fetchImages} from '../actions';
import {Link} from 'react-router-dom';

class HomePage extends React.Component{
  componentDidMount(){
    this.props.fetchImages();
    this.randomNumber = null;
  }
  generateRandomNumber(){
    this.randomNumber = Math.floor(Math.random() * this.props.images.length);
  }
  generateRecentImages(){
    if (this.props.images){
      return (
        this.props.images.map(image=>{
          return(
          <div className="ui medium image" key={image.id}>
            <Link to={`/view/${image.id}`}>
              <img src={image.imageUrl} />
            </Link>
          </div>)
        })
      )
    }
    else{
      return <p>loading...</p>
    }
  }
  renderMainImage(){
    console.log(this.randomNumber);
    if (this.randomNumber === null){
      this.generateRandomNumber();
    }
    if (this.randomNumber >= 0){
      return(
        <div>
          <Link to={`/view/${this.props.images[this.randomNumber].id}`}>
            <img
              className="ui large image"
              src={this.props.images[this.randomNumber].imageUrl}
              alt={this.props.images[this.randomNumber].title}/>
            </Link>
        </div>
        );
      }else{
        return <div>loading...</div>
      }
  }
  render(){
    return(
      <div className="ui basic segment">
      <div className="ui stackable grid">
        <div className="eleven wide column">{this.renderMainImage()}</div>
        <div className="five wide column">
          <h3>Latest Cats</h3>
          {this.generateRecentImages()}
          </div>
      </div></div>
    )
  }
}

const mapStateToProps = state =>{
  return {images:Object.values(state.images).reverse()}
}
export default connect(mapStateToProps, {fetchImages})(HomePage);
