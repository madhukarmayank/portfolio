<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="logo">
          <span class="logo-bracket">&lt;</span>MM<span class="logo-bracket">/&gt;</span>
        </span>
        <p>Mayank Madhukar — Web Developer, Graphic Designer, Video Editor & Cyber Security Expert.</p>
      </div>

      <div class="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div class="footer-socials">
        <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© {{ year }} Mayank Madhukar. Crafted with <span style="color: var(--secondary)">♥</span> using Vue.js</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  padding: 60px 0 0;
}

.footer-inner {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 40px;
  align-items: start;
  padding-bottom: 48px;
}

.footer-brand .logo {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
  display: block;
  margin-bottom: 12px;
}

.logo-bracket {
  color: var(--primary);
}

.footer-brand p {
  color: var(--text-muted);
  font-size: 0.88rem;
  line-height: 1.7;
  max-width: 280px;
}

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
}

.footer-links a {
  color: var(--text-muted);
  font-size: 0.88rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--primary);
}

.footer-socials {
  display: flex;
  gap: 12px;
}

.footer-socials a {
  width: 40px;
  height: 40px;
  background: var(--bg-card2);
  border: 1px solid var(--border);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 1rem;
  transition: all 0.3s;
}

.footer-socials a:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
  transform: translateY(-2px);
}

.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 20px 24px;
  text-align: center;
}

.footer-bottom p {
  color: var(--text-muted);
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
