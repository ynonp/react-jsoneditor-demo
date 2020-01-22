import React, {Component} from 'react';
import JSONEditor from 'jsoneditor';
import { connect } from 'react-redux';
import 'jsoneditor/dist/jsoneditor.css';
import { saveJson } from './redux/actions';

function mapStateToProps(state) {
  return {
    json: state.data,
  };
}

class JSONEditorDemo extends Component {
  componentDidMount () {
    const options = {
      mode: 'tree',
      onChangeJSON: this.onChangeJSON.bind(this),
    };

    this.jsoneditor = new JSONEditor(this.container, options);
    this.jsoneditor.set(this.props.json);
  }

  onChangeJSON(json) {
    this.props.dispatch(saveJson(json));
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

export default connect(mapStateToProps)(JSONEditorDemo);
