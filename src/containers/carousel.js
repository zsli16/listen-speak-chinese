import React, { Component } from 'react';
import SpeechContainer from './speech-container';
import './../App.css';

class Carousel extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      wordlist: ['爱', '八', '爸爸', '杯子', '北京', '本', '不', '不客气', '菜', '茶', '吃', '出租车', '打电话', '大', '的', '点', '电脑', '电视', '电影', '东西'],
      currentIndex: 0,
      translateValue: 0,
    }
  }

  slideWidth = () => {
    return document.querySelector('.speech-carousel').clientWidth;
 }

  leftClick = () => {
    console.log(this.slideWidth())
    if (this.state.currentIndex === 0)
    return;
  
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  rightClick = () => {
     // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if(this.state.currentIndex === this.state.wordlist.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }
    
    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  render() {
    const { wordlist } = this.state;

    return (
      <div className="wrapper">
        <div className="arrow left" onClick={this.leftClick}> ◀️ </div>
          <div className="speech-carousel" 
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out .45s'
          }}>

            { wordlist.map(word => <SpeechContainer key={word} word={word} />) }

          </div>
        <div className="arrow right" onClick={this.rightClick}> ▶️ </div>
      </div>
    )
  }
}

export default Carousel;