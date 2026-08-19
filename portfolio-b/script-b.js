const projectsData = [
    {
        id: "ppip",
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
        id: "dnd",
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
        id: "superkos",
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
        id: "tata",
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
        id: "tubesaka",
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

const translations = {
    en: {
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        heroGreeting: "HELLO, I'M",
        heroCta: "View Projects",
        aboutLabel: "◆ ABOUT ME",
        aboutTitle: "Who I Am",
        aboutDesc: "I'm an undergraduate Informatics student at Telkom University Bandung with a passion for building practical software solutions. I enjoy working across the stack — from enterprise Java backends to AI-powered Next.js applications and Go-based game servers. I love turning complex problems into clean, functional software.",
        statProjects: "Projects",
        statLangs: "Languages",
        statStacks: "Tech Stacks",
        eduTitle: "Education",
        eduDegree: "Bachelor of Informatics (S1)",
        eduUni: "Telkom University Bandung - Faculty of Informatics",
        eduStatus: "Currently Enrolled — Undergraduate Student",
        skillsLabel: "◆ EXPERTISE",
        skillsTitle: "My Skills",
        skillLang: "Languages",
        skillFrame: "Frameworks",
        skillDb: "Databases & Cloud",
        skillTools: "Tools",
        projectsLabel: "◆ PORTFOLIO",
        projectsTitle: "Selected Works",
        contactLabel: "◆ GET IN TOUCH",
        contactTitle: "Contact",
        contactDesc: "Feel free to reach out for collaborations or just a friendly hello!",
        footerText: "All rights reserved.",
        modalFeatures: "Key Features",
        btnLive: "Live Demo",
        btnCode: "Source Code"
    },
    id: {
        navAbout: "Tentang",
        navSkills: "Keahlian",
        navProjects: "Proyek",
        navContact: "Kontak",
        heroGreeting: "HALO, SAYA",
        heroCta: "Lihat Proyek",
        aboutLabel: "◆ TENTANG SAYA",
        aboutTitle: "Siapa Saya",
        aboutDesc: "Saya adalah mahasiswa S1 Informatika di Universitas Telkom Bandung dengan semangat membangun solusi perangkat lunak yang praktis. Saya menikmati bekerja di seluruh stack — dari backend Java enterprise hingga aplikasi Next.js bertenaga AI dan server game berbasis Go. Saya suka mengubah masalah kompleks menjadi perangkat lunak yang bersih dan fungsional.",
        statProjects: "Proyek",
        statLangs: "Bahasa",
        statStacks: "Tech Stack",
        eduTitle: "Pendidikan",
        eduDegree: "Sarjana Informatika (S1)",
        eduUni: "Telkom University Bandung - Fakultas Informatika",
        eduStatus: "Sedang Menempuh — Mahasiswa S1",
        skillsLabel: "◆ KEAHLIAN",
        skillsTitle: "Keahlian Saya",
        skillLang: "Bahasa",
        skillFrame: "Framework",
        skillDb: "Database & Cloud",
        skillTools: "Alat",
        projectsLabel: "◆ PORTFOLIO",
        projectsTitle: "Karya Terpilih",
        contactLabel: "◆ HUBUNGI SAYA",
        contactTitle: "Kontak",
        contactDesc: "Jangan ragu untuk menghubungi saya untuk kolaborasi atau sekadar menyapa!",
        footerText: "Hak cipta dilindungi.",
        modalFeatures: "Fitur Utama",
        btnLive: "Demo Langsung",
        btnCode: "Kode Sumber"
    }
};

let currentLang = 'en';

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Set Year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Render Projects
    renderProjects();
    
    // Init Typewriter
    initTypewriter();
    
    // Init Scroll Reveal
    initScrollReveal();
    
    // Navbar Scroll
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Language Toggle
    const langBtn = document.getElementById('lang-toggle');
    const langBtnMob = document.getElementById('lang-toggle-mobile');
    
    const toggleLang = () => {
        currentLang = currentLang === 'en' ? 'id' : 'en';
        
        document.getElementById('lang-en').classList.toggle('active', currentLang === 'en');
        document.getElementById('lang-id').classList.toggle('active', currentLang === 'id');
        document.getElementById('lang-en-mob').classList.toggle('active', currentLang === 'en');
        document.getElementById('lang-id-mob').classList.toggle('active', currentLang === 'id');
        
        updateContent();
    };
    
    langBtn.addEventListener('click', toggleLang);
    langBtnMob.addEventListener('click', toggleLang);
    
    // Modals
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
});

