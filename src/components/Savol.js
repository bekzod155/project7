import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Button, Form, Container, Card, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Savol.css';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI('AIzaSyBYLwvfEeipbzTZbHEEYlLWF39RAQB0U_M');

function Savol() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponse(''); // Clear previous response

    try {
      // Update the model name to 'gemini-1.5-pro-001'
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-001" });
      const result = await model.generateContent(`Siz startuplar bo'yicha mutaxassis va quyidagi savolga javob bering: ${input}`);
      
      if (result.response) {
        const text = result.response.text();
        setResponse(text);
      } else {
        throw new Error('No response from API');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.message === 'No response from API') {
        setResponse(`Kechirasiz, API javob bermadi. Iltimos, keyinroq qayta urinib ko'ring.`);
      } else if (error.message.includes('is not found')) {
        setResponse(`Kechirasiz, model topilmadi. Iltimos, boshqa modelni sinab ko'ring yoki administratorga murojaat qiling.`);
      } else if (error.message.includes('API key')) {
        setResponse(`API kaliti bilan bog'liq muammo yuzaga keldi. Iltimos, administratorga murojaat qiling.`);
      } else {
        setResponse(`Kechirasiz, so'rovingizni qayta ishlashda xatolik yuz berdi. Xato tafsilotlari: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="mt-5 savol-container">
      <motion.h2 
        className="mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.5, 
          type: "spring", 
          stiffness: 120 
        }}
      >
        Startup bo'yicha qanday savollaringiz bor ?
      </motion.h2>
      <Form onSubmit={handleSubmit}>
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
      <AnimatePresence>
        {response && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1.0 }}
          >
            <Card className="mt-4 response-card">
              <Card.Body>
                <Card.Text className="response-text">{response}</Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default Savol;