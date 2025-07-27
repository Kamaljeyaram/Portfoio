<template>
  <nav class="navbar" :class="{ 'scrolled': scrolled }">
    <div class="navbar-container">
      <RouterLink to="/" class="logo">
        <span class="logo-text">Kamal Jeyaram T</span>
      </RouterLink>
      
      <div class="nav-toggle" @click="toggleMenu" :class="{ 'active': menuActive }">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      
      <div class="nav-links" :class="{ 'active': menuActive }">
        <RouterLink to="/" @click="closeMenu">
          <font-awesome-icon icon="fa-solid fa-home" /> Home
        </RouterLink>
        <RouterLink to="/education" @click="closeMenu">
          <font-awesome-icon icon="fa-solid fa-graduation-cap" /> Education
        </RouterLink>
        <RouterLink to="/skills" @click="closeMenu">
          <font-awesome-icon icon="fa-solid fa-code" /> Skills
        </RouterLink>
        <RouterLink to="/experience" @click="closeMenu">
          <font-awesome-icon icon="fa-solid fa-briefcase" /> Experience
        </RouterLink>
        <RouterLink to="/projects" @click="closeMenu">
          <font-awesome-icon icon="fa-solid fa-laptop-code" /> Projects
        </RouterLink>
        <RouterLink to="/achievements" @click="closeMenu">
          <font-awesome-icon icon="fa-solid fa-trophy" /> Achievements
        </RouterLink>
        <RouterLink to="/certifications" @click="closeMenu">
          <font-awesome-icon icon="fa-solid fa-certificate" /> Certifications
        </RouterLink>
        <RouterLink to="/publications" @click="closeMenu">
          <font-awesome-icon icon="fa-solid fa-newspaper" /> Publications
        </RouterLink>
        
        <button class="theme-toggle" @click="toggleTheme">
          <font-awesome-icon :icon="isDarkMode ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const menuActive = ref(false)
const isDarkMode = ref(false)
const scrolled = ref(false)

const toggleMenu = () => {
  menuActive.value = !menuActive.value
}

const closeMenu = () => {
  menuActive.value = false
}

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('dark-theme')
  localStorage.setItem('darkMode', isDarkMode.value)
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode') === 'true'
  isDarkMode.value = savedDarkMode
  if (savedDarkMode) {
    document.body.classList.add('dark-theme')
  }
  
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--color-background);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 0.1rem 0; /* Reduced from 0.7rem */
}

.navbar.scrolled {
  background-color: var(--color-background);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 0.3rem 0; /* Reduced from 0.5rem */
  backdrop-filter: blur(10px);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-text {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-heading);
  background: linear-gradient(to right, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001;
}

.bar {
  width: 28px;
  height: 3px;
  background-color: var(--color-text);
  margin: 3px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.nav-toggle.active .bar:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.nav-toggle.active .bar:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active .bar:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-links a {
  position: relative;
  margin-left: 0.5rem;
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.4rem; /* Reduced from 0.5rem */
  padding: 0.4rem 0.6rem; /* Reduced from 0.5rem 0.75rem */
  border-radius: 6px;
  font-size: 0.95rem; /* Added to reduce text size */
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--color-primary);
}

.nav-links a:hover::after,
.nav-links a.router-link-active::after {
  width: 80%;
}

.nav-links a svg {
  font-size: 0.9rem; /* Added to control icon size */
}

.theme-toggle {
  margin-left: 1.5rem;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background-mute);
}

.theme-toggle:hover {
  color: var(--color-primary);
  transform: rotate(30deg);
}

@media (max-width: 1023px) {
  .nav-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 250px;
    flex-direction: column;
    background-color: var(--color-background);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    padding: 5rem 1.5rem 1.5rem;
    align-items: flex-start;
    transform: translateX(100%);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1000;
  }

  .nav-links.active {
    transform: translateX(0);
    opacity: 1;
  }

  .nav-links a {
    margin: 0.5rem 0;
    width: 100%;
  }
  
  .nav-links a::after {
    display: none;
  }
  
  .theme-toggle {
    margin: 1rem 0;
  }
}
</style>
