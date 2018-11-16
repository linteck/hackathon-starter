import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import pugHeader from 'partials/header.pug';
import pugFooter from 'partials/footer.pug';
// import pugFlash from '../partials/flash.pug';
import pugLayout from 'layout.pug';
import pugInstructors from 'instructors.pug';
import ExCalendar from 'calendar';

class HeadButton extends React.Component {
  handleClick() {
    ReactDOM.render(<LayoutCalendar />,
      document.getElementById('app'));
  }

  render() {
    return (<a onClick={this.handleClick}> {this.props.text}</a>);
  }
}

class ExHeader extends React.Component {
  render() {
    return pugHeader.call(this, { HeadButton });
  }
}

class ExFooter extends React.Component {
  render() {
    return pugFooter.call(this);
  }
}

// class ExFlash extends React.Component {
//   render() {
//     let messages={};
//     return pugFlash.call(this, {messages});
//   }
// };

class ExInstructors extends React.Component {
  render() {
    return pugInstructors.call(this);
  }
}

class ExHome extends React.Component {
  render() {
    const ExContent = ExInstructors;
    return pugLayout.call(this, { ExHeader, ExFooter, ExContent });
  }
}

class LayoutCalendar extends React.Component {
  render() {
    const ExContent = ExCalendar;
    return pugLayout.call(this, { ExHeader, ExFooter, ExContent });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  /* eslint-env jquery, browser */
  // <ExHome />,
  ReactDOM.render(<LayoutCalendar />,
    document.getElementById('app'));
});
