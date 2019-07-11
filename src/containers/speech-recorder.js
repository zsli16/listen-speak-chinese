import React, { Component } from 'react';
import './../App.css'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true; 
recognition.lang = 'zh-CN';

class SpeechRecorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listening: false,
      recording: '',
      passing: false,
    }
  }

  toggleListen = async () => {
    this.setState({ listening: !this.state.listening}, this.handleListen)
    recognition.onaudiostart = () => console.log('Starting to listen')
  }

  handleListen = () => {
    console.log(this.state.listening);
    if (this.state.listening) {
      recognition.start();
      recognition.onresult = (e) => {
        if (e.results[0].isFinal) {
          this.setState({ recording: e.results[0][0].transcript, listening: false }, this.checkAnswer)
        }
      }
    }
    recognition.onnomatch = () => {
      console.log('Sorry cannot understand you')
    }
  }

  checkAnswer = () => {
    if (this.state.recording === this.props.word) {
      this.setState({ passing: true})
    } else {
      this.setState({ passing: false})
    }
  }

  render() {
    return (
      <div className="speech-container recorder">
        <div className={(this.state.passing ? 'correct' : 'incorrect') + ' character'}>{this.state.recording}</div>
        <button onClick={this.toggleListen} className="recordSound">{this.state.listening ? 'Listening...' : 'Record Sound 🎤'}</button>
      </div>
    )
  }
}

export default SpeechRecorder;
