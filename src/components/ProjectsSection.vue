<template>
  <section id="projects" class="section projects-section">
    <div class="container">
      <h2 class="section-title">My Projects</h2>
      <p class="section-subtitle">A selection of my recent work</p>

      <div class="filter-tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="filter-btn"
          :class="{ active: activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <div class="projects-grid">
        <div
          class="project-card card"
          v-for="project in filteredProjects"
          :key="project.title"
          @click="openModal(project)"
        >
          <!-- Thumbnail: real image > gradient fallback -->
          <div class="project-thumb" :style="!project.image ? { background: project.gradient } : {}">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="thumb-img"
            />
            <i v-else :class="project.icon" class="project-thumb-icon"></i>

            <!-- Featured badge -->
            <span v-if="project.featured" class="featured-badge">
              <i class="fas fa-star"></i> Featured
            </span>

            <!-- Hover overlay -->
            <div class="project-overlay">
              <span class="overlay-btn"><i class="fas fa-eye"></i> View Details</span>
            </div>
          </div>

          <div class="project-body">
            <div class="project-meta">
              <div class="project-tags">
                <span class="project-tag" v-for="tag in project.tags.slice(0, 3)" :key="tag">{{ tag }}</span>
              </div>
              <span class="project-year">{{ project.year }}</span>
            </div>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-desc">{{ project.desc }}</p>

            <!-- Quick links -->
            <div class="project-links" @click.stop>
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener"
                class="quick-link"
                title="Live Demo"
              >
                <i class="fas fa-external-link-alt"></i>
              </a>
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener"
                class="quick-link"
                title="GitHub"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                v-if="project.videoUrl"
                :href="project.videoUrl"
                target="_blank"
                rel="noopener"
                class="quick-link"
                title="Watch Video"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="filteredProjects.length === 0" class="empty-state">
        <i class="fas fa-folder-open"></i>
        <p>No projects in this category yet.</p>
      </div>
    </div>

    <!-- Project Detail Modal -->
    <ProjectModal :project="selectedProject" @close="selectedProject = null" />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/projects.js'
import ProjectModal from './ProjectModal.vue'

const tabs = ['All', 'Featured', 'Web Dev', 'Design', 'Video', 'Security']
const activeTab = ref('All')
const selectedProject = ref(null)

const filteredProjects = computed(() => {
  if (activeTab.value === 'All') return projects
  if (activeTab.value === 'Featured') return projects.filter(p => p.featured)
  return projects.filter(p => p.category === activeTab.value)
})

const openModal = (project) => {
  selectedProject.value = project
}
</script>

<style scoped>
.projects-section {
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg-card) 50%, var(--bg) 100%);
}

.filter-tabs {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.filter-btn {
  padding: 10px 24px;
  border-radius: 50px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-muted);
  font-size: 0.88rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* Card */
.project-card {
  overflow: hidden;
  padding: 0;
  cursor: pointer;
}

/* Thumbnail */
.project-thumb {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .thumb-img {
  transform: scale(1.06);
}

.project-thumb-icon {
  font-size: 3rem;
  color: rgba(255,255,255,0.3);
  transition: all 0.3s;
}

.project-card:hover .project-thumb-icon {
  transform: scale(1.15);
  color: rgba(255,255,255,0.15);
}

/* Featured badge */
.featured-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(247, 151, 30, 0.9);
  color: #fff;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 0.72rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 5px;
  backdrop-filter: blur(4px);
}

/* Hover overlay */
.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(108, 99, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-btn {
  padding: 12px 28px;
  background: rgba(255,255,255,0.15);
  border: 2px solid rgba(255,255,255,0.6);
  border-radius: 50px;
  color: #fff;
  font-size: 0.88rem;
  font-weight: 700;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.3px;
}

/* Body */
.project-body {
  padding: 22px 24px 20px;
}

.project-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.project-tag {
  background: rgba(108,99,255,0.12);
  color: var(--primary);
  border: 1px solid rgba(108,99,255,0.25);
  padding: 3px 10px;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 600;
}

.project-year {
  font-size: 0.78rem;
  color: var(--text-muted);
  flex-shrink: 0;
  margin-left: 8px;
}

.project-title {
  font-family: var(--font-heading);
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.project-desc {
  color: var(--text-muted);
  font-size: 0.85rem;
  line-height: 1.7;
  margin-bottom: 16px;
}

/* Quick links */
.project-links {
  display: flex;
  gap: 8px;
}

.quick-link {
  width: 32px;
  height: 32px;
  background: var(--bg-card2);
  border: 1px solid var(--border);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 0.85rem;
  transition: all 0.3s;
}

.quick-link:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 80px 0;
  color: var(--text-muted);
}

.empty-state i {
  font-size: 3rem;
  margin-bottom: 16px;
  display: block;
  opacity: 0.4;
}

@media (max-width: 900px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .projects-grid { grid-template-columns: 1fr; }
}
</style>
