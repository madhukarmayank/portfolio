/**
 * ============================================================
 *  MAYANK'S PROJECTS DATA FILE
 *  Add / edit / remove your projects here.
 *  Each project supports:
 *    title      – project name
 *    desc       – short description shown on the card
 *    longDesc   – full description shown in the detail modal
 *    category   – 'Web Dev' | 'Design' | 'Video' | 'Security'
 *    tags       – array of tech/tool labels
 *    icon       – Font Awesome class (used when no image)
 *    gradient   – CSS gradient for the card thumbnail background
 *    image      – (optional) path to your image, e.g. '/projects/myapp.png'
 *                 Put images inside  public/projects/  folder
 *    liveUrl    – (optional) link to live demo / deployed site
 *    githubUrl  – (optional) link to GitHub repo
 *    videoUrl   – (optional) YouTube / Vimeo embed URL for video projects
 *    featured   – true = shown in "Featured" tab
 *    year       – year completed
 * ============================================================
 */

export const projects = [
  // ── WEB DEVELOPMENT ──────────────────────────────────────
  {
    title: 'E-Commerce Platform',
    desc: 'Full-stack online store with Vue.js frontend, Node.js backend, and payment integration.',
    longDesc:
      'A complete e-commerce solution featuring product listings, cart management, Stripe payment integration, admin dashboard, and order tracking. Built with Vue 3, Node.js, Express, and MongoDB.',
    category: 'Web Dev',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    icon: 'fas fa-shopping-cart',
    gradient: 'linear-gradient(135deg, #6c63ff, #3f3d56)',
    image: '',           // e.g. '/projects/ecommerce.png'
    liveUrl: '',         // e.g. 'https://mystore.com'
    githubUrl: '',       // e.g. 'https://github.com/mayank/ecommerce'
    videoUrl: '',
    featured: true,
    year: 2024,
  },
  {
    title: 'Portfolio Website',
    desc: 'Responsive personal portfolio built with Vue.js featuring smooth animations and dark theme.',
    longDesc:
      'A modern portfolio site built from scratch using Vue 3 and Vite. Features include animated hero section, filterable project gallery, contact form, and full mobile responsiveness.',
    category: 'Web Dev',
    tags: ['Vue.js', 'CSS3', 'Vite'],
    icon: 'fas fa-globe',
    gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    image: '',
    liveUrl: '',
    githubUrl: '',
    videoUrl: '',
    featured: true,
    year: 2025,
  },

  // ── GRAPHIC DESIGN ───────────────────────────────────────
  {
    title: 'Brand Identity — TechCo',
    desc: 'Complete brand identity design including logo, color palette, typography, and brand guidelines.',
    longDesc:
      'Designed a full brand identity for a tech startup — logo design, color system, typography scale, business cards, letterhead, and a 20-page brand guidelines document.',
    category: 'Design',
    tags: ['Illustrator', 'Branding', 'Logo', 'Figma'],
    icon: 'fas fa-layer-group',
    gradient: 'linear-gradient(135deg, #ff6584, #c94b6e)',
    image: '',
    liveUrl: '',
    githubUrl: '',
    videoUrl: '',
    featured: true,
    year: 2024,
  },
  {
    title: 'Social Media Kit',
    desc: 'Complete social media design kit with 50+ templates for Instagram, Twitter, and LinkedIn.',
    longDesc:
      'A comprehensive social media design system with 50+ editable templates covering posts, stories, banners, and profile assets. Delivered in Figma and Photoshop formats.',
    category: 'Design',
    tags: ['Photoshop', 'Figma', 'UI'],
    icon: 'fas fa-images',
    gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
    image: '',
    liveUrl: '',
    githubUrl: '',
    videoUrl: '',
    featured: false,
    year: 2024,
  },

  // ── VIDEO EDITING ─────────────────────────────────────────
  {
    title: 'YouTube Channel Reel',
    desc: 'Cinematic intro and promotional reel with motion graphics and professional color grading.',
    longDesc:
      'Created a 60-second cinematic channel trailer with custom motion graphics, sound design, and professional color grading. Delivered in 4K resolution.',
    category: 'Video',
    tags: ['Premiere Pro', 'After Effects', 'Color Grading'],
    icon: 'fas fa-play-circle',
    gradient: 'linear-gradient(135deg, #f7971e, #ffd200)',
    image: '',
    liveUrl: '',
    githubUrl: '',
    videoUrl: '',        // e.g. 'https://www.youtube.com/embed/VIDEO_ID'
    featured: true,
    year: 2024,
  },
  {
    title: 'Product Launch Video',
    desc: 'High-energy product launch video with 3D text animations and dynamic transitions.',
    longDesc:
      'A 2-minute product launch video featuring 3D text reveals, particle effects, dynamic transitions, and a custom soundtrack mix. Used for a client\'s social media campaign.',
    category: 'Video',
    tags: ['After Effects', 'Premiere Pro', 'Motion Graphics'],
    icon: 'fas fa-film',
    gradient: 'linear-gradient(135deg, #fd7043, #ff8a65)',
    image: '',
    liveUrl: '',
    githubUrl: '',
    videoUrl: '',
    featured: false,
    year: 2023,
  },

  // ── CYBER SECURITY ────────────────────────────────────────
  {
    title: 'Network Pentest Report',
    desc: 'Full penetration testing engagement for a mid-size company — identified 12 critical vulnerabilities.',
    longDesc:
      'Conducted a full black-box penetration test on a corporate network. Identified 12 critical and 8 high-severity vulnerabilities including misconfigured services, weak credentials, and unpatched CVEs. Delivered a detailed remediation report.',
    category: 'Security',
    tags: ['Kali Linux', 'Metasploit', 'OSINT', 'Nmap'],
    icon: 'fas fa-bug',
    gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    image: '',
    liveUrl: '',
    githubUrl: '',
    videoUrl: '',
    featured: true,
    year: 2024,
  },
  {
    title: 'Web App Security Audit',
    desc: 'Comprehensive OWASP Top 10 audit for a fintech web application with detailed remediation plan.',
    longDesc:
      'Performed a thorough OWASP Top 10 security audit on a fintech web application. Found SQL injection, XSS, and broken authentication issues. Provided a step-by-step remediation guide and re-tested after fixes.',
    category: 'Security',
    tags: ['Burp Suite', 'OWASP', 'Nmap', 'SQLMap'],
    icon: 'fas fa-lock',
    gradient: 'linear-gradient(135deg, #11998e, #38ef7d)',
    image: '',
    liveUrl: '',
    githubUrl: '',
    videoUrl: '',
    featured: false,
    year: 2023,
  },
]
