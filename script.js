// ----------------------------------------------------------
//  CAKELETTER — script.js
// Author:  @destiaanana
// Version: 1.0 (2026-06-01)
// ----------------------------------------------------------

// --- TEMPLATE DATA ---
const templates = [
    // CUTE CATEGORY
    {
    id: 1,
    code: "PINKie1",
    name: "Pink Love Story",
    category: "romance",
    image: "https://media.giphy.com/media/26AHONQ79FdWZhAIw/giphy.gif",
    demoUrl: "#", // Mengarah ke '#' karena belum dibuat
    description: "A romantic template, brimming with romance and tenderness. Perfect for celebrating a partner's special day or anniversary. Comes with graceful love animations, photo gallery, and music support to create an unforgettable romantic moment.",
    price: 35000,
    priceDisplay: "Rp 35.000",
    features: [
        "Smooth animations",
        "Photo gallery (6–10 photos/videos)",
        "Custom background music",
        "Love counter (days since date)",
        "Story timeline section"
    ],
    customizable: [
        "Pink shade (bright or muted)",
        "Photos",
        "Names & messages",
        "Background music",
        "Font style"
    ],
    colors: ["#ff69b4", "#ff1493", "#ffc0cb"]
},
    {
        id: 5,
        code: "PASTEL9",
        name: "Soft Pastel",
        category: "cute",
        image: "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
        demoUrl: "#", // Mengarah ke '#' karena belum dibuat
        description: "Minimalist but with soft pastel tones. Perfect for those who love aesthetic vibes without the chaos.",
        price: 28000,
        priceDisplay: "Rp 28.000",
        features: [
            "Soft pastel color palette",
            "Clean, breathable design",
            "Smooth animations",
            "Perfectly responsive",
            "Easy to read layout"
        ],
        customizable: [
            "Pastel color combo",
            "Font choice",
            "Photo layout",
            "Subtle animations",
            "Icons & decorations"
        ],
        colors: ["#ffd1dc", "#e6e6fa", "#fff0f5"]
    },
    {
        id: 8,
        code: "BOWtie8",
        name: "Coquette Dreams",
        category: "cute",
        image: "https://media.giphy.com/media/3o7bu5C8PqYis6SjQI/giphy.gif",
        demoUrl: "#", // Mengarah ke '#' karena belum dibuat
        description: "That viral cute aesthetic everyone's obsessed with! Bows, soft pinks, and a super feminine vibe that hits different.",
        price: 40000,
        priceDisplay: "Rp 40.000",
        features: [
            "Animated bows & ribbons",
            "Soft pink color scheme",
            "Lace & ruffle details",
            "Cute sticker elements",
            "Curly feminine font"
        ],
        customizable: [
            "Pink shade variation",
            "Bow & decoration style",
            "Photos with cute frames",
            "Sticker elements",
            "Soft & sweet music"
        ],
        colors: ["#ffb6c1", "#ffc0cb", "#fff0f5"]
    },

    // MINIMALIST CATEGORY
    {
        id: 2,
        code: "STARy7",
        name: "Night Sky Dreams",
        category: "minimalist",
        image: "https://media.giphy.com/media/3oKIPa2TdahYigucMC/giphy.gif",
        demoUrl: "#", // Mengarah ke '#' karena belum dibuat
        description: "A starry night sky theme. Simple, calm, and dreamy — perfect for a partner. Comes with falling star animations.",
        price: 38000,
        priceDisplay: "Rp 38.000",
        features: [
            "Twinkling star animations",
            "Dark background aesthetic",
            "Glowing text effects",
            "Falling star animation",
            "Elegant text transitions"
        ],
        customizable: [
            "Night sky color tone",
            "Star density",
            "Glowing text effect",
            "Animation speed",
            "Special effects"
        ],
        colors: ["#0a1551", "#1a3a5c", "#e0e0e0"]
    },
    {
        id: 4,
        code: "MINImal4",
        name: "Simple & Clean",
        category: "minimalist",
        image: "https://media.giphy.com/media/xT0xeJpnrWC4XWblWQ/giphy.gif",
        demoUrl: "#", // Mengarah ke '#' karena belum dibuat
        description: "For those who love keeping it simple. Black & white with one accent color. Loads fast, looks sharp.",
        price: 25000,
        priceDisplay: "Rp 25.000",
        features: [
            "Minimalist typography",
            "Single accent color",
            "Fast loading",
            "Dark mode ready",
            "Great for a professional look"
        ],
        customizable: [
            "Accent color (swap from B&W)",
            "Font choice",
            "Spacing & layout",
            "Photo placement",
            "Button style"
        ],
        colors: ["#000000", "#ffffff", "#6c757d"]
    },
    {
        id: 9,
        code: "MEADow6",
        name: "Cottage Garden",
        category: "minimalist",
        image: "https://media.giphy.com/media/d31vTpS7bXMMQMP6/giphy.gif",
        demoUrl: "#", // Mengarah ke '#' karena belum dibuat
        description: "A dreamy natural theme. Countryside vibes, wildflowers, and a calm minimalist atmosphere.",
        price: 38000,
        priceDisplay: "Rp 38.000",
        features: [
            "Nature & flower backgrounds",
            "Butterfly animations",
            "Vintage typography",
            "Soft dreamy colors",
            "Peaceful atmosphere"
        ],
        customizable: [
            "Scenery type",
            "Season color (spring/summer/fall)",
            "Flower & butterfly type",
            "Photos with vintage filter",
            "Instrumental nature music"
        ],
        colors: ["#8fbc8f", "#f5f5dc", "#dda0dd"]
    }
];

