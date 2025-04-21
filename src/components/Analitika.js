import React, { useState, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Button, Form, Container, Card, Row, Col, Alert, ProgressBar } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Tilt from 'react-parallax-tilt';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/Savol.css';
import '../styles/analitika.css';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI('AIzaSyBYLwvfEeipbzTZbHEEYlLWF39RAQB0U_M');

const cardData = [
  { 
    title: "SWOT Tahlili", 
    description: "Startapingizning kuchli va zaif tomonlarini, imkoniyatlar va xavf-xatarlarni aniqlaydi. Strategik rejalashtirishda yordam beradi.", 
    buttonText: "Tahlil qilish" 
  },
  { 
    title: "PESTEL Tahlili", 
    description: "Siyosiy, iqtisodiy, ijtimoiy, texnologik, ekologik va huquqiy omillarni tahlil qilib, tashqi muhitga moslashishni osonlashtiradi.", 
    buttonText: "Tahlil qilish" 
  },
  { 
    title: "Porterning Besh Kuch Tahlili", 
    description: "Sanoatdagi raqobatni baholaydi: yangi keluvchilar, xaridorlar, yetkazib beruvchilar, o‘rinbosarlar va raqobat. Strategiya shakllantirishga yordam beradi.", 
    buttonText: "Tahlil qilish" 
  },
  { 
    title: "BCG Matritsasi", 
    description: "Mahsulotlarni bozor ulushi va o‘sish bo‘yicha tahlil qiladi: Yulduzlar, Sigirlar, Savollar, Itlar. Resurs taqsimlashni optimallashtiradi.", 
    buttonText: "Tahlil qilish" 
  },
  { 
    title: "Ansoff Matritsasi", 
    description: "O‘sish strategiyalarini aniqlaydi: bozor penetratsiyasi, bozor rivojlanishi, mahsulot rivojlanishi, diversifikatsiya. Xavfsiz o‘sish yo‘llarini ko‘rsatadi.", 
    buttonText: "Tahlil qilish" 
  },
  { 
    title: "Value Chain Tahlili", 
    description: "Ichki jarayonlarni tahlil qilib, qiymat yaratadigan bosqichlarni aniqlaydi. Xarajatlarni kamaytirish va samaradorlikni oshirishga yordam beradi.", 
    buttonText: "Tahlil qilish" 
  },
];

function CarouselCard({ title, description, buttonText, index, handleSubmit, setInput }) {
  const handleCardButtonClick = (e) => {
    setInput(title); // Set the card's title as input
    handleSubmit(e); // Trigger the API call
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="carousel-card-container"
    >
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <div className="carousel-card">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="glow-button" onClick={handleCardButtonClick}>
            {buttonText}
          </button>
        </div>
      </Tilt>
    </motion.div>
  );
}

function Savol() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);
  const timeoutRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse('');
    setError(null);
    setProgress(0);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 10, 90));
    }, 1000);

    timeoutRef.current = setTimeout(() => {
      setError("So'rov vaqti tugadi. Iltimos, qayta urinib ko'ring.");
      setIsLoading(false);
      clearInterval(progressInterval);
    }, 60000); // 60 seconds timeout

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-001" });

      // System instruction to guide the model
      const systemInstruction = `
        You are a startup analytics expert assisting founders in analyzing and growing their businesses. 
        First, ask about startup. After that, Provide detailed, actionable insights for startup-related questions, focusing on areas like user behavior, 
        market trends, financial analysis, growth strategies, marketing effectiveness, and product optimization. 
        Tailor your answers for startups in Uzbekistan, considering local market conditions, cultural nuances, 
        and languages (Uzbek ). Use data-driven reasoning, offer practical examples, and suggest tools 
        or strategies relevant to early-stage startups. If the question is vague, ask clarifying questions to provide 
        a more precise answer. Answer in Uzbek, using Uzbek language and tone.Use latin scripts.
      `;

      // Combine system instruction with user input
      const prompt = `${systemInstruction}\n\nUser question: ${input}`;

      const result = await model.generateContent(prompt);
      
      clearTimeout(timeoutRef.current);
      clearInterval(progressInterval);

      if (result.response) {
        const text = result.response.text();
        setResponse(text);
        setProgress(100);
      } else {
        throw new Error('No response from API');
      }
    } catch (error) {
      console.error('Error:', error);
      setError("So'rovingizni qayta ishlashda xatolik yuz berdi. Iltimos, qayta urinib ko'ring.");
    } finally {
      setIsLoading(false);
      clearTimeout(timeoutRef.current);
      clearInterval(progressInterval);
    }
  };

  const handleRetry = () => {
    setError(null);
    handleSubmit(new Event('submit'));
  };

  return (
    <Container className="mt-5 savol-container d-flex flex-column" style={{ minHeight: '100vh' }}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <CarouselCard
              {...card}
              index={index}
              handleSubmit={handleSubmit}
              setInput={setInput}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <motion.h2 
        className="mb-4 mt-5"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.5, 
          type: "spring", 
          stiffness: 120 
        }}
      >
        Startupingizni analiz qiling
      </motion.h2>

      <div className="flex-grow-1">
        <AnimatePresence>
          {(response || error || isLoading) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1.0 }}
            >
              {error ? (
                <Alert variant="danger" className="mt-4 mb-4">
                  {error}
                  <Button variant="outline-danger" size="sm" className="ml-2" onClick={handleRetry}>
                    Qayta urinish
                  </Button>
                </Alert>
              ) : isLoading ? (
                <Card className="mt-4 mb-4">
                  <Card.Body>
                    <Card.Text>So'rov qayta ishlanmoqda...</Card.Text>
                    <ProgressBar animated now={progress} label={`${progress}%`} />
                  </Card.Body>
                </Card>
              ) : (
                <Card className="mt-4 mb-4 response-card">
                  <Card.Body>
                    <Card.Text className="response-text">{response}</Card.Text>
                  </Card.Body>
                </Card>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Form onSubmit={handleSubmit} className="mt-auto">
        <Row className="align-items-center">
          <Col xs={12} md={9} lg={10}>
            <Form.Group className="mb-3 mb-md-0">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              >
                <Form.Control
                  type="text"
                  placeholder="Savolingizni kiriting..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </motion.div>
            </Form.Group>
          </Col>
          <Col xs={12} md={3} lg={2}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
            >
              <Button variant="primary" type="submit" disabled={isLoading} className="w-100">
                {isLoading ? 'Qayta ishlanmoqda...' : 'Yuborish'}
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Savol;