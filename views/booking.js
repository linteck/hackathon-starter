import React from 'react';
import ReactDOM from 'react-dom';
import 'react-big-calendar/lib/less/styles.less';
import moment from 'moment';
import myEventsList from 'eventslist';
import pugLayout from 'layout.pug';
import pugHeader from 'partials/header.pug';
import pugFooter from 'partials/footer.pug';

class ExBooking extends React.Component {
  constructor (...args) {
    super(...args);
    this.state = { title: "Click me",};
  }

  static handleClick () {
    const title = window.prompt('New Page:');
    if (title) {
      this.setState({
        title:title,
      });
    }
  }


  render () {
    return (<a onClick={this.handleClick}> AAAA {this.props.title}</a>);
  }
}

class HeadButton extends React.Component {
  static handleClick () {
    ReactDOM.render(<LayoutCalendar />,
      document.getElementById('app'));
  }

  render () {
    return (<a onClick={this.handleClick}> {this.props.text}</a>);
  }
}

class ExHeader extends React.Component {
  render () {
    return pugHeader.call(this, { HeadButton });
  }
}

class ExFooter extends React.Component {
  render () {
    return pugFooter.call(this);
  }
}


class LayoutBooking extends React.Component {
  render () {
    const ExContent = ExBooking;
    return pugLayout.call(this, { ExHeader, ExFooter, ExContent });
  }
}
export default LayoutBooking ;