// ----------------------------------------------------------
//  --- CONFIGURATION & STATE ---
// ----------------------------------------------------------
const MY_WA_NUMBER = "6283143866906";

let currentFilter = 'all';
let selectedTemplate = null;
let cart = [];
let notifTimeout = null;

// ----------------------------------------------------------
//  INIT
// ----------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    loadTheme();
    loadCart();
    renderTemplates(templates);
    updateSavedDrawer();
    setupScrollAnimation();
    setupHamburger();
    setupModalBackdropClose();
    setupNavSmoothClose();
});

// ----------------------------------------------------------
//  SCROLL REVEAL
// ----------------------------------------------------------
function setupScrollAnimation() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                } else {
                    entry.target.classList.remove('revealed');
                }
            });
        },
        { root: null, rootMargin: '0px', threshold: 0.08 }
    );

    document.querySelectorAll('.reveal-section').forEach((el) => observer.observe(el));
}

// ----------------------------------------------------------
//  HAMBURGER MENU
// ----------------------------------------------------------
function setupHamburger() {
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile nav when a link is clicked
function setupNavSmoothClose() {
    const navLinks  = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    if (!navLinks) return;

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger && hamburger.classList.remove('active');
        });
    });
}

// ----------------------------------------------------------
//  THEME TOGGLE
// ----------------------------------------------------------
function loadTheme() {
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeButton(saved);
}

function updateThemeButton(theme) {
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = theme === 'light' ? '🌙' : '☀️';
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const current  = document.documentElement.getAttribute('data-theme');
        const newTheme = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButton(newTheme);
    });
});

// ----------------------------------------------------------
//  SMOOTH SCROLL TO SECTION
// ----------------------------------------------------------
function scrollToSection(sectionId) {
    const el = document.getElementById(sectionId);
    if (!el) return;

    // Ukur tinggi navbar secara real-time
    const navbar       = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 70;

    // 80px breathing room agar judul section tidak mepet navbar
    const EXTRA_OFFSET = 80;

    const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
    const scrollTo   = elementTop - navbarHeight - EXTRA_OFFSET;

    window.scrollTo({ top: Math.max(0, scrollTo), behavior: 'smooth' });

    // Tutup mobile nav kalau sedang terbuka
    document.getElementById('navLinks')?.classList.remove('active');
    document.getElementById('hamburger')?.classList.remove('active');
}

// ----------------------------------------------------------
//  FILTER TEMPLATES
// ----------------------------------------------------------
function filterTemplates(category) {
    currentFilter = category;

    document.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });

    const filtered = category === 'all'
        ? templates
        : templates.filter((t) => t.category === category);

    renderTemplates(filtered);
}

