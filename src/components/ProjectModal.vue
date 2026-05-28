<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="project" class="modal-backdrop" @click.self="$emit('close')">
        <div class="modal-box" role="dialog" aria-modal="true">

          <!-- Close -->
          <button class="modal-close" @click="$emit('close')" aria-label="Close">
            <i class="fas fa-times"></i>
          </button>

          <!-- Thumbnail / Image / Video -->
          <div class="modal-media">
            <!-- YouTube / Vimeo embed -->
            <iframe
              v-if="project.videoUrl"
              :src="project.videoUrl"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
              class="modal-video"
            ></iframe>

            <!-- Real image -->
            <img
              v-else-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="modal-img"
            />

            <!-- Fallback gradient -->
            <div
              v-else
              class="modal-thumb"
              :style="{ background: project.gradient }"
            >
              <i :class="project.icon" class="modal-thumb-icon"></i>
            </div>
          </div>

          <!-- Content -->
          <div class="modal-content">
            <div class="modal-meta">
              <span class="modal-category">{{ project.category }}</span>
              <span class="modal-year">{{ project.year }}</span>
            </div>

            <h2 class="modal-title">{{ project.title }}</h2>
            <p class="modal-desc">{{ project.longDesc || project.desc }}</p>

            <!-- Tags -->
            <div class="modal-tags">
              <span class="project-tag" v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>

            <!-- Action buttons -->
            <div class="modal-actions">
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener"
                class="btn btn-primary"
              >
                <i class="fas fa-external-link-alt"></i> Live Demo
              </a>
              <a
                v-if="project.githubUrl"
                :href="project.githubUrl"
                target="_blank"
                rel="noopener"
                class="btn btn-outline"
              >
                <i class="fab fa-github"></i> View Code
              </a>
              <span v-if="!project.liveUrl && !project.githubUrl" class="no-links">
                <i class="fas fa-lock"></i> Links coming soon
              </span>
            </div>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  project: { type: Object, default: null },
})
defineEmits(['close'])

// Close on Escape key
const onKey = (e) => { if (e.key === 'Escape') props.project && document.dispatchEvent(new CustomEvent('close-modal')) }
onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modal-box {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 20px;
  width: 100%;
  max-width: 700px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  scrollbar-width: thin;
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  background: rgba(255,255,255,0.08);
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text-muted);
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  z-index: 10;
}

.modal-close:hover {
  background: var(--secondary);
  border-color: var(--secondary);
  color: #fff;
}

/* Media area */
.modal-media {
  width: 100%;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
}

.modal-video {
  width: 100%;
  aspect-ratio: 16/9;
  display: block;
}

.modal-img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  display: block;
}

.modal-thumb {
  width: 100%;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-thumb-icon {
  font-size: 5rem;
  color: rgba(255,255,255,0.25);
}

/* Content */
.modal-content {
  padding: 32px;
}

.modal-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.modal-category {
  background: rgba(108,99,255,0.15);
  border: 1px solid rgba(108,99,255,0.3);
  color: var(--primary);
  padding: 4px 14px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.modal-year {
  color: var(--text-muted);
  font-size: 0.85rem;
}

.modal-title {
  font-family: var(--font-heading);
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.modal-desc {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 24px;
}

.modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 28px;
}

.project-tag {
  background: rgba(108,99,255,0.12);
  color: var(--primary);
  border: 1px solid rgba(108,99,255,0.25);
  padding: 5px 14px;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 600;
}

.modal-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.no-links {
  color: var(--text-muted);
  font-size: 0.88rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Transition */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-box,
.modal-leave-to .modal-box {
  transform: scale(0.92) translateY(20px);
}

.modal-enter-to .modal-box,
.modal-leave-from .modal-box {
  transform: scale(1) translateY(0);
}
</style>
