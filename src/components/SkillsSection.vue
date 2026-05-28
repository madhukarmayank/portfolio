<template>
  <section id="skills" class="section skills-section">
    <div class="container">
      <h2 class="section-title">My Skills</h2>
      <p class="section-subtitle">Technologies and tools I work with</p>

      <div class="skills-categories">
        <div
          class="skill-category card"
          v-for="cat in categories"
          :key="cat.title"
        >
          <div class="cat-header">
            <div class="cat-icon" :style="{ background: cat.color + '22', color: cat.color }">
              <i :class="cat.icon"></i>
            </div>
            <h3 class="cat-title">{{ cat.title }}</h3>
          </div>

          <div class="skill-list">
            <div class="skill-item" v-for="skill in cat.skills" :key="skill.name">
              <div class="skill-top">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-pct">{{ skill.pct }}%</span>
              </div>
              <div class="skill-bar">
                <div
                  class="skill-fill"
                  :style="{ width: skill.pct + '%', background: cat.color }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tools-section">
        <h3 class="tools-title">Tools & Technologies</h3>
        <div class="tools-grid">
          <div class="tool-badge" v-for="tool in tools" :key="tool">{{ tool }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  {
    title: 'Web Development',
    icon: 'fas fa-code',
    color: '#6c63ff',
    skills: [
      { name: 'HTML / CSS', pct: 95 },
      { name: 'JavaScript', pct: 88 },
      { name: 'Vue.js', pct: 85 },
      { name: 'React.js', pct: 80 },
      { name: 'Node.js', pct: 75 },
    ],
  },
  {
    title: 'Graphic Design',
    icon: 'fas fa-palette',
    color: '#ff6584',
    skills: [
      { name: 'Adobe Photoshop', pct: 92 },
      { name: 'Adobe Illustrator', pct: 88 },
      { name: 'Figma', pct: 90 },
      { name: 'UI/UX Design', pct: 85 },
      { name: 'Brand Identity', pct: 82 },
    ],
  },
  {
    title: 'Video Editing',
    icon: 'fas fa-film',
    color: '#f7971e',
    skills: [
      { name: 'Adobe Premiere Pro', pct: 90 },
      { name: 'After Effects', pct: 85 },
      { name: 'DaVinci Resolve', pct: 80 },
      { name: 'Motion Graphics', pct: 78 },
      { name: 'Color Grading', pct: 82 },
    ],
  },
  {
    title: 'Cyber Security',
    icon: 'fas fa-shield-alt',
    color: '#43e97b',
    skills: [
      { name: 'Network Security', pct: 88 },
      { name: 'Ethical Hacking', pct: 85 },
      { name: 'Penetration Testing', pct: 82 },
      { name: 'OSINT', pct: 80 },
      { name: 'Malware Analysis', pct: 75 },
    ],
  },
]

const tools = [
  'VS Code', 'Git', 'GitHub', 'Linux', 'Kali Linux', 'Wireshark',
  'Burp Suite', 'Metasploit', 'Figma', 'Adobe CC', 'Premiere Pro',
  'After Effects', 'Photoshop', 'Illustrator', 'Vue.js', 'React',
  'Node.js', 'MongoDB', 'MySQL', 'Docker',
]
</script>

<style scoped>
.skills-section {
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg-card) 50%, var(--bg) 100%);
}

.skills-categories {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  margin-bottom: 60px;
}

.skill-category {
  padding: 32px;
}

.cat-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}

.cat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.cat-title {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  font-weight: 600;
}

.skill-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skill-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.skill-name {
  font-size: 0.88rem;
  font-weight: 500;
}

.skill-pct {
  font-size: 0.82rem;
  color: var(--text-muted);
}

.skill-bar {
  height: 6px;
  background: rgba(255,255,255,0.08);
  border-radius: 3px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 1s ease;
}

/* Tools */
.tools-title {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 24px;
  color: var(--text-muted);
}

.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.tool-badge {
  background: var(--bg-card2);
  border: 1px solid var(--border);
  color: var(--text-muted);
  padding: 8px 18px;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 500;
  transition: all 0.3s;
  cursor: default;
}

.tool-badge:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: rgba(108,99,255,0.1);
}

@media (max-width: 768px) {
  .skills-categories {
    grid-template-columns: 1fr;
  }
}
</style>
