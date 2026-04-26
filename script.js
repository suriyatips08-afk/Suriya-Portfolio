const loader = document.getElementById("loader");
const cursor = document.getElementById("cursor");
const cursorTrail = document.getElementById("cursorTrail");
const menuToggle = document.getElementById("menuToggle");
const accordionNav = document.getElementById("accordionNav");
const revealItems = document.querySelectorAll(".reveal");
const tiltCards = document.querySelectorAll(".tilt-card");
const magneticItems = document.querySelectorAll(".magnetic");
const heroDepthLayers = document.querySelectorAll(".layer-depth");
const caseModal = document.getElementById("caseModal");
const caseTitle = document.getElementById("caseTitle");
const caseDesc = document.getElementById("caseDesc");
const caseTech = document.getElementById("caseTech");
const caseClose = document.getElementById("caseClose");
const caseCategory = document.getElementById("caseCategory");
const caseRole = document.getElementById("caseRole");
const caseYear = document.getElementById("caseYear");
const caseChallenge = document.getElementById("caseChallenge");
const caseSolution = document.getElementById("caseSolution");
const caseHeroImage = document.getElementById("caseHeroImage");
const caseHeroVideo = document.getElementById("caseHeroVideo");
const caseHeroVideoSource = document.getElementById("caseHeroVideoSource");
const caseGallery = document.getElementById("caseGallery");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const projectCaseStudies = {
  "Abstract Forms": {
    category: "3D Art",
    role: "Lead Designer",
    year: "2024",
    challenge:
      "Create a bold visual language that feels abstract yet readable, while keeping composition and motion coherent across all renders.",
    solution:
      "I developed a modular material system and cinematic camera pathing workflow that kept every frame stylistically consistent and emotionally grounded.",
    hero: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "Game Environment": {
    category: "Game Design",
    role: "Environment + Systems Designer",
    year: "2024",
    challenge:
      "Build a stylized playable space with strong exploration flow and clear gameplay readability without sacrificing visual density.",
    solution:
      "I used modular terrain blocks, layered lighting zones, and intentional landmark placement to guide players naturally through the environment.",
    hero: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "Fantasy Realm": {
    category: "Environment",
    role: "World Builder",
    year: "2023",
    challenge:
      "Design a world that feels atmospheric and mysterious while preserving depth, scale, and narrative context in static shots.",
    solution:
      "I focused on layered fog, silhouette hierarchy, and storytelling anchors to turn each composition into a narrative moment.",
    hero: "https://images.unsplash.com/photo-1539721972319-f0e80a00d424?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1539721972319-f0e80a00d424?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  Zenon: {
    category: "Brand + Interface",
    role: "Creative Technologist",
    year: "2025",
    challenge:
      "Unify branding, interaction design, and motion into one system that feels cohesive across portfolio experiences.",
    solution:
      "I mapped the brand language to reusable interface modules and timed transitions to create a cinematic yet structured journey.",
    hero: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "Futuristic Interface": {
    category: "UI Systems",
    role: "UI/UX Designer",
    year: "2025",
    challenge:
      "Design a futuristic dashboard concept that feels immersive but remains practical for real-world information density.",
    solution:
      "I applied modular card logic, progressive disclosure, and restrained motion to keep complexity manageable and elegant.",
    hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  "Requiem for the Endgame": {
    category: "Cinematic Project",
    role: "Cinematic Designer",
    year: "2025",
    challenge:
      "Craft an emotionally driven cinematic that balances narrative pacing, visual clarity, and atmosphere.",
    solution:
      "I combined scene composition, lighting rhythm, and edit timing to create a coherent cinematic sequence with a strong mood arc.",
    hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    video: "requim for the endgame.mp4",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    ]
  }
};

let loaderHidden = false;

function hideLoader() {
  if (!loader || loaderHidden) return;
  loaderHidden = true;
  loader.classList.add("hidden");
}

// Hide as soon as DOM is ready so blocked assets do not lock UI.
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(hideLoader, 450);
});

// Keep the original load behavior as a fallback.
window.addEventListener("load", () => {
  setTimeout(hideLoader, 850);
});

// Safety timeout for slow/failed external or local assets.
setTimeout(hideLoader, 2000);

if (menuToggle && accordionNav) {
  menuToggle.addEventListener("click", () => {
    accordionNav.classList.toggle("open");
  });

  accordionNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => accordionNav.classList.remove("open"));
  });

  document.addEventListener("click", (e) => {
    if (!accordionNav.contains(e.target) && !menuToggle.contains(e.target)) {
      accordionNav.classList.remove("open");
    }
  });
}

// Cursor + inertia trail + hero parallax
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let trailX = mouseX;
let trailY = mouseY;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (cursor) {
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  }

  if (!prefersReducedMotion) {
    heroDepthLayers.forEach((layer) => {
      const depth = Number(layer.dataset.depth || 0.2);
      const xOffset = ((mouseX / window.innerWidth) - 0.5) * 42 * depth;
      const yOffset = ((mouseY / window.innerHeight) - 0.5) * 30 * depth;
      layer.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
    });
  }
});

function animateTrail() {
  trailX += (mouseX - trailX) * 0.16;
  trailY += (mouseY - trailY) * 0.16;
  if (cursorTrail) {
    cursorTrail.style.left = `${trailX}px`;
    cursorTrail.style.top = `${trailY}px`;
  }
  requestAnimationFrame(animateTrail);
}
if (cursorTrail && !prefersReducedMotion) animateTrail();

magneticItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (cursor) cursor.classList.add("active");
  });
  item.addEventListener("mouseleave", () => {
    if (cursor) cursor.classList.remove("active");
    item.style.transform = "";
  });
  item.addEventListener("mousemove", (e) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    item.style.transform = `translate(${x * 0.07}px, ${y * 0.07}px)`;
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.16 }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("show"));
}

const navLinks = accordionNav
  ? [...accordionNav.querySelectorAll("a[href^='#']")]
      .filter((link) => {
        const href = link.getAttribute("href");
        return href && href !== "#";
      })
  : [];
const sections = navLinks
  .map((link) => {
    const target = link.getAttribute("href");
    return target ? document.querySelector(target) : null;
  })
  .filter(Boolean);

function updateActiveNav() {
  const marker = window.scrollY + 150;
  let activeId = "";
  sections.forEach((section) => {
    if (section.offsetTop <= marker) activeId = section.id;
  });
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("active", isActive);
  });
}
window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();

// Card tilt interaction
tiltCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    if (prefersReducedMotion) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 9;
    const rotateX = ((y / rect.height) - 0.5) * -9;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

// Case-study cinematic modal
function openProjectCase(card) {
  if (
    !card ||
    !caseModal ||
    !caseTitle ||
    !caseDesc ||
    !caseTech ||
    !caseCategory ||
    !caseRole ||
    !caseYear ||
    !caseChallenge ||
    !caseSolution ||
    !caseHeroImage ||
    !caseGallery
  ) {
    return;
  }

  const details = projectCaseStudies[card.dataset.title] || {
    category: "Case Study",
    role: "Design Lead",
    year: "2025",
    challenge: "Define a clear creative direction while balancing storytelling and interaction quality.",
    solution: "Use modular systems, iterative prototyping, and cinematic composition to build a polished final experience.",
    hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    ]
  };

  caseCategory.textContent = details.category;
  caseTitle.textContent = card.dataset.title;
  caseDesc.textContent = card.dataset.desc;
  caseRole.textContent = details.role;
  caseYear.textContent = details.year;
  caseTech.textContent = card.dataset.tech;
  caseChallenge.textContent = details.challenge;
  caseSolution.textContent = details.solution;

  const videoSource = details.video || card.dataset.video;
  if (videoSource && caseHeroVideo && caseHeroVideoSource && caseHeroImage) {
    caseHeroImage.style.display = "none";
    caseHeroVideo.style.display = "block";
    caseHeroVideoSource.src = videoSource;
    caseHeroVideo.load();
    caseHeroVideo.play().catch(() => {
      // Ignore autoplay restrictions; controls remain available for manual play.
    });
  } else if (caseHeroImage) {
    caseHeroImage.style.display = "block";
    caseHeroImage.src = details.hero;
    caseHeroImage.alt = `${card.dataset.title} hero image`;
    if (caseHeroVideo && caseHeroVideoSource) {
      caseHeroVideo.pause();
      caseHeroVideo.style.display = "none";
      caseHeroVideoSource.src = "";
      caseHeroVideo.load();
    }
  }

  caseGallery.innerHTML = "";
  details.gallery.forEach((imageSrc, index) => {
    const image = document.createElement("img");
    image.src = imageSrc;
    image.alt = `${card.dataset.title} gallery image ${index + 1}`;
    caseGallery.appendChild(image);
  });

  caseModal.classList.add("open");
  caseModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

const projectCards = [...document.querySelectorAll(".project-card")];
projectCards.forEach((card) => {
  card.setAttribute("tabindex", "0");

  card.addEventListener("click", (event) => {
    // Keep native video controls clickable without opening modal.
    if (event.target.closest("video")) return;
    openProjectCase(card);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProjectCase(card);
    }
  });
});

document.querySelectorAll(".view-project").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const card = event.target.closest(".project-card");
    openProjectCase(card);
  });
});

function closeCaseModal() {
  if (!caseModal) return;
  caseModal.classList.remove("open");
  caseModal.setAttribute("aria-hidden", "true");
  if (caseHeroVideo && caseHeroVideoSource) {
    caseHeroVideo.pause();
    caseHeroVideo.currentTime = 0;
    caseHeroVideo.style.display = "none";
    caseHeroVideoSource.src = "";
    caseHeroVideo.load();
  }
  if (caseHeroImage) {
    caseHeroImage.style.display = "block";
  }
  document.body.style.overflow = "";
}

if (caseClose) caseClose.addEventListener("click", closeCaseModal);
if (caseModal) {
  caseModal.addEventListener("click", (e) => {
    if (e.target === caseModal) closeCaseModal();
  });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && caseModal && caseModal.classList.contains("open")) {
    closeCaseModal();
  }
});

const accordion = document.querySelector(".image-accordion");
if (accordion) {
  const panels = [...accordion.querySelectorAll(".accordion-item")];
  let lockedPanel = null;

  function clearActivePanels() {
    panels.forEach((panel) => panel.classList.remove("is-active"));
    accordion.classList.remove("has-active");
  }

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      if (lockedPanel === panel) {
        lockedPanel = null;
        clearActivePanels();
        return;
      }
      lockedPanel = panel;
      clearActivePanels();
      accordion.classList.add("has-active");
      panel.classList.add("is-active");
    });

    panel.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        panel.click();
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (!accordion.contains(event.target)) {
      lockedPanel = null;
      clearActivePanels();
    }
  });
}
