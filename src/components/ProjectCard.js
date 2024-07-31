import React, { useState, useRef, useEffect } from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ image, header, content }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    setWidth(cardRef.current.offsetWidth);
    setHeight(cardRef.current.offsetHeight);
  }, []);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left - width / 2);
    setMouseY(e.clientY - rect.top - height / 2);
  };

  const handleMouseLeave = () => {
    setMouseX(0);
    setMouseY(0);
  };

  const rX = (mouseX / width) * 30;
  const rY = (mouseY / height) * -30;
  const tX = (mouseX / width) * -40;
  const tY = (mouseY / height) * -40;

  return (
    <div 
      className={styles.cardWrap} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave} 
      ref={cardRef}
    >
      <div 
        className={styles.card} 
        style={{
          transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
        }}
      >
        <div 
          className={styles.cardBg} 
          style={{
            backgroundImage: `url(${image})`,
            transform: `translateX(${tX}px) translateY(${tY}px)`
          }}
        />
        <div className={styles.cardInfo}>
          <h1>{header}</h1>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
