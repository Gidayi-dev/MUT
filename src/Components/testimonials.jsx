import "./testimonials.css";
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.jpg";
import test4 from "../assets/test4.jpg";

function TestimonyCard({ customerAvatar, customerName, title, text }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-customer-details">
        <img
          className="testimonial-avatar"
          src={customerAvatar}
          alt={customerName}
        />
        <div>
          <h4 className="testimonial-name">{customerName}</h4>
          <h5 className="testimonial-title">{title}</h5>
        </div>
      </div>
      <p className="testimonial-text">{text}</p>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h1 className="testimonials-heading">Success Stories From MUTC</h1>
      <div className="testimonials-container">
        <TestimonyCard
          customerAvatar={test1}
          customerName="Duane Dunn"
          title="Tech Enthusiast"
          text="MUTC has been an amazing experience! I've gained so much knowledge and hands-on experience in tech. The mentors are incredibly supportive, and I've made lifelong friends here."
        />
        <TestimonyCard
          customerAvatar={test2}
          customerName="Emma Johnson"
          title="Software Engineer"
          text="I joined MUTC to grow my coding skills, and I found so much more. The collaborative environment fosters creativity, and the projects have prepared me for real-world challenges."
        />
        <TestimonyCard
          customerAvatar={test3}
          customerName="James Smith"
          title="Intern at Airtel Kenya"
          text="My journey at MUTC has been life-changing. The hands-on projects allowed me to apply what I learned in real-time. I've already landed an internship thanks to the skills I acquired here!"
        />
        <TestimonyCard
          customerAvatar={test4}
          customerName="Sarah Lee"
          title="Frontend Developer"
          text="MUTC provided me with the right tools and guidance to transition from a beginner to a confident developer. The mentorship and resources here are truly unparalleled."
        />
      </div>
    </section>
  );
}

export default Testimonials;
