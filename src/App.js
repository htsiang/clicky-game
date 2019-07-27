import React, { Component } from 'react';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/header';
import Wrapper from './components/Wrapper/wrapper';
import Footer from './components/Footer/footer';

let imgArr = ['1.jpg', '2.jpg', '3.gif', '4.gif', '5.gif', '6.gif', '7.jpg', '8.gif', '9.gif', '10.jpg', '11.gif', '12.gif'];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  return arr;
};

class App extends Component {
  state = {
    userScore: 0,
    highScore: 0,
    alreadyClicked: [], // stores images that user has already selected
    isCorrect: "Click an image to begin!"
  };

  handleUserClick = event => {
    shuffle(imgArr);

    let userClicked = event.currentTarget.dataset.id;
    console.log(userClicked);
    console.log("clicked");

    if (this.state.alreadyClicked.every(x => x !== userClicked)) {
      console.log("has not been clicked yet");

      this.setState(prevState => ({
        alreadyClicked: [...prevState.alreadyClicked, userClicked],
        userScore: prevState.userScore + 1,
        isCorrect: "You guessed correctly!"
      }));
    }
    else {
      console.log("You've already clicked this.");

      if (this.state.userScore > this.state.highScore) {
        this.setState({
          highScore: this.state.userScore
        });
      }

      this.setState({
        userScore: 0,
        alreadyClicked: [],
        isCorrect: "You guessed incorrectly!"
      });
    };

    console.log("already clicked array:");
    console.log(this.state.alreadyClicked);
    console.log("User score: " + this.state.userScore);
  };

  componentDidMount() {
    shuffle(imgArr);

    this.setState({
      userScore: 0,
      alreadyClicked: []
    });
  };

  render() {
    return (
      <div className="App" >
        <Navbar userScore={this.state.userScore} highScore={this.state.highScore} isCorrect={this.state.isCorrect} />
        <Header />
        <Wrapper imgsrc={imgArr} onClick={this.handleUserClick} />
        <Footer />
      </div>
    );
  }
};

export default App;