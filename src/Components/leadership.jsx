
import "./leadership.css";
import leader4 from "../assets/leader4.jpg";
import leader6 from "../assets/leader6.jpg";
import leader8 from "../assets/leader8.jpg";
import leader9 from "../assets/leader9.jpg";
import leader11 from "../assets/leader11.jpg";
import leader13 from "../assets/leader13.jpg";
import leader14 from "../assets/leader14.jpg";
import leader76 from "../assets/leader76.jpg";
import leader10 from "../assets/leader10.jpg";
import leader2 from "../assets/leader2.jpg";
import leader3 from "../assets/leader3.jpg";

import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

function LeadershipCard({ image, name, title, bio, socials }) {
  return (
    <div className="leadership-card">
      <div className="leader-image">
        <img src={image} alt={name} className="leader-image" />
      </div>
      <h3 className="leader-name">{name}</h3>
      <p className="leader-title">{title}</p>
      <p className="leader-bio">{bio}</p>
      <div className="social-media-icons">
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        )}
        {socials.twitter && (
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
    )}
        {socials.instagram && (
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
}
function Leadership() {
  return (
    <section className="leadership-section">
      <h1 className="leadership-heading">
        The Driving Force Behind MUTC’s Innovation
      </h1>
      <p className="leadership-description">
        At MUTC, our leadership team is the backbone of our success, driving the
        club forward with passion, expertise, and a commitment to innovation.
        Each of these dedicated individuals brings their unique perspective and
        skills, fostering a collaborative environment that nurtures growth and
        creativity. Whether through mentorship, project guidance, or hands-on
        tech leadership, this team ensures that every member of MUTC has the
        opportunity to excel and contribute meaningfully to the tech community.
      </p>

      <div className="top-leaders">
        <LeadershipCard
          image={leader10}
          name="Victory Njeri"
          title="Chairperson"
          bio="Victory Njeri is the dynamic chairperson of MUTC, leading the club with passion and vision. A final-year student specializing in software engineering, Victory is known for her leadership skills and dedication to community development. She has spearheaded numerous projects within the club, fostering a collaborative environment that encourages innovation and creativity."
          socials={{
            linkedin: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            twitter: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            instagram: "https://github.com/users/Gidayi-dev/projects/1/views/1",
          }}
        />
        <LeadershipCard
          image={leader2}
          name="Dr. John Ndia"
          title="Patron"
          bio="Dr. John Ndia is a seasoned academic and technology enthusiast, serving as the patron of MUTC. With over 20 years of experience in higher education and research, he is dedicated to mentoring the next generation of tech professionals. Dr. Ndia has played a pivotal role in nurturing innovative talent and encouraging collaboration among students. His expertise spans across machine learning, artificial intelligence, and cloud computing."
          socials={{
            linkedin: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            twitter: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            instagram: "https://github.com/users/Gidayi-dev/projects/1/views/1",
          }}
        />
      </div>

      <div className="other-leaders">
        <LeadershipCard
          image={leader3}
          name="Allan Muhari"
          title="Vice-Chairperson"
          bio="Allan Muhari serves as the Vice Chairperson of MUTC, where he excels in coordinating activities and fostering collaboration among members. With a strong background in data science and software development, Allan brings both technical expertise and organizational skills to the team. His focus is on ensuring the club continues to grow as a learning hub for all members."
          socials={{
            linkedin: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            twitter: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            instagram: "https://github.com/users/Gidayi-dev/projects/1/views/1",
          }}
        />
        <LeadershipCard
          image={leader4}
          name="Bridget Gitonga"
          title="Secretary"
          bio="Bridget manages the club's communication and ensures that all activities and initiatives run smoothly. With her exceptional organizational skills and passion for fostering collaboration, Bridget plays a crucial role in keeping the team on track."
          socials={{
            linkedin: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            twitter: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            instagram: "https://github.com/users/Gidayi-dev/projects/1/views/1",
          }}
        />
        <LeadershipCard
          image={leader6}
          name="Ruth Mutisya"
          title="Treasurer"
          bio="Ruth Mutisya is the treasurer of MUTC, overseeing the club's financial management and budgeting. With a keen interest in fintech and blockchain technologies, Ruth brings her financial acumen to the tech world. She is also an advocate for financial literacy within the student community and ensures that the club's projects are both innovative and sustainable."
          socials={{
            linkedin: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            twitter: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            instagram: "https://github.com/users/Gidayi-dev/projects/1/views/1",
          }}
        />
        <LeadershipCard
          image={leader8}
          name="Webster Ifedha"
          title="Cybersecurty Lead"
          bio="Webster Ifedha is the cybersecurity lead at MUTC, where he is responsible for educating members on cybersecurity best practices and emerging threats. With a background in ethical hacking and network security, Webster is passionate about safeguarding data and building secure systems. He has led various workshops on cybersecurity, empowering members to build safer, more resilient applications."
          socials={{
            linkedin: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            twitter: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            instagram:
              "https://github.com/users/Gidayi-dev/666666projects/1/views/1",
          }}
        />
        <LeadershipCard
          image={leader9}
          name="Manase Gunga"
          title="UI/UX Lead"
          bio="Manase Gunga is the UI/UX lead at MUTC, responsible for enhancing the design and usability of club projects. His expertise in user-centered design and prototyping has helped many members understand the importance of creating intuitive interfaces. Manase is passionate about creating seamless digital experiences and frequently runs design-thinking workshops within the club."
          socials={{
            linkedin: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            twitter: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            instagram: "https://github.com/users/Gidayi-dev/projects/1/views/1",
          }}
        />
        <LeadershipCard
          image={leader11}
          name="Carolyne Githenduka"
          title="Web Development Lead"
          bio="Carolyne Githenduka leads the web development team at MUTC, where she mentors students on full-stack development and modern web frameworks. Carolyne has a deep understanding of both frontend and backend technologies and is committed to helping students build responsive and scalable web applications. Her dedication to teaching and collaborative spirit make her a respected leader in the club."
          socials={{
            linkedin: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            twitter: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            instagram: "https://github.com/users/Gidayi-dev/projects/1/views/1",
          }}
        />
        <LeadershipCard
          image={leader13}
          name="Stanley Amunze"
          title="Mobile Apps Development Lead"
          bio="Stanley Amunze is the mobile apps development lead at MUTC. With his deep expertise in native and cross-platform development, Stanley guides club members in building robust mobile applications. He’s passionate about mobile technology and frequently organizes workshops to teach members how to create seamless mobile experiences across various devices.6"
          socials={{
            linkedin: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            twitter: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            instagram: "https://github.com/users/Gidayi-dev/projects/1/views/1",
          }}
        />
        <LeadershipCard
          image={leader14}
          name="Paul Karanja"
          title="Cloud Engineering Lead"
          bio="Paul Karanja is the cloud engineering lead at MUTC. With extensive experience in cloud platforms like AWS and Azure, Paul has guided many students in mastering cloud infrastructure and DevOps practices. He is passionate about scalable systems and often conducts cloud computing workshops to equip members with real-world cloud deployment skills."
          socials={{
            linkedin: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            twitter: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            instagram: "https://github.com/users/Gidayi-dev/projects/1/views/1",
          }}
        />
        <LeadershipCard
          image={leader76}
          name="Evyonn Mbithe"
          title="Patron"
          bio="Evyonn Mbithe is the Power Platform lead at MUTC, specializing in low-code/no-code solutions that empower non-technical members to create innovative applications. With her guidance, members have learned to leverage Microsoft's Power Platform to build functional business applications without deep coding knowledge. Evyonn is dedicated to democratizing tech and making development accessible to all."
          socials={{
            linkedin: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            twitter: "https://github.com/users/Gidayi-dev/projects/1/views/1",
            instagram: "https://github.com/users/Gidayi-dev/projects/1/views/1",
          }}
        />
      </div>
    </section>
  );
}

export default Leadership;