// ----------------------------------------------------------
//  HELPER FUNCTION (Proteksi Link Demo)
// ----------------------------------------------------------
function handleDemoLink(url, templateName) {
  // Klo link demo berisi netlify tiruan atau di set ke "#", pop-up ini akan muncul
  if (url === "#" || url.includes("netlify.app") || url.trim() === "") {
    showNotification("✨ Demo sedang disiapkan! Hubungi admin untuk preview desain.");
    alert(`✨ Live Demo untuk "${templateName}" sedang dalam proses penyiapan/maintenance. Tapi tenang, desain ini tersedia kok! Kamu bisa langsung tanyakan ketersediaannya ke Admin via WhatsApp ya! 😊`);
  } else {
    window.open(url, '_blank');
  }
}

// ----------------------------------------------------------
//  RENDER TEMPLATES
// ----------------------------------------------------------
function renderTemplates(list) {
    const grid = document.getElementById('templateGrid');
    if (!grid) return;

    if (!list || list.length === 0) {
        grid.innerHTML = `<p style="text-align:center; grid-column:1/-1; padding:3rem; opacity:0.5;">No templates in this category yet.</p>`;
        return;
    }

    grid.innerHTML = list.map((t) => `
        <div class="template-card" onclick="openModal(${t.id})">
            <div class="template-image">
                <img src="${t.image}" alt="${t.name}" loading="lazy">
            </div>
            <div class="template-body">
                <h3 class="template-name">${t.name}</h3>
                <span class="template-category">${t.category}</span>
                <p class="template-desc">${t.description}</p>
                <div class="template-footer">
                    <span class="template-price">${t.priceDisplay}</span>
                    <button class="view-btn" onclick="event.stopPropagation(); openModal(${t.id})">
                        View Detail
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ----------------------------------------------------------
//  MODAL — OPEN (REVISI DI SINI)
// ----------------------------------------------------------
function openModal(templateId) {
    selectedTemplate = templates.find((t) => t.id === templateId);
    if (!selectedTemplate) return;

    const modal = document.getElementById('templateModal');

    // Header
    document.getElementById('modalTitle').textContent    = selectedTemplate.name;
    const catBadge = document.getElementById('modalCategory');
    catBadge.textContent                                 = selectedTemplate.category;
    catBadge.style.textTransform                         = 'capitalize';

    // Body
    document.getElementById('modalDesc').textContent     = selectedTemplate.description;
    document.getElementById('modalPrice').textContent    = selectedTemplate.priceDisplay;

    // Preview image
    document.getElementById('videoPreview').innerHTML    =
        `<img src="${selectedTemplate.image}" style="width:100%;height:100%;object-fit:cover;" loading="lazy" alt="${selectedTemplate.name} preview">`;

    // Demo link (REVISI: Mengalihkan fungsi klik link demo ke handleDemoLink)
    const demoBtn = document.getElementById('liveDemoBtn');
    if (demoBtn) {
        demoBtn.href = "#";
        demoBtn.onclick = function(e) {
            e.preventDefault();
            handleDemoLink(selectedTemplate.demoUrl, selectedTemplate.name);
        };
    }

    // Features & customizable lists, color swatches, reset form fields, and cart button state
    document.getElementById('modalFeatures').innerHTML   = selectedTemplate.features.map((f) => `<li>${f}</li>`).join('');
    document.getElementById('modalCustomizable').innerHTML = selectedTemplate.customizable.map((c) => `<li>${c}</li>`).join('');
    document.getElementById('modalColors').innerHTML     = selectedTemplate.colors.map((c) => `<div class="color-box" style="background:${c};" title="${c}"></div>`).join('');

    ['orderName', 'orderColor', 'orderSong', 'orderMessage'].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });

    // Cart button state
    const addCartBtn = document.getElementById('addCartBtn');
    const inCart     = cart.some((item) => item.id === templateId);
    if (inCart) {
        addCartBtn.classList.add('added');
        addCartBtn.innerHTML = '✓ Already in Cart';
    } else {
        addCartBtn.classList.remove('added');
        addCartBtn.innerHTML = '🛒 Add to Cart';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ----------------------------------------------------------
//  MODAL — CLOSE
// ----------------------------------------------------------
function closeModal() {
    document.getElementById('templateModal')?.classList.remove('active');
    document.body.style.overflow = '';
    selectedTemplate = null;
}

// Close modal when clicking the backdrop
function setupModalBackdropClose() {
    const modal = document.getElementById('templateModal');
    if (!modal) return;

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ----------------------------------------------------------
//  CART — ADD TO CART (called from modal button)
// ----------------------------------------------------------
function addToCart() {
    if (!selectedTemplate) return;

    const alreadyIn = cart.some((item) => item.id === selectedTemplate.id);

    if (alreadyIn) {
        showNotification('This template is already in your cart!');
        return;
    }

    cart.push({
        id:           selectedTemplate.id,
        name:         selectedTemplate.name,
        price:        selectedTemplate.price,
        priceDisplay: selectedTemplate.priceDisplay,
        image:        selectedTemplate.image,
        code:         selectedTemplate.code
    });

    saveCart();
    updateSavedDrawer();

    // Update button state inside modal
    const addCartBtn = document.getElementById('addCartBtn');
    if (addCartBtn) {
        addCartBtn.classList.add('added');
        addCartBtn.innerHTML = '✓ Already in Cart';
    }

    showNotification(`"${selectedTemplate.name}" added to cart! 🛒`);
}

// ----------------------------------------------------------
//  CART — REMOVE ITEM
// ----------------------------------------------------------
function removeFromCart(templateId) {
    cart = cart.filter((item) => item.id !== templateId);
    saveCart();
    updateSavedDrawer();
    showNotification('Template removed from cart.');

    // If modal is open for this template, reset button
    if (selectedTemplate && selectedTemplate.id === templateId) {
        const addCartBtn = document.getElementById('addCartBtn');
        if (addCartBtn) {
            addCartBtn.classList.remove('added');
            addCartBtn.innerHTML = '🛒 Add to Cart';
        }
    }
}

// ----------------------------------------------------------
//  CART — SAVE & LOAD (localStorage)
// ----------------------------------------------------------
function saveCart() {
    localStorage.setItem('cakeletter_cart', JSON.stringify(cart));
}

function loadCart() {
    try {
        const saved = localStorage.getItem('cakeletter_cart');
        cart = saved ? JSON.parse(saved) : [];
    } catch {
        cart = [];
    }
}

// ----------------------------------------------------------
//  CART — UPDATE DRAWER UI
// ----------------------------------------------------------
function updateSavedDrawer() {
    const savedList   = document.getElementById('savedList');
    const savedCount  = document.getElementById('savedCount');
    const savedFooter = document.getElementById('savedFooter');

    if (!savedList || !savedCount || !savedFooter) return;

    savedCount.textContent = cart.length > 9 ? '9+' : cart.length;

    if (cart.length === 0) {
        savedList.innerHTML   = '<p class="empty-saved">No templates in cart yet!</p>';
        savedFooter.style.display = 'none';
        return;
    }

    savedFooter.style.display = 'block';

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('savedTotalPrice').textContent = formatRupiah(total);

    savedList.innerHTML = cart.map((item) => `
        <div class="saved-item" onclick="openModal(${item.id})">
            <div class="saved-item-icon">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="saved-item-info">
                <div class="saved-item-name">${item.name}</div>
                <div class="saved-item-price">${item.priceDisplay}</div>
            </div>
            <button class="saved-item-remove"
                    onclick="event.stopPropagation(); removeFromCart(${item.id})"
                    title="Remove">✕</button>
        </div>
    `).join('');
}

// ----------------------------------------------------------
//  CART — TOGGLE DRAWER
// ----------------------------------------------------------
function toggleSavedDrawer() {
    document.getElementById('savedDrawer')?.classList.toggle('active');
}

// ----------------------------------------------------------
//  CART — CHECKOUT VIA WHATSAPP (REVISI DI SINI)
// ----------------------------------------------------------
function checkoutOrder() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    const total    = cart.reduce((sum, item) => sum + item.price, 0);
    const itemList = cart.map((item, i) => `${i + 1}. ${item.name} (${item.code}) — ${item.priceDisplay}`).join('\n');

    const message =
        `Halo CakeLetter! Saya mau pesan beberapa template nih 🎂\n\n` +
        `*Daftar Pesanan:*\n${itemList}\n\n` +
        `*Total: ${formatRupiah(total)}*\n\n` +
        `Mohon diinfokan langkah selanjutnya ya kak. Terima kasih! 😊`;

    // REVISI: Menggunakan variabel global MY_WA_NUMBER
    window.open(`https://wa.me/${MY_WA_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

// ----------------------------------------------------------
//  MODAL ORDER FORM — SUBMIT VIA WHATSAPP (REVISI DI SINI)
// ----------------------------------------------------------
function submitInteractiveForm() {
    if (!selectedTemplate) return;

    const nameEl = document.getElementById('orderName');
    const name   = nameEl ? nameEl.value.trim() : '';

    if (!name) {
        showNotification("Recipient's name is required! 💌");
        nameEl && nameEl.focus();
        return;
    }

    const color   = document.getElementById('orderColor')?.value.trim()   || '-';
    const song    = document.getElementById('orderSong')?.value.trim()    || '-';
    const message = document.getElementById('orderMessage')?.value.trim() || '-';

    const waMessage =
        `Halo CakeLetter! Saya mau pesan template ini nih 🎂\n\n` +
        `*Detail Pesanan:*\n` +
        `- Template: ${selectedTemplate.name} (${selectedTemplate.code})\n` +
        `- Harga: ${selectedTemplate.priceDisplay}\n\n` +
        `*Form Kustomisasi:*\n` +
        `- Nama Penerima/Doi: ${name}\n` +
        `- Request Warna: ${color}\n` +
        `- Request Lagu: ${song}\n` +
        `- Ucapan / Pesan Khusus:\n"${message}"\n\n` +
        `Mohon diinfokan langkah selanjutnya beserta pengiriman fotonya ya kak. Terima kasih! 😊`;

    // REVISI: Menggunakan variabel global MY_WA_NUMBER
    window.open(`https://wa.me/${MY_WA_NUMBER}?text=${encodeURIComponent(waMessage)}`, '_blank');
}

// ----------------------------------------------------------
//  FAQ TOGGLE
// ----------------------------------------------------------
function toggleFaq(btn) {
    const item      = btn.closest('.faq-item');
    const isActive  = item.classList.contains('active');

    // Close all open items
    document.querySelectorAll('.faq-item.active').forEach((el) => {
        el.classList.remove('active');
    });

    // Toggle clicked item (open if it was closed)
    if (!isActive) {
        item.classList.add('active');
    }
}

// ----------------------------------------------------------
//  TOAST NOTIFICATION — snappy 1s, no delay stacking
// ----------------------------------------------------------
function showNotification(msg) {
    const notif = document.getElementById('notification');
    const msgEl = document.getElementById('notifMessage');
    if (!notif || !msgEl) return;

    // Update teks secara instan
    msgEl.textContent = msg;

    // Kalau notif sedang tampil, reset dulu ke hidden
    // supaya animasi slide-in muncul ulang dengan fresh
    notif.classList.remove('show');

    // Pakai void untuk force browser reflow sebelum re-add class
    // Ini mencegah browser "skip" animasi karena class belum benar-benar dilepas
    void notif.offsetWidth;

    // Tampilkan notifikasi
    notif.classList.add('show');

    // Clear timeout sebelumnya — cegah penumpukan delay
    clearTimeout(notifTimeout);

    // Auto-hide setelah 1000ms (snappy)
    notifTimeout = setTimeout(() => {
        notif.classList.remove('show');
    }, 1000);
}

// ----------------------------------------------------------
//  UTILITY — Format Rupiah
// ----------------------------------------------------------
function formatRupiah(amount) {
    return 'Rp ' + amount.toLocaleString('id-ID');
}
