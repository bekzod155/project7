import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './VizDastur.css';

function VizDastur() {
    // The video ID for https://youtu.be/C9CqVNbFlu0
    const youtubeVideoId = 'C9CqVNbFlu0';

    return (
        <Container className="mt-5">
            <h2>
                Viz-dastur 
                <a 
                    href="https://vizdastur.onrender.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="icon-link ms-2"
                >
                    <FontAwesomeIcon 
                        icon={faUpRightFromSquare} 
                        className="clickable-icon" 
                    />
                </a>
            </h2>
            <Row className="mt-4">
                <Col className="d-flex justify-content-center">
                    <div className="video-container">
                        <iframe
                            src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default VizDastur;