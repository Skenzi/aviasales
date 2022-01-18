import { render } from 'react-dom';
import init from './init';

const runApp = () => {
  render(init(), document.getElementById('app'));
};

runApp();
