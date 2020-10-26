import React from 'react';
import Simpsons from './components/SimpsonsQuotes';
import axios from 'axios';

const simpsonsQuote = [{"quote":"Why are you pleople avoiding me? Does my withered face remind you of the grim specter of death?","character":"Abe Simpson","image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593","characterDirection":"Right"}]
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpsons: simpsonsQuote,
    };
    this.getSimpsons = this.getSimpsons.bind(this);
  }

  getSimpsons() {
    // Send the request
    axios
      .get('https://thesimpsonsquoteapi.glitch.me/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        this.setState({
          simpsons: data,
        });
      });
  }

  render() {
    return (
      <div>
        <Simpsons simpsons={this.state.simpsons} />

        <button type='button' onClick={this.getSimpsons}>
          Refresh
        </button>
      </div>
    );
  }
}

export default App;