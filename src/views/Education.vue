<script setup>
import SectionHeader from '../components/SectionHeader.vue';
</script>

<template>
  <div class="education page-section">
    <SectionHeader title="Education" />
    
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-marker">
          <font-awesome-icon icon="fa-solid fa-graduation-cap" />
        </div>
        <div class="timeline-content card">
          <h3>Bachelor of Engineering in Computer Science and Engineering (IoT)</h3>
          <div class="education-details">
            <p class="institution">Sri Sairam Engineering College</p>
            <p class="duration">2022 - 2026</p>
          </div>
          <p class="grade">CGPA: 8.04/10</p>
          <p class="description">
            Specializing in Internet of Things (IoT) with focus on embedded systems, 
            networking, and cloud integration for smart applications.
          </p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-marker">
          <font-awesome-icon icon="fa-solid fa-graduation-cap" />
        </div>
        <div class="timeline-content card">
          <h3>Class XII</h3>
          <div class="education-details">
            <p class="institution">Velammal Main School</p>
            <p class="duration">2022</p>
          </div>
          <p class="grade">Percentage: 89.16%</p>
          <p class="description">
            Completed higher secondary education with focus on Mathematics, Physics, and Computer Science.
          </p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-marker">
          <font-awesome-icon icon="fa-solid fa-graduation-cap" />
        </div>
        <div class="timeline-content card">
          <h3>Class X</h3>
          <div class="education-details">
            <p class="institution">MR School</p>
            <p class="duration">2020</p>
          </div>
          <p class="grade">Percentage: 78.6%</p>
          <p class="description">
            Completed secondary education with excellent academic performance.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  width: 3px;
  background-color: var(--color-border);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  padding-left: 60px;
}

.timeline-marker {
  position: absolute;
  left: 0;
  width: 40px;
  height: 40px;
  background-color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
}

.timeline-content {
  background-color: var(--color-background-soft);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.timeline-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.education-details {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.institution {
  font-weight: 500;
  color: var(--color-primary);
}

.grade {
  font-weight: 600;
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .timeline::before {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .timeline-item {
    padding-left: 0;
    margin-bottom: 4rem;
  }
  
  .timeline-marker {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .timeline-item:nth-child(odd) .timeline-content {
    margin-right: 50%;
    margin-left: 60px;
  }
  
  .timeline-item:nth-child(even) .timeline-content {
    margin-left: 50%;
    margin-right: 60px;
  }
  
  .education-details {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
