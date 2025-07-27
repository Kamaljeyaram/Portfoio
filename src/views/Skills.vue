<script setup>
import SectionHeader from '../components/SectionHeader.vue';
import { ref, onMounted } from 'vue';

const technicalSkills = [
  { name: 'Python', level: 90 },
  { name: 'AWS', level: 80 },
  { name: 'SQL', level: 85 },
  { name: 'IoT', level: 95 },
  { name: 'Linux', level: 75 }
];

const toolsSkills = [
  { name: 'Git', level: 85 },
  { name: 'VS Code', level: 90 },
  { name: 'Arduino IDE', level: 95 },
  { name: 'MySQL', level: 80 }
];

const isIntersecting = ref(false);
const additionalSkillsVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isIntersecting.value = true;
      }
    });
  }, { threshold: 0.1 });
  
  const additionalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        additionalSkillsVisible.value = true;
      }
    });
  }, { threshold: 0.1 });

  const skillsContainer = document.querySelector('.skills-container');
  const additionalSkills = document.querySelector('.additional-skills');
  
  if (skillsContainer) observer.observe(skillsContainer);
  if (additionalSkills) additionalObserver.observe(additionalSkills);
});
</script>

<template>
  <div class="skills page-section">
    <SectionHeader title="Skills" />
    
    <div class="skills-container" :class="{ 'visible': isIntersecting }">
      <div class="skills-category">
        <h3>
          <font-awesome-icon icon="fa-solid fa-code" />
          Technical Skills
        </h3>
        <div class="skills-list">
          <div v-for="(skill, index) in technicalSkills" :key="skill.name" class="skill-item" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: isIntersecting ? `${skill.level}%` : '0%' }"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="skills-category">
        <h3>
          <font-awesome-icon icon="fa-solid fa-laptop-code" />
          Tools & Platforms
        </h3>
        <div class="skills-list">
          <div v-for="(skill, index) in toolsSkills" :key="skill.name" class="skill-item" :style="{ animationDelay: `${index * 0.1 + 0.5}s` }">
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: isIntersecting ? `${skill.level}%` : '0%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="additional-skills" :class="{ 'visible': additionalSkillsVisible }">
      <h3>Additional Skills</h3>
      <div class="skill-tags">
        <span class="skill-tag">Machine Learning</span>
        <span class="skill-tag">Computer Vision</span>
        <span class="skill-tag">Embedded Systems</span>
        <span class="skill-tag">Raspberry Pi</span>
        <span class="skill-tag">Arduino</span>
        <span class="skill-tag">Sensor Integration</span>
        <span class="skill-tag">Cloud Computing</span>
        <span class="skill-tag">Data Analysis</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skills-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.skills-container.visible {
  opacity: 1;
  transform: translateY(0);
}

.skills-category {
  background-color: var(--color-background-soft);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 3px solid var(--color-primary);
}

.skills-category:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-hover);
}

.skills-category h3 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.4rem;
  margin-bottom: 1.8rem;
  color: var(--color-primary);
  position: relative;
}

.skills-category h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: var(--color-primary);
  border-radius: 3px;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

.skill-item {
  width: 100%;
  animation: fadeInRight 0.5s ease both;
  animation-play-state: paused;
}

.skills-container.visible .skill-item {
  animation-play-state: running;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.7rem;
}

.skill-name {
  font-weight: 600;
  font-size: 1.05rem;
}

.skill-level {
  font-weight: 600;
  color: var(--color-primary);
}

.skill-bar {
  height: 12px;
  background-color: var(--color-background-mute);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

.skill-progress {
  height: 100%;
  background: linear-gradient(to right, var(--color-primary), var(--color-accent));
  border-radius: 6px;
  transition: width 1.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  position: relative;
  overflow: hidden;
}

.skill-progress::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: translateX(-100%);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  100% { transform: translateX(100%); }
}

.additional-skills {
  margin-top: 4rem;
  padding: 2rem;
  background-color: var(--color-background-soft);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease 0.2s;
  border-left: 3px solid var(--color-primary);
}

.additional-skills.visible {
  opacity: 1;
  transform: translateY(0);
}

.additional-skills h3 {
  font-size: 1.4rem;
  margin-bottom: 1.8rem;
  text-align: center;
  color: var(--color-primary);
  position: relative;
}

.additional-skills h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: var(--color-primary);
  border-radius: 3px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.skill-tag {
  background-color: var(--color-background-mute);
  color: var(--color-text);
  padding: 0.7rem 1.2rem;
  border-radius: 30px;
  font-weight: 500;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.skill-tag:hover {
  background-color: var(--color-primary);
  color: white;
  transform: translateY(-5px) scale(1.05);
  box-shadow: var(--box-shadow-hover);
  border-left: 3px solid var(--color-accent);
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (min-width: 768px) {
  .skills-container {
    flex-direction: row;
    gap: 2.5rem;
  }
  
  .skills-category {
    flex: 1;
  }
  
  .skills.page-section {
    padding-top: 7rem;
    margin-top: -4rem;
    scroll-margin-top: 7rem;
  }
}

@media (min-width: 1024px) {
  .skills.page-section {
    padding-top: 8rem;
    margin-top: -5rem;
    scroll-margin-top: 8rem;
  }
}
</style>
