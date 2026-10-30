// Project Data
const projects = [
    {
        id: 'ppip',
        icon: 'PPIP',
        gradient: 'linear-gradient(135deg,#1e3a8a,#3730a3)',
        liveUrl: 'https://gdpp.me',
        githubUrl: 'https://github.com/fazil2712/cutidinas',
        tech: ['Java 21','Spring Boot 4','Thymeleaf','Spring Security','MySQL','MariaDB','Redis','Azure Blob','Apache POI','PDFBox'],
        screenshots: ['../assets/screenshots/ppip.jpeg'],
        en: {
            name: 'PPIP',
            shortDesc: 'Enterprise ISO 31000 risk management, secure document catalog, and absence system deployed at gdpp.me.',
            desc: 'An enterprise web application built for a company that consolidates three key systems: ISO 31000-compliant risk management, a secure document catalog allowing staff to view, share, and download company files, and a comprehensive module for managing employee absences and business trips.',
            features: ['ISO 31000 Risk Management','Document Catalog (View / Share / Download)','Absence Management System','Business Trip Management','Role-Based Access Control','Azure Blob Storage Integration','Redis Caching Layer','PDF & Excel Export']
        },
        id_lang: {
            name: 'PPIP',
            shortDesc: 'Manajemen risiko ISO 31000 enterprise, katalog dokumen aman, dan sistem absen yang di-deploy di gdpp.me.',
            desc: 'Aplikasi web enterprise yang dibangun untuk sebuah perusahaan yang mengkonsolidasikan tiga sistem utama: manajemen risiko sesuai ISO 31000, katalog dokumen aman yang memungkinkan staf melihat, berbagi, dan mengunduh berkas perusahaan, serta modul komprehensif untuk mengelola absen karyawan dan perjalanan dinas.',
            features: ['Manajemen Risiko ISO 31000','Katalog Dokumen (Lihat / Bagikan / Unduh)','Sistem Manajemen Absen','Manajemen Perjalanan Dinas','Kontrol Akses Berbasis Peran','Integrasi Azure Blob Storage','Layer Redis Caching','Ekspor PDF & Excel']
        }
    },
    {
        id: 'dnd',
        icon: 'DND',
        gradient: 'linear-gradient(135deg,#3b0764,#6d28d9)',
        liveUrl: null,
        githubUrl: 'https://github.com/fazil2712/projectdnd',
        tech: ['Go','HTML','CSS','JavaScript','Gemini API'],
        screenshots: [],
        en: {
            name: 'Project DnD',
            shortDesc: 'Web-based Dungeons & Dragons game with Gemini AI as the Dungeon Master.',
            desc: 'A fully web-based Dungeons & Dragons experience powered by the Gemini AI acting as an intelligent Dungeon Master. Players can embark on campaigns, track spells from a complete spell database, build custom lore, and experience dynamically generated storytelling powered by a Go backend.',
            features: ['AI Dungeon Master (Gemini API)','Campaign Logging System','Full Spell Database & Tracker','Custom Lore & Rules Engine','Real-time Narrative Generation','Go Backend Server','Single-file Web Interface','Persistent Campaign Log']
        },
        id_lang: {
            name: 'Project DnD',
            shortDesc: 'Game Dungeons & Dragons berbasis web dengan AI Gemini sebagai Dungeon Master.',
            desc: 'Pengalaman Dungeons & Dragons berbasis web sepenuhnya yang didukung AI Gemini sebagai Dungeon Master yang cerdas. Pemain dapat menjalani kampanye, melacak mantra dari database mantra lengkap, membangun lore kustom, dan merasakan narasi yang dihasilkan secara dinamis oleh backend Go.',
            features: ['AI Dungeon Master (Gemini API)','Sistem Pencatatan Kampanye','Database & Pelacak Mantra Lengkap','Mesin Lore & Aturan Kustom','Pembuatan Narasi Real-time','Server Backend Go','Antarmuka Web Single-file','Log Kampanye Persisten']
        }
    },
    {
        id: 'superkos',
        icon: 'KOS',
        gradient: 'linear-gradient(135deg,#064e3b,#059669)',
        liveUrl: null,
        githubUrl: 'https://github.com/fazil2712/superkos',
        tech: ['Java','Spring Boot','MySQL','Apache Tomcat 9','JDBC','Maven','MVC'],
        screenshots: ['../assets/screenshots/superkos.jpeg'],
        en: {
            name: 'SuperKos',
            shortDesc: 'PropTech platform for rental housing with an automatic roommate-matching algorithm.',
            desc: 'A PropTech web application built for marketing rental properties (kos, kontrakan, apartments) with a unique niche: automatic roommate matching. Tenants complete a lifestyle survey and the system recommends compatible roommates. Property owners manage listings, while an admin oversees the platform.',
            features: ['Smart Property Search & Filter','Automatic Roommate Matching','Lifestyle & Preference Survey','Real-time Map View','Wishlist & Favorites','Review & Rating System','Property Management Dashboard','Admin Panel & Moderation']
        },
        id_lang: {
            name: 'SuperKos',
            shortDesc: 'Platform PropTech untuk hunian sewa dengan algoritma pencocokan teman sekamar otomatis.',
            desc: 'Aplikasi web PropTech yang dibangun untuk memasarkan properti sewa (kos, kontrakan, apartemen) dengan niche unik: pencocokan teman sekamar otomatis. Penyewa mengisi survei gaya hidup dan sistem merekomendasikan teman sekamar yang kompatibel. Pemilik properti mengelola listing, sementara admin mengawasi platform.',
            features: ['Pencarian & Filter Properti Cerdas','Pencocokan Teman Sekamar Otomatis','Survei Gaya Hidup & Preferensi','Tampilan Peta Real-time','Wishlist & Favorit','Sistem Ulasan & Rating','Dashboard Manajemen Properti','Panel Admin & Moderasi']
        }
    },
    {
        id: 'tata',
        icon: 'TATA',
        gradient: 'linear-gradient(135deg,#0c4a6e,#0ea5e9)',
        liveUrl: null,
        githubUrl: 'https://github.com/fazil2712/tata-ai',
        tech: ['Next.js 16','React 19','TypeScript','Gemini API','OpenAI','ElevenLabs','Fal.ai','Zustand','UploadThing','Tailwind CSS'],
        screenshots: ['../assets/screenshots/tata.jpeg'],
        en: {
            name: 'Tata AI',
            shortDesc: 'AI-powered social media manager — generates posts, images, and voiceovers.',
            desc: 'An AI-powered social media manager that orchestrates multiple AI services to automate content creation. It generates written posts via Gemini/OpenAI, produces images through Fal.ai, synthesizes voices with ElevenLabs, and organises workflows on a React Flow canvas — all in a single Next.js application.',
            features: ['AI Post Generation (Gemini / OpenAI)','AI Image Generation (Fal.ai)','Voice Synthesis (ElevenLabs)','React Flow Workflow Canvas','Media Upload (UploadThing)','Content Scheduling','Multi-AI Orchestration','Zustand State Management']
        },
        id_lang: {
            name: 'Tata AI',
            shortDesc: 'Manajer media sosial bertenaga AI — menghasilkan postingan, gambar, dan narasi suara.',
            desc: 'Manajer media sosial bertenaga AI yang mengorkestrasikan berbagai layanan AI untuk mengotomasi pembuatan konten. Ini menghasilkan postingan tertulis via Gemini/OpenAI, memproduksi gambar melalui Fal.ai, mensintesis suara dengan ElevenLabs, dan mengorganisir alur kerja di canvas React Flow — semua dalam satu aplikasi Next.js.',
            features: ['Pembuatan Postingan AI (Gemini / OpenAI)','Pembuatan Gambar AI (Fal.ai)','Sintesis Suara (ElevenLabs)','Canvas Alur Kerja React Flow','Upload Media (UploadThing)','Penjadwalan Konten','Orkestrasi Multi-AI','Manajemen State Zustand']
        }
    },
    {
        id: 'tubesaka',
        icon: 'AKA',
        gradient: 'linear-gradient(135deg,#7c2d12,#ea580c)',
        liveUrl: null,
        githubUrl: 'https://github.com/fazil2712/tubesaka',
        tech: ['HTML','CSS','JavaScript'],
        screenshots: ['../assets/screenshots/tubesaka.jpeg'],
        en: {
            name: 'TubesAKA',
            shortDesc: 'Utility program that counts and stores individual character frequencies from input text.',
            desc: 'A focused utility web application that takes a string of text as input, analyses it character by character, counts the frequency of each individual character, and displays the results in a clean, visual format. Built as a coursework project demonstrating fundamental algorithm and data structure concepts.',
            features: ['Character Frequency Analysis','Interactive Text Input','Results Persistence & Storage','Visual Frequency Display','Sorted Output View','Pure Frontend Implementation']
        },
        id_lang: {
            name: 'TubesAKA',
            shortDesc: 'Program utilitas yang menghitung dan menyimpan frekuensi karakter individual dari teks input.',
            desc: 'Aplikasi web utilitas yang mengambil string teks sebagai input, menganalisisnya karakter per karakter, menghitung frekuensi setiap karakter individual, dan menampilkan hasilnya dalam format visual yang bersih. Dibuat sebagai proyek tugas yang menunjukkan konsep dasar algoritma dan struktur data.',
            features: ['Analisis Frekuensi Karakter','Input Teks Interaktif','Persistensi & Penyimpanan Hasil','Tampilan Frekuensi Visual','Tampilan Output Terurut','Implementasi Pure Frontend']
        }
    }
];

