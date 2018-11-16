import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'font-awesome/css/font-awesome.min.css'
import 'react-big-calendar/lib/less/styles.less';
// import './styles.less'
// import './prism.less'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import myEventsList from 'eventslist';
//
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
const ExCalendar = props =>(
  <div className="calendar">
    <BigCalendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);

export default ExCalendar;
