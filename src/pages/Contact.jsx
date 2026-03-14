import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter, Loader2 } from 'lucide-react';
import { FORM_MESSAGES, SUBMIT_STATES } from '../constants';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ status: 'idle', message: '' }); // idle, success, error
  const [errors, setErrors] = useState({});

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

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:nonghoi2004@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/n%C3%B4ng-vay-h%E1%BB%99i-undefined-0a5b0b3a4/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/NongHoi' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = FORM_MESSAGES.NAME_REQUIRED;
    if (!formData.email.trim()) {
      tempErrors.email = FORM_MESSAGES.EMAIL_REQUIRED;
    } else if (!FORM_MESSAGES.EMAIL_PATTERN.test(formData.email)) {
      tempErrors.email = FORM_MESSAGES.EMAIL_INVALID;
    }
    if (!formData.subject.trim()) tempErrors.subject = FORM_MESSAGES.SUBJECT_REQUIRED;
    if (!formData.message.trim() || formData.message.length < FORM_MESSAGES.MESSAGE_MIN_LENGTH) {
      tempErrors.message = FORM_MESSAGES.MESSAGE_MIN;
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setSubmitStatus({ status: SUBMIT_STATES.IDLE, message: '' });
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus({ status: SUBMIT_STATES.SUCCESS, message: FORM_MESSAGES.SUCCESS });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      setTimeout(() => setSubmitStatus({ status: SUBMIT_STATES.IDLE, message: '' }), 5000);
    } catch {
      setSubmitStatus({ status: SUBMIT_STATES.ERROR, message: FORM_MESSAGES.ERROR });
      setTimeout(() => setSubmitStatus({ status: SUBMIT_STATES.IDLE, message: '' }), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="contact-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-content">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-description">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="form-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`form-input ${errors.name ? 'input-error' : ''}`} />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`form-input ${errors.email ? 'input-error' : ''}`} />
                {errors.email && <p className="error-message">{errors.email}</p>}
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`form-input ${errors.subject ? 'input-error' : ''}`} />
                {errors.subject && <p className="error-message">{errors.subject}</p>}
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className={`form-textarea ${errors.message ? 'input-error' : ''}`} />
                {errors.message && <p className="error-message">{errors.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants}>
                <button type="submit" className="submit-btn" disabled={isLoading}>
                  {isLoading ? <Loader2 className="animate-spin" /> : 'Send Message'}
                </button>
              </motion.div>
            </form>
            {submitStatus.status !== SUBMIT_STATES.IDLE && (
              <div className={`submission-status ${submitStatus.status}`}>
                {submitStatus.message}
              </div>
            )}
          </motion.div>

          <motion.div className="social-links-section" variants={itemVariants}>
            <h3 className="social-links-title">Follow Me</h3>
            <ul className="social-links-list">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label} className="social-link-item">
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <Icon size={24} />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
