import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/hamjamiyat.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


// Import profile images
import aliPhoto from '../assets/man1.jfif';
import zarinaPhoto from '../assets/wman1.jpg';
import bekzodPhoto from '../assets/man2.jfif';
import nodiraPhoto from '../assets/wman2.jfif';

// Sample data for collaborators
const collaborators = [
  {
    id: 1,
    name: "Ali Valiev",
    photo: aliPhoto,
    profession: "Frontend dasturchi",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "No-code platformalar"],
    location: "Toshkent",
    goal: "Fintech yo'nalishidagi startap uchun tajribali hammuassischi qidirmoqda. Foydalanuvchi interfeyslarini tez va samarali yaratish bo‘yicha tajribaga ega, real muammolarni yechishga qaratilgan loyihalarda ishlashni xohlaydi.",
    socialLinks: {
      telegram: "https://t.me/ali_valiev",
      linkedin: "https://linkedin.com/in/ali-valiev",
      github: "https://github.com/alivaliev"
    }
  },
  {
    id: 2,
    name: "Zarina Usmonova",
    photo: zarinaPhoto,
    profession: "Marketing mutaxassisi",
    skills: ["SEO", "Google Analytics", "Social Media Marketing", "Kontent yaratish", "Email marketing", "SMM strategiya"],
    location: "Samarqand",
    goal: "Startaplarga raqamli marketing strategiyasini ishlab chiqishda yordam berishni maqsad qilgan. Ijtimoiy tarmoqlar orqali brend taniqliligini oshirish va mijozlarni jalb qilish bo‘yicha kuchli tajribaga ega.",
    socialLinks: {
      telegram: "https://t.me/zarina_usmonova",
      linkedin: "https://linkedin.com/in/zarina-usmonova",
      github: "https://github.com/zarinausmonova"
    }
  },
  {
    id: 3,
    name: "Bekzod Rahimov",
    photo: bekzodPhoto,
    profession: "Startap asoschisi",
    skills: ["Biznes strategiya", "Fundraising", "Pitch deck tayyorlash", "Jamoa boshqaruvi", "Raqobatchilar tahlili"],
    location: "Buxoro",
    goal: "Elektron tijorat sohasida yangi startap ustida ishlamoqda. Ilovani tez ishga tushirish uchun no-code yoki low-code yechimlarda ishlay oladigan hamkor izlayapti. Bozorni chuqur o‘rganish va investitsiya jalb qilishda tajribaga ega.",
    socialLinks: {
      telegram: "https://t.me/bekzod_rahimov",
      linkedin: "https://linkedin.com/in/bekzod-rahimov",
      github: "https://github.com/bekzodrahimov"
    }
  },
  {
    id: 4,
    name: "Nodira Xolmurodova",
    photo: nodiraPhoto,
    profession: "UI/UX dizayner",
    skills: ["Figma", "Adobe XD", "Prototiplash", "User flow", "User Research", "Responsive dizayn", "Design system"],
    location: "Andijon",
    goal: "Innovatsion mahsulotlar ustida ishlaydigan startap jamoasiga qo‘shilishni istaydi. Foydalanuvchiga qulay interfeyslar yaratishga, prototiplash va foydalanuvchi tajribasini yaxshilashga alohida e’tibor qaratadi.",
    socialLinks: {
      telegram: "https://t.me/nodira_xolmurodova",
      linkedin: "https://linkedin.com/in/nodira-xolmurodova",
      github: "https://github.com/nodiraxolmurodova"
    }
  }
];

// Card Component
function CollaborationCard({ collaborator, index }) {
  const cardVariants = {
    hidden: { x: -300, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        delay: index * 0.2,
        duration: 0.5
      }
    }
  };

  const contentVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        delay: index * 0.2 + 0.3,
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="card h-100"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="row g-0 h-100">
    {/* Left Section: Photo, Name, and Location */}
    <motion.div 
      className="col-md-3 d-flex flex-column justify-content-between align-items-center p-3"
      variants={contentVariants}
    >
      <div className="text-center">
        <img
          src={collaborator.photo}
          alt={collaborator.name}
          className="rounded-circle profile-pic mb-3"
        />
        <h5 className="mb-0">{collaborator.name}</h5>
      </div>
      <p className="card-text text-center mb-0 mt-2">
        <strong id='green'> <i className="fas fa-map-marker-alt mr-1">  </i></strong>  {collaborator.location}
      </p>
    </motion.div>
    {/* Right Section: Details */}
    <motion.div 
      className="col-md-9"
      variants={contentVariants}
    >
      <div className="card-body h-100 d-flex flex-column">
        <h4 id='green' className="card-title profession-title">{collaborator.profession}</h4>
        <div className="mb-3">
          <strong id='green'>Ko'nikmalar:</strong>
          <div className="skills-container" style={{
            maxHeight: '100px',
            overflowY: 'auto',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '5px',
            padding: '10px',
            marginTop: '5px'
          }}>
            <ul className="skills-list" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {collaborator.skills.map((skill, index) => (
                <li key={index} style={{ marginBottom: '5px' }}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
            <div className="card-text">
              <strong id='green'>Foydalanuvchi maqsadi</strong>
              <textarea 
                className="form-control mt-2 collaboration-goal"
                value={collaborator.goal}
                readOnly
                rows="3"
                style={{ 
                  resize: 'none', 
                  backgroundColor: 'transparent', 
                  color: 'inherit', 
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '5px',
                  padding: '10px',
                  fontSize: 'inherit',
                  lineHeight: 'inherit'
                }}
              />
            </div>
            <div className="social-icons mt-auto">
              <a href={collaborator.socialLinks.telegram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-telegram"></i>
              </a>
              <a href={collaborator.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={collaborator.socialLinks.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href={collaborator.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={collaborator.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href={collaborator.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Main Component
function Hamjamiyat() {
  return (
    <Container className="mt-5 hamjamiyat">

      <Row>
        {collaborators.map((collaborator, index) => (
          <Col md={6} key={collaborator.id} className="mb-4">
            <CollaborationCard collaborator={collaborator} index={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Hamjamiyat;