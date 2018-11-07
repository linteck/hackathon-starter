// import 'assets/js/jquery.min.js'
// import 'assets/js/jquery.dropotron.min.js'
// import 'assets/js/browser.min.js'
// import 'assets/js/breakpoints.min.js'
// import 'assets/js/util.js'
// import 'assets/js/main.js'

// import 'js/lib/bootstrap.min.js'
// import 'js/lib/popper.min.js'

import React from 'react';
import ReactDOM from 'react-dom';
import pugHeader from 'partials/header.pug';
import pugFooter from 'partials/footer.pug';
// import pugFlash from '../partials/flash.pug';
import pugLayout from 'layout.pug';
import pugInstructors from 'instructors.pug';

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
    return pugInstructors.call(this);
  }
};

class ExLayout extends React.Component {
  render() {
    return pugLayout.call(this, {ExHeader, ExFooter, ExContent});
  }
};

/* eslint-env jquery, browser */
ReactDOM.render(
  <ExLayout />,
  document.getElementById('app')
);
