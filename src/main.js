import './main.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import store from './redux/startup';
import { Provider } from 'react-redux';
import JSONEditorDemo from './editor';
import Label from './label';

function App(props) {
  return (
    <Provider store={store}>
      <Label text="hello world" />
      <JSONEditorDemo />
    </Provider>
  );
}

console.log('hello world');
ReactDOM.render(<App />, document.querySelector('main'));
