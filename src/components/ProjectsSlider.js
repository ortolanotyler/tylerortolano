import React from 'react';
import styles from './ProjectsSlider.module.css';
import ProjectCard from './ProjectCard';

const ProjectSlider = () => (
  <div className={styles.projectGrid}>
   
    <ProjectCard
      image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
      header="Canyons"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  
 
    

    <ProjectCard
      image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
      header="Canyons"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <ProjectCard
      image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
      header="Canyons"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
    <ProjectCard
      image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
      header="Canyons"
      content="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    />
  </div>
);

export default ProjectSlider;
