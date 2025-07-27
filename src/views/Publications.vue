<script setup>
import SectionHeader from '../components/SectionHeader.vue';

const publications = [
  {
    title: "Solar-Powered IoT Aquaponics Monitoring with ML",
    type: "Patent",
    applicationNo: "20241083944",
    status: "Applied",
    description: "A sustainable aquaponics system powered by solar energy with integrated IoT monitoring and machine learning for fish health detection."
  },
  {
    title: "Intelligent Hospitalization System",
    type: "Patent",
    applicationNo: "202441084048",
    status: "Applied",
    description: "An advanced patient monitoring system using IoT sensors and AI for real-time health tracking and anomaly detection."
  }
];
</script>

<template>
  <div class="publications page-section">
    <SectionHeader title="Publications & Patents" />
    
    <div class="publications-container">
      <div v-for="(pub, index) in publications" :key="index" class="publication-card card">
        <div class="pub-header">
          <h3>{{ pub.title }}</h3>
          <div class="pub-type">{{ pub.type }}</div>
        </div>
        
        <div class="pub-details">
          <p><strong>Application No:</strong> {{ pub.applicationNo }}</p>
          <p><strong>Status:</strong> {{ pub.status }}</p>
        </div>
        
        <p class="pub-description">{{ pub.description }}</p>
      </div>
    </div>
    
    <div class="future-research text-center mt-4">
      <h3>Future Research</h3>
      <p>
        Currently working on research related to sustainable IoT solutions and 
        AI-powered healthcare systems. Stay tuned for upcoming publications.
      </p>
    </div>
  </div>
</template>

<style scoped>
.publications-container {
  max-width: 800px;
  margin: 0 auto;
}

.publication-card {
  margin-bottom: 2rem;
}

.pub-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.pub-header h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.pub-type {
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  padding: 0.2rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  align-self: flex-start;
}

.pub-details {
  margin-bottom: 1rem;
}

.pub-description {
  line-height: 1.6;
}

.future-research {
  margin-top: 3rem;
}

.future-research h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

/* Added styles for header spacing */
.publications.page-section {
  padding-top: 5rem;
  margin-top: -3rem;
  scroll-margin-top: 6rem;
}

@media (min-width: 768px) {
  .pub-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .pub-type {
    align-self: center;
  }
  
  .publications.page-section {
    padding-top: 7rem;
    margin-top: -4rem;
    scroll-margin-top: 7rem;
  }
}

@media (min-width: 1024px) {
  .publications.page-section {
    padding-top: 8rem;
    margin-top: -5rem;
    scroll-margin-top: 8rem;
  }
}
</style>
