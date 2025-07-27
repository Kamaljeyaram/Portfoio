<script setup>
import SectionHeader from '../components/SectionHeader.vue';

const certifications = [
  {
    title: "Cisco Netacad - Python",
    issuer: "Cisco",
    date: "2023",
    description: "Comprehensive Python programming course covering fundamentals to advanced concepts."
  },
  {
    title: "Cisco Netacad - Networks (CCNA Modules 1-3)",
    issuer: "Cisco",
    date: "2023",
    description: "In-depth network fundamentals, routing, and switching technologies training."
  },
  {
    title: "NPTEL Cloud Computing",
    issuer: "NPTEL",
    date: "2024",
    description: "Top 10% scorer in this comprehensive cloud computing course covering major platforms and services."
  }
];
</script>

<template>
  <div class="certifications page-section">
    <SectionHeader title="Certifications" />
    
    <div class="certifications-container">
      <div v-for="(cert, index) in certifications" :key="index" class="certification-card card">
        <div class="cert-icon">
          <!-- Replace font-awesome-icon with a simple icon representation -->
          <div class="certificate-badge">
            <span class="badge-text">C</span>
          </div>
        </div>
        <div class="cert-content">
          <h3>{{ cert.title }}</h3>
          <div class="cert-details">
            <span class="cert-issuer">{{ cert.issuer }}</span>
            <span class="cert-date">{{ cert.date }}</span>
          </div>
          <p class="cert-description">{{ cert.description }}</p>
        </div>
      </div>
    </div>
    
    <div class="additional-certs">
      <h3>Continuous Learning</h3>
      <p>I'm constantly expanding my knowledge through online courses and certifications. These represent some of my formal achievements in technology education.</p>
    </div>
  </div>
</template>

<style scoped>
.certifications-container {
  max-width: 800px;
  margin: 0 auto 3rem;
}

.certification-card {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.certification-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background-color: var(--color-primary);
}

.certification-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.1);
}

.cert-icon {
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.certificate-badge {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cert-content {
  flex: 1;
}

.cert-content h3 {
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: var(--color-heading);
  position: relative;
  display: inline-block;
}

.cert-content h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 40px;
  height: 3px;
  background-color: var(--color-primary);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.certification-card:hover .cert-content h3::after {
  width: 100%;
}

.cert-details {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 0.25rem;
}

.cert-issuer {
  font-weight: 600;
  color: var(--color-primary);
}

.cert-date {
  font-style: italic;
  opacity: 0.8;
}

.cert-description {
  line-height: 1.6;
}

.additional-certs {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  background-color: var(--color-background-soft);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.additional-certs h3 {
  margin-bottom: 1rem;
  color: var(--color-primary);
  font-size: 1.4rem;
}

.additional-certs p {
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* Added styles for header spacing */
.certifications.page-section {
  padding-top: 5rem;
  margin-top: -3rem;
  scroll-margin-top: 6rem;
}

@media (min-width: 768px) {
  .cert-details {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .certification-card {
    padding: 2rem;
  }
  
  .certifications.page-section {
    padding-top: 7rem;
    margin-top: -4rem;
    scroll-margin-top: 7rem;
  }
}

@media (min-width: 1024px) {
  .certifications.page-section {
    padding-top: 8rem;
    margin-top: -5rem;
    scroll-margin-top: 8rem;
  }
}
</style>
