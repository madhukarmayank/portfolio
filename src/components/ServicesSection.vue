<template>
  <section id="services" class="section">
    <div class="container">
      <h2 class="section-title">My Services</h2>
      <p class="section-subtitle">What I can do for you</p>

      <div class="services-grid">
        <div class="service-card card" v-for="service in services" :key="service.title">
          <div class="service-icon" :style="{ background: service.color + '18', color: service.color }">
            <i :class="service.icon"></i>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.desc }}</p>
          <ul class="service-features">
            <li v-for="f in service.features" :key="f">
              <i class="fas fa-check-circle"></i> {{ f }}
            </li>
          </ul>
          <div class="service-footer">
            <span class="service-price">{{ service.price }}</span>
            <a href="#contact" class="btn btn-outline" style="padding: 8px 20px; font-size: 0.82rem;">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Web Development',
    color: '#6c63ff',
    price: 'Starting $200',
    desc: 'Modern, responsive websites and web applications built with the latest technologies.',
    features: [
      'Responsive Design',
      'Vue.js / React Apps',
      'REST API Integration',
      'Performance Optimized',
      'SEO Friendly',
    ],
  },
  {
    icon: 'fas fa-paint-brush',
    title: 'Graphic Design',
    color: '#ff6584',
    price: 'Starting $80',
    desc: 'Eye-catching visuals, brand identities, and creative designs that tell your story.',
    features: [
      'Logo & Brand Identity',
      'Social Media Graphics',
      'UI/UX Design',
      'Print Design',
      'Illustrations',
    ],
  },
  {
    icon: 'fas fa-video',
    title: 'Video Editing',
    color: '#f7971e',
    price: 'Starting $100',
    desc: 'Professional video editing with cinematic effects, color grading, and motion graphics.',
    features: [
      'YouTube / Reels Editing',
      'Color Grading',
      'Motion Graphics',
      'Sound Design',
      'Cinematic Effects',
    ],
  },
  {
    icon: 'fas fa-user-shield',
    title: 'Cyber Security',
    color: '#43e97b',
    price: 'Starting $300',
    desc: 'Comprehensive security audits, penetration testing, and vulnerability assessments.',
    features: [
      'Penetration Testing',
      'Vulnerability Assessment',
      'Network Security Audit',
      'Security Consulting',
      'OSINT Investigation',
    ],
  },
]
</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}

.service-card {
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.service-icon {
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
}

.service-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
}

.service-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.7;
}

.service-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.service-features li {
  font-size: 0.88rem;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 8px;
}

.service-features li i {
  color: var(--accent);
  font-size: 0.8rem;
}

.service-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  padding-top: 20px;
  border-top: 1px solid var(--border);
}

.service-price {
  font-family: var(--font-heading);
  font-weight: 700;
  color: var(--primary);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
