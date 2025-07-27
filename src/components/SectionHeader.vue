<template>
  <div class="section-header">
    <h2>{{ title }}</h2>
    <div class="underline"></div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.section-header {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeIn 0.8s ease-out;
}

h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-heading);
  margin-bottom: 0.8rem;
  position: relative;
  display: inline-block;
  background: linear-gradient(to right, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.underline {
  height: 4px;
  width: 80px;
  background: linear-gradient(to right, var(--color-primary), var(--color-accent));
  margin: 0 auto;
  border-radius: 2px;
  animation: expandWidth 1s ease-out forwards;
}

@keyframes expandWidth {
  from { width: 0; }
  to { width: 80px; }
}

@media (min-width: 768px) {
  h2 {
    font-size: 2.8rem;
  }
  
  .underline {
    width: 100px;
  }
  
  @keyframes expandWidth {
    from { width: 0; }
    to { width: 100px; }
  }
}
</style>
