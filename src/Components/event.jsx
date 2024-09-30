
import './event.css';
import eventsImage from '../assets/events.jpg'; 

function EventsPage() {
  const schedule = [
    {
      title: 'Cyber Security',
      time: 'Every Monday from 4pm to 7pm',
      location: 'Computer Lab F04',
      instructor: 'Webster Ifedha',
      description: 'Gain critical skills in digital defense as you learn to identify and mitigate cyber threats.',
    },
    {
      title: 'UI/UX Design',
      time: 'Every Tuesday from 5pm to 8pm',
      location: 'Computer Lab F04',
      instructor: 'Manase Gunga',
      description: 'Master the art of creating user-friendly interfaces that enhance the user experience.',
    },
    {
      title: 'Web Development',
      time: 'Every Wednesday from 6pm to 9pm',
      location: 'Computer Lab F04',
      instructor: 'Carolyne Githenduka',
      description: 'Learn to build dynamic websites and applications with modern technologies and best practices.',
    },
    {
      title: 'Mobile Apps Development',
      time: 'Every Thursday from 4pm to 7pm',
      location: 'Computer Lab F04',
      instructor: 'Stanley Amunze',
      description: 'Explore the full lifecycle of mobile app development, from concept to deployment on Android and iOS.',
    },
    {
      title: 'Cloud Engineering',
      time: 'Every Friday from 3pm to 6pm',
      location: 'Computer Lab F04',
      instructor: 'Paul Karanja',
      description: 'Dive into cloud platforms and learn to design scalable and secure cloud infrastructures.',
    },
    {
      title: 'Power Platform',
      time: 'Every Saturday from 1pm to 4pm',
      location: 'Computer Lab F04',
      instructor: 'Evyonn Mbithe',
      description: 'Harness the power of Microsoft’s tools to automate workflows and create custom applications.',
    },
  ];

  return (
    <div className="events-page">
      <h1 className="page-title">Discover Exciting Events at MUTC</h1>
      <p className="page-description">
        Welcome to the MUTC Events Page! Here, you'll find a comprehensive schedule of our weekly activities, designed to enrich your learning experience and enhance your skills. Each event offers a unique opportunity to engage with experts in the field and gain hands-on experience in various tech domains.
        <br /><br />
        Join us for these insightful sessions from Monday to Saturday, and take a step closer to becoming a tech leader!
      </p>

      <div className="image-container">
        <img src={eventsImage} alt="Events at MUTC" className="events-image" />
      </div>

      <div className="schedule-container">
        {schedule.map((event, index) => (
          <div key={index} className="schedule-item">
            <div className="event-header">
              <h4>{event.title}</h4>
              <p className="event-time">{event.time}</p>
            </div>
            <p className="event-location"><strong>Location:</strong> {event.location}</p>
            <p className="event-instructor"><strong>Instructor:</strong> {event.instructor}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
