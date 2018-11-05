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

  res.render('calendar', {
    title: 'Braukšana',
    calendar: MyCalendar
  });

//   res.render(
//       <div>
//         <BigCalendar
//           localizer={localizer}
//           events={myEventsList}
//           startAccessor="start"
//           endAccessor="end"
//         />
//       </div>,
//       nd
//   );
};

