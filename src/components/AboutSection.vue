<template>
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <p class="section-subtitle">A passionate multi-disciplinary creative & tech expert</p>

      <div class="about-grid">
        <div class="about-card card">
          <div class="about-avatar">
            <div class="about-initials">MM</div>
            <div class="about-badge"><i class="fas fa-check"></i> Available for Work</div>
          </div>
        </div>

        <div class="about-content">
          <h3 class="about-heading">Hi, I'm <span class="gradient-text">Mayank Madhukar</span></h3>
          <p class="about-text">
            I'm a versatile digital professional with expertise spanning web development,
            graphic design, video editing, and cybersecurity. I bring ideas to life through
            clean code, compelling visuals, and secure digital solutions.
          </p>
          <p class="about-text">
            Whether it's building a responsive web app, designing a brand identity,
            cutting a cinematic reel, or securing a network — I deliver quality work
            that makes an impact.
          </p>

          <div class="about-info">
            <div class="info-item" v-for="item in info" :key="item.label">
              <i :class="item.icon"></i>
              <div>
                <span class="info-label">{{ item.label }}</span>
                <span class="info-value">{{ item.value }}</span>
              </div>
            </div>
          </div>

          <a href="#contact" class="btn btn-primary" style="margin-top: 32px; display: inline-flex;">
            <i class="fas fa-download"></i> Get In Touch
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const info = [
  { icon: 'fas fa-user', label: 'Name', value: 'Mayank Madhukar' },
  { icon: 'fas fa-briefcase', label: 'Role', value: 'Web Dev · Designer · Video Editor · Cyber Expert' },
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'India' },
  { icon: 'fas fa-envelope', label: 'Email', value: 'mayank@example.com' },
  { icon: 'fas fa-circle', label: 'Status', value: 'Available for Freelance' },
]
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 48px;
  align-items: start;
}

.about-card {
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}

.about-avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.about-initials {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 800;
  color: #fff;
  animation: pulse-glow 3s ease-in-out infinite;
}

.about-badge {
  background: rgba(67, 233, 123, 0.15);
  border: 1px solid rgba(67, 233, 123, 0.3);
  color: var(--accent);
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
}

.about-content {
  padding: 8px 0;
}

.about-heading {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.about-text {
  color: var(--text-muted);
  line-height: 1.9;
  margin-bottom: 16px;
}

.about-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 28px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
}

.info-item i {
  color: var(--primary);
  margin-top: 3px;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.info-label {
  display: block;
  font-size: 0.72rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.info-value {
  display: block;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--text);
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .about-info {
    grid-template-columns: 1fr;
  }
}
</style>
