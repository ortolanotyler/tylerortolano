// ProjectSlider.js
import React from 'react';
import styles from './ProjectsSlider.module.css';
import ProjectCard from './ProjectCard';

const image1 = `${process.env.PUBLIC_URL}/Images/jackiewyersbeauty.png`; // Adjust the path as needed
const image2 = `${process.env.PUBLIC_URL}/Images/ecommerce.png`; // Adjust the path as needed

const ProjectSlider = () => (
  <div className={styles.projectGrid}>
    <ProjectCard
      image={image1}
      header="JackieWyers.Beauty"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      url="https://jackiewyers.beauty"
    />
    <ProjectCard
      image={image2}
      header="GOLF.Store"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      url="https://ecommerce-site-omega-swart.vercel.app/"
    />
  
  </div>
);

export default ProjectSlider;
