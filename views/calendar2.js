import React from 'react';
import ReactDOM from 'react-dom';
import 'fullcalendar/dist/fullcalendar.min.css'
import 'fullcalendar-scheduler/dist/scheduler.min.css'
import FullCalendar from 'fullcalendar-reactwrapper';
import moment from 'moment'
import myEventsList from 'eventslist'
//
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
//const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
const ExCalendar = props => (
  <div  className="calendar">
    <FullCalendar
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)

export default ExCalendar
