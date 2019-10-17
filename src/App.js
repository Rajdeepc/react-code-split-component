import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  state = {
    modal: null
  }

  showLocation = () => {
    import('./components/Modal')
      .then((mod) => this.setState(() => ({
        modal: mod.default
      })
    ))
  }


  render() {

    const { modal: Modal } = this.state;

    return (
      <>
      <div>Testing Code Splitting or Lazy loading of components</div>
      <br></br>
        {Modal !== null ?
          <Modal />
          :
          <button onClick={this.showLocation}>
            Show Modal
          </button>
        }
      </>
    )
  }

}

export default App;
