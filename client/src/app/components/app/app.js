import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../header/header';

class App extends Component {
  render(){
    return(
      <div className='app__container'>
        <Header />
        <div className='layout__container'>
          <div className='content__container'>
            <Route exec path='/'/>
          </div>
          <div className='side-bar__container'>
            <Route exec path='/'/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
