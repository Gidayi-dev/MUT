
import './track.css';

function TracksPage() {
  const tracks = [
    {
      title: 'Cyber Security',
      description: 'Dive into digital defense, mastering encryption, ethical hacking, and more.',
    },
    {
      title: 'UI/UX Design',
      description: 'Create user-friendly interfaces through research, wireframing, and usability testing.',
    },
    {
      title: 'Web Development',
      description: 'Master front-end and back-end web development, building full-stack applications.',
    },
    {
      title: 'Mobile Apps Development',
      description: 'Design and build mobile apps for Android and iOS with Java, Swift, and more.',
    },
    {
      title: 'Cloud Engineering',
      description: 'Explore cloud platforms like AWS, Azure, and learn to build scalable infrastructures.',
    },
    {
      title: 'Power Platform',
      description: 'Leverage Microsoft’s Power Platform to build apps, automate workflows, and analyze data.',
    },
  ];

  return (
    <div className="tracks-container">
      {tracks.map((track, index) => (
        <div key={index} className="track-item">
          <div className="track-circle">
            <h3>{track.title}</h3>
            <p>{track.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TracksPage;
