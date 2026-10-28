// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed journal articles, newest first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-awarded-a-qut-ecr-ideas-scheme-grant-as-lead-ci-for-a-project-on-fluid-structure-electrophysiology-acoustics-interactions-in-the-left-atrium-2025-2026",
          title: 'Awarded a QUT ECR Ideas Scheme grant as Lead CI, for a project...',
          description: "",
          section: "News",},{id: "news-oral-presentation-at-acpaaf-2026-sydney-ib-lbm-and-its-applications-for-fsi-from-blood-flow-to-insect-flight",
          title: 'Oral presentation at ACPAAF 2026, Sydney: “IB–LBM and its applications for FSI: from...',
          description: "",
          section: "News",},{id: "news-co-authored-review-lattice-boltzmann-methods-for-simulating-non-newtonian-fluids-a-comprehensive-review-j-non-newtonian-fluid-mech-2026",
          title: 'Co-authored review “Lattice Boltzmann methods for simulating non-Newtonian fluids: a comprehensive review”, J....',
          description: "",
          section: "News",},{id: "news-co-authored-journal-of-fluid-mechanics-paper-spanwise-twisting-optimises-flapping-wing-propulsive-efficiency-through-force-reallocation-and-regulation-of-leading-edge-vortex-growth-jfm-1042-a16-2026",
          title: 'Co-authored Journal of Fluid Mechanics paper: spanwise twisting optimises flapping-wing propulsive efficiency through...',
          description: "",
          section: "News",},{id: "news-first-author-paper-in-physics-of-fluids-non-newtonian-fluid-structure-interaction-in-three-dimensional-collapsible-tubes-an-immersed-boundary-lattice-boltzmann-method-phys-fluids-38-6-063109-2026",
          title: 'First-author paper in Physics of Fluids: “Non-Newtonian fluid–structure interaction in three-dimensional collapsible tubes:...',
          description: "",
          section: "News",},{id: "news-launched-the-teraviq-website",
          title: 'Launched the Teraviq website',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-10-teraviq-website/";
            },},{id: "projects-adaptive-mesh-refinement-for-a-cylinder-and-an-aerofoil",
          title: 'Adaptive mesh refinement for a cylinder and an aerofoil',
          description: "Block-structured mesh refinement around a cylinder and a NACA0015 aerofoil, coloured by streamwise velocity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/amr/";
            },},{id: "projects-two-sided-collapsible-channel",
          title: 'Two-sided collapsible channel',
          description: "Flow through a 2D channel with two compliant wall segments, and the vortex train downstream.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/collapsible-channel-2d/";
            },},{id: "projects-collapsible-tube-flow-from-re-250-to-800",
          title: 'Collapsible-tube flow from Re = 250 to 800',
          description: "One collapsible geometry at four Reynolds numbers — how the jet through the collapsed segment and the downstream wake change.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/collapsible-re/";
            },},{id: "projects-three-dimensional-collapsible-tube",
          title: 'Three-dimensional collapsible tube',
          description: "A compliant tube collapses under the flow; vortex structures form downstream of the collapsed section.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/collapsible-tube-3d/";
            },},{id: "projects-pulsatile-flow-in-a-coronary-artery-tree",
          title: 'Pulsatile flow in a coronary artery tree',
          description: "Pulsatile flow rates at the outlets of the left and right coronary branches over successive cardiac cycles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/coronary-pulse/";
            },},{id: "projects-dragonfly-flight",
          title: 'Dragonfly flight',
          description: "A three-dimensional dragonfly model with flapping fore- and hindwings.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dragonfly/";
            },},{id: "projects-fish-swimming",
          title: 'Fish swimming',
          description: "An undulating swimmer and the vortices in its wake, shown by vorticity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fish-swimming/";
            },},{id: "projects-mechanical-heart-valve",
          title: 'Mechanical heart valve',
          description: "A valve leaflet in a channel with a sinus, and the vortices around it, shown by vorticity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mechanical-heart-valve/";
            },},{id: "projects-flow-past-a-naca0012-aerofoil",
          title: 'Flow past a NACA0012 aerofoil',
          description: "Two-dimensional flow past a NACA0012 aerofoil and the vortices shed into its wake.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/naca0012/";
            },},{id: "projects-passively-flapping-wings",
          title: 'Passively flapping wings',
          description: "A flexible flapping wing with its lift coefficient over the flapping cycle and the surrounding vortex structures.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/passively-flapping-wings/";
            },},{id: "projects-impact-damage-plate-perforation-and-taylor-impact",
          title: 'Impact damage — plate perforation and Taylor impact',
          description: "Material point method (MPM) simulations of plate perforation and a Taylor impact test, each validated against experiment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/structure-damage/";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/ryan-huang.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%71%78%68%75%61%6E%67%32%30%31%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Ryan-HUANG2018", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/qiuxiang-huang", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Qiuxiang-Huang/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=RVQMTLsAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/Qiuxiang_Huang", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@qiuxianghuang5208", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },];
