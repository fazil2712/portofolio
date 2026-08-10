# Muhammad Fazil Ataurrahman — Portfolio

A beautiful, interactive personal portfolio website built with pure HTML, CSS, and vanilla JavaScript.  
Fully static — **no build step required**. Deploy anywhere.

---

## 🚀 Quick Start

Open `index.html` in any browser — that's it.

---

## 📸 Adding Project Screenshots

Drop your screenshot files into the `assets/screenshots/` folder with these exact names:

| File | Project |
|------|---------|
| `assets/screenshots/ppip.jpg` | PPIP |
| `assets/screenshots/dnd.jpg` | Project DnD |
| `assets/screenshots/superkos.jpg` | SuperKos |
| `assets/screenshots/tata.jpg` | Tata AI |
| `assets/screenshots/tubesaka.jpg` | TubesAKA |

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`  
> If a file is missing, a styled gradient placeholder is shown automatically.

---

## ✏️ Personalising the Site

### Contact Links
Open `index.html` and find the comment `<!-- ✏️  Update the href values below -->`.  
Update your email, GitHub, and LinkedIn URLs there.

### Profile / CV
Add a link to your CV in `index.html` by updating the `href` of the "Download CV" button (currently points to `#`).

### Colors & Fonts
Design tokens are in the `:root` block at the top of `style.css`.

---

## 🌐 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push the `portfolio/` folder contents to the `main` branch root
3. Go to **Settings → Pages → Source → Deploy from branch → main**

### Vercel
1. Import the repository on [vercel.com](https://vercel.com)
2. Framework preset: **Other** (Static)
3. Root directory: leave as `/` (or point to your folder)
4. Deploy — done!

### Netlify
Drag & drop the `portfolio/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

---

## 📁 File Structure

```
portfolio/
├── index.html                    ← Main HTML (all sections)
├── style.css                     ← All styles & animations
├── script.js                     ← Interactivity (i18n, cards, modal, particles)
├── assets/
│   └── screenshots/
│       ├── ppip.jpg              ← Add your screenshots here
│       ├── dnd.jpg
│       ├── superkos.jpg
│       ├── tata.jpg
│       └── tubesaka.jpg
└── README.md
```

---

## 🛠 Built With

- **HTML5** — Semantic structure, ARIA accessibility
- **Vanilla CSS** — Glassmorphism, CSS custom properties, animations
- **Vanilla JavaScript** — i18n, particle canvas, IntersectionObserver, modal

---

*Muhammad Fazil Ataurrahman — Informatics @ Telkom University Bandung*
