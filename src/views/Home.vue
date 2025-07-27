<script setup>
import SectionHeader from '../components/SectionHeader.vue';
import { onMounted, ref } from 'vue';

const showAnimation = ref(false);

onMounted(() => {
  setTimeout(() => {
    showAnimation.value = true;
  }, 300);
});
</script>

<template>
  <div class="home">
    <div class="hero" :class="{ 'animate': showAnimation }">
      <div class="hero-content">
        <div class="name-wrapper">
          <h1>Kamal Jeyaram T</h1>
          <div class="name-underline"></div>
        </div>
        <p class="tagline">Computer Science and Engineering (IoT) Student</p>
        <div class="contact-info">
          <div class="contact-item">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <span>+91 90259 00546</span>
          </div>
          <div class="contact-item">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <span>Chennai, India</span>
          </div>
          <div class="contact-item">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <span>kamaljeyaram07@gmail.com</span>
          </div>
        </div>
        <div class="social-links">
          <a href="https://www.linkedin.com/in/kamal-jeyaram-109785257/" target="_blank" rel="noopener noreferrer" class="social-link">
            <font-awesome-icon icon="fa-brands fa-linkedin" />
            <span>linkedin.com/in/kamal-jeyaram</span>
          </a>
          <a href="https://github.com/kamaljeyaram" target="_blank" rel="noopener noreferrer" class="social-link">
            <font-awesome-icon icon="fa-brands fa-github" />
            <span>github.com/kamaljeyaram</span>
          </a>
        </div>
        <a href="/resume.pdf" download class="btn download-resume">
          <font-awesome-icon icon="fa-solid fa-download" />
          Download Resume
        </a>
      </div>
      <div class="hero-image">
        <div class="skill-icon-grid">
          <div class="icon-container" data-skill="Programming">
            <font-awesome-icon icon="fa-solid fa-code" />
          </div>
          <div class="icon-container" data-skill="IoT & Hardware">
            <font-awesome-icon icon="fa-solid fa-microchip" />
          </div>
          <div class="icon-container" data-skill="AI & ML">
            <font-awesome-icon icon="fa-solid fa-robot" />
          </div>
          <div class="icon-container" data-skill="Databases">
            <font-awesome-icon icon="fa-solid fa-database" />
          </div>
        </div>
      </div>
    </div>

    <section class="about section">
      <SectionHeader title="About Me" />
      <div class="about-content">
        <p class="bio">
          Passionate about AI, IoT, and Embedded Systems. I build impactful tech solutions with real-world 
          applications—ranging from healthcare to agriculture and smart industry automation.
        </p>
        <div class="about-details">
          <div class="about-section">
            <h3><font-awesome-icon icon="fa-solid fa-graduation-cap" /> Education</h3>
            <p>B.E. CSE (IoT), Sri Sairam Engineering College</p>
            <RouterLink to="/education" class="about-link">View Education Details →</RouterLink>
          </div>
          <div class="about-section">
            <h3><font-awesome-icon icon="fa-solid fa-code" /> Skills</h3>
            <p>Python, AWS, SQL, IoT, Linux, and more</p>
            <RouterLink to="/skills" class="about-link">View All Skills →</RouterLink>
          </div>
          <div class="about-section">
            <h3><font-awesome-icon icon="fa-solid fa-briefcase" /> Experience</h3>
            <p>Computer Vision Intern @ Aioty Labs</p>
            <RouterLink to="/experience" class="about-link">View Experience →</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;
  opacity: 0;
  transform: translateY(20px);
  padding-top: 1.5rem; /* Added padding to prevent collision with header */
}

.hero.animate {
  animation: fadeInUp 0.8s forwards;
}

.name-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  background: linear-gradient(to right, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.name-underline {
  height: 4px;
  width: 60%;
  background: linear-gradient(to right, var(--color-primary), var(--color-accent));
  border-radius: 2px;
  margin-top: 5px;
}

.tagline {
  font-size: 1.3rem;
  color: var(--color-text);
  margin-bottom: 1.8rem;
  font-weight: 500;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 1.8rem;
  background-color: var(--color-background-soft);
  padding: 1.2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  border-left: 3px solid var(--color-primary);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.contact-item svg {
  color: var(--color-primary);
  font-size: 1.2rem;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-bottom: 2rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem;
  border-radius: var(--border-radius);
  transition: all 0.3s ease;
  background-color: var(--color-background-soft);
  color: var(--color-text);
  box-shadow: var(--box-shadow);
}

.social-link svg {
  color: var(--color-primary);
  font-size: 1.2rem;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: var(--box-shadow-hover);
  background-color: var(--color-primary);
  color: white;
}

.social-link:hover svg {
  color: white;
}

.download-resume {
  margin-top: 1rem;
  animation: pulse 2s infinite;
}

.skill-icon-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 0 auto;
  margin-top: 2rem;
}

.icon-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(84, 230, 175, 0.2), var(--color-background-mute));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid rgba(84, 230, 175, 0.3);
}

.icon-container:hover {
  transform: translateY(-8px);
  box-shadow: var(--box-shadow-hover);
  background: linear-gradient(45deg, rgba(84, 230, 175, 0.3), var(--color-background-mute));
  border-color: var(--color-primary);
}

.icon-container svg {
  font-size: 2.8rem;
  color: var(--color-primary);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
}

/* Add tooltips for the icons */
.icon-container::after {
  content: attr(data-skill);
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-background-soft);
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  white-space: nowrap;
  box-shadow: var(--box-shadow);
  font-weight: 500;
}

.icon-container:hover::after {
  opacity: 1;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05F); }
  100% { transform: scale(1); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bio {
  font-size: 1.2rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 800px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: 1.5rem;
  background-color: var(--color-background-soft);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  position: relative;
  overflow: hidden;
}

.bio::before {
  content: "";
  position: absolute;
  top: -15px;
  left: 10px;
  font-size: 5rem;
  color: var(--color-primary);
  opacity: 0.2;
}

.bio::after {
  content: "";
  position: absolute;
  bottom: -60px;
  right: 10px;
  font-size: 5rem;
  color: var(--color-primary);
  opacity: 0.2;
}

.about-details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.about-section {
  padding: 1.75rem;
  background-color: var(--color-background-soft);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  transition: all 0.3s ease;
  border-top: 3px solid var(--color-primary);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.about-section:hover {
  transform: translateY(-10px);
  box-shadow: var(--box-shadow-hover);
}

.about-section h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-primary);
}

.about-link {
  display: inline-block;
  margin-top: 1.5rem;
  font-weight: 500;
  transition: transform 0.3s ease;
}

.about-link:hover {
  transform: translateX(5px);
}

.section {
  padding-top: 5rem;
  margin-top: -3rem;
  scroll-margin-top: 6rem; /* Increased from 5rem to 6rem for better spacing */
}

@media (min-width: 768px) {
  .hero {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem; /* More padding on larger screens */
  }

  .hero-content {
    flex: 1;
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-details {
    grid-template-columns: repeat(3, 1fr);
  }

  .social-links {
    width: 80%;
  }
  
  .section {
    padding-top: 7rem; /* Increased from 6rem to 7rem */
    margin-top: -4rem;
    scroll-margin-top: 7rem; /* Added explicit value for medium screens */
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 3.2rem;
  }

  .social-links {
    width: 60%;
  }
  
  .section {
    padding-top: 8rem; /* Increased from 7rem to 8rem */
    margin-top: -5rem;
    scroll-margin-top: 8rem; /* Added explicit value for large screens */
  }
}
  .social-links {
    width: 60%;
  }

</style>
