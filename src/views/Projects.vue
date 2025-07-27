<script setup>
import SectionHeader from '../components/SectionHeader.vue';

const projects = [
  {
    title: "Smart Patient Monitoring System",
    description: "Tracks BPM, SpO₂, temperature using MAX30102, MLX90614 sensors. Features a Node.js backend integrated with Gemini API chatbot for intelligent health monitoring.",
    technologies: ["IoT", "Node.js", "Gemini API", "MAX30102", "MLX90614"],
    highlights: [
      "Real-time vital sign monitoring",
      "AI-powered health insights through Gemini API",
      "Mobile notifications for critical conditions"
    ]
  },
  {
    title: "Fertile Future",
    description: "Built cost-effective (₹500) F/L OM nutrient kits using 3-wavelength LED spectroscopy. Achieved 85%+ accuracy in nutrient detection, tested on 10 farms.",
    technologies: ["LED Spectroscopy", "Embedded Systems", "Agriculture Tech", "Data Analysis"],
    highlights: [
      "Low-cost nutrient detection (₹500)",
      "85%+ accuracy in field tests",
      "Successfully deployed on 10 farms"
    ]
  },
  {
    title: "Smart Aquaponics System",
    description: "Solar-powered NodeMCU-based IoT setup with fish disease detection using YOLOv5. Integrates water quality monitoring and automated feeding systems.",
    technologies: ["NodeMCU", "Solar Power", "YOLOv5", "Computer Vision", "IoT"],
    highlights: [
      "Solar-powered sustainable operation",
      "AI-based fish disease detection",
      "Automated water quality management"
    ]
  }
];
</script>

<template>
  <div class="projects">
    <SectionHeader title="Projects" />
    
    <div class="projects-container">
      <div v-for="(project, index) in projects" :key="index" class="project-card card">
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          
          <p class="project-description">{{ project.description }}</p>
          
          <div class="project-highlights">
            <h4>Highlights</h4>
            <ul>
              <li v-for="(highlight, i) in project.highlights" :key="i">{{ highlight }}</li>
            </ul>
          </div>
          
          <div class="project-tech">
            <span v-for="(tech, i) in project.technologies" :key="i" class="tech-tag">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="more-projects text-center mt-4">
      <p>These are just a few of my featured projects. I'm constantly working on new ideas and technologies.</p>
      <a href="https://github.com/kamaljeyaram" target="_blank" rel="noopener noreferrer" class="btn mt-2">
        GitHub
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Project Container */
.projects-container {
  display: grid;
  gap: 2rem;
  padding: 1rem;
}

/* Project Card Styles */
.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 12px;
  border-left: 4px solid var(--color-primary);
}

.project-content {
  padding: 1.5rem;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.project-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
  position: relative;
}

.project-card h3::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--color-primary);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.project-card:hover h3::after {
  width: 100px;
}

.project-description {
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
}

.project-highlights {
  margin-bottom: 1.5rem;
  background-color: var(--color-background-mute);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  position: relative;
}

.project-highlights::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background-color: var(--color-primary);
  border-radius: 3px;
}

.project-highlights h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-primary);
  display: flex;
  align-items: center;
}

.project-highlights h4::before {
  content: '★';
  margin-right: 0.5rem;
  color: var(--color-primary);
}

.project-highlights ul {
  margin-left: 1.5rem;
}

.project-highlights li {
  margin-bottom: 0.5rem;
  position: relative;
}

.project-highlights li::marker {
  color: var(--color-primary);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  background-color: var(--color-background-mute);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.tech-tag:hover {
  background-color: var(--color-primary);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.more-projects {
  background-color: var(--color-background-soft);
  padding: 2rem;
  border-radius: 12px;
  margin-top: 3rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.more-projects::before {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: var(--color-primary);
  opacity: 0.05;
  border-radius: 50%;
  top: -100px;
  right: -100px;
}

.more-projects::after {
  content: '';
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: var(--color-primary);
  opacity: 0.05;
  border-radius: 50%;
  bottom: -75px;
  left: -75px;
}

.more-projects p {
  margin-bottom: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn {
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid var(--color-primary);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  transform: skewX(-15deg);
  transition: all 0.5s ease;
  z-index: -1;
}

.btn:hover::before {
  left: 100%;
}

.btn:hover {
  background-color: transparent;
  color: var(--color-primary);
  transform: translateY(-3px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

/* Responsive Styles */
@media (min-width: 768px) {
  .projects-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .more-projects {
    padding: 3rem;
  }
}

@media (min-width: 1024px) {
  .projects-container {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .project-image {
    height: 220px;
  }
}

/* Add specific header spacing for Projects page - similar to Achievements */
.projects {
  padding-top: 5rem;
  margin-top: -3rem;
  scroll-margin-top: 6rem;
}

@media (min-width: 768px) {
  .projects {
    padding-top: 7rem;
    margin-top: -4rem;
    scroll-margin-top: 7rem;
  }
}

@media (min-width: 1024px) {
  .projects {
    padding-top: 8rem;
    margin-top: -5rem;
    scroll-margin-top: 8rem;
  }
}
</style>
