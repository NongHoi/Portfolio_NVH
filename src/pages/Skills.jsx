import './Skills.css';

const Skills = () => {
  const skillsCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React', level: 'Expert', proficiency: 95 },
        { name: 'Next.js', level: 'Expert', proficiency: 90 },
        { name: 'JavaScript', level: 'Expert', proficiency: 95 },
        { name: 'HTML/CSS', level: 'Expert', proficiency: 95 },
      ],
    },
    {
      category: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 'Advanced', proficiency: 85 },
        { name: 'Express', level: 'Advanced', proficiency: 85 },
        { name: 'Python', level: 'Intermediate', proficiency: 70 },
        { name: 'SQL', level: 'Advanced', proficiency: 80 },
        { name: 'MongoDB', level: 'Advanced', proficiency: 80 },
        { name: 'PostgreSQL', level: 'Advanced', proficiency: 80 },
      ],
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 'Expert', proficiency: 90 },
        { name: 'REST APIs', level: 'Expert', proficiency: 95 },
        { name: 'Postman', level: 'Intermediate', proficiency: 65 },
      ],
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Problem Solving', level: 'Expert', proficiency: 95 },
        { name: 'Leadership', level: 'Advanced', proficiency: 80 },
        { name: 'Project Management', level: 'Advanced', proficiency: 80 },
        { name: 'Communication Teamwork Skills', level: 'Advanced', proficiency: 85 },

      ],
    },
  ];

  return (
    <div className="skills-container">
      <section className="skills-header">
        <h1>Skills Expertise</h1>
        <p>A comprehensive overview of technical skills and professional expertise developed over years of development experience.</p>
      </section>

      {skillsCategories.map((categoryData, categoryIndex) => (
        <section className="skills-category" key={categoryIndex}>
          <h2>{categoryData.category}</h2>
          <div className="skills-grid">
            {categoryData.skills.map((skill, skillIndex) => (
              <div className="skill-card" key={skillIndex}>
                <h3>{skill.name}</h3>
                <p className="skill-level">{skill.level}</p>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${skill.proficiency}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Skills;
