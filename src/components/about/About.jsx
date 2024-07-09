import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './About.css';

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setTeamMembers(data.teamMembers))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="about-container">
      <section className="about-section">
        <h1>About Us</h1>
        <p>Welcome to LUXURIOUS Bistro, where we offer an exquisite dining experience that combines culinary excellence with a warm and inviting atmosphere. Our mission is to provide our guests with the finest dishes made from the freshest ingredients, all while ensuring an unforgettable dining experience.</p>
        <h2>Our Mission</h2>
        <p>At LUXURIOUS Bistro, our mission is to delight our guests with exceptional food and service. We believe in the power of a great meal to bring people together, and we strive to create a welcoming environment where everyone feels like family.</p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member"
              onMouseEnter={() => setHoveredMember(member)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <img src={`${process.env.PUBLIC_URL}/${member.image}`} alt={member.name} className="team-member-image" />
              <h3>{member.name}</h3>
              <p><em>{member.role}</em></p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
        {hoveredMember && (
          <div className="hovered-member-image">
            <img src={`${process.env.PUBLIC_URL}/${hoveredMember.image}`} alt={hoveredMember.name} />
          </div>
        )}
      </section>
    </div>
  );
};

About.propTypes = {
  teamMembers: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
};

export default About;
