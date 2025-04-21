import React, { useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTelegram, 
    faInstagram, 
    faFacebookF, 
    faWhatsapp, 
    faXTwitter, 
    faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import '../styles/Goyalar.css'; // Make sure to create this CSS file

// Import images from assets folder
import image1 from '../assets/law.jpg';
import image2 from '../assets/vertical.avif';
import image3 from '../assets/startup.jpg';

function Goyalar() {
    const cardData = [
        {
            header: "Huquq AI",
            image: image1,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            phone: "+998 90 123 45 67",
            social: "@goya1"
        },
        {
            header: "Vertikal ekin ekish ",
            image: image2,
            text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
            phone: "+998 90 234 56 78",
            social: "@goya2"
        },
        {
            header: "Startup.uz",
            image: image3,
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
            phone: "+998 90 345 67 89",
            social: "@goya3"
        }
    ];

    const cardRefs = useRef(cardData.map(() => React.createRef()));

    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index].current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index].current;
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <Container className="mt-5 pb-5">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {cardData.map((card, index) => (
                    <motion.div key={index} variants={cardVariants}>
                        <Row className="mb-5 justify-content-center">
                            <Col xs={12} md={10} lg={8}>
                                <div 
                                    className="card-container" 
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                >
                                    <Card 
                                        ref={cardRefs.current[index]}
                                        bg="dark" 
                                        text="light" 
                                        className="custom-card animated-border"
                                    >
                                        <Card.Header className="text-center border-secondary">{card.header}</Card.Header>
                                        <Card.Body>
                                            <Row>
                                                <Col xs={12} md={3}>
                                                    <img src={card.image} alt={card.header} className="img-fluid mb-3 mb-md-0 pulsing-image" />
                                                </Col>
                                                <Col xs={12} md={9}>
                                                    <Card.Text>{card.text}</Card.Text>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                        <Card.Footer className="border-secondary">
                                            <Row className="align-items-center">
                                                <Col xs={12} md={4}>
                                                    <small className="text-muted">{card.phone}</small>
                                                </Col>
                                                <Col xs={12} md={4} className="text-center">
                                                    <div className="social-icons">
                                                        <FontAwesomeIcon icon={faTelegram} className="me-2" />
                                                        <FontAwesomeIcon icon={faInstagram} className="me-2" />
                                                        <FontAwesomeIcon icon={faFacebookF} className="me-2" />
                                                        <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
                                                        <FontAwesomeIcon icon={faXTwitter} className="me-2" />
                                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                                    </div>
                                                </Col>
                                                <Col xs={12} md={4} className="text-md-end mt-2 mt-md-0">
                                                    <Button variant="outline-light" size="sm">
                                                        Batafsil
                                                        <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </motion.div>
                ))}
            </motion.div>
        </Container>
    );
}

export default Goyalar;