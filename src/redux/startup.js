import * as SDK from 'azure-devops-extension-sdk';
import { createStore } from 'redux';
import reducer from './reducer';

SDK.init();

const store = createStore(reducer);
window.store = store;
export default store;
