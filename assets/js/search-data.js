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
            },},{id: "projects-adaptive-mesh-refinement-with-hash-tables",
          title: 'Adaptive mesh refinement with hash tables',
          description: "A block-structured Cartesian grid refines and coarsens as a cylinder and a flapping NACA0015 foil move through it, using a hash-table AMR framework coupled to the IB–LBM.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/amr/";
            },},{id: "projects-transition-to-chaos-in-a-collapsible-channel",
          title: 'Transition to chaos in a collapsible channel',
          description: "A 2D channel with two elastic wall segments — depending on Re and the wall mass, the walls stay still or oscillate periodically, through period-doubling, quasi-periodically or chaotically.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/collapsible-re/";
            },},{id: "projects-self-excited-oscillations-of-a-3d-collapsible-tube",
          title: 'Self-excited oscillations of a 3D collapsible tube',
          description: "A thin-walled elastic tube collapses into a two-lobed shape and oscillates, driven by vortex shedding downstream of the throat, in laminar and turbulent flow.",
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
            },},{id: "projects-fsi-benchmarks-flexible-filament-and-flapping-flag",
          title: 'FSI benchmarks — flexible filament and flapping flag',
          description: "Two standard fluid–structure interaction benchmarks, a 2D flexible filament and a 3D flapping flag, compared with published results.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fsi-benchmarks/";
            },},{id: "projects-mechanical-heart-valve-leaflet-in-pulsatile-flow",
          title: 'Mechanical heart valve leaflet in pulsatile flow',
          description: "A rigid valve leaflet swings open and shut in pulsatile flow past an aortic sinus — validated against experiment, then applied to supravalvular aortic stenosis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mechanical-heart-valve/";
            },},{id: "projects-flow-past-a-naca0012-aerofoil",
          title: 'Flow past a NACA0012 aerofoil',
          description: "Two-dimensional flow past a NACA0012 aerofoil and the vortices shed into its wake.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/naca0012/";
            },},{id: "projects-passively-pitching-flapping-wings-in-hover",
          title: 'Passively pitching flapping wings in hover',
          description: "An insect-like wing flaps on a prescribed stroke while a torsional spring at the hinge lets it pitch freely — wing shape and hinge stiffness set the lift and the power economy.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/passively-flapping-wings/";
            },},{id: "projects-structural-solver-verification",
          title: 'Structural solver verification',
          description: "Stand-alone tests of my in-house structural solvers, a large-deformation beam and explicit 3D finite elements, against published solutions.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/structural-solver-verification/";
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
