// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
      category: 'Tools Technologies',
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
    <motion.div
      className="skills-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section
        className="skills-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Skills Expertise</h1>
        <p>A comprehensive overview of technical skills and professional expertise developed over years of development experience.</p>
      </motion.section>

      {skillsCategories.map((categoryData, categoryIndex) => (
        <motion.section
          className="skills-category"
          key={categoryIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
        >
          <h2>{categoryData.category}</h2>
          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {categoryData.skills.map((skill, skillIndex) => (
              <motion.div
                className="skill-card"
                key={skillIndex}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(170, 59, 255, 0.2)" }}
              >
                <h3>{skill.name}</h3>
                <p className="skill-level">{skill.level}</p>
                <div className="progress-bar-container">
                  <div className="progress-bar" style={{ width: `${skill.proficiency}%` }}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      ))}
    </motion.div>
  );
};

export default Skills;
