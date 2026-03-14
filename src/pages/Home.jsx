import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import nvhImage from '../assets/nvh.jpg';
import './Home.css';

const containerVariants = {
// ... (existing variants)
};

const itemVariants = {
// ... (existing variants)
};

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="home-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="intro-section" variants={itemVariants}>
          <div className="intro-text">
            <motion.div variants={itemVariants}>
              <span className="welcome-badge">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              className="main-heading"
              variants={itemVariants}
            >
              NÔNG VAY HỘI
            </motion.h1>

            <motion.p
              className="sub-heading"
              variants={itemVariants}
            >
              Full-Stack Developer
            </motion.p>

            <motion.p
              className="description"
              variants={itemVariants}
            >
             Aspiring Full-stack Developer dedicated to crafting seamless web experiences that balance aesthetic design with high-performance functionality.
            </motion.p>
          </div>

          <motion.div className="cta-buttons" variants={itemVariants}>
            <Link to="/projects" className="btn btn-primary">
              View My Project
              <ArrowRight className="btn-icon" />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Me
            </Link>
          </motion.div>

          <motion.div className="stats-grid" variants={itemVariants}>
            <div className="stat-item">
              <p className="stat-number">4</p>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">2</p>
              <p className="stat-label">Years of Experience </p>
            </div>
            <div className="stat-item">
              <p className="stat-number">100%</p>
              <p className="stat-label">Satisfaction</p>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div className="image-section" variants={itemVariants}>
          {/* Portfolio illustration */}
          <img src={nvhImage} alt="Portfolio illustration" style={{ width: '100%', borderRadius: '8px' }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
