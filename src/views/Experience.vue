<script setup>
import SectionHeader from '../components/SectionHeader.vue';
</script>

<template>
  <div class="experience page-section">
    <SectionHeader title="Experience" />
    
    <div class="experience-card card">
      <div class="experience-header">
        <div class="experience-title">
          <h3>Computer Vision Intern</h3>
          <p class="company">Aioty Labs</p>
        </div>
        <div class="experience-duration">
          <span>May - July 2025</span>
        </div>
      </div>
      
      <div class="experience-content">
        <p class="project-title">Project for Royal Enfield:</p>
        <ul class="experience-list">
          <li>Implemented face recognition with 95%+ accuracy using InsightFace</li>
          <li>Developed worker tracking and posture estimation systems using YOLOv8</li>
          <li>Successfully deployed solutions on 5+ industrial workstations in real-time environments</li>
          <li>Optimized models for edge computing devices to ensure low-latency processing</li>
          <li>Created a user-friendly dashboard to visualize worker safety metrics and productivity data</li>
        </ul>
        
        <div class="experience-technologies">
          <span class="tech-tag">Computer Vision</span>
          <span class="tech-tag">Python</span>
          <span class="tech-tag">InsightFace</span>
          <span class="tech-tag">YOLOv8</span>
          <span class="tech-tag">Real-time Processing</span>
        </div>
      </div>
    </div>
    
    <div class="other-experiences">
      <h3>Additional Experience</h3>
      <p>
        Beyond my formal internship, I've collaborated on various projects involving IoT systems, 
        embedded device programming, and cloud integration solutions. These experiences have provided 
        me with practical skills in developing end-to-end solutions for real-world challenges.
      </p>
      
      <div class="related-projects">
        <RouterLink to="/projects" class="btn">
          <font-awesome-icon icon="fa-solid fa-laptop-code" />
          View My Projects
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.experience-card {
  margin-bottom: 2rem;
}

.experience-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

.experience-title h3 {
  font-size: 1.3rem;
  margin-bottom: 0.2rem;
}

.company {
  color: var(--color-primary);
  font-weight: 500;
}

.experience-duration {
  margin-top: 0.5rem;
  font-style: italic;
}

.project-title {
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.experience-list {
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
}

.experience-list li {
  margin-bottom: 0.5rem;
}

.experience-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.tech-tag {
  background-color: var(--color-background-mute);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
}

.other-experiences {
  margin-top: 3rem;
}

.other-experiences h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.related-projects {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
}

/* Added styles for header spacing */
.experience.page-section {
  padding-top: 5rem;
  margin-top: -3rem;
  scroll-margin-top: 6rem;
}

@media (min-width: 768px) {
  .experience-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .experience-duration {
    margin-top: 0;
  }
  
  .related-projects {
    justify-content: flex-start;
  }
  
  .experience.page-section {
    padding-top: 7rem;
    margin-top: -4rem;
    scroll-margin-top: 7rem;
  }
}

@media (min-width: 1024px) {
  .experience.page-section {
    padding-top: 8rem;
    margin-top: -5rem;
    scroll-margin-top: 8rem;
  }
}
</style>
