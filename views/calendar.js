import React from 'react';
import ReactDOM from 'react-dom';
import 'react-big-calendar/lib/less/styles.less';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import myEventsList from 'eventslist';
import LayoutBooking from 'booking';

class ExCalendar extends React.Component {
  constructor (...args) {
    super(...args);

    this.state = { events: myEventsList };
  }

  handleSelect = ({ 
      start,
      end,
      action,
      bounds,
      box
      }) => {
          console.log({ 
      start,
      end,
      action,
      bounds,
      box
      })
    ReactDOM.render(<LayoutBooking/>,
      document.getElementById('app'));
  }

  render () {
    const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
    // const { localizer } = this.props
    return (
        <div className='calendar'>
          <BigCalendar
            selectable
            localizer={localizer}
            events={this.state.events}
            defaultView={BigCalendar.Views.MONTH}
            onSelectEvent={event => alert(event.title)}
            onSelectSlot={this.handleSelect}
          />
        </div>
    );
  }
}

export default ExCalendar;
