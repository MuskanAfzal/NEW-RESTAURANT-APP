import React, { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [hoveredMember, setHoveredMember] = useState(null);

  useEffect(() => {
    console.log('Fetching team members...');
    fetch('/data.json')
      .then(response => {
        console.log('Fetched response:', response);
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setTeamMembers(data.teamMembers);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    console.log('Team members state updated:', teamMembers);
  }, [teamMembers]);

  useEffect(() => {
    console.log('Hovered member:', hoveredMember);
  }, [hoveredMember]);

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
          {teamMembers.map((member, index) => {
            const imagePath = `${process.env.PUBLIC_URL}/${member.image}`;
            console.log(`Rendering team member: ${member.name}, Image path: ${imagePath}`);
            return (
              <div
                key={index}
                className="team-member"
                onMouseEnter={() => setHoveredMember(member)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <img src={imagePath} alt={member.name} className="team-member-image" />
                <h3>{member.name}</h3>
                <p><em>{member.role}</em></p>
                <p>{member.description}</p>
              </div>
            );
          })}
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

export default About;
