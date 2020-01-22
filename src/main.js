import './main.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import JSONEditor from 'jsoneditor';
import 'jsoneditor/dist/jsoneditor.css';

class JSONEditorDemo extends Component {
  componentDidMount () {
    const options = {
      mode: 'tree',
      onChangeJSON: this.props.onChangeJSON
    };

    this.jsoneditor = new JSONEditor(this.container, options);
    this.jsoneditor.set(this.props.json);
  }

  componentWillUnmount () {
    if (this.jsoneditor) {
      this.jsoneditor.destroy();
    }
  }

  componentDidUpdate() {
    this.jsoneditor.update(this.props.json);
  }

  render() {
    return (
        <div className="jsoneditor-react-container" ref={elem => this.container = elem} />
    );
  }
}

function App(props) {
  const json = {
      'array': [1, 2, 3],
      'boolean': true,
      'null': null,
      'number': 123,
      'object': {'a': 'b', 'c': 'd'},
      'string': 'Hello World'
  };

  return (
    <JSONEditorDemo json={json} />
  );
}

console.log('hello world');
ReactDOM.render(<App />, document.querySelector('main'));
