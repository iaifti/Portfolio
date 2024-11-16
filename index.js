// Initialize particles.js
particlesJS('particles-js', {
  particles: {
    number: {
      value: 600,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#EE6B4D", "#808080", "#FFFFFF"]
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 1,
      random: false
    },
    size: {
      value: 5,
      random: true
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable:true ,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 300,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 50,
        duration: 0.9
      },
      push: {
        particles_nb: 7
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});

// Smooth Scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const targetId = this.getAttribute('href').substring(1); // Get the target id from href (e.g., "#home" -> "home")
      const targetElement = document.getElementById(targetId); // Get the target element by id

      if (targetElement) {
          // Scroll to the target element smoothly
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start' // Align the section to the top of the viewport
          });
      }
  });
});


