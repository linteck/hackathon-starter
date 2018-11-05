import React from 'react';
import ReactDOM from 'react-dom';
import pugHeader from '../views/partials/header.pug';
import pugFooter from '../views/partials/footer.pug';
// import pugFlash from '../views/partials/flash.pug';
import pugLayout from '../views/layout.pug';
import pugHome from '../views/home.pug';

class ExHeader extends React.Component {
  render() {
    return pugHeader.call(this);
  }
};

class ExFooter extends React.Component {
  render() {
    return pugFooter.call(this);
  }
};

// class ExFlash extends React.Component {
//   render() {
//     let messages={};
//     return pugFlash.call(this, {messages});
//   }
// };

class ExContent extends React.Component {
  render() {
    return pugHome.call(this);
  }
};

class ExLayout extends React.Component {
  render() {
    return pugLayout.call(this, {ExHeader, ExFooter, ExContent});
  }
};

ReactDOM.render(
  <ExLayout />,
  document.getElementById('app')
);

