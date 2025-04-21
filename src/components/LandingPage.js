import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as THREE from 'three';
import RINGS from 'vanta/dist/vanta.rings.min';
import { motion } from 'framer-motion';

function LandingPage() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x88ff00,
          backgroundColor: 0xFF121212
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, when: "beforeChildren" } }
  };

  const h1Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 1.5,
        ease: "easeOut"
      } 
    }
  };

  const borderVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { 
        duration: 2,
        ease: "easeInOut",
      }
    }
  };

  const gradientVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
      }
    }
  };

  const [typedText, setTypedText] = useState('');
  const fullText = "UUshbu platforma startuperlar uchun keng qamrovli yechim sifatida ishlab chiqilgan bo'lib, g'oyalarni haqiqatga aylantirishda ularga har tomonlama yordam beradi. Hujjatlar tayyorlash, loyiha tahlili, kod yozmasdan dastur yaratish, investorlar bilan aloqa, yosh startuperlar hamjamiyati va AI yordamchisi orqali startupingizni yangi darajaga olib chiqing";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(prevText => prevText + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 10); // Adjust typing speed here (50ms per character)

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div ref={vantaRef} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container fluid className="h-100 d-flex flex-column">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-grow-1 d-flex flex-column justify-content-center"
        >
          <Row className="mb-5">
            <Col className="text-center">
              <motion.h1 variants={h1Variants} className="mt-5">
                G'oyadan muvaffaqiyatgacha — bir platformada!
              </motion.h1>
            </Col>
          </Row>
          <Row className="justify-content-center ">
            <Col md={9} lg={8} xl={7} >
              <div id='paragraph' style={{ position: 'relative' }}>
                <div 
                  style={{ 
                    position: 'relative', 
                    zIndex: 1, 
                    padding: '20px',
                    textAlign: 'center',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {typedText}
                </div>
                <svg
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                  }}
                >
                  <defs>
                    <linearGradient id="border-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#88ff00" />
                      <stop offset="25%" stopColor="#00ffff" />
                      <stop offset="50%" stopColor="#88ff00" />
                      <stop offset="75%" stopColor="#00ffff" />
                      <stop offset="100%" stopColor="#88ff00" />
                    </linearGradient>
                    <motion.linearGradient
                      id="animated-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                      animate={{
                        x1: ["0%", "100%", "0%"],
                        y1: ["0%", "100%", "0%"],
                        x2: ["100%", "0%", "100%"],
                        y2: ["100%", "0%", "100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <stop offset="0%" stopColor="#88ff00" />
                      <stop offset="25%" stopColor="#00ffff" />
                      <stop offset="50%" stopColor="#88ff00" />
                      <stop offset="75%" stopColor="#00ffff" />
                      <stop offset="100%" stopColor="#88ff00" />
                    </motion.linearGradient>
                  </defs>
                  <motion.rect
                    width="100%"
                    height="100%"
                    fill="none"
                    stroke="url(#animated-gradient)"
                    strokeWidth="2"
                    variants={gradientVariants}
                    initial="hidden"
                    animate="visible"
                  />
                </svg>
              </div>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </div>
  );
}

export default LandingPage;