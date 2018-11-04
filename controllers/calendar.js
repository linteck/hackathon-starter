import ReactDOM from 'react-dom';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
//
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer

const MyCalendar = props => (
  <div>
    <BigCalendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)

exports.escapeVertiCalendar= (req, res) => {
  let nd = document.getElementById('content');

  res.render('calendar', {
    title: 'Braukšana'
  });

  res.render(
      <div>
        <BigCalendar
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
        />
      </div>,
      nd
  );
};