// Render Projects
function renderProjects() {
    const container = document.getElementById('project-container');
    container.innerHTML = '';
    
    projectsData.forEach((project, index) => {
        const langData = currentLang === 'en' ? project.en : project.id_lang;
        const hasBg = project.screenshots && project.screenshots.length > 0;
        const bgStyle = hasBg ? `background-image: url('${project.screenshots[0]}');` : `background: ${project.gradient};`;
        const accentClass = index % 2 === 0 ? '' : 'accent-lime';
        
        const card = document.createElement('div');
        card.className = `project-card ${accentClass} reveal`;
        card.setAttribute('data-index', index);
        card.style.transitionDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="project-bg" style="${bgStyle}"></div>
            <div class="project-content">
                <span class="project-icon">${project.icon}</span>
                <h3 class="project-title">${langData.name}</h3>
                <p class="project-desc">${langData.shortDesc}</p>
            </div>
        `;
        
        card.addEventListener('click', () => openModal(index));
        container.appendChild(card);
    });
    
    // Re-init reveal for new elements
    initScrollReveal();
}

// Update Content for i18n
function updateContent() {
    // Update static texts
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    
    // Update typewriter strings based on lang
    initTypewriter();
    
    // Update projects
    renderProjects();
}

// Modal Functions
function openModal(index) {
    const project = projectsData[index];
    const langData = currentLang === 'en' ? project.en : project.id_lang;
    const modal = document.getElementById('project-modal');
    const body = document.getElementById('modal-body');
    
    const bgStyle = project.screenshots && project.screenshots.length > 0 
        ? `background-image: url('${project.screenshots[0]}');` 
        : `background: ${project.gradient};`;
        
    const techTags = project.tech.map(t => `<span>${t}</span>`).join('');
    const featuresList = langData.features.map(f => `<li>${f}</li>`).join('');
    
    let buttons = '';
    if (project.liveUrl) {
        buttons += `<a href="${project.liveUrl}" target="_blank" class="btn btn-primary">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            ${translations[currentLang].btnLive}
        </a>`;
    }
    if (project.githubUrl) {
        buttons += `<a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            ${translations[currentLang].btnCode}
        </a>`;
    }
    
    body.innerHTML = `
        <div class="modal-hero" style="${bgStyle}">
            <h2>${langData.name}</h2>
        </div>
        <div class="modal-info">
            <p>${langData.desc}</p>
            <div class="modal-tech">
                ${techTags}
            </div>
            <div class="modal-features">
                <h3>${translations[currentLang].modalFeatures}</h3>
                <ul>
                    ${featuresList}
                </ul>
            </div>
            <div class="modal-actions">
                ${buttons}
            </div>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('project-modal').classList.remove('active');
    document.body.style.overflow = '';
}

// Typewriter
let typeTimeout;
function initTypewriter() {
    clearTimeout(typeTimeout);
    const rolesEn = ['Full-Stack Developer', 'AI Enthusiast', 'Problem Solver', 'Java Developer', 'Go Developer'];
    const rolesId = ['Pengembang Full-Stack', 'Penggemar AI', 'Pemecah Masalah', 'Pengembang Java', 'Pengembang Go'];
    
    const roles = currentLang === 'en' ? rolesEn : rolesId;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const el = document.getElementById('typewriter');
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            el.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            el.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let speed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 500;
        }
        
        typeTimeout = setTimeout(type, speed);
    }
    
    el.textContent = '';
    type();
}

// Scroll Reveal
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.reveal, .reveal-scale').forEach(el => {
        observer.observe(el);
    });
}
