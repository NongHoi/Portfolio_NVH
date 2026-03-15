import React, { useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useMotionValue, useTransform } from 'framer-motion';
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const x = (e.clientX - rect.left - centerX) * 0.15;
      const y = (e.clientY - rect.top - centerY) * 0.15;
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

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

            <motion.div className="skills-tags" variants={itemVariants}>
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">WordPress</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">CSS/HTML</span>
              <span className="skill-tag">...</span>
            </motion.div>
          </div>

          {/* Mobile Avatar - top right */}
          <motion.div 
            className="image-section image-section-mobile" 
            variants={itemVariants}
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="avatar-container"
              animate={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 20,
              }}
            >
              <motion.img
                src={nvhImage}
                alt="Portfolio illustration"
                style={{ width: '100%', borderRadius: '8px' }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              />
            </motion.div>
          </motion.div>

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

          <motion.div 
            className="image-section image-section-mobile" 
            variants={itemVariants}
            ref={imageRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Avatar container with tracking */}
            <motion.div
              className="avatar-container"
              animate={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 20,
              }}
            >
              {/* Portfolio illustration */}
              <motion.img
                src={nvhImage}
                alt="Portfolio illustration"
                style={{ width: '100%', borderRadius: '8px' }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="image-section" 
          variants={itemVariants}
          ref={imageRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Glow effect that follows cursor */}
          <div 
            className="avatar-glow"
            style={{
              left: `calc(50% + ${mousePosition.x}px)`,
              top: `calc(50% + ${mousePosition.y}px)`,
            }}
          />
          
          {/* Avatar container with tracking */}
          <motion.div
            className="avatar-container"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
            }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 20,
            }}
          >
            {/* Portfolio illustration */}
            <motion.img
              src={nvhImage}
              alt="Portfolio illustration"
              style={{ width: '100%', borderRadius: '8px' }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
