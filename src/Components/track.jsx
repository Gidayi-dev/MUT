import React from 'react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  
  return (
    <div className="tracks-page">
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
  
      <div className="form-container">
        <h2>Register for a Track</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" name="fullName" required />
          </div>
          <div className="form-group">
            <label>Email Address:</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Current Course of Study:</label>
            <input type="text" name="course" required />
          </div>
          <div className="form-group">
            <label>Year of Study:</label>
            <input type="number" name="year" required />
          </div>
          <div className="form-group">
            <label>Select Your Track:</label>
            <select name="track" required>
              <option value="">Select a track...</option>
              {tracks.map((track, index) => (
                <option value={track.title} key={index}>
                  {track.title}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default TracksPage;
