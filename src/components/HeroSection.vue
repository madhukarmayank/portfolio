<template>
  <section id="home" class="hero">
    <div class="hero-bg">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
      <div class="grid-overlay"></div>
    </div>

    <div class="container hero-inner">
      <div class="hero-text">
        <p class="hero-greeting">👋 Hello, I'm</p>
        <h1 class="hero-name">Mayank<br /><span class="gradient-text">Madhukar</span></h1>
        <div class="hero-roles">
          <span class="role-tag" v-for="role in roles" :key="role">{{ role }}</span>
        </div>
        <p class="hero-desc">
          I craft stunning digital experiences — from pixel-perfect websites and bold graphic designs
          to cinematic video edits and rock-solid cybersecurity solutions.
        </p>
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">
            <i class="fas fa-rocket"></i> View My Work
          </a>
          <a href="#contact" class="btn btn-outline">
            <i class="fas fa-paper-plane"></i> Hire Me
          </a>
        </div>
        <div class="hero-stats">
          <div class="stat" v-for="s in stats" :key="s.label">
            <span class="stat-num">{{ s.num }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="avatar-ring">
          <div class="avatar-inner">
            <div class="avatar-initials">MM</div>
          </div>
          <div class="orbit orbit-1">
            <div class="orbit-icon"><i class="fas fa-code"></i></div>
          </div>
          <div class="orbit orbit-2">
            <div class="orbit-icon"><i class="fas fa-palette"></i></div>
          </div>
          <div class="orbit orbit-3">
            <div class="orbit-icon"><i class="fas fa-film"></i></div>
          </div>
          <div class="orbit orbit-4">
            <div class="orbit-icon"><i class="fas fa-shield-alt"></i></div>
          </div>
        </div>
      </div>
    </div>

    <a href="#about" class="scroll-down">
      <i class="fas fa-chevron-down"></i>
    </a>
  </section>
</template>

<script setup>
const roles = ['Web Developer', 'Graphic Designer', 'Video Editor', 'Cyber Security Expert']
const stats = [
  { num: '50+', label: 'Projects Done' },
  { num: '30+', label: 'Happy Clients' },
  { num: '4+', label: 'Years Exp.' },
]
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
}

.blob-1 {
  width: 600px;
  height: 600px;
  background: var(--primary);
  top: -200px;
  right: -100px;
  animation: float 8s ease-in-out infinite;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: var(--secondary);
  bottom: -100px;
  left: -100px;
  animation: float 10s ease-in-out infinite reverse;
}

.grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(108,99,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(108,99,255,0.05) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 60px 24px;
}

.hero-greeting {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 12px;
  animation: fadeInUp 0.6s ease forwards;
}

.hero-name {
  font-family: var(--font-heading);
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 20px;
  animation: fadeInUp 0.7s ease forwards;
}

.hero-roles {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
  animation: fadeInUp 0.8s ease forwards;
}

.role-tag {
  background: rgba(108, 99, 255, 0.15);
  border: 1px solid rgba(108, 99, 255, 0.3);
  color: var(--primary);
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.hero-desc {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.8;
  max-width: 480px;
  margin-bottom: 32px;
  animation: fadeInUp 0.9s ease forwards;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 48px;
  animation: fadeInUp 1s ease forwards;
}

.hero-stats {
  display: flex;
  gap: 40px;
  animation: fadeInUp 1.1s ease forwards;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-num {
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 4px;
}

/* ===== AVATAR ===== */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeInUp 0.8s ease forwards;
}

.avatar-ring {
  position: relative;
  width: 340px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-inner {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse-glow 3s ease-in-out infinite;
  z-index: 2;
}

.avatar-initials {
  font-family: var(--font-heading);
  font-size: 3rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: 2px;
}

.orbit {
  position: absolute;
  border-radius: 50%;
  border: 1px dashed rgba(108, 99, 255, 0.3);
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.orbit-1 { width: 240px; height: 240px; animation: rotate 8s linear infinite; }
.orbit-2 { width: 290px; height: 290px; animation: rotate 12s linear infinite reverse; }
.orbit-3 { width: 330px; height: 330px; animation: rotate 16s linear infinite; }
.orbit-4 { width: 370px; height: 370px; animation: rotate 20s linear infinite reverse; }

.orbit-icon {
  width: 40px;
  height: 40px;
  background: var(--bg-card2);
  border: 1px solid var(--border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 1rem;
  margin-top: -20px;
  animation: rotate 8s linear infinite reverse;
}

.orbit-2 .orbit-icon { animation-duration: 12s; }
.orbit-3 .orbit-icon { animation-duration: 16s; }
.orbit-4 .orbit-icon { animation-duration: 20s; }

/* ===== SCROLL DOWN ===== */
.scroll-down {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: 44px;
  height: 44px;
  border: 2px solid var(--border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  animation: float 2s ease-in-out infinite;
  transition: all 0.3s;
  z-index: 1;
}

.scroll-down:hover {
  border-color: var(--primary);
  color: var(--primary);
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-roles { justify-content: center; }
  .hero-actions { justify-content: center; }
  .hero-stats { justify-content: center; }
  .hero-desc { margin: 0 auto 32px; }
  .hero-visual { display: none; }
}
</style>
