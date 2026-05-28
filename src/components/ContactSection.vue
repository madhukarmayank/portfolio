<template>
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <p class="section-subtitle">Have a project in mind? Let's work together!</p>

      <div class="contact-grid">
        <!-- Info -->
        <div class="contact-info">
          <h3 class="contact-heading">Let's build something <span class="gradient-text">amazing</span> together</h3>
          <p class="contact-text">
            I'm always open to new opportunities, collaborations, and exciting projects.
            Whether you need a website, a design, a video, or a security audit — I've got you covered.
          </p>

          <div class="contact-items">
            <a href="mailto:mayank@example.com" class="contact-item">
              <div class="ci-icon"><i class="fas fa-envelope"></i></div>
              <div>
                <span class="ci-label">Email</span>
                <span class="ci-value">mayank@example.com</span>
              </div>
            </a>
            <a href="#" class="contact-item">
              <div class="ci-icon"><i class="fab fa-linkedin"></i></div>
              <div>
                <span class="ci-label">LinkedIn</span>
                <span class="ci-value">linkedin.com/in/mayank-madhukar</span>
              </div>
            </a>
            <a href="#" class="contact-item">
              <div class="ci-icon"><i class="fab fa-github"></i></div>
              <div>
                <span class="ci-label">GitHub</span>
                <span class="ci-value">github.com/mayank-madhukar</span>
              </div>
            </a>
            <a href="#" class="contact-item">
              <div class="ci-icon"><i class="fab fa-instagram"></i></div>
              <div>
                <span class="ci-label">Instagram</span>
                <span class="ci-value">@mayank.madhukar</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Form -->
        <div class="contact-form card">
          <form @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label>Your Name</label>
                <input v-model="form.name" type="text" placeholder="John Doe" required />
              </div>
              <div class="form-group">
                <label>Your Email</label>
                <input v-model="form.email" type="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div class="form-group">
              <label>Subject</label>
              <input v-model="form.subject" type="text" placeholder="Project Inquiry" required />
            </div>
            <div class="form-group">
              <label>Service Needed</label>
              <select v-model="form.service">
                <option value="">Select a service</option>
                <option>Web Development</option>
                <option>Graphic Design</option>
                <option>Video Editing</option>
                <option>Cyber Security</option>
                <option>Multiple Services</option>
              </select>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea v-model="form.message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary submit-btn" :disabled="submitted">
              <i class="fas" :class="submitted ? 'fa-check' : 'fa-paper-plane'"></i>
              {{ submitted ? 'Message Sent!' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const submitted = ref(false)
const form = reactive({
  name: '',
  email: '',
  subject: '',
  service: '',
  message: '',
})

const handleSubmit = () => {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    Object.keys(form).forEach(k => (form[k] = ''))
  }, 3000)
}
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 48px;
  align-items: start;
}

.contact-heading {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 16px;
}

.contact-text {
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 36px;
}

.contact-items {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: all 0.3s;
}

.contact-item:hover {
  border-color: var(--primary);
  transform: translateX(4px);
}

.ci-icon {
  width: 44px;
  height: 44px;
  background: rgba(108,99,255,0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  font-size: 1.1rem;
  flex-shrink: 0;
}

.ci-label {
  display: block;
  font-size: 0.72rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.ci-value {
  display: block;
  font-size: 0.88rem;
  font-weight: 500;
}

/* Form */
.contact-form {
  padding: 40px 36px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-muted);
}

.form-group input,
.form-group select,
.form-group textarea {
  background: var(--bg-card2);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 12px 16px;
  color: var(--text);
  font-family: var(--font-main);
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.3s;
  resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--primary);
}

.form-group select option {
  background: var(--bg-card);
}

.submit-btn {
  width: 100%;
  justify-content: center;
  font-size: 1rem;
  padding: 16px;
}

.submit-btn:disabled {
  background: linear-gradient(135deg, var(--accent), #38f9d7);
  cursor: default;
  transform: none;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
