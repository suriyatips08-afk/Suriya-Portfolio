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
const caseProjectLink = document.getElementById("caseProjectLink");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const projectCaseStudies = {
  "Colonial Parkway": {
    category: "2D Image Sequence",
    role: "2D Artist",
    year: "2025",
    challenge:
      "Build a coherent visual story across a 2D image sequence where each frame must feel cinematic on its own while still preserving continuity in mood, depth, and direction from one shot to the next.",
    solution:
      "I created a structured sequence workflow using thumbnail planning, tonal consistency checks, and frame-by-frame composition alignment in Krita and Photoshop, resulting in a unified narrative progression with strong visual rhythm.",
    link: "Artboard 2_merged.pdf",
    hero: "assets/colonial-parkway-seq-1.png",
    gallery: [
      "assets/colonial-parkway-seq-1.png"
    ]
  },
  "Sanamahi's Blade": {
    category: "World Design",
    role: "Environment Designer",
    year: "2025",
    challenge:
      "Translate the spirit of Huyen Langlon into a cohesive fantasy world that balances cultural inspiration, gameplay readability, and cinematic atmosphere across key locations.",
    solution:
      "I developed a layered world-design pipeline combining terrain blockouts, focal architecture, and mood-driven lighting, then refined environment storytelling and UI-linked visual cues using Blender, Unreal, Photoshop, and Figma.",
    video: "MAIN_1.mp4",
    hero: "assets/sanamahis-blade-thumbnail.png",
    gallery: [
      "assets/sanamahis-blade-thumbnail.png"
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
    category: "UI/UX Case Study",
    role: "UI/UX Designer",
    year: "2024",
    challenge:
      "Design a cybersecurity app experience that makes threat monitoring easy for both technical and non-technical users, while reducing fear and confusion often caused by complex security interfaces.",
    solution:
      "The final outcome is a clear, high-contrast dashboard system with guided navigation, simplified security language, and action-focused UI patterns that help users quickly understand risks and respond with confidence.",
    link: "https://www.behance.net/gallery/245192395/ZENON-Cybersecurity-Monitoring-App-UIUX-Case-Study",
    hero: "assets/zenon-thumbnail.png",
    gallery: [
      "assets/zenon-thumbnail.png"
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
  if (caseProjectLink) {
    if (details.link) {
      caseProjectLink.style.display = "inline-flex";
      caseProjectLink.href = details.link;
    } else {
      caseProjectLink.style.display = "none";
      caseProjectLink.removeAttribute("href");
    }
  }

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
