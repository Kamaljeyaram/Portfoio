<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Kamal Jeyaram T</h3>
          <p class="tagline">Computer Science and Engineering (IoT) Student</p>
          <p>Sri Sairam Engineering College</p>
        </div>
        
        <div class="footer-section">
          <h3>Contact</h3>
          <div class="contact-item">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <span>+91 90259 00546</span>
          </div>
          <div class="contact-item">
            <font-awesome-icon icon="fa-solid fa-envelope" />
            <span>kamaljeyaram07@gmail.com</span>
          </div>
          <div class="contact-item">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <span>Chennai, India</span>
          </div>
        </div>
        
        <div class="footer-section">
          <h3>Socials</h3>
          <div class="social-icons">
            <a href="https://www.linkedin.com/in/kamal-jeyaram-109785257/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
            </a>
            <a href="https://github.com/kamaljeyaram" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <font-awesome-icon :icon="['fab', 'github']" size="lg" />
            </a>
          </div>
        </div>
      </div>
      
      <div class="copyright">
        <p>&copy; {{ new Date().getFullYear() }} Kamal Jeyaram T. All Rights Reserved.</p>
        <p class="made-with">Made with <span class="heart">❤</span> using Vue.js</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-background-soft);
  color: var(--color-text);
  margin-top: 6rem;
  padding: 3rem 0 1.5rem;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}

.footer-section h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 1.2rem;
  position: relative;
  display: inline-block;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 3px;
  background-color: var(--color-primary);
  border-radius: 3px;
}

.tagline {
  font-weight: 500;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(5px);
}

.contact-item svg {
  margin-right: 0.8rem;
  color: var(--color-primary);
}

.social-icons {
  display: flex;
  gap: 1.2rem;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: var(--color-background-mute);
  border-radius: 50%;
  color: var(--color-primary);
  transition: all 0.3s ease;
  box-shadow: var(--box-shadow);
}

.social-icons a:hover {
  background: linear-gradient(to right, var(--color-primary), var(--color-accent));
  color: white;
  transform: translateY(-5px);
  box-shadow: var(--box-shadow-hover);
}

.copyright {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
  font-size: 0.95rem;
}

.heart {
  color: #ff5a5f;
  display: inline-block;
  animation: pulse 1s infinite;
  font-size: 1.1rem;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@media (min-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }

  .copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media (min-width: 1024px) {
  .footer-content {
    grid-template-columns: 2fr 1fr 1fr;
  }
}
</style>
