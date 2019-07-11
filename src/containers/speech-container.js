import React, { Component } from 'react';
import SpeechPlayer from './speech-player';
import SpeechRecorder from './speech-recorder';
import './../App.css';

class SpeechContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      pinyin: '',
      definitions: '',
    }
  }

  componentDidMount() {
    fetch(`https://pinyin-rest.pepebecker.com/pinyin/${this.props.word}`)
      .then(data => data.json())
      .then(data => data.text)
      .then(data => this.setState({ pinyin: data}))
  }

  render() {
    return(
      <div className="slide-container">
        <SpeechPlayer pinyin={this.state.pinyin} word={this.props.word} />
        <SpeechRecorder pinyin={this.state.pinyin} word={this.props.word} />
      </div>    
    )
  }
}

export default SpeechContainer;