// i18n
const translations = {
    en: {
        'nav.about': 'ABOUT',
        'nav.projects': 'PROJECTS',
        'nav.contact': 'CONTACT',
        'hero.greeting': "HI, I'M",
        'about.headline': 'Informatics Student & Developer',
        'about.bio': "I'm an undergraduate Informatics student at Telkom University Bandung with a passion for building practical software solutions. I enjoy working across the stack — from enterprise Java backends to AI-powered Next.js applications and Go-based game servers. I love turning complex problems into clean, functional software.",
        'about.education': 'EDUCATION',
        'edu.degree': 'Bachelor of Informatics (S1)',
        'edu.university': 'Telkom University Bandung',
        'edu.faculty': 'Faculty of Informatics',
        'edu.status': 'Currently Enrolled — Undergraduate Student',
        'about.skills': 'SKILLS',
        'stats.projects': 'Projects',
        'stats.languages': 'Languages',
        'stats.stacks': 'Tech Stacks',
        'contact.title': "Let's Connect",
        'contact.desc': "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out.",
        'footer.rights': 'All rights reserved.',
        'roles': ['Software Engineer', 'Full-Stack Developer', 'Tech Enthusiast', 'Java Developer', 'Go Developer']
    },
    id: {
        'nav.about': 'TENTANG',
        'nav.projects': 'PROYEK',
        'nav.contact': 'KONTAK',
        'hero.greeting': "HALO, SAYA",
        'about.headline': 'Mahasiswa Informatika & Developer',
        'about.bio': "Saya adalah mahasiswa S1 Informatika di Universitas Telkom Bandung dengan semangat membangun solusi perangkat lunak yang praktis. Saya menikmati bekerja di seluruh stack — dari backend Java enterprise hingga aplikasi Next.js bertenaga AI dan server game berbasis Go. Saya suka mengubah masalah kompleks menjadi perangkat lunak yang bersih dan fungsional.",
        'about.education': 'PENDIDIKAN',
        'edu.degree': 'Sarjana Informatika (S1)',
        'edu.university': 'Universitas Telkom Bandung',
        'edu.faculty': 'Fakultas Informatika',
        'edu.status': 'Sedang Berjalan — Mahasiswa S1',
        'about.skills': 'KEAHLIAN',
        'stats.projects': 'Proyek',
        'stats.languages': 'Bahasa',
        'stats.stacks': 'Tech Stack',
        'contact.title': "Mari Terhubung",
        'contact.desc': "Saat ini saya sedang mencari peluang baru. Baik Anda memiliki pertanyaan atau hanya ingin menyapa, jangan ragu untuk menghubungi.",
        'footer.rights': 'Hak cipta dilindungi.',
        'roles': ['Pengembang Full-Stack', 'Penggemar AI', 'Pemecah Masalah', 'Pengembang Java', 'Pengembang Go']
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    
    // Update active state on toggles
    document.querySelectorAll('.lang-toggle span').forEach(span => {
        if (span.textContent.toLowerCase() === lang) {
            span.classList.add('active');
        } else {
            span.classList.remove('active');
        }
    });

    // Update DOM texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Re-render projects
    renderProjects();
    
    // Reset typing animation
    typeRole();
}

// Typing Animation
const roleElement = document.getElementById('role-text');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

function typeRole() {
    clearTimeout(typingTimeout);
    
    const roles = translations[currentLang]['roles'];
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    typingTimeout = setTimeout(typeRole, typeSpeed);
}

// Render Projects
function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';

    projects.forEach(project => {
        const langData = currentLang === 'en' ? project.en : project.id_lang;
        
        const card = document.createElement('div');
        card.className = 'project-card reveal';
        card.onclick = () => openModal(project);
        
        card.innerHTML = `
            <div class="project-accent-strip" style="background: ${project.gradient}"></div>
            <div class="project-card-content">
                <div>
                    <div class="project-header">
                        <h3 class="project-name">${langData.name}</h3>
                        <span class="project-icon-text">${project.icon}</span>
                    </div>
                    <p class="project-desc">${langData.shortDesc}</p>
                </div>
                <div class="project-tech">
                    ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });

    // Re-observe new elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// Modal Logic
const modal = document.getElementById('project-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function openModal(project) {
    const langData = currentLang === 'en' ? project.en : project.id_lang;
    
    let linksHtml = '';
    if (project.liveUrl) linksHtml += `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="modal-link">Live Site &nearr;</a>`;
    if (project.githubUrl) linksHtml += `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="modal-link">GitHub &nearr;</a>`;

    let imagesHtml = '';
    if (project.screenshots && project.screenshots.length > 0) {
        imagesHtml = `<div class="modal-gallery">
            ${project.screenshots.map(src => `<img src="${src}" alt="${langData.name} screenshot" class="modal-image">`).join('')}
        </div>`;
    }

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2 class="modal-title">${langData.name}</h2>
            <div class="modal-links">${linksHtml}</div>
        </div>
        <p class="modal-desc">${langData.desc}</p>
        <h4 class="modal-features-title">${currentLang === 'en' ? 'Key Features' : 'Fitur Utama'}</h4>
        <ul class="modal-features">
            ${langData.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div class="project-tech" style="margin-bottom: 2rem;">
            ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        ${imagesHtml}
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Scroll Reveal
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    });
});

// Event Listeners
document.getElementById('lang-toggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'id' : 'en');
});
document.getElementById('mobile-lang-toggle').addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'id' : 'en');
});

// Init
document.getElementById('current-year').textContent = new Date().getFullYear();
setLanguage('en');
typeRole();

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});
