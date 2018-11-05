import React from 'react';
import ReactDOM from 'react-dom';
//import pugHader from '../views/partials/header.pug';
import pugHader from '../views/calendar.pug';

class HomePage extends React.Component {
  render() {
    return pugHader.call(this);
  }
};

ReactDOM.render(
  <div />,
  document.getElementById('root')
);

