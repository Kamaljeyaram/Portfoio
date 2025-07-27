<script setup>
import SectionHeader from '../components/SectionHeader.vue';

const achievements = [
  {
    title: "Smart India Hackathon 2024",
    position: "Finalist (Top 1%)",
    description: "Selected among top teams in India's largest hackathon, developed an innovative IoT solution for smart agriculture."
  },
  {
    title: "Project Expo",
    position: "1st Runner-up",
    description: "Received recognition for the Smart Aquaponics System project, showcasing innovation in sustainable farming technology."
  },
  {
    title: "Circuit Digest Challenge",
    position: "Top 60",
    description: "Recognized for the Intelligent Hospitalization project that integrated IoT and ML for patient monitoring."
  },
  {
    title: "Solvethon 2023",
    position: "Winner",
    description: "Won first place for developing a novel solution addressing healthcare accessibility challenges in rural areas."
  }
];
</script>

<template>
  <div class="achievements page-section">
    <SectionHeader title="Achievements" />
    
    <div class="achievements-container">
      <div v-for="(achievement, index) in achievements" :key="index" class="achievement-card card">
        <div class="achievement-icon">
          <font-awesome-icon icon="fa-solid fa-trophy" />
        </div>
        <div class="achievement-content">
          <h3>{{ achievement.title }}</h3>
          <p class="achievement-position">{{ achievement.position }}</p>
          <p class="achievement-description">{{ achievement.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.achievements-container {
  max-width: 800px;
  margin: 0 auto;
}

.achievement-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
}

.achievement-icon {
  width: 60px;
  height: 60px;
  background-color: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.achievement-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

.achievement-position {
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 1rem;
}

/* Added styles for header spacing */
.achievements.page-section {
  padding-top: 5rem;
  margin-top: -3rem;
  scroll-margin-top: 6rem;
}

@media (min-width: 768px) {
  .achievement-card {
    flex-direction: row;
    text-align: left;
  }
  
  .achievement-icon {
    margin-bottom: 0;
    margin-right: 1.5rem;
  }
  
  .achievements.page-section {
    padding-top: 7rem;
    margin-top: -4rem;
    scroll-margin-top: 7rem;
  }
}

@media (min-width: 1024px) {
  .achievements.page-section {
    padding-top: 8rem;
    margin-top: -5rem;
    scroll-margin-top: 8rem;
  }
}
</style>
