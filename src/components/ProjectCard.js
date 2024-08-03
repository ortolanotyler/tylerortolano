import React, { useState, useRef, useEffect } from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ image, header, content, url }) => {
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

  const handleClick = () => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  const rX = (mouseX / width) * 10; // Reduce the rotation angle
  const rY = (mouseY / height) * -10;
  const tX = (mouseX / width) * -10; // Adjust translation accordingly
  const tY = (mouseY / height) * -10;

  return (
    <div 
      className={styles.cardWrap} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave} 
      ref={cardRef}
      onClick={handleClick} // Add click event handler
      style={{ cursor: url ? 'pointer' : 'default' }} // Change cursor if URL is provided
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
