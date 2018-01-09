import React, { Component } from 'react';
import BasicForm from './examples/BasicForm';
import CustomRender from './examples/CustomRender';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="example">
          <h1>Basic Form</h1>
          <BasicForm />
        </div>

        <div className="example">
          <h1>Custom Renderer</h1>
          <CustomRender />
        </div>
      </div>
    );
  }
}

export default App;
