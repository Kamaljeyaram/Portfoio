<script setup>
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import { onMounted } from 'vue'

// Hide Vue DevTools toggle message in production
onMounted(() => {
  // Remove any Vue DevTools messages
  const devtoolsToggle = document.querySelector('.__vue-devtools-toggle-button');
  if (devtoolsToggle) {
    devtoolsToggle.style.display = 'none';
  }
  
  // Also check for any other DevTools elements
  setTimeout(() => {
    document.querySelectorAll('[class*="devtools"]').forEach(el => {
      el.style.display = 'none';
    });
  }, 100);
});
</script>

<template>
  <Navbar />
  <div class="container">
    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
  <Footer />
</template>

<style>
/* Add this to your global styles */
main {
  padding-top: 60px; /* Adjust based on your header height */
}

/* This ensures all route pages have proper spacing from the header */
.page-container {
  min-height: 100vh;
  padding-top: 2rem;
}

:root {
  --color-primary: hsla(160, 100%, 37%, 1);
  --color-primary-light: hsla(160, 100%, 37%, 0.2);
  --color-primary-dark: hsl(160, 100%, 25%);
  --color-accent: #ff7e5f;
  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  --box-shadow-hover: 0 10px 15px rgba(0, 0, 0, 0.1);
  --border-radius: 10px;
  --transition-speed: 0.3s;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 5rem 2rem 2rem;
  min-height: 100vh;
}

.section {
  margin: 4rem 0;
  animation: fadeInUp 0.8s ease-out;
}

.card {
  background-color: var(--color-background-soft);
  border-radius: var(--border-radius);
  padding: 1.75rem;
  box-shadow: var(--box-shadow);
  margin-bottom: 1.5rem;
  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  border-left: 3px solid var(--color-primary);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, var(--color-primary-light), transparent);
  opacity: 0;
  transition: opacity var(--transition-speed) ease;
  pointer-events: none;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-hover);
}

.card:hover::before {
  opacity: 0.05;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-primary);
  color: white;
  padding: 0.7rem 1.4rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-speed) ease;
  border: 2px solid var(--color-primary);
  box-shadow: var(--box-shadow);
  position: relative;
  overflow: hidden;
  z-index: 1;
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
  box-shadow: var(--box-shadow-hover);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: white;
}

.grid-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  animation: fadeIn 0.8s ease-out;
}

body.dark-theme {
  --color-background: #121212;
  --color-background-soft: #1e1e1e;
  --color-background-mute: #2c2c2c;
  --color-border: rgba(84, 84, 84, 0.48);
  --color-border-hover: rgba(84, 84, 84, 0.65);
  --color-heading: rgba(235, 235, 235, 1);
  --color-text: rgba(235, 235, 235, 0.64);
  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  --box-shadow-hover: 0 10px 15px rgba(0, 0, 0, 0.3);
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
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

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Hide Vue DevTools elements */
.__vue-devtools-toggle-button,
[class*="devtools"] {
  display: none !important;
}
</style>
