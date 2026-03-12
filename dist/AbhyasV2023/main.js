"use strict";
(self["webpackChunkAbhyasV2023"] = self["webpackChunkAbhyasV2023"] || []).push([["main"],{

/***/ 3176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminRoutingModule": () => (/* binding */ AdminRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AdminRoutingModule {}
AdminRoutingModule.ɵfac = function AdminRoutingModule_Factory(t) {
  return new (t || AdminRoutingModule)();
};
AdminRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AdminRoutingModule
});
AdminRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminModule": () => (/* binding */ AdminModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3176);
/* harmony import */ var _screens_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/dashboard/dashboard.component */ 1069);
/* harmony import */ var _screens_dashboard_portfolio_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/dashboard/portfolio/about/about.component */ 6294);
/* harmony import */ var _screens_dashboard_portfolio_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/dashboard/portfolio/achievements/achievements.component */ 2430);
/* harmony import */ var _screens_dashboard_portfolio_certifications_certifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/dashboard/portfolio/certifications/certifications.component */ 8364);
/* harmony import */ var _screens_dashboard_portfolio_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/dashboard/portfolio/contact/contact.component */ 3653);
/* harmony import */ var _screens_dashboard_portfolio_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./screens/dashboard/portfolio/experience/experience.component */ 7245);
/* harmony import */ var _screens_dashboard_portfolio_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./screens/dashboard/portfolio/footer/footer.component */ 7831);
/* harmony import */ var _screens_dashboard_portfolio_hero_hero_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./screens/dashboard/portfolio/hero/hero.component */ 5554);
/* harmony import */ var _screens_dashboard_portfolio_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/dashboard/portfolio/navbar/navbar.component */ 4196);
/* harmony import */ var _screens_dashboard_portfolio_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./screens/dashboard/portfolio/projects/projects.component */ 8094);
/* harmony import */ var _screens_dashboard_portfolio_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./screens/dashboard/portfolio/skills/skills.component */ 3560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);














class AdminModule {}
AdminModule.ɵfac = function AdminModule_Factory(t) {
  return new (t || AdminModule)();
};
AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AdminModule
});
AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule, _screens_dashboard_portfolio_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__.PortfolioNavbarComponent, _screens_dashboard_portfolio_hero_hero_component__WEBPACK_IMPORTED_MODULE_8__.PortfolioHeroComponent, _screens_dashboard_portfolio_about_about_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioAboutComponent, _screens_dashboard_portfolio_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__.PortfolioSkillsComponent, _screens_dashboard_portfolio_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__.PortfolioProjectsComponent, _screens_dashboard_portfolio_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__.PortfolioExperienceComponent, _screens_dashboard_portfolio_certifications_certifications_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioCertificationsComponent, _screens_dashboard_portfolio_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_3__.PortfolioAchievementsComponent, _screens_dashboard_portfolio_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.PortfolioContactComponent, _screens_dashboard_portfolio_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.PortfolioFooterComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AdminModule, {
    declarations: [_screens_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminRoutingModule, _screens_dashboard_portfolio_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__.PortfolioNavbarComponent, _screens_dashboard_portfolio_hero_hero_component__WEBPACK_IMPORTED_MODULE_8__.PortfolioHeroComponent, _screens_dashboard_portfolio_about_about_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioAboutComponent, _screens_dashboard_portfolio_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__.PortfolioSkillsComponent, _screens_dashboard_portfolio_projects_projects_component__WEBPACK_IMPORTED_MODULE_10__.PortfolioProjectsComponent, _screens_dashboard_portfolio_experience_experience_component__WEBPACK_IMPORTED_MODULE_6__.PortfolioExperienceComponent, _screens_dashboard_portfolio_certifications_certifications_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioCertificationsComponent, _screens_dashboard_portfolio_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_3__.PortfolioAchievementsComponent, _screens_dashboard_portfolio_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.PortfolioContactComponent, _screens_dashboard_portfolio_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.PortfolioFooterComponent]
  });
})();

/***/ }),

/***/ 1069:
/*!****************************************************************!*\
  !*** ./src/app/admin/screens/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _portfolio_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio/navbar/navbar.component */ 4196);
/* harmony import */ var _portfolio_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio/hero/hero.component */ 5554);
/* harmony import */ var _portfolio_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio/about/about.component */ 6294);
/* harmony import */ var _portfolio_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./portfolio/skills/skills.component */ 3560);
/* harmony import */ var _portfolio_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portfolio/projects/projects.component */ 8094);
/* harmony import */ var _portfolio_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/experience/experience.component */ 7245);
/* harmony import */ var _portfolio_certifications_certifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/certifications/certifications.component */ 8364);
/* harmony import */ var _portfolio_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio/achievements/achievements.component */ 2430);
/* harmony import */ var _portfolio_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/contact/contact.component */ 3653);
/* harmony import */ var _portfolio_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portfolio/footer/footer.component */ 7831);













class DashboardComponent {
  constructor(route) {
    this.route = route;
    this.darkMode = false;
    this.scrollDepth = 0;
    this.scrollPx = 0;
    this.mouseX = 0;
    this.mouseY = 0;
    this.sectionObserver = null;
    this.name = 'Janapaneedi Chakradhar';
    this.role = 'Full-Stack Developer & Backend Developer';
    this.company = 'Criativo Company, Kakinada';
    this.intro = 'I design and build scalable products end-to-end, from secure backend APIs to responsive Angular interfaces. My focus is maintainable architecture, performance, and practical business impact.';
    this.typingSkills = ['Angular', 'Node.js', 'FastAPI', 'MongoDB', 'WebSockets', 'Automation'];
    this.navLinks = [{
      label: 'Home',
      fragment: 'hero'
    }, {
      label: 'About',
      fragment: 'about'
    }, {
      label: 'Skills',
      fragment: 'skills'
    }, {
      label: 'Projects',
      fragment: 'projects'
    }, {
      label: 'Experience',
      fragment: 'experience'
    }, {
      label: 'Certs',
      fragment: 'certifications'
    }, {
      label: 'Wins',
      fragment: 'achievements'
    }, {
      label: 'Contact',
      fragment: 'contact'
    }];
    this.heroStats = [{
      label: 'Projects',
      value: '6+ Delivered'
    }, {
      label: 'Awards',
      value: '3 Major Wins'
    }, {
      label: 'Primary Focus',
      value: 'Backend APIs'
    }, {
      label: 'Deployment',
      value: 'Railway / Vercel'
    }];
    this.education = [{
      degree: 'B.Sc (2025 Batch)',
      institution: 'Aditya Degree College, Kakinada',
      score: '72%',
      year: '2025'
    }, {
      degree: 'Intermediate',
      institution: 'Aditya Junior College, Kakinada',
      score: '76%',
      year: '2021'
    }, {
      degree: '10th',
      institution: 'Swamy E.M High School',
      score: '83%',
      year: '2019'
    }];
    this.story = 'I am a full-stack engineer who enjoys solving backend-heavy challenges while delivering strong frontend experiences. At Criativo Company, I build secure and production-ready systems, participate in rapid product development, and contribute to team-driven innovation with an execution-first mindset.';
    this.skillGroups = [{
      category: 'Frontend',
      skills: [{
        name: 'Angular',
        level: 90,
        icon: 'bi-stars'
      }, {
        name: 'JavaScript',
        level: 86,
        icon: 'bi-filetype-js'
      }, {
        name: 'Bootstrap',
        level: 88,
        icon: 'bi-bootstrap'
      }, {
        name: 'HTML & CSS',
        level: 92,
        icon: 'bi-code-slash'
      }]
    }, {
      category: 'Backend & Databases',
      skills: [{
        name: 'Node.js',
        level: 89,
        icon: 'bi-hdd-network'
      }, {
        name: 'Python / FastAPI',
        level: 87,
        icon: 'bi-terminal-fill'
      }, {
        name: 'MongoDB',
        level: 85,
        icon: 'bi-database-fill-gear'
      }, {
        name: 'Firebase',
        level: 80,
        icon: 'bi-cloud-upload-fill'
      }]
    }, {
      category: 'Tools & DevOps',
      skills: [{
        name: 'Git & GitHub',
        level: 90,
        icon: 'bi-git'
      }, {
        name: 'VS Code',
        level: 93,
        icon: 'bi-window-stack'
      }, {
        name: 'Railway / Vercel',
        level: 82,
        icon: 'bi-cloud-check-fill'
      }, {
        name: 'MongoDB Compass',
        level: 84,
        icon: 'bi-diagram-3-fill'
      }, {
        name: 'Three.js',
        level: 78,
        icon: 'bi-bounding-box-circles'
      }, {
        name: 'GSAP',
        level: 76,
        icon: 'bi-activity'
      }, {
        name: 'Next.js',
        level: 72,
        icon: 'bi-stack'
      }]
    }, {
      category: 'Advanced Engineering',
      skills: [{
        name: 'API Development',
        level: 90,
        icon: 'bi-plug-fill'
      }, {
        name: 'WebSockets',
        level: 82,
        icon: 'bi-broadcast-pin'
      }, {
        name: 'Automation',
        level: 84,
        icon: 'bi-gear-wide-connected'
      }, {
        name: 'Secure System Design',
        level: 81,
        icon: 'bi-shield-lock-fill'
      }]
    }];
    this.projects = [{
      title: 'Lead Management System',
      description: 'Built a centralized full-stack platform for tracking leads, status updates, and follow-up workflows.',
      stack: ['Angular', 'Node.js', 'MongoDB'],
      github: 'https://github.com/',
      live: 'https://vercel.com/'
    }, {
      title: 'File Integrated Management System',
      description: 'Engineered a secure document pipeline with role-based access, uploads, and indexed retrieval.',
      stack: ['Angular', 'FastAPI', 'MongoDB'],
      github: 'https://github.com/',
      live: 'https://vercel.com/'
    }, {
      title: 'Secure Exam Portal',
      description: 'Created a proctoring-oriented exam portal that restricts screenshot/copy actions and hardens session flow.',
      stack: ['Angular', 'Node.js', 'Web APIs'],
      github: 'https://github.com/',
      live: 'https://vercel.com/'
    }, {
      title: 'Voting System for College Projects',
      description: 'Implemented voting lifecycle, validation, and transparent result aggregation for project competitions.',
      stack: ['Angular', 'Firebase'],
      github: 'https://github.com/',
      live: 'https://vercel.com/'
    }, {
      title: 'Network Intrusion Detection System',
      description: 'Developed a Flask and Dash solution with Scapy packet analysis and RandomForestClassifier threat detection.',
      stack: ['Flask', 'Dash', 'Scapy', 'ML'],
      github: 'https://github.com/',
      live: 'https://vercel.com/'
    }, {
      title: 'Notification Sender',
      description: 'Delivered real-time Angular + Firebase push notification service for system and user-triggered updates.',
      stack: ['Angular', 'Firebase', 'Cloud Messaging'],
      github: 'https://github.com/',
      live: 'https://vercel.com/'
    }];
    this.experiences = [{
      title: 'Full-Stack Developer & Backend Developer',
      company: 'Criativo Company, Kakinada',
      duration: '2025 - Present',
      summary: 'Owning backend-heavy delivery while collaborating across product and frontend workflows to launch reliable web systems.',
      highlights: ['Designed API-first architecture and service integrations for business workflows.', 'Implemented secure access patterns and production-grade dashboard capabilities.', 'Shipped data-driven Angular interfaces connected to scalable backend services.']
    }];
    this.certifications = [{
      title: 'HackerRank Python Certificate',
      issuer: 'HackerRank',
      badge: 'Verified'
    }, {
      title: 'Python Certificate',
      issuer: 'Criativo Company',
      badge: 'Professional'
    }, {
      title: 'Mobile App Hackathon Certificate',
      issuer: 'Adhoc Company',
      badge: 'Hackathon'
    }, {
      title: 'AWS (S3, IAM User Creation)',
      issuer: 'Adhoc Company',
      badge: 'Cloud'
    }];
    this.achievements = [{
      title: 'Rising Star of the Year 2025',
      detail: 'Recognized at Criativo Company for high-impact execution.'
    }, {
      title: '1st Place - Coding Contest',
      detail: 'Won first place by delivering optimized and accurate solutions.'
    }, {
      title: '1st Place - NSS Quiz',
      detail: 'Secured top position in competitive NSS knowledge challenge.'
    }];
    this.socialLinks = [{
      label: 'LinkedIn',
      icon: 'bi-linkedin',
      url: 'https://www.linkedin.com/'
    }, {
      label: 'GitHub',
      icon: 'bi-github',
      url: 'https://github.com/'
    }, {
      label: 'Email',
      icon: 'bi-envelope-fill',
      url: 'mailto:chakri.dev@example.com'
    }];
    this.email = 'chakri.dev@example.com';
    this.linkedin = 'https://www.linkedin.com/';
    this.github = 'https://github.com/';
    this.location = 'Kakinada, Andhra Pradesh, India';
  }
  ngOnInit() {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (!savedTheme) {
      this.darkMode = true;
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      this.darkMode = savedTheme === 'dark';
    }
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          document.getElementById(fragment)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    });
  }
  ngAfterViewInit() {
    const nodes = Array.from(document.querySelectorAll('.fx-reveal'));
    this.sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.22,
      rootMargin: '0px 0px -8% 0px'
    });
    nodes.forEach(node => this.sectionObserver?.observe(node));
    this.updateScrollState();
  }
  ngOnDestroy() {
    this.sectionObserver?.disconnect();
    this.sectionObserver = null;
  }
  toggleTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('portfolio-theme', this.darkMode ? 'dark' : 'light');
  }
  onWindowScroll() {
    this.updateScrollState();
  }
  onMouseMove(event) {
    const x = event.clientX - window.innerWidth / 2;
    const y = event.clientY - window.innerHeight / 2;
    this.mouseX = Math.max(Math.min(x, 180), -180);
    this.mouseY = Math.max(Math.min(y, 180), -180);
  }
  updateScrollState() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    this.scrollPx = scrollTop;
    this.scrollDepth = Math.min(scrollTop / maxScroll, 1);
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  hostBindings: function DashboardComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("scroll", function DashboardComponent_scroll_HostBindingHandler() {
        return ctx.onWindowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"])("mousemove", function DashboardComponent_mousemove_HostBindingHandler($event) {
        return ctx.onMouseMove($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresolveWindow"]);
    }
  },
  decls: 71,
  vars: 35,
  consts: [[1, "portfolio-shell"], [1, "fx-grid"], [1, "fx-noise"], [1, "fx-beam"], [1, "side-gallery", "side-gallery-left"], ["src", "assets/img/chakrilogo.png", "alt", "Chakri"], ["src", "assets/img/chart.png", "alt", "Portfolio"], [1, "portfolio-content"], [3, "name", "links", "darkMode", "themeToggle"], ["id", "hero", 1, "portfolio-section", "full-width-section", "hero-block", "fx-reveal", "fx-zoom"], [1, "container-fluid", "section-fluid"], [3, "name", "role", "company", "intro", "typedSkills", "stats"], ["id", "about", 1, "portfolio-section", "full-width-section", "about-block", "fx-reveal", "fx-left"], [1, "section-heading"], [3, "story", "education"], ["id", "skills", 1, "portfolio-section", "full-width-section", "fx-reveal", "fx-right"], [3, "groups"], ["id", "projects", 1, "portfolio-section", "full-width-section", "fx-reveal", "fx-up"], [3, "projects"], ["id", "experience", 1, "portfolio-section", "full-width-section", "fx-reveal", "fx-down"], [3, "experiences"], ["id", "certifications", 1, "portfolio-section", "full-width-section", "fx-reveal", "fx-left"], [3, "certifications"], ["id", "achievements", 1, "portfolio-section", "full-width-section", "fx-reveal", "fx-right"], [3, "achievements"], ["id", "contact", 1, "portfolio-section", "full-width-section", "fx-reveal", "fx-up"], [3, "email", "linkedin", "github", "location"], ["id", "footer", 1, "portfolio-section", "full-width-section", "footer-space", "fx-reveal", "fx-zoom"], [1, "container-fluid", "section-fluid", "footer-center"], [3, "name", "quickLinks", "socials"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "img", 5)(6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 7)(8, "app-portfolio-navbar", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("themeToggle", function DashboardComponent_Template_app_portfolio_navbar_themeToggle_8_listener() {
        return ctx.toggleTheme();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "section", 9)(10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "app-portfolio-hero", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "section", 12)(13, "div", 10)(14, "div", 13)(15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "About Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18, "Education and professional journey");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "app-portfolio-about", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "section", 15)(21, "div", 10)(22, "div", 13)(23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Skills");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Full-stack capabilities with backend strength");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "app-portfolio-skills", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "section", 17)(29, "div", 10)(30, "div", 13)(31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Selected work and technical delivery");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "app-portfolio-projects", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "section", 19)(37, "div", 10)(38, "div", 13)(39, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "Timeline of professional impact");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "app-portfolio-experience", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "section", 21)(45, "div", 10)(46, "div", 13)(47, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Certifications");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Validated technical learning");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "app-portfolio-certifications", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "section", 23)(53, "div", 10)(54, "div", 13)(55, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "Achievements");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "Awards and recognitions");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](59, "app-portfolio-achievements", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](60, "section", 25)(61, "div", 10)(62, "div", 13)(63, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](65, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](66, "Let us connect for impactful products");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](67, "app-portfolio-contact", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](68, "section", 27)(69, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](70, "app-portfolio-footer", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵstyleProp"]("--scroll-depth", ctx.scrollDepth)("--scroll-px", ctx.scrollPx + "px")("--mouse-x", ctx.mouseX + "px")("--mouse-y", ctx.mouseY + "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("dark-theme", ctx.darkMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@pageReveal", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("@sectionCascade", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", ctx.name)("links", ctx.navLinks)("darkMode", ctx.darkMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", ctx.name)("role", ctx.role)("company", ctx.company)("intro", ctx.intro)("typedSkills", ctx.typingSkills)("stats", ctx.heroStats);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("story", ctx.story)("education", ctx.education);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("groups", ctx.skillGroups);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("projects", ctx.projects);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("experiences", ctx.experiences);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("certifications", ctx.certifications);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("achievements", ctx.achievements);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("email", ctx.email)("linkedin", ctx.linkedin)("github", ctx.github)("location", ctx.location);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("name", ctx.name)("quickLinks", ctx.navLinks)("socials", ctx.socialLinks);
    }
  },
  dependencies: [_portfolio_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.PortfolioNavbarComponent, _portfolio_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__.PortfolioHeroComponent, _portfolio_about_about_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioAboutComponent, _portfolio_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__.PortfolioSkillsComponent, _portfolio_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioProjectsComponent, _portfolio_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__.PortfolioExperienceComponent, _portfolio_certifications_certifications_component__WEBPACK_IMPORTED_MODULE_6__.PortfolioCertificationsComponent, _portfolio_achievements_achievements_component__WEBPACK_IMPORTED_MODULE_7__.PortfolioAchievementsComponent, _portfolio_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__.PortfolioContactComponent, _portfolio_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.PortfolioFooterComponent],
  styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.portfolio-shell[_ngcontent-%COMP%] {\r\n  --bg-color: #f4f7fb;\r\n  --text-color: #0f172a;\r\n  --muted-text: #334155;\r\n  --subtle-text: #475569;\r\n  --line-color: rgba(15, 23, 42, 0.12);\r\n  --surface-card: rgba(255, 255, 255, 0.9);\r\n  --surface-glass: rgba(255, 255, 255, 0.72);\r\n  --chip-bg: rgba(15, 23, 42, 0.06);\r\n  --accent-color: #0f766e;\r\n  --accent-soft: #22d3ee;\r\n  --card-shadow: 0 14px 34px rgba(2, 8, 23, 0.08);\r\n  position: relative;\r\n  min-height: 100%;\r\n  color: var(--text-color);\r\n  background:\r\n    radial-gradient(900px 540px at -12% -18%, rgba(14, 165, 233, 0.16), transparent 58%),\r\n    radial-gradient(700px 420px at 112% 6%, rgba(20, 184, 166, 0.17), transparent 62%),\r\n    linear-gradient(180deg, #f9fbfd 0%, var(--bg-color) 100%);\r\n  background-size: 120% 120%, 120% 120%, 100% 100%;\r\n  transition: color 0.35s ease, background 0.35s ease;\r\n  animation: _ngcontent-%COMP%_ambienceShift 16s ease-in-out infinite alternate;\r\n  overflow-x: clip;\r\n  --scroll-depth: 0;\r\n  --scroll-px: 0px;\r\n  --mouse-x: 0px;\r\n  --mouse-y: 0px;\r\n}\r\n\r\n.portfolio-shell.dark-theme[_ngcontent-%COMP%] {\r\n  --bg-color: #0b1220;\r\n  --text-color: #e2e8f0;\r\n  --muted-text: #cbd5e1;\r\n  --subtle-text: #94a3b8;\r\n  --line-color: rgba(148, 163, 184, 0.27);\r\n  --surface-card: rgba(15, 23, 42, 0.8);\r\n  --surface-glass: rgba(15, 23, 42, 0.67);\r\n  --chip-bg: rgba(51, 65, 85, 0.4);\r\n  --accent-color: #2dd4bf;\r\n  --accent-soft: #22d3ee;\r\n  --card-shadow: 0 14px 34px rgba(2, 8, 23, 0.45);\r\n  background:\r\n    radial-gradient(840px 500px at -12% -16%, rgba(8, 145, 178, 0.25), transparent 56%),\r\n    radial-gradient(620px 360px at 112% 8%, rgba(45, 212, 191, 0.14), transparent 58%),\r\n    linear-gradient(180deg, #030712 0%, #0b1220 100%);\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_ambienceShift {\r\n  0% {\r\n    background-position: 0% 0%, 100% 0%, 0 0;\r\n  }\r\n  100% {\r\n    background-position: 10% 7%, 90% 12%, 0 0;\r\n  }\r\n}\r\n\r\n.portfolio-content[_ngcontent-%COMP%] {\n  position: relative;\r\n  z-index: 3;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  padding: 1.35rem 1.25rem 4.2rem;\r\n  isolation: isolate;\r\n}\r\n\r\n.portfolio-content[_ngcontent-%COMP%]::before {\r\n  content: '';\r\n  position: absolute;\r\n  inset: 0;\r\n  z-index: -1;\r\n  pointer-events: none;\r\n  background:\r\n    linear-gradient(120deg, transparent 20%, rgba(34, 211, 238, 0.08) 45%, transparent 70%),\r\n    radial-gradient(circle at 20% 20%, rgba(15, 118, 110, 0.08), transparent 35%);\r\n  animation: _ngcontent-%COMP%_sweepCanvas 9s ease-in-out infinite;\r\n}\r\n\r\n.fx-grid[_ngcontent-%COMP%], .fx-noise[_ngcontent-%COMP%], .fx-beam[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  inset: 0;\r\n  pointer-events: none;\r\n  z-index: 1;\r\n}\r\n\r\n.fx-grid[_ngcontent-%COMP%] {\r\n  background-image:\r\n    linear-gradient(rgba(15, 118, 110, 0.06) 1px, transparent 1px),\r\n    linear-gradient(90deg, rgba(15, 118, 110, 0.06) 1px, transparent 1px);\r\n  background-size: 44px 44px, 44px 44px;\r\n  -webkit-mask-image: radial-gradient(circle at center, black 35%, transparent 80%);\r\n          mask-image: radial-gradient(circle at center, black 35%, transparent 80%);\r\n  opacity: 0.34;\r\n  transform: translateY(calc(var(--scroll-px) * -0.04));\r\n}\r\n\r\n.fx-noise[_ngcontent-%COMP%] {\r\n  opacity: 0.08;\r\n  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.7) 1px, transparent 1px);\r\n  background-size: 3px 3px;\r\n  animation: _ngcontent-%COMP%_noiseMove 0.7s steps(2) infinite;\r\n}\r\n\r\n.fx-beam[_ngcontent-%COMP%] {\r\n  background: linear-gradient(\r\n    120deg,\r\n    transparent 10%,\r\n    rgba(34, 211, 238, 0.12) 28%,\r\n    transparent 44%,\r\n    rgba(45, 212, 191, 0.1) 64%,\r\n    transparent 82%\r\n  );\r\n  transform: translateX(calc(var(--mouse-x) * 0.1)) translateY(calc(var(--scroll-px) * -0.02));\r\n  animation: _ngcontent-%COMP%_beamShift 8.5s ease-in-out infinite alternate;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_beamShift {\r\n  from {\r\n    opacity: 0.38;\r\n  }\r\n  to {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_noiseMove {\r\n  0% { transform: translate(0, 0); }\r\n  50% { transform: translate(0.5px, -0.5px); }\r\n  100% { transform: translate(-0.5px, 0.5px); }\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_sweepCanvas {\r\n  0% {\r\n    transform: translateX(-2%);\r\n    opacity: 0.7;\r\n  }\r\n  50% {\r\n    transform: translateX(2%);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: translateX(-2%);\r\n    opacity: 0.7;\r\n  }\r\n}\r\n\r\n.portfolio-section[_ngcontent-%COMP%] {\r\n  margin: 100px 0;\r\n  padding: 0;\r\n  scroll-margin-top: 90px;\r\n}\r\n\r\n.full-width-section[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  margin-left: calc(50% - 50vw);\r\n  margin-right: calc(50% - 50vw);\r\n}\r\n\r\n.section-fluid[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-left: clamp(1.2rem, 3.8vw, 3.25rem);\r\n  padding-right: clamp(1.2rem, 3.8vw, 3.25rem);\r\n}\r\n\r\n.footer-center[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  place-items: center;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.hero-block[_ngcontent-%COMP%] {\r\n  margin-top: 70px;\r\n}\r\n\r\n.about-block[_ngcontent-%COMP%] {\r\n  margin-top: 110px;\r\n}\r\n\r\n.portfolio-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  transition: transform 0.45s ease, box-shadow 0.45s ease, border-color 0.35s ease;\n}\n\n.portfolio-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n\r\n.portfolio-section[_ngcontent-%COMP%]:nth-of-type(odd)    > *[_ngcontent-%COMP%] {\r\n  animation: _ngcontent-%COMP%_breathe 6s ease-in-out infinite;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_breathe {\r\n  0%,\r\n  100% {\r\n    filter: saturate(1);\r\n  }\r\n  50% {\r\n    filter: saturate(1.08);\r\n  }\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  color: var(--accent-color);\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.12em;\r\n  font-size: 0.72rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  margin: 0.34rem 0 0;\r\n  color: var(--text-color);\r\n  font-size: clamp(1.1rem, 2.3vw, 1.46rem);\r\n  position: relative;\r\n  display: inline-block;\r\n  padding-right: 0.8rem;\r\n  letter-spacing: 0.01em;\r\n}\r\n\r\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::after {\r\n  content: '';\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: -0.35rem;\r\n  width: 48%;\r\n  height: 3px;\r\n  border-radius: 999px;\r\n  background: linear-gradient(90deg, var(--accent-color), transparent);\r\n  animation: _ngcontent-%COMP%_headingLine 1.6s ease-in-out infinite alternate;\r\n}\r\n\r\n@keyframes _ngcontent-%COMP%_headingLine {\r\n  from {\r\n    width: 28%;\r\n    opacity: 0.55;\r\n  }\r\n  to {\r\n    width: 58%;\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.footer-space[_ngcontent-%COMP%] {\n  margin-bottom: 120px;\n}\n\n.side-gallery[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 2;\n  display: grid;\n  gap: 16px;\n  pointer-events: none;\n}\n\n.side-gallery-left[_ngcontent-%COMP%] {\n  left: 24px;\n  top: 32%;\n  transform: translateY(-50%);\n}\n\n.side-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 86px;\n  height: 86px;\n  border-radius: 18px;\n  object-fit: cover;\n  border: 1px solid var(--line-color);\n  box-shadow: 0 14px 26px rgba(2, 8, 23, 0.24);\n  opacity: 0.9;\n  animation: _ngcontent-%COMP%_floatCard 6.4s ease-in-out infinite;\n}\n\n.side-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 1.3s;\n}\n\n@keyframes _ngcontent-%COMP%_floatCard {\n  0%,\n  100% { transform: translateY(0); }\n  50% { transform: translateY(-10px); }\n}\n\n.fx-reveal[_ngcontent-%COMP%] {\n  opacity: 0;\r\n  transform: translateY(42px) scale(0.985);\r\n  filter: blur(8px);\r\n  transition:\r\n    opacity 0.75s cubic-bezier(0.22, 1, 0.36, 1),\r\n    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),\r\n    filter 0.65s ease;\r\n}\r\n\r\n.fx-reveal.fx-up[_ngcontent-%COMP%] { transform: translateY(42px) scale(0.985); }\r\n.fx-reveal.fx-down[_ngcontent-%COMP%] { transform: translateY(-42px) scale(0.985); }\r\n.fx-reveal.fx-left[_ngcontent-%COMP%] { transform: translateX(-48px) scale(0.99); }\r\n.fx-reveal.fx-right[_ngcontent-%COMP%] { transform: translateX(48px) scale(0.99); }\r\n.fx-reveal.fx-zoom[_ngcontent-%COMP%] { transform: scale(0.92); filter: blur(10px); }\r\n\r\n.fx-reveal.in-view[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  transform: translateY(0) scale(1);\r\n  filter: blur(0);\r\n}\r\n\r\n@media (max-width: 992px) {\r\n  .portfolio-content[_ngcontent-%COMP%] {\r\n    padding: 1rem 0.95rem 2.8rem;\r\n  }\r\n\r\n  .portfolio-section[_ngcontent-%COMP%] {\r\n    margin: 82px 0;\r\n  }\r\n\r\n  .hero-block[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n  }\r\n\r\n  .about-block[_ngcontent-%COMP%] {\n    margin-top: 82px;\n  }\n\n  .side-gallery[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vc2NyZWVucy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLG9DQUFvQztFQUNwQyx3Q0FBd0M7RUFDeEMsMENBQTBDO0VBQzFDLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLCtDQUErQztFQUMvQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4Qjs7OzZEQUcyRDtFQUMzRCxnREFBZ0Q7RUFDaEQsbURBQW1EO0VBQ25ELDJEQUEyRDtFQUMzRCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMscUNBQXFDO0VBQ3JDLHVDQUF1QztFQUN2QyxnQ0FBZ0M7RUFDaEMsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QiwrQ0FBK0M7RUFDL0M7OztxREFHbUQ7QUFDckQ7O0FBRUE7RUFDRTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UseUNBQXlDO0VBQzNDO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEI7O2lGQUUrRTtFQUMvRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7OztFQUdFLGVBQWU7RUFDZixRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjs7QUFFQTtFQUNFOzt5RUFFdUU7RUFDdkUscUNBQXFDO0VBQ3JDLGlGQUF5RTtVQUF6RSx5RUFBeUU7RUFDekUsYUFBYTtFQUNiLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGFBQWE7RUFDYix3RkFBd0Y7RUFDeEYsd0JBQXdCO0VBQ3hCLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFOzs7Ozs7O0dBT0M7RUFDRCw0RkFBNEY7RUFDNUYsd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0UsS0FBSywwQkFBMEIsRUFBRTtFQUNqQyxNQUFNLG1DQUFtQyxFQUFFO0VBQzNDLE9BQU8sbUNBQW1DLEVBQUU7QUFDOUM7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdGQUFnRjtBQUNsRjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFOztJQUVFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsd0NBQXdDO0VBQ3hDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixvRUFBb0U7RUFDcEUsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLGFBQWE7RUFDYixTQUFTO0VBQ1Qsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7RUFDUiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUNBQW1DO0VBQ25DLDRDQUE0QztFQUM1QyxZQUFZO0VBQ1osOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7U0FDTyx3QkFBd0IsRUFBRTtFQUNqQyxNQUFNLDRCQUE0QixFQUFFO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakI7OztxQkFHbUI7QUFDckI7O0FBRUEsbUJBQW1CLHdDQUF3QyxFQUFFO0FBQzdELHFCQUFxQix5Q0FBeUMsRUFBRTtBQUNoRSxxQkFBcUIsd0NBQXdDLEVBQUU7QUFDL0Qsc0JBQXNCLHVDQUF1QyxFQUFFO0FBQy9ELHFCQUFxQixzQkFBc0IsRUFBRSxrQkFBa0IsRUFBRTs7QUFFakU7RUFDRSxVQUFVO0VBQ1YsaUNBQWlDO0VBQ2pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8tc2hlbGwge1xyXG4gIC0tYmctY29sb3I6ICNmNGY3ZmI7XHJcbiAgLS10ZXh0LWNvbG9yOiAjMGYxNzJhO1xyXG4gIC0tbXV0ZWQtdGV4dDogIzMzNDE1NTtcclxuICAtLXN1YnRsZS10ZXh0OiAjNDc1NTY5O1xyXG4gIC0tbGluZS1jb2xvcjogcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTtcclxuICAtLXN1cmZhY2UtY2FyZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gIC0tc3VyZmFjZS1nbGFzczogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKTtcclxuICAtLWNoaXAtYmc6IHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbiAgLS1hY2NlbnQtY29sb3I6ICMwZjc2NmU7XHJcbiAgLS1hY2NlbnQtc29mdDogIzIyZDNlZTtcclxuICAtLWNhcmQtc2hhZG93OiAwIDE0cHggMzRweCByZ2JhKDIsIDgsIDIzLCAwLjA4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIHJhZGlhbC1ncmFkaWVudCg5MDBweCA1NDBweCBhdCAtMTIlIC0xOCUsIHJnYmEoMTQsIDE2NSwgMjMzLCAwLjE2KSwgdHJhbnNwYXJlbnQgNTglKSxcclxuICAgIHJhZGlhbC1ncmFkaWVudCg3MDBweCA0MjBweCBhdCAxMTIlIDYlLCByZ2JhKDIwLCAxODQsIDE2NiwgMC4xNyksIHRyYW5zcGFyZW50IDYyJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZjlmYmZkIDAlLCB2YXIoLS1iZy1jb2xvcikgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMjAlIDEyMCUsIDEyMCUgMTIwJSwgMTAwJSAxMDAlO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMzVzIGVhc2UsIGJhY2tncm91bmQgMC4zNXMgZWFzZTtcclxuICBhbmltYXRpb246IGFtYmllbmNlU2hpZnQgMTZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcclxuICBvdmVyZmxvdy14OiBjbGlwO1xyXG4gIC0tc2Nyb2xsLWRlcHRoOiAwO1xyXG4gIC0tc2Nyb2xsLXB4OiAwcHg7XHJcbiAgLS1tb3VzZS14OiAwcHg7XHJcbiAgLS1tb3VzZS15OiAwcHg7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8tc2hlbGwuZGFyay10aGVtZSB7XHJcbiAgLS1iZy1jb2xvcjogIzBiMTIyMDtcclxuICAtLXRleHQtY29sb3I6ICNlMmU4ZjA7XHJcbiAgLS1tdXRlZC10ZXh0OiAjY2JkNWUxO1xyXG4gIC0tc3VidGxlLXRleHQ6ICM5NGEzYjg7XHJcbiAgLS1saW5lLWNvbG9yOiByZ2JhKDE0OCwgMTYzLCAxODQsIDAuMjcpO1xyXG4gIC0tc3VyZmFjZS1jYXJkOiByZ2JhKDE1LCAyMywgNDIsIDAuOCk7XHJcbiAgLS1zdXJmYWNlLWdsYXNzOiByZ2JhKDE1LCAyMywgNDIsIDAuNjcpO1xyXG4gIC0tY2hpcC1iZzogcmdiYSg1MSwgNjUsIDg1LCAwLjQpO1xyXG4gIC0tYWNjZW50LWNvbG9yOiAjMmRkNGJmO1xyXG4gIC0tYWNjZW50LXNvZnQ6ICMyMmQzZWU7XHJcbiAgLS1jYXJkLXNoYWRvdzogMCAxNHB4IDM0cHggcmdiYSgyLCA4LCAyMywgMC40NSk7XHJcbiAgYmFja2dyb3VuZDpcclxuICAgIHJhZGlhbC1ncmFkaWVudCg4NDBweCA1MDBweCBhdCAtMTIlIC0xNiUsIHJnYmEoOCwgMTQ1LCAxNzgsIDAuMjUpLCB0cmFuc3BhcmVudCA1NiUpLFxyXG4gICAgcmFkaWFsLWdyYWRpZW50KDYyMHB4IDM2MHB4IGF0IDExMiUgOCUsIHJnYmEoNDUsIDIxMiwgMTkxLCAwLjE0KSwgdHJhbnNwYXJlbnQgNTglKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMwMzA3MTIgMCUsICMwYjEyMjAgMTAwJSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW1iaWVuY2VTaGlmdCB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMCUsIDEwMCUgMCUsIDAgMDtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMCUgNyUsIDkwJSAxMiUsIDAgMDtcclxuICB9XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8tY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAzO1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEuMzVyZW0gMS4yNXJlbSA0LjJyZW07XHJcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xyXG59XHJcblxyXG4ucG9ydGZvbGlvLWNvbnRlbnQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGluc2V0OiAwO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJhY2tncm91bmQ6XHJcbiAgICBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCB0cmFuc3BhcmVudCAyMCUsIHJnYmEoMzQsIDIxMSwgMjM4LCAwLjA4KSA0NSUsIHRyYW5zcGFyZW50IDcwJSksXHJcbiAgICByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDIwJSAyMCUsIHJnYmEoMTUsIDExOCwgMTEwLCAwLjA4KSwgdHJhbnNwYXJlbnQgMzUlKTtcclxuICBhbmltYXRpb246IHN3ZWVwQ2FudmFzIDlzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4uZngtZ3JpZCxcclxuLmZ4LW5vaXNlLFxyXG4uZngtYmVhbSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGluc2V0OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5meC1ncmlkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgbGluZWFyLWdyYWRpZW50KHJnYmEoMTUsIDExOCwgMTEwLCAwLjA2KSAxcHgsIHRyYW5zcGFyZW50IDFweCksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTUsIDExOCwgMTEwLCAwLjA2KSAxcHgsIHRyYW5zcGFyZW50IDFweCk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA0NHB4IDQ0cHgsIDQ0cHggNDRweDtcclxuICBtYXNrLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgYmxhY2sgMzUlLCB0cmFuc3BhcmVudCA4MCUpO1xyXG4gIG9wYWNpdHk6IDAuMzQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGNhbGModmFyKC0tc2Nyb2xsLXB4KSAqIC0wLjA0KSk7XHJcbn1cclxuXHJcbi5meC1ub2lzZSB7XHJcbiAgb3BhY2l0eTogMC4wODtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykgMXB4LCB0cmFuc3BhcmVudCAxcHgpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogM3B4IDNweDtcclxuICBhbmltYXRpb246IG5vaXNlTW92ZSAwLjdzIHN0ZXBzKDIpIGluZmluaXRlO1xyXG59XHJcblxyXG4uZngtYmVhbSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgMTIwZGVnLFxyXG4gICAgdHJhbnNwYXJlbnQgMTAlLFxyXG4gICAgcmdiYSgzNCwgMjExLCAyMzgsIDAuMTIpIDI4JSxcclxuICAgIHRyYW5zcGFyZW50IDQ0JSxcclxuICAgIHJnYmEoNDUsIDIxMiwgMTkxLCAwLjEpIDY0JSxcclxuICAgIHRyYW5zcGFyZW50IDgyJVxyXG4gICk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGModmFyKC0tbW91c2UteCkgKiAwLjEpKSB0cmFuc2xhdGVZKGNhbGModmFyKC0tc2Nyb2xsLXB4KSAqIC0wLjAyKSk7XHJcbiAgYW5pbWF0aW9uOiBiZWFtU2hpZnQgOC41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmVhbVNoaWZ0IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDAuMzg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbm9pc2VNb3ZlIHtcclxuICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApOyB9XHJcbiAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC41cHgsIC0wLjVweCk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTAuNXB4LCAwLjVweCk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzd2VlcENhbnZhcyB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yJSk7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMiUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIlKTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8tc2VjdGlvbiB7XHJcbiAgbWFyZ2luOiAxMDBweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgc2Nyb2xsLW1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoLXNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSA1MHZ3KTtcclxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoNTAlIC0gNTB2dyk7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWZsdWlkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1sZWZ0OiBjbGFtcCgxLjJyZW0sIDMuOHZ3LCAzLjI1cmVtKTtcclxuICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCgxLjJyZW0sIDMuOHZ3LCAzLjI1cmVtKTtcclxufVxyXG5cclxuLmZvb3Rlci1jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZXJvLWJsb2NrIHtcclxuICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59XHJcblxyXG4uYWJvdXQtYmxvY2sge1xyXG4gIG1hcmdpbi10b3A6IDExMHB4O1xyXG59XHJcblxyXG4ucG9ydGZvbGlvLXNlY3Rpb24gPiAqIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNDVzIGVhc2UsIGJveC1zaGFkb3cgMC40NXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMzVzIGVhc2U7XG59XG5cbi5wb3J0Zm9saW8tc2VjdGlvbiA+ICo6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG5cclxuLnBvcnRmb2xpby1zZWN0aW9uOm50aC1vZi10eXBlKG9kZCkgPiAqIHtcclxuICBhbmltYXRpb246IGJyZWF0aGUgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYnJlYXRoZSB7XHJcbiAgMCUsXHJcbiAgMTAwJSB7XHJcbiAgICBmaWx0ZXI6IHNhdHVyYXRlKDEpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgxLjA4KTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWhlYWRpbmcgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcclxuICBmb250LXNpemU6IDAuNzJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZyBoMiB7XHJcbiAgbWFyZ2luOiAwLjM0cmVtIDAgMDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgxLjFyZW0sIDIuM3Z3LCAxLjQ2cmVtKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuOHJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG59XHJcblxyXG4uc2VjdGlvbi1oZWFkaW5nIGgyOjphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAtMC4zNXJlbTtcclxuICB3aWR0aDogNDglO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYWNjZW50LWNvbG9yKSwgdHJhbnNwYXJlbnQpO1xyXG4gIGFuaW1hdGlvbjogaGVhZGluZ0xpbmUgMS42cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaGVhZGluZ0xpbmUge1xyXG4gIGZyb20ge1xyXG4gICAgd2lkdGg6IDI4JTtcclxuICAgIG9wYWNpdHk6IDAuNTU7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHdpZHRoOiA1OCU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmZvb3Rlci1zcGFjZSB7XG4gIG1hcmdpbi1ib3R0b206IDEyMHB4O1xufVxuXG4uc2lkZS1nYWxsZXJ5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDE2cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2lkZS1nYWxsZXJ5LWxlZnQge1xuICBsZWZ0OiAyNHB4O1xuICB0b3A6IDMyJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4uc2lkZS1nYWxsZXJ5IGltZyB7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDg2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI2cHggcmdiYSgyLCA4LCAyMywgMC4yNCk7XG4gIG9wYWNpdHk6IDAuOTtcbiAgYW5pbWF0aW9uOiBmbG9hdENhcmQgNi40cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLnNpZGUtZ2FsbGVyeSBpbWc6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjNzO1xufVxuXG5Aa2V5ZnJhbWVzIGZsb2F0Q2FyZCB7XG4gIDAlLFxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cbn1cblxuLmZ4LXJldmVhbCB7XG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQycHgpIHNjYWxlKDAuOTg1KTtcclxuICBmaWx0ZXI6IGJsdXIoOHB4KTtcclxuICB0cmFuc2l0aW9uOlxyXG4gICAgb3BhY2l0eSAwLjc1cyBjdWJpYy1iZXppZXIoMC4yMiwgMSwgMC4zNiwgMSksXHJcbiAgICB0cmFuc2Zvcm0gMC43NXMgY3ViaWMtYmV6aWVyKDAuMjIsIDEsIDAuMzYsIDEpLFxyXG4gICAgZmlsdGVyIDAuNjVzIGVhc2U7XHJcbn1cclxuXHJcbi5meC1yZXZlYWwuZngtdXAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDJweCkgc2NhbGUoMC45ODUpOyB9XHJcbi5meC1yZXZlYWwuZngtZG93biB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDJweCkgc2NhbGUoMC45ODUpOyB9XHJcbi5meC1yZXZlYWwuZngtbGVmdCB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDhweCkgc2NhbGUoMC45OSk7IH1cclxuLmZ4LXJldmVhbC5meC1yaWdodCB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0OHB4KSBzY2FsZSgwLjk5KTsgfVxyXG4uZngtcmV2ZWFsLmZ4LXpvb20geyB0cmFuc2Zvcm06IHNjYWxlKDAuOTIpOyBmaWx0ZXI6IGJsdXIoMTBweCk7IH1cclxuXHJcbi5meC1yZXZlYWwuaW4tdmlldyB7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XHJcbiAgZmlsdGVyOiBibHVyKDApO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAucG9ydGZvbGlvLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMXJlbSAwLjk1cmVtIDIuOHJlbTtcclxuICB9XHJcblxyXG4gIC5wb3J0Zm9saW8tc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDgycHggMDtcclxuICB9XHJcblxyXG4gIC5oZXJvLWJsb2NrIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQtYmxvY2sge1xuICAgIG1hcmdpbi10b3A6IDgycHg7XG4gIH1cblxuICAuc2lkZS1nYWxsZXJ5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('pageReveal', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('420ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
      opacity: 1
    }))])]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('sectionCascade', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.query)('.portfolio-section', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
      opacity: 0,
      transform: 'translateY(26px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.stagger)(120, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('620ms cubic-bezier(0.22, 1, 0.36, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    })))], {
      optional: true
    })])])]
  }
});

/***/ }),

/***/ 6294:
/*!****************************************************************************!*\
  !*** ./src/app/admin/screens/dashboard/portfolio/about/about.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioAboutComponent": () => (/* binding */ PortfolioAboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




function PortfolioAboutComponent_article_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 4)(1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.degree);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.institution);
  }
}
class PortfolioAboutComponent {
  constructor() {
    this.story = '';
    this.education = [];
  }
}
PortfolioAboutComponent.ɵfac = function PortfolioAboutComponent_Factory(t) {
  return new (t || PortfolioAboutComponent)();
};
PortfolioAboutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PortfolioAboutComponent,
  selectors: [["app-portfolio-about"]],
  inputs: {
    story: "story",
    education: "education"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 8,
  vars: 3,
  consts: [[1, "about-wrap"], [1, "about-story"], [1, "edu-grid"], ["class", "edu-card", 4, "ngFor", "ngForOf"], [1, "edu-card"], [1, "year"], [1, "school"]],
  template: function PortfolioAboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "article", 1)(2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Professional Story");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PortfolioAboutComponent_article_7_Template, 7, 3, "article", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@sectionIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.story);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".about-wrap[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.35rem;\n}\n\n.about-story[_ngcontent-%COMP%], .edu-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid var(--line-color);\n  background: var(--surface-card);\n  border-radius: 18px;\n  padding: 36px;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  animation: _ngcontent-%COMP%_aboutCardIn 0.65s ease both;\n}\n\n.about-story[_ngcontent-%COMP%]:hover, .edu-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 16px 32px rgba(2, 8, 23, 0.14);\n}\n\n.edu-card[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -80%;\n  width: 60%;\n  height: 100%;\n  background: linear-gradient(100deg, transparent, rgba(255, 255, 255, 0.24), transparent);\n  transition: left 0.8s ease;\n}\n\n.edu-card[_ngcontent-%COMP%]:hover::before {\n  left: 140%;\n}\n\n@keyframes _ngcontent-%COMP%_aboutCardIn {\n  from {\n    opacity: 0;\n    transform: translateY(18px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.about-story[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: var(--text-color);\n}\n\n.about-story[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.7;\n  color: var(--subtle-text);\n}\n\n.edu-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1.2rem;\n}\n\n.year[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.76rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: var(--accent-color);\n}\n\n.edu-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.3rem;\n  color: var(--text-color);\n  font-size: 1rem;\n}\n\n.school[_ngcontent-%COMP%], .score[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--muted-text);\n  font-size: 0.9rem;\n}\n\n.score[_ngcontent-%COMP%] {\n  margin-top: 0.35rem;\n  color: var(--text-color);\n  font-weight: 600;\n}\n\n@media (max-width: 992px) {\n  .edu-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vc2NyZWVucy9kYXNoYm9hcmQvcG9ydGZvbGlvL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxREFBcUQ7RUFDckQsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLDJCQUEyQjtFQUMzQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWix3RkFBd0Y7RUFDeEYsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsU0FBUztFQUNULHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtd3JhcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMS4zNXJlbTtcbn1cblxuLmFib3V0LXN0b3J5LFxuLmVkdS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgcGFkZGluZzogMzZweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbiAgYW5pbWF0aW9uOiBhYm91dENhcmRJbiAwLjY1cyBlYXNlIGJvdGg7XG59XG5cbi5hYm91dC1zdG9yeTpob3Zlcixcbi5lZHUtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDMycHggcmdiYSgyLCA4LCAyMywgMC4xNCk7XG59XG5cbi5lZHUtY2FyZDo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtODAlO1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMDBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjQpLCB0cmFuc3BhcmVudCk7XG4gIHRyYW5zaXRpb246IGxlZnQgMC44cyBlYXNlO1xufVxuXG4uZWR1LWNhcmQ6aG92ZXI6OmJlZm9yZSB7XG4gIGxlZnQ6IDE0MCU7XG59XG5cbkBrZXlmcmFtZXMgYWJvdXRDYXJkSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxOHB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLmFib3V0LXN0b3J5IGgzIHtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4uYWJvdXQtc3RvcnkgcCB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgY29sb3I6IHZhcigtLXN1YnRsZS10ZXh0KTtcbn1cblxuLmVkdS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEuMnJlbTtcbn1cblxuLnllYXIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC43NnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLmVkdS1jYXJkIGg0IHtcbiAgbWFyZ2luOiAwLjM1cmVtIDAgMC4zcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnNjaG9vbCxcbi5zY29yZSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLW11dGVkLXRleHQpO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLnNjb3JlIHtcbiAgbWFyZ2luLXRvcDogMC4zNXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmVkdS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('sectionIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0,
      transform: 'translateY(20px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('500ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    }))])])]
  }
});

/***/ }),

/***/ 2430:
/*!******************************************************************************************!*\
  !*** ./src/app/admin/screens/dashboard/portfolio/achievements/achievements.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioAchievementsComponent": () => (/* binding */ PortfolioAchievementsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




function PortfolioAchievementsComponent_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.detail);
  }
}
class PortfolioAchievementsComponent {
  constructor() {
    this.achievements = [];
  }
}
PortfolioAchievementsComponent.ɵfac = function PortfolioAchievementsComponent_Factory(t) {
  return new (t || PortfolioAchievementsComponent)();
};
PortfolioAchievementsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PortfolioAchievementsComponent,
  selectors: [["app-portfolio-achievements"]],
  inputs: {
    achievements: "achievements"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [[1, "achievement-row"], ["class", "achievement-card", 4, "ngFor", "ngForOf"], [1, "achievement-card"], [1, "icon-wrap"], [1, "bi", "bi-trophy-fill"]],
  template: function PortfolioAchievementsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioAchievementsComponent_article_1_Template, 7, 2, "article", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@achieveIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.achievements);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".achievement-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1.3rem;\n}\n\n.achievement-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--line-color);\n  background: var(--surface-card);\n  border-radius: 18px;\n  padding: 36px;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.achievement-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 16px 32px rgba(2, 8, 23, 0.15);\n}\n\n.icon-wrap[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: color-mix(in srgb, var(--accent-soft) 35%, transparent);\n  color: var(--accent-color);\n  margin-bottom: 0.75rem;\n  animation: _ngcontent-%COMP%_glowPulse 2.6s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_glowPulse {\n  0%,\n  100% {\n    transform: scale(1);\n    box-shadow: 0 0 0 0 rgba(45, 212, 191, 0);\n  }\n  50% {\n    transform: scale(1.05);\n    box-shadow: 0 0 0 8px rgba(45, 212, 191, 0.08);\n  }\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0 0 0.3rem;\n  color: var(--text-color);\n  font-size: 1rem;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--muted-text);\n  line-height: 1.6;\n}\n\n@media (max-width: 992px) {\n  .achievement-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vc2NyZWVucy9kYXNoYm9hcmQvcG9ydGZvbGlvL2FjaGlldmVtZW50cy9hY2hpZXZlbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtRUFBbUU7RUFDbkUsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0Qiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRTs7SUFFRSxtQkFBbUI7SUFDbkIseUNBQXlDO0VBQzNDO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsOENBQThDO0VBQ2hEO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNoaWV2ZW1lbnQtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEuM3JlbTtcbn1cblxuLmFjaGlldmVtZW50LWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgcGFkZGluZzogMzZweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLCBib3gtc2hhZG93IDAuM3MgZWFzZTtcbn1cblxuLmFjaGlldmVtZW50LWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgMTZweCAzMnB4IHJnYmEoMiwgOCwgMjMsIDAuMTUpO1xufVxuXG4uaWNvbi13cmFwIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjZW50LXNvZnQpIDM1JSwgdHJhbnNwYXJlbnQpO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgYW5pbWF0aW9uOiBnbG93UHVsc2UgMi42cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBnbG93UHVsc2Uge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoNDUsIDIxMiwgMTkxLCAwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgOHB4IHJnYmEoNDUsIDIxMiwgMTkxLCAwLjA4KTtcbiAgfVxufVxuXG5oMyB7XG4gIG1hcmdpbjogMCAwIDAuM3JlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZC10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hY2hpZXZlbWVudC1yb3cge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('achieveIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)('.achievement-card', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0,
      transform: 'translateY(14px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.stagger)(80, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('380ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    })))], {
      optional: true
    })])])]
  }
});

/***/ }),

/***/ 8364:
/*!**********************************************************************************************!*\
  !*** ./src/app/admin/screens/dashboard/portfolio/certifications/certifications.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioCertificationsComponent": () => (/* binding */ PortfolioCertificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




function PortfolioCertificationsComponent_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 2)(1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cert_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cert_r1.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cert_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cert_r1.issuer);
  }
}
class PortfolioCertificationsComponent {
  constructor() {
    this.certifications = [];
  }
}
PortfolioCertificationsComponent.ɵfac = function PortfolioCertificationsComponent_Factory(t) {
  return new (t || PortfolioCertificationsComponent)();
};
PortfolioCertificationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PortfolioCertificationsComponent,
  selectors: [["app-portfolio-certifications"]],
  inputs: {
    certifications: "certifications"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [[1, "cert-grid"], ["class", "cert-card", 4, "ngFor", "ngForOf"], [1, "cert-card"], [1, "badge-label"]],
  template: function PortfolioCertificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioCertificationsComponent_article_1_Template, 7, 3, "article", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@certsIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.certifications);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".cert-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.3rem;\n}\n\n.cert-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--line-color);\n  background: var(--surface-card);\n  border-radius: 18px;\n  padding: 36px;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;\n}\n\n.cert-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: color-mix(in srgb, var(--accent-color) 50%, var(--line-color));\n  box-shadow: 0 16px 32px rgba(2, 8, 23, 0.15);\n}\n\n.badge-label[_ngcontent-%COMP%] {\n  margin: 0;\n  display: inline-block;\n  padding: 0.22rem 0.66rem;\n  border-radius: 999px;\n  border: 1px solid var(--accent-soft);\n  color: var(--accent-color);\n  background: color-mix(in srgb, var(--accent-soft) 22%, transparent);\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 700;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0.7rem 0 0.3rem;\n  color: var(--text-color);\n  font-size: 1rem;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--muted-text);\n}\n\n@media (max-width: 992px) {\n  .cert-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vc2NyZWVucy9kYXNoYm9hcmQvcG9ydGZvbGlvL2NlcnRpZmljYXRpb25zL2NlcnRpZmljYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkVBQTZFO0FBQy9FOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRFQUE0RTtFQUM1RSw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxTQUFTO0VBQ1QscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsb0NBQW9DO0VBQ3BDLDBCQUEwQjtFQUMxQixtRUFBbUU7RUFDbkUsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VydC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDEuM3JlbTtcbn1cblxuLmNlcnQtY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWNhcmQpO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBwYWRkaW5nOiAzNnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4zcyBlYXNlO1xufVxuXG4uY2VydC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3JkZXItY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1hY2NlbnQtY29sb3IpIDUwJSwgdmFyKC0tbGluZS1jb2xvcikpO1xuICBib3gtc2hhZG93OiAwIDE2cHggMzJweCByZ2JhKDIsIDgsIDIzLCAwLjE1KTtcbn1cblxuLmJhZGdlLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuMjJyZW0gMC42NnJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudC1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1hY2NlbnQtc29mdCkgMjIlLCB0cmFuc3BhcmVudCk7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5oMyB7XG4gIG1hcmdpbjogMC43cmVtIDAgMC4zcmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLW11dGVkLXRleHQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNlcnQtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('certsIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)('.cert-card', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0,
      transform: 'translateY(16px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.stagger)(80, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('420ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    })))], {
      optional: true
    })])])]
  }
});

/***/ }),

/***/ 3653:
/*!********************************************************************************!*\
  !*** ./src/app/admin/screens/dashboard/portfolio/contact/contact.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioContactComponent": () => (/* binding */ PortfolioContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);






function PortfolioContactComponent_p_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Message captured successfully. I will connect soon.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class PortfolioContactComponent {
  constructor() {
    this.email = 'chakri.dev@example.com';
    this.linkedin = 'https://www.linkedin.com/';
    this.github = 'https://github.com/';
    this.location = 'Kakinada, Andhra Pradesh';
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
    this.submitted = false;
  }
  submitForm() {
    this.submitted = true;
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
PortfolioContactComponent.ɵfac = function PortfolioContactComponent_Factory(t) {
  return new (t || PortfolioContactComponent)();
};
PortfolioContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PortfolioContactComponent,
  selectors: [["app-portfolio-contact"]],
  inputs: {
    email: "email",
    linkedin: "linkedin",
    github: "github",
    location: "location"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 32,
  vars: 11,
  consts: [[1, "contact-layout"], [1, "contact-card"], [1, "contact-links"], [3, "href"], [1, "bi", "bi-envelope-fill"], ["target", "_blank", "rel", "noopener", 3, "href"], [1, "bi", "bi-linkedin"], [1, "bi", "bi-github"], [1, "bi", "bi-geo-alt-fill"], [1, "form-card", 3, "ngSubmit"], ["contactForm", "ngForm"], ["type", "text", "placeholder", "Your Name", "name", "name", "required", "", 3, "ngModel", "ngModelChange"], ["nameModel", "ngModel"], ["type", "email", "placeholder", "Your Email", "name", "email", "required", "", 3, "ngModel", "ngModelChange"], ["emailModel", "ngModel"], ["rows", "4", "placeholder", "Message", "name", "message", "required", "", 3, "ngModel", "ngModelChange"], ["messageModel", "ngModel"], ["type", "submit", 3, "disabled"], ["class", "success-msg", 4, "ngIf"], [1, "success-msg"]],
  template: function PortfolioContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "article", 1)(2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Let us build something impactful.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " I enjoy building backend-heavy products with reliable APIs, secure systems, and polished Angular frontend experiences. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2)(7, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "LinkedIn");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "GitHub");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PortfolioContactComponent_Template_form_ngSubmit_19_listener() {
        return ctx.submitForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact Form");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PortfolioContactComponent_Template_input_ngModelChange_23_listener($event) {
        return ctx.formData.name = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PortfolioContactComponent_Template_input_ngModelChange_25_listener($event) {
        return ctx.formData.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "textarea", 15, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PortfolioContactComponent_Template_textarea_ngModelChange_27_listener($event) {
        return ctx.formData.message = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PortfolioContactComponent_p_31_Template, 2, 0, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@contactIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:" + ctx.email, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.location);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formData.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formData.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.formData.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
  styles: [".contact-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  gap: 1.35rem;\n}\n\n.contact-card[_ngcontent-%COMP%], .form-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--line-color);\n  background: var(--surface-card);\n  border-radius: 18px;\n  box-shadow: var(--card-shadow);\n  padding: 36px;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  animation: _ngcontent-%COMP%_contactIn 0.75s ease both;\n}\n\n.contact-card[_ngcontent-%COMP%]:hover, .form-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 18px 34px rgba(2, 8, 23, 0.14);\n}\n\n.contact-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: var(--text-color);\n}\n\n.contact-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--subtle-text);\n  line-height: 1.65;\n}\n\n.contact-links[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  display: grid;\n  gap: 0.72rem;\n}\n\n.contact-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .contact-links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  color: var(--muted-text);\n  text-decoration: none;\n  width: -moz-fit-content;\n  width: fit-content;\n  border: 1px solid transparent;\n  border-radius: 999px;\n  padding: 0.28rem 0.62rem;\n  transition: all 0.25s ease;\n}\n\n.contact-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent-color);\n  border-color: color-mix(in srgb, var(--accent-color) 40%, var(--line-color));\n  background: var(--chip-bg);\n}\n\n.form-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.95rem;\n}\n\n.form-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: var(--text-color);\n}\n\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid var(--line-color);\n  border-radius: 12px;\n  background: var(--chip-bg);\n  color: var(--text-color);\n  padding: 0.6rem 0.75rem;\n}\n\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--accent-color);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-soft) 25%, transparent);\n}\n\nbutton[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 999px;\n  padding: 0.6rem 0.95rem;\n  background: var(--accent-color);\n  color: #fff;\n  font-weight: 600;\n  transition: all 0.25s ease;\n}\n\nbutton[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n\nbutton[_ngcontent-%COMP%]:not(:disabled):hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.2);\n}\n\n@keyframes _ngcontent-%COMP%_contactIn {\n  from {\n    opacity: 0;\n    transform: translateY(16px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.success-msg[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0a8f4d;\n  font-size: 0.86rem;\n}\n\n@media (max-width: 992px) {\n  .contact-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vc2NyZWVucy9kYXNoYm9hcmQvcG9ydGZvbGlvL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixxREFBcUQ7RUFDckQsb0NBQW9DO0FBQ3RDOztBQUVBOztFQUVFLDJCQUEyQjtFQUMzQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsU0FBUztFQUNULHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDRFQUE0RTtFQUM1RSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLDZFQUE2RTtBQUMvRTs7QUFFQTtFQUNFLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LWxheW91dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4yZnIgMWZyO1xuICBnYXA6IDEuMzVyZW07XG59XG5cbi5jb250YWN0LWNhcmQsXG4uZm9ybS1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgcGFkZGluZzogMzZweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gIGFuaW1hdGlvbjogY29udGFjdEluIDAuNzVzIGVhc2UgYm90aDtcbn1cblxuLmNvbnRhY3QtY2FyZDpob3Zlcixcbi5mb3JtLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgMThweCAzNHB4IHJnYmEoMiwgOCwgMjMsIDAuMTQpO1xufVxuXG4uY29udGFjdC1jYXJkIGgzIHtcbiAgbWFyZ2luOiAwIDAgMjBweDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4uY29udGFjdC1jYXJkIHAge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiB2YXIoLS1zdWJ0bGUtdGV4dCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjY1O1xufVxuXG4uY29udGFjdC1saW5rcyB7XG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMC43MnJlbTtcbn1cblxuLmNvbnRhY3QtbGlua3MgYSxcbi5jb250YWN0LWxpbmtzIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjQ1cmVtO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQtdGV4dCk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDAuMjhyZW0gMC42MnJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG59XG5cbi5jb250YWN0LWxpbmtzIGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjZW50LWNvbG9yKSA0MCUsIHZhcigtLWxpbmUtY29sb3IpKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hpcC1iZyk7XG59XG5cbi5mb3JtLWNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuOTVyZW07XG59XG5cbi5mb3JtLWNhcmQgaDQge1xuICBtYXJnaW46IDAgMCAxOHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNoaXAtYmcpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHBhZGRpbmc6IDAuNnJlbSAwLjc1cmVtO1xufVxuXG5pbnB1dDpmb2N1cyxcbnRleHRhcmVhOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgMCAzcHggY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjY2VudC1zb2Z0KSAyNSUsIHRyYW5zcGFyZW50KTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgcGFkZGluZzogMC42cmVtIDAuOTVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbn1cblxuYnV0dG9uOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG5idXR0b246bm90KDpkaXNhYmxlZCk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4yKTtcbn1cblxuQGtleWZyYW1lcyBjb250YWN0SW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNnB4KTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cblxuLnN1Y2Nlc3MtbXNnIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzBhOGY0ZDtcbiAgZm9udC1zaXplOiAwLjg2cmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmNvbnRhY3QtbGF5b3V0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('contactIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0,
      transform: 'translateY(20px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('500ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    }))])])]
  }
});

/***/ }),

/***/ 7245:
/*!**************************************************************************************!*\
  !*** ./src/app/admin/screens/dashboard/portfolio/experience/experience.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioExperienceComponent": () => (/* binding */ PortfolioExperienceComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




function PortfolioExperienceComponent_article_1_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const point_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](point_r3);
  }
}
function PortfolioExperienceComponent_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4)(3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PortfolioExperienceComponent_article_1_li_12_Template, 2, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.highlights);
  }
}
class PortfolioExperienceComponent {
  constructor() {
    this.experiences = [];
  }
}
PortfolioExperienceComponent.ɵfac = function PortfolioExperienceComponent_Factory(t) {
  return new (t || PortfolioExperienceComponent)();
};
PortfolioExperienceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PortfolioExperienceComponent,
  selectors: [["app-portfolio-experience"]],
  inputs: {
    experiences: "experiences"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [[1, "timeline"], ["class", "timeline-item", 4, "ngFor", "ngForOf"], [1, "timeline-item"], [1, "dot"], [1, "timeline-card"], [1, "duration"], [1, "summary"], [4, "ngFor", "ngForOf"]],
  template: function PortfolioExperienceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioExperienceComponent_article_1_Template, 13, 5, "article", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@timelineIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".timeline[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  gap: 1.3rem;\n}\n\n.timeline[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 13px;\n  width: 2px;\n  background: linear-gradient(var(--accent-color), var(--line-color), var(--accent-soft));\n  background-size: 100% 180%;\n  animation: _ngcontent-%COMP%_lineShift 4s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_lineShift {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 0 100%;\n  }\n}\n\n.timeline-item[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 28px 1fr;\n  gap: 0.8rem;\n  position: relative;\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin-top: 1rem;\n  background: var(--accent-color);\n  box-shadow: 0 0 0 5px var(--chip-bg);\n  animation: _ngcontent-%COMP%_dotPulse 2s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_dotPulse {\n  0%,\n  100% {\n    box-shadow: 0 0 0 5px var(--chip-bg);\n  }\n  50% {\n    box-shadow: 0 0 0 9px color-mix(in srgb, var(--accent-soft) 25%, transparent);\n  }\n}\n\n.timeline-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--line-color);\n  background: var(--surface-card);\n  border-radius: 18px;\n  padding: 36px;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.28s ease, box-shadow 0.28s ease;\n  animation: _ngcontent-%COMP%_expCardIn 0.8s ease both;\n}\n\n.timeline-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 16px 28px rgba(2, 8, 23, 0.14);\n}\n\n.duration[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  letter-spacing: 0.1em;\n  color: var(--accent-color);\n  text-transform: uppercase;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0.2rem;\n  color: var(--text-color);\n  font-size: 1.04rem;\n}\n\nh4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--muted-text);\n  font-size: 0.88rem;\n}\n\n.summary[_ngcontent-%COMP%] {\n  margin: 0.65rem 0 0.45rem;\n  color: var(--subtle-text);\n  line-height: 1.65;\n}\n\nul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1rem;\n  color: var(--muted-text);\n}\n\nli[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n}\n\n@keyframes _ngcontent-%COMP%_expCardIn {\n  from {\n    opacity: 0;\n    transform: translateX(14px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vc2NyZWVucy9kYXNoYm9hcmQvcG9ydGZvbGlvL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVix1RkFBdUY7RUFDdkYsMEJBQTBCO0VBQzFCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFOztJQUVFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0UsNkVBQTZFO0VBQy9FO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVEQUF1RDtFQUN2RCxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMS4zcmVtO1xufVxuXG4udGltZWxpbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAxM3B4O1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tYWNjZW50LWNvbG9yKSwgdmFyKC0tbGluZS1jb2xvciksIHZhcigtLWFjY2VudC1zb2Z0KSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxODAlO1xuICBhbmltYXRpb246IGxpbmVTaGlmdCA0cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbGluZVNoaWZ0IHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICB9XG4gIHRvIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDEwMCU7XG4gIH1cbn1cblxuLnRpbWVsaW5lLWl0ZW0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI4cHggMWZyO1xuICBnYXA6IDAuOHJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZG90IHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgMCA1cHggdmFyKC0tY2hpcC1iZyk7XG4gIGFuaW1hdGlvbjogZG90UHVsc2UgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgZG90UHVsc2Uge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgNXB4IHZhcigtLWNoaXAtYmcpO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgOXB4IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1hY2NlbnQtc29mdCkgMjUlLCB0cmFuc3BhcmVudCk7XG4gIH1cbn1cblxuLnRpbWVsaW5lLWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgcGFkZGluZzogMzZweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yOHMgZWFzZSwgYm94LXNoYWRvdyAwLjI4cyBlYXNlO1xuICBhbmltYXRpb246IGV4cENhcmRJbiAwLjhzIGVhc2UgYm90aDtcbn1cblxuLnRpbWVsaW5lLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgMTZweCAyOHB4IHJnYmEoMiwgOCwgMjMsIDAuMTQpO1xufVxuXG4uZHVyYXRpb24ge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuaDMge1xuICBtYXJnaW46IDAuMzVyZW0gMCAwLjJyZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAxLjA0cmVtO1xufVxuXG5oNCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLW11dGVkLXRleHQpO1xuICBmb250LXNpemU6IDAuODhyZW07XG59XG5cbi5zdW1tYXJ5IHtcbiAgbWFyZ2luOiAwLjY1cmVtIDAgMC40NXJlbTtcbiAgY29sb3I6IHZhcigtLXN1YnRsZS10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1tdXRlZC10ZXh0KTtcbn1cblxubGkge1xuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG59XG5cbkBrZXlmcmFtZXMgZXhwQ2FyZEluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTRweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('timelineIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0,
      transform: 'translateY(18px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('520ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    }))])])]
  }
});

/***/ }),

/***/ 7831:
/*!******************************************************************************!*\
  !*** ./src/app/admin/screens/dashboard/portfolio/footer/footer.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioFooterComponent": () => (/* binding */ PortfolioFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



function PortfolioFooterComponent_a_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const social_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", social_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", social_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](social_r1.label);
  }
}
class PortfolioFooterComponent {
  constructor() {
    this.name = 'Chakri';
    this.year = new Date().getFullYear();
    this.quickLinks = [];
    this.socials = [];
  }
  jumpTo(fragment, event) {
    event?.preventDefault();
    document.getElementById(fragment)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
PortfolioFooterComponent.ɵfac = function PortfolioFooterComponent_Factory(t) {
  return new (t || PortfolioFooterComponent)();
};
PortfolioFooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PortfolioFooterComponent,
  selectors: [["app-portfolio-footer"]],
  inputs: {
    name: "name",
    year: "year",
    quickLinks: "quickLinks",
    socials: "socials"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 17,
  vars: 4,
  consts: [[1, "portfolio-footer"], [1, "footer-left"], [1, "status-dot"], [1, "footer-meta"], [1, "owner"], [1, "tagline"], [1, "social-links"], ["target", "_blank", "rel", "noopener", 3, "href", 4, "ngFor", "ngForOf"], [1, "footer-bottom"], ["href", "", 3, "click"], ["target", "_blank", "rel", "noopener", 3, "href"], [1, "bi", 3, "ngClass"]],
  template: function PortfolioFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Open to full-time and freelance opportunities");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Full-Stack Developer | Backend Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PortfolioFooterComponent_a_11_Template, 4, 3, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioFooterComponent_Template_a_click_15_listener($event) {
        return ctx.jumpTo("hero", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Back to Top");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.socials);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Copyright ", ctx.year, " ", ctx.name, ". All rights reserved.");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".portfolio-footer[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  width: min(920px, 100%);\n  max-width: 920px;\n  margin-inline: auto !important;\n  left: 0;\n  right: 0;\n  justify-self: center;\n  border: 1px solid var(--line-color);\n  background: var(--surface-glass);\n  border-radius: 24px;\n  padding: 36px;\n  text-align: center;\n  display: grid;\n  gap: 1rem;\n  box-shadow: var(--card-shadow);\n  animation: _ngcontent-%COMP%_footerLift 4.6s ease-in-out infinite;\n  justify-items: center;\n}\n\n.footer-left[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.55rem;\n  margin-bottom: 0.2rem;\n  color: var(--muted-text);\n  font-size: 0.84rem;\n}\n\n.footer-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #2dd4bf;\n  box-shadow: 0 0 0 0 rgba(45, 212, 191, 0.45);\n  animation: _ngcontent-%COMP%_pulseDot 1.8s ease-in-out infinite;\n}\n\n.portfolio-footer[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  inset: -1px;\n  border-radius: inherit;\n  background: linear-gradient(120deg, transparent, rgba(34, 211, 238, 0.25), transparent);\n  transform: translateX(-100%);\n  animation: _ngcontent-%COMP%_footerShine 4.2s ease-in-out infinite;\n}\n\n.social-links[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n.footer-meta[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  gap: 0.22rem;\n}\n\n.owner[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-color);\n  letter-spacing: 0.02em;\n}\n\n.tagline[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--muted-text);\n}\n\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: var(--text-color);\n  border: 1px solid var(--line-color);\n  border-radius: 999px;\n  padding: 0.48rem 0.9rem;\n  font-size: 0.84rem;\n  font-weight: 600;\n  transition: all 0.35s ease;\n  background: color-mix(in srgb, var(--chip-bg) 78%, transparent);\n}\n\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent-color);\n  border-color: var(--accent-color);\n  transform: translateY(-2px) scale(1.03);\n  box-shadow: 0 10px 20px rgba(2, 8, 23, 0.18);\n}\n\n.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.footer-bottom[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.8rem;\n  flex-wrap: wrap;\n  padding-top: 0.25rem;\n}\n\n.footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--muted-text);\n  font-size: 0.8rem;\n}\n\n.footer-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  border: 1px solid var(--line-color);\n  color: var(--text-color);\n  border-radius: 999px;\n  font-size: 0.76rem;\n  padding: 0.25rem 0.65rem;\n  transition: all 0.25s ease;\n}\n\n.footer-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent-color);\n  border-color: var(--accent-color);\n  transform: translateY(-1px);\n}\n\n@keyframes _ngcontent-%COMP%_footerShine {\n  0% {\n    transform: translateX(-100%);\n  }\n  45%,\n  100% {\n    transform: translateX(100%);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_footerLift {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-3px);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_pulseDot {\n  0%,\n  100% {\n    box-shadow: 0 0 0 0 rgba(45, 212, 191, 0.45);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(45, 212, 191, 0.08);\n  }\n}\n\n@media (max-width: 640px) {\n  .portfolio-footer[_ngcontent-%COMP%] {\n    border-radius: 18px;\n    padding: 24px;\n  }\n\n  .footer-left[_ngcontent-%COMP%] {\n    font-size: 0.78rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vc2NyZWVucy9kYXNoYm9hcmQvcG9ydGZvbGlvL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsT0FBTztFQUNQLFFBQVE7RUFDUixvQkFBb0I7RUFDcEIsbUNBQW1DO0VBQ25DLGdDQUFnQztFQUNoQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULDhCQUE4QjtFQUM5QiwrQ0FBK0M7RUFDL0MscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDRDQUE0QztFQUM1Qyw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsdUZBQXVGO0VBQ3ZGLDRCQUE0QjtFQUM1QixnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLG1DQUFtQztFQUNuQyxvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsdUNBQXVDO0VBQ3ZDLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTs7SUFFRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFOztJQUVFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSw0Q0FBNEM7RUFDOUM7RUFDQTtJQUNFLDhDQUE4QztFQUNoRDtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGZvbGlvLWZvb3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IG1pbig5MjBweCwgMTAwJSk7XG4gIG1heC13aWR0aDogOTIwcHg7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG8gIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1nbGFzcyk7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHBhZGRpbmc6IDM2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxcmVtO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gIGFuaW1hdGlvbjogZm9vdGVyTGlmdCA0LjZzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb290ZXItbGVmdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjU1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG4gIGNvbG9yOiB2YXIoLS1tdXRlZC10ZXh0KTtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xufVxuXG4uZm9vdGVyLWxlZnQgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN0YXR1cy1kb3Qge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyZGQ0YmY7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSg0NSwgMjEyLCAxOTEsIDAuNDUpO1xuICBhbmltYXRpb246IHB1bHNlRG90IDEuOHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5wb3J0Zm9saW8tZm9vdGVyOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogLTFweDtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMzQsIDIxMSwgMjM4LCAwLjI1KSwgdHJhbnNwYXJlbnQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICBhbmltYXRpb246IGZvb3RlclNoaW5lIDQuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5zb2NpYWwtbGlua3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43NXJlbTtcbn1cblxuLmZvb3Rlci1tZXRhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBnYXA6IDAuMjJyZW07XG59XG5cbi5vd25lciB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XG59XG5cbi50YWdsaW5lIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGNvbG9yOiB2YXIoLS1tdXRlZC10ZXh0KTtcbn1cblxuLnNvY2lhbC1saW5rcyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgcGFkZGluZzogMC40OHJlbSAwLjlyZW07XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2U7XG4gIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS1jaGlwLWJnKSA3OCUsIHRyYW5zcGFyZW50KTtcbn1cblxuLnNvY2lhbC1saW5rcyBhOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpIHNjYWxlKDEuMDMpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDIsIDgsIDIzLCAwLjE4KTtcbn1cblxuLnNvY2lhbC1saW5rcyBhIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuXG4uZm9vdGVyLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuOHJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbn1cblxuLmZvb3Rlci1ib3R0b20gcCB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLW11dGVkLXRleHQpO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuLmZvb3Rlci1ib3R0b20gYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMC43NnJlbTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjY1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbn1cblxuLmZvb3Rlci1ib3R0b20gYTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuQGtleWZyYW1lcyBmb290ZXJTaGluZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICB9XG4gIDQ1JSxcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZm9vdGVyTGlmdCB7XG4gIDAlLFxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwdWxzZURvdCB7XG4gIDAlLFxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoNDUsIDIxMiwgMTkxLCAwLjQ1KTtcbiAgfVxuICA1MCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDhweCByZ2JhKDQ1LCAyMTIsIDE5MSwgMC4wOCk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5wb3J0Zm9saW8tZm9vdGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gIH1cblxuICAuZm9vdGVyLWxlZnQge1xuICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5554:
/*!**************************************************************************!*\
  !*** ./src/app/admin/screens/dashboard/portfolio/hero/hero.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioHeroComponent": () => (/* binding */ PortfolioHeroComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




function PortfolioHeroComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stat_r1.value);
  }
}
class PortfolioHeroComponent {
  constructor() {
    this.name = 'Janapaneedi Chakradhar';
    this.role = 'Full-Stack Developer & Backend Developer';
    this.intro = '';
    this.company = 'Criativo Company, Kakinada';
    this.typedSkills = [];
    this.stats = [];
    this.profileImage = 'assets/img/chakrilogo.png';
    this.fallbackImage = 'assets/img/profile.jpg';
    this.typedText = '';
    this.timer = null;
    this.wordIndex = 0;
    this.charIndex = 0;
    this.deleting = false;
  }
  ngOnInit() {
    this.typeLoop();
  }
  ngOnDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  scrollTo(sectionId, event) {
    event?.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
  setFallback(event) {
    const img = event.target;
    if (img && img.src.indexOf(this.fallbackImage) === -1) {
      img.src = this.fallbackImage;
    }
  }
  typeLoop() {
    if (!this.typedSkills.length) {
      return;
    }
    const currentWord = this.typedSkills[this.wordIndex % this.typedSkills.length];
    if (!this.deleting) {
      this.charIndex = Math.min(this.charIndex + 1, currentWord.length);
    } else {
      this.charIndex = Math.max(this.charIndex - 1, 0);
    }
    this.typedText = currentWord.substring(0, this.charIndex);
    if (!this.deleting && this.charIndex === currentWord.length) {
      this.deleting = true;
      this.timer = setTimeout(() => this.typeLoop(), 1200);
      return;
    }
    if (this.deleting && this.charIndex === 0) {
      this.deleting = false;
      this.wordIndex++;
    }
    const speed = this.deleting ? 45 : 85;
    this.timer = setTimeout(() => this.typeLoop(), speed);
  }
}
PortfolioHeroComponent.ɵfac = function PortfolioHeroComponent_Factory(t) {
  return new (t || PortfolioHeroComponent)();
};
PortfolioHeroComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PortfolioHeroComponent,
  selectors: [["app-portfolio-hero"]],
  inputs: {
    name: "name",
    role: "role",
    intro: "intro",
    company: "company",
    typedSkills: "typedSkills",
    stats: "stats",
    profileImage: "profileImage",
    fallbackImage: "fallbackImage"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 32,
  vars: 9,
  consts: [[1, "hero-grid"], [1, "hero-content"], [1, "eyebrow"], [1, "intro"], [1, "typing-line"], [1, "typed-word"], [1, "cursor"], [1, "hero-actions"], ["href", "", 1, "btn-main", 3, "click"], ["href", "", 1, "btn-ghost", 3, "click"], [1, "hero-panel"], [1, "photo-wrap"], [1, "photo-ring"], [3, "src", "alt", "error"], [1, "panel-title"], [1, "stat-grid"], ["class", "stat-card", 4, "ngFor", "ngForOf"], [1, "stat-card"], [1, "label"], [1, "value"]],
  template: function PortfolioHeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Full-Stack Engineer Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Building with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "|");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7)(17, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioHeroComponent_Template_a_click_17_listener($event) {
        return ctx.scrollTo("projects", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "View Projects");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioHeroComponent_Template_a_click_19_listener($event) {
        return ctx.scrollTo("contact", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10)(22, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "img", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function PortfolioHeroComponent_Template_img_error_24_listener($event) {
        return ctx.setFallback($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14)(26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Current Role");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, PortfolioHeroComponent_div_31_Template, 5, 2, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@heroReveal", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.role);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.intro);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.typedText);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stats);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 48px;\n}\n\n.hero-content[_ngcontent-%COMP%], .hero-panel[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid var(--line-color);\n  border-radius: 18px;\n  background: var(--surface-card);\n  padding: 36px;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.35s ease, box-shadow 0.35s ease;\n}\n\n.hero-content[_ngcontent-%COMP%]:hover, .hero-panel[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 18px 38px rgba(2, 8, 23, 0.16);\n}\n\n.hero-content[_ngcontent-%COMP%]::after, .hero-panel[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  width: 120px;\n  height: 120px;\n  border-radius: 50%;\n  background: color-mix(in srgb, var(--accent-soft) 35%, transparent);\n  filter: blur(34px);\n  top: -35px;\n  right: -35px;\n  opacity: 0.28;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  color: var(--accent-color);\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(1.7rem, 4vw, 2.4rem);\n  line-height: 1.2;\n  color: var(--text-color);\n}\n\nh2[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0.9rem;\n  font-size: clamp(1rem, 2.5vw, 1.3rem);\n  font-weight: 600;\n  color: var(--muted-text);\n}\n\n.intro[_ngcontent-%COMP%] {\n  color: var(--subtle-text);\n  line-height: 1.75;\n  margin-bottom: 1rem;\n}\n\n.typing-line[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-color);\n}\n\n.typed-word[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, var(--accent-color), var(--accent-soft));\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n  animation: _ngcontent-%COMP%_typedPulse 1.5s ease-in-out infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_typedPulse {\n  from {\n    filter: brightness(0.95);\n  }\n  to {\n    filter: brightness(1.1);\n  }\n}\n\n.cursor[_ngcontent-%COMP%] {\n  margin-left: 0.2rem;\n  animation: _ngcontent-%COMP%_blink 0.9s steps(1) infinite;\n}\n\n@keyframes _ngcontent-%COMP%_blink {\n  50% {\n    opacity: 0;\n  }\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.9rem;\n  margin-top: 1.55rem;\n}\n\n.btn-main[_ngcontent-%COMP%], .btn-ghost[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 0.58rem 1rem;\n  border-radius: 999px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  border: 1px solid transparent;\n}\n\n.btn-main[_ngcontent-%COMP%] {\n  background: var(--accent-color);\n  color: #fff;\n  transition: all 0.25s ease;\n}\n\n.btn-ghost[_ngcontent-%COMP%] {\n  border-color: var(--line-color);\n  color: var(--text-color);\n  transition: all 0.25s ease;\n}\n\n.btn-main[_ngcontent-%COMP%]:hover, .btn-ghost[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(2, 8, 23, 0.18);\n}\n\n.panel-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: var(--subtle-text);\n}\n\n.photo-wrap[_ngcontent-%COMP%] {\n  width: 146px;\n  height: 146px;\n  margin: 0 auto 1rem;\n  border-radius: 50%;\n  position: relative;\n  display: grid;\n  place-items: center;\n  animation: _ngcontent-%COMP%_avatarFloat 4.2s ease-in-out infinite;\n}\n\n.photo-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -5px;\n  border-radius: 50%;\n  background: conic-gradient(from 0deg, var(--accent-color), var(--accent-soft), var(--accent-color));\n  filter: blur(0.2px);\n  animation: _ngcontent-%COMP%_rotateRing 6s linear infinite;\n}\n\n.photo-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  width: 136px;\n  height: 136px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid var(--surface-card);\n  box-shadow: 0 16px 30px rgba(2, 8, 23, 0.24);\n  z-index: 2;\n}\n\n@keyframes _ngcontent-%COMP%_avatarFloat {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-7px);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_rotateRing {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.panel-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.45rem 0 1.3rem;\n  font-size: 1.15rem;\n  color: var(--text-color);\n}\n\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--line-color);\n  background: var(--chip-bg);\n  border-radius: 14px;\n  padding: 0.8rem;\n  transition: all 0.25s ease;\n}\n\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: color-mix(in srgb, var(--accent-color) 50%, var(--line-color));\n}\n\n.label[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.78rem;\n  color: var(--subtle-text);\n}\n\n.value[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  color: var(--text-color);\n  font-weight: 700;\n}\n\n@media (max-width: 992px) {\n  .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vc2NyZWVucy9kYXNoYm9hcmQvcG9ydGZvbGlvL2hlcm8vaGVyby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVEQUF1RDtBQUN6RDs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IsNENBQTRDO0FBQzlDOztBQUVBOztFQUVFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUVBQW1FO0VBQ25FLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDJFQUEyRTtFQUMzRSw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyx5REFBeUQ7QUFDM0Q7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsMkJBQTJCO0VBQzNCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0RBQWdEO0FBQ2xEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUdBQW1HO0VBQ25HLG1CQUFtQjtFQUNuQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFDQUFxQztFQUNyQyw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaOztBQUVBO0VBQ0U7O0lBRUUsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLDBCQUEwQjtFQUMxQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsU0FBUztFQUNYO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyby1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjNmciAxZnI7XG4gIGdhcDogNDhweDtcbn1cblxuLmhlcm8tY29udGVudCxcbi5oZXJvLXBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1jYXJkKTtcbiAgcGFkZGluZzogMzZweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXMgZWFzZSwgYm94LXNoYWRvdyAwLjM1cyBlYXNlO1xufVxuXG4uaGVyby1jb250ZW50OmhvdmVyLFxuLmhlcm8tcGFuZWw6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgMThweCAzOHB4IHJnYmEoMiwgOCwgMjMsIDAuMTYpO1xufVxuXG4uaGVyby1jb250ZW50OjphZnRlcixcbi5oZXJvLXBhbmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjZW50LXNvZnQpIDM1JSwgdHJhbnNwYXJlbnQpO1xuICBmaWx0ZXI6IGJsdXIoMzRweCk7XG4gIHRvcDogLTM1cHg7XG4gIHJpZ2h0OiAtMzVweDtcbiAgb3BhY2l0eTogMC4yODtcbn1cblxuLmV5ZWJyb3cge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xMmVtO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IGNsYW1wKDEuN3JlbSwgNHZ3LCAyLjRyZW0pO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG59XG5cbmgyIHtcbiAgbWFyZ2luOiAwLjVyZW0gMCAwLjlyZW07XG4gIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgMi41dncsIDEuM3JlbSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZC10ZXh0KTtcbn1cblxuLmludHJvIHtcbiAgY29sb3I6IHZhcigtLXN1YnRsZS10ZXh0KTtcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi50eXBpbmctbGluZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4udHlwZWQtd29yZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYWNjZW50LWNvbG9yKSwgdmFyKC0tYWNjZW50LXNvZnQpKTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGFuaW1hdGlvbjogdHlwZWRQdWxzZSAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyB0eXBlZFB1bHNlIHtcbiAgZnJvbSB7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTUpO1xuICB9XG4gIHRvIHtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4xKTtcbiAgfVxufVxuXG4uY3Vyc29yIHtcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcbiAgYW5pbWF0aW9uOiBibGluayAwLjlzIHN0ZXBzKDEpIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5oZXJvLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMC45cmVtO1xuICBtYXJnaW4tdG9wOiAxLjU1cmVtO1xufVxuXG4uYnRuLW1haW4sXG4uYnRuLWdob3N0IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwLjU4cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBmb250LXNpemU6IDAuODhyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLW1haW4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG59XG5cbi5idG4tZ2hvc3Qge1xuICBib3JkZXItY29sb3I6IHZhcigtLWxpbmUtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xufVxuXG4uYnRuLW1haW46aG92ZXIsXG4uYnRuLWdob3N0OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDIsIDgsIDIzLCAwLjE4KTtcbn1cblxuLnBhbmVsLXRpdGxlIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tc3VidGxlLXRleHQpO1xufVxuXG4ucGhvdG8td3JhcCB7XG4gIHdpZHRoOiAxNDZweDtcbiAgaGVpZ2h0OiAxNDZweDtcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGFuaW1hdGlvbjogYXZhdGFyRmxvYXQgNC4ycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLnBob3RvLXJpbmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAtNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KGZyb20gMGRlZywgdmFyKC0tYWNjZW50LWNvbG9yKSwgdmFyKC0tYWNjZW50LXNvZnQpLCB2YXIoLS1hY2NlbnQtY29sb3IpKTtcbiAgZmlsdGVyOiBibHVyKDAuMnB4KTtcbiAgYW5pbWF0aW9uOiByb3RhdGVSaW5nIDZzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLnBob3RvLXdyYXAgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTM2cHg7XG4gIGhlaWdodDogMTM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIGJveC1zaGFkb3c6IDAgMTZweCAzMHB4IHJnYmEoMiwgOCwgMjMsIDAuMjQpO1xuICB6LWluZGV4OiAyO1xufVxuXG5Aa2V5ZnJhbWVzIGF2YXRhckZsb2F0IHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZVJpbmcge1xuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4ucGFuZWwtdGl0bGUgaDMge1xuICBtYXJnaW46IDAuNDVyZW0gMCAxLjNyZW07XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xufVxuXG4uc3RhdC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICBnYXA6IDFyZW07XG59XG5cbi5zdGF0LWNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hpcC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDAuOHJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG59XG5cbi5zdGF0LWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJvcmRlci1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWFjY2VudC1jb2xvcikgNTAlLCB2YXIoLS1saW5lLWNvbG9yKSk7XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogdmFyKC0tc3VidGxlLXRleHQpO1xufVxuXG4udmFsdWUge1xuICBtYXJnaW46IDAuMjVyZW0gMCAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuaGVyby1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDMycHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('heroReveal', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0,
      transform: 'translateY(26px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('650ms cubic-bezier(0.22, 1, 0.36, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    }))])])]
  }
});

/***/ }),

/***/ 4196:
/*!******************************************************************************!*\
  !*** ./src/app/admin/screens/dashboard/portfolio/navbar/navbar.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioNavbarComponent": () => (/* binding */ PortfolioNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);







function PortfolioNavbarComponent_a_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioNavbarComponent_a_9_Template_a_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const link_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.navigate(link_r1.fragment, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r0.activeFragment === link_r1.fragment);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1.label, " ");
  }
}
class PortfolioNavbarComponent {
  constructor(router) {
    this.router = router;
    this.name = 'Chakri';
    this.links = [];
    this.darkMode = false;
    this.themeToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.mobileMenuOpen = false;
    this.activeFragment = 'hero';
  }
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  navigate(fragment, event) {
    event?.preventDefault();
    this.activeFragment = fragment;
    this.mobileMenuOpen = false;
    this.router.navigate([], {
      fragment,
      queryParamsHandling: 'preserve'
    });
    setTimeout(() => {
      document.getElementById(fragment)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }
}
PortfolioNavbarComponent.ɵfac = function PortfolioNavbarComponent_Factory(t) {
  return new (t || PortfolioNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
PortfolioNavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PortfolioNavbarComponent,
  selectors: [["app-portfolio-navbar"]],
  inputs: {
    name: "name",
    links: "links",
    darkMode: "darkMode"
  },
  outputs: {
    themeToggle: "themeToggle"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 14,
  vars: 8,
  consts: [[1, "portfolio-nav"], [1, "brand-block"], ["href", "", 1, "brand-text", 3, "click"], [1, "brand-dot"], ["type", "button", 1, "mobile-toggle", "d-lg-none", 3, "click"], [1, "bi", 3, "ngClass"], [1, "nav-links"], ["class", "nav-link", "href", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "theme-btn", 3, "click"], ["href", "", 1, "nav-link", 3, "click"]],
  template: function PortfolioNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioNavbarComponent_Template_a_click_2_listener($event) {
        return ctx.navigate("hero", $event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioNavbarComponent_Template_button_click_6_listener() {
        return ctx.toggleMobileMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PortfolioNavbarComponent_a_9_Template, 2, 3, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioNavbarComponent_Template_button_click_10_listener() {
        return ctx.themeToggle.emit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@navIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mobileMenuOpen ? "bi-x-lg" : "bi-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mobile-open", ctx.mobileMenuOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.darkMode ? "bi-sun-fill" : "bi-moon-stars-fill");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.darkMode ? "Light" : "Dark");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
  styles: [".portfolio-nav[_ngcontent-%COMP%] {\n  position: sticky;\n  overflow: hidden;\n  top: 0;\n  z-index: 30;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.2rem;\n  padding: 1rem 1.25rem;\n  border-radius: 18px;\n  border: 1px solid var(--line-color);\n  background: var(--surface-glass);\n  -webkit-backdrop-filter: blur(12px);\n          backdrop-filter: blur(12px);\n  box-shadow: 0 12px 28px rgba(2, 8, 23, 0.12);\n  animation: _ngcontent-%COMP%_navGlow 5s ease-in-out infinite;\n}\n\n.portfolio-nav[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -20%;\n  width: 40%;\n  height: 100%;\n  background: linear-gradient(110deg, transparent, rgba(34, 211, 238, 0.2), transparent);\n  transform: skewX(-22deg);\n  animation: _ngcontent-%COMP%_navSweep 6.5s ease-in-out infinite;\n}\n\n.brand-block[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex: 1;\n}\n\n.brand-text[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  color: var(--text-color);\n  text-decoration: none;\n}\n\n.brand-dot[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n}\n\n.mobile-toggle[_ngcontent-%COMP%] {\n  border: 0;\n  background: transparent;\n  color: var(--text-color);\n  font-size: 1.25rem;\n  transition: transform 0.25s ease;\n}\n\n.mobile-toggle[_ngcontent-%COMP%]:hover {\n  transform: rotate(7deg);\n}\n\n.nav-links[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  text-decoration: none;\n  color: var(--muted-text);\n  transition: all 0.25s ease;\n}\n\n.nav-link[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  left: 20%;\n  right: 20%;\n  bottom: 0.26rem;\n  height: 2px;\n  background: var(--accent-color);\n  transform: scaleX(0);\n  transform-origin: center;\n  transition: transform 0.25s ease;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  background: var(--chip-bg);\n}\n\n.nav-link[_ngcontent-%COMP%]:hover::after, .nav-link.active[_ngcontent-%COMP%]::after {\n  transform: scaleX(1);\n}\n\n.theme-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  border: 1px solid var(--line-color);\n  background: transparent;\n  color: var(--text-color);\n  border-radius: 999px;\n  padding: 0.4rem 0.8rem;\n  font-size: 0.84rem;\n  font-weight: 600;\n  transition: all 0.25s ease;\n}\n\n.theme-btn[_ngcontent-%COMP%]:hover {\n  background: var(--chip-bg);\n  transform: translateY(-1px);\n  border-color: var(--accent-color);\n}\n\n@media (max-width: 991px) {\n  .portfolio-nav[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n    margin-top: 0.8rem;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n\n  .nav-links.mobile-open[_ngcontent-%COMP%] {\n    display: flex;\n    animation: _ngcontent-%COMP%_slideDown 0.28s ease;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_navSweep {\n  0%,\n  100% {\n    left: -55%;\n  }\n  50% {\n    left: 120%;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_navGlow {\n  0%,\n  100% {\n    box-shadow: 0 12px 28px rgba(2, 8, 23, 0.12);\n  }\n  50% {\n    box-shadow: 0 16px 34px rgba(2, 8, 23, 0.2);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vc2NyZWVucy9kYXNoYm9hcmQvcG9ydGZvbGlvL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsZ0NBQWdDO0VBQ2hDLG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsNENBQTRDO0VBQzVDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLHNGQUFzRjtFQUN0Rix3QkFBd0I7RUFDeEIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsU0FBUztFQUNULHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztFQUNYLCtCQUErQjtFQUMvQixvQkFBb0I7RUFDcEIsd0JBQXdCO0VBQ3hCLGdDQUFnQztBQUNsQzs7QUFFQTs7RUFFRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYiwrQkFBK0I7RUFDakM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7O0lBRUUsVUFBVTtFQUNaO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFOztJQUVFLDRDQUE0QztFQUM5QztFQUNBO0lBQ0UsMkNBQTJDO0VBQzdDO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucG9ydGZvbGlvLW5hdiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogMDtcbiAgei1pbmRleDogMzA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxLjJyZW07XG4gIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtZ2xhc3MpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCk7XG4gIGJveC1zaGFkb3c6IDAgMTJweCAyOHB4IHJnYmEoMiwgOCwgMjMsIDAuMTIpO1xuICBhbmltYXRpb246IG5hdkdsb3cgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5wb3J0Zm9saW8tbmF2OjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IC0yMCU7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExMGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMzQsIDIxMSwgMjM4LCAwLjIpLCB0cmFuc3BhcmVudCk7XG4gIHRyYW5zZm9ybTogc2tld1goLTIyZGVnKTtcbiAgYW5pbWF0aW9uOiBuYXZTd2VlcCA2LjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xufVxuXG4uYnJhbmQtYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleDogMTtcbn1cblxuLmJyYW5kLXRleHQge1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnJhbmQtZG90IHtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi5tb2JpbGUtdG9nZ2xlIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlO1xufVxuXG4ubW9iaWxlLXRvZ2dsZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDdkZWcpO1xufVxuXG4ubmF2LWxpbmtzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuN3JlbTtcbn1cblxuLm5hdi1saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwLjQ1cmVtIDAuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGZvbnQtc2l6ZTogMC44OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQtdGV4dCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xufVxuXG4ubmF2LWxpbms6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjAlO1xuICByaWdodDogMjAlO1xuICBib3R0b206IDAuMjZyZW07XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcbn1cblxuLm5hdi1saW5rOmhvdmVyLFxuLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hpcC1iZyk7XG59XG5cbi5uYXYtbGluazpob3Zlcjo6YWZ0ZXIsXG4ubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xufVxuXG4udGhlbWUtYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC40cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLWNvbG9yKTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDAuNHJlbSAwLjhyZW07XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG59XG5cbi50aGVtZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jaGlwLWJnKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAucG9ydGZvbGlvLW5hdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubmF2LWxpbmtzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1hcmdpbi10b3A6IDAuOHJlbTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG5cbiAgLm5hdi1saW5rcy5tb2JpbGUtb3BlbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbmltYXRpb246IHNsaWRlRG93biAwLjI4cyBlYXNlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbmF2U3dlZXAge1xuICAwJSxcbiAgMTAwJSB7XG4gICAgbGVmdDogLTU1JTtcbiAgfVxuICA1MCUge1xuICAgIGxlZnQ6IDEyMCU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBuYXZHbG93IHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMTJweCAyOHB4IHJnYmEoMiwgOCwgMjMsIDAuMTIpO1xuICB9XG4gIDUwJSB7XG4gICAgYm94LXNoYWRvdzogMCAxNnB4IDM0cHggcmdiYSgyLCA4LCAyMywgMC4yKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('navIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 0,
      transform: 'translateY(-18px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('450ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    }))])])]
  }
});

/***/ }),

/***/ 8094:
/*!**********************************************************************************!*\
  !*** ./src/app/admin/screens/dashboard/portfolio/projects/projects.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioProjectsComponent": () => (/* binding */ PortfolioProjectsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




function PortfolioProjectsComponent_article_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tech_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tech_r3);
  }
}
function PortfolioProjectsComponent_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 2)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PortfolioProjectsComponent_article_1_span_6_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "GitHub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Live Demo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r1.stack);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", project_r1.live, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class PortfolioProjectsComponent {
  constructor() {
    this.projects = [];
  }
}
PortfolioProjectsComponent.ɵfac = function PortfolioProjectsComponent_Factory(t) {
  return new (t || PortfolioProjectsComponent)();
};
PortfolioProjectsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PortfolioProjectsComponent,
  selectors: [["app-portfolio-projects"]],
  inputs: {
    projects: "projects"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [[1, "project-grid"], ["class", "project-card", 4, "ngFor", "ngForOf"], [1, "project-card"], [1, "stack-row"], [4, "ngFor", "ngForOf"], [1, "card-actions"], ["target", "_blank", "rel", "noopener", 3, "href"]],
  template: function PortfolioProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioProjectsComponent_article_1_Template, 12, 5, "article", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@projectIn", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".project-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.35rem;\n}\n\n.project-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid var(--line-color);\n  background: var(--surface-card);\n  border-radius: 18px;\n  padding: 36px;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;\n  animation: _ngcontent-%COMP%_projectPop 0.75s ease both;\n}\n\n.project-card[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -140%;\n  width: 90%;\n  height: 100%;\n  background: linear-gradient(110deg, transparent, rgba(255, 255, 255, 0.2), transparent);\n  transition: left 0.7s ease;\n}\n\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: color-mix(in srgb, var(--accent-color) 50%, var(--line-color));\n  box-shadow: 0 18px 34px rgba(2, 8, 23, 0.16);\n}\n\n.project-card[_ngcontent-%COMP%]:hover::before {\n  left: 140%;\n}\n\n.project-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: var(--text-color);\n  font-size: 1.03rem;\n}\n\n.project-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--subtle-text);\n  line-height: 1.65;\n}\n\n.stack-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.55rem;\n  margin-top: 1.05rem;\n}\n\n.stack-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border: 1px solid var(--line-color);\n  background:\n    radial-gradient(circle at 22% 20%, rgba(45, 212, 191, 0.2), transparent 45%),\n    linear-gradient(120deg, color-mix(in srgb, var(--chip-bg) 78%, transparent), color-mix(in srgb, var(--surface-card) 80%, transparent));\n  color: var(--muted-text);\n  border-radius: 999px;\n  padding: 0.24rem 0.64rem;\n  font-size: 0.75rem;\n  transition: all 0.25s ease;\n}\n\n.stack-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(110deg, transparent 20%, rgba(255, 255, 255, 0.22), transparent 78%);\n  transform: translateX(-115%);\n  transition: transform 0.6s ease;\n}\n\n.stack-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: var(--text-color);\n  border-color: var(--accent-color);\n  box-shadow: 0 0 0 1px rgba(45, 212, 191, 0.2), 0 6px 20px rgba(2, 8, 23, 0.18);\n}\n\n.stack-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover::after {\n  transform: translateX(115%);\n}\n\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1.2rem;\n}\n\n.card-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  font-size: 0.82rem;\n  font-weight: 600;\n  border: 1px solid var(--line-color);\n  color: var(--text-color);\n  border-radius: 999px;\n  padding: 0.38rem 0.8rem;\n  transition: all 0.25s ease;\n}\n\n.card-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: var(--accent-color);\n  color: var(--accent-color);\n  transform: translateY(-1px);\n}\n\n@media (max-width: 992px) {\n  .project-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_projectPop {\n  from {\n    opacity: 0;\n    transform: scale(0.98) translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vc2NyZWVucy9kYXNoYm9hcmQvcG9ydGZvbGlvL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2RUFBNkU7RUFDN0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osdUZBQXVGO0VBQ3ZGLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw0RUFBNEU7RUFDNUUsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DOzswSUFFd0k7RUFDeEksd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdHQUFnRztFQUNoRyw0QkFBNEI7RUFDNUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyw4RUFBOEU7QUFDaEY7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1DQUFtQztFQUNuQyx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsMEJBQTBCO0VBQzFCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVix1Q0FBdUM7RUFDekM7RUFDQTtJQUNFLFVBQVU7SUFDVixpQ0FBaUM7RUFDbkM7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0LWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMS4zNXJlbTtcbn1cblxuLnByb2plY3QtY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHBhZGRpbmc6IDM2cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2UsIGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XG4gIGFuaW1hdGlvbjogcHJvamVjdFBvcCAwLjc1cyBlYXNlIGJvdGg7XG59XG5cbi5wcm9qZWN0LWNhcmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogLTE0MCU7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExMGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSwgdHJhbnNwYXJlbnQpO1xuICB0cmFuc2l0aW9uOiBsZWZ0IDAuN3MgZWFzZTtcbn1cblxuLnByb2plY3QtY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgYm9yZGVyLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tYWNjZW50LWNvbG9yKSA1MCUsIHZhcigtLWxpbmUtY29sb3IpKTtcbiAgYm94LXNoYWRvdzogMCAxOHB4IDM0cHggcmdiYSgyLCA4LCAyMywgMC4xNik7XG59XG5cbi5wcm9qZWN0LWNhcmQ6aG92ZXI6OmJlZm9yZSB7XG4gIGxlZnQ6IDE0MCU7XG59XG5cbi5wcm9qZWN0LWNhcmQgaDMge1xuICBtYXJnaW46IDAgMCAxOHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQtc2l6ZTogMS4wM3JlbTtcbn1cblxuLnByb2plY3QtY2FyZCBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tc3VidGxlLXRleHQpO1xuICBsaW5lLWhlaWdodDogMS42NTtcbn1cblxuLnN0YWNrLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAwLjU1cmVtO1xuICBtYXJnaW4tdG9wOiAxLjA1cmVtO1xufVxuXG4uc3RhY2stcm93IHNwYW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xuICBiYWNrZ3JvdW5kOlxuICAgIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMjIlIDIwJSwgcmdiYSg0NSwgMjEyLCAxOTEsIDAuMiksIHRyYW5zcGFyZW50IDQ1JSksXG4gICAgbGluZWFyLWdyYWRpZW50KDEyMGRlZywgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLWNoaXAtYmcpIDc4JSwgdHJhbnNwYXJlbnQpLCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tc3VyZmFjZS1jYXJkKSA4MCUsIHRyYW5zcGFyZW50KSk7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZC10ZXh0KTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIHBhZGRpbmc6IDAuMjRyZW0gMC42NHJlbTtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbn1cblxuLnN0YWNrLXJvdyBzcGFuOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTEwZGVnLCB0cmFuc3BhcmVudCAyMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMiksIHRyYW5zcGFyZW50IDc4JSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTE1JSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzIGVhc2U7XG59XG5cbi5zdGFjay1yb3cgc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSg0NSwgMjEyLCAxOTEsIDAuMiksIDAgNnB4IDIwcHggcmdiYSgyLCA4LCAyMywgMC4xOCk7XG59XG5cbi5zdGFjay1yb3cgc3Bhbjpob3Zlcjo6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTE1JSk7XG59XG5cbi5jYXJkLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNzVyZW07XG4gIG1hcmdpbi10b3A6IDEuMnJlbTtcbn1cblxuLmNhcmQtYWN0aW9ucyBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBwYWRkaW5nOiAwLjM4cmVtIDAuOHJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG59XG5cbi5jYXJkLWFjdGlvbnMgYTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5wcm9qZWN0LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcHJvamVjdFBvcCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KSB0cmFuc2xhdGVZKDE0cHgpO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('projectIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)('.project-card', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0,
      transform: 'translateY(18px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.stagger)(95, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('460ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    })))], {
      optional: true
    })])])]
  }
});

/***/ }),

/***/ 3560:
/*!******************************************************************************!*\
  !*** ./src/app/admin/screens/dashboard/portfolio/skills/skills.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioSkillsComponent": () => (/* binding */ PortfolioSkillsComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




function PortfolioSkillsComponent_article_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const skill_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", skill_r3.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r3.level, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r2.animateBars ? skill_r3.level + "%" : "0%");
  }
}
function PortfolioSkillsComponent_article_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 2)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioSkillsComponent_article_1_div_3_Template, 10, 5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r1.skills);
  }
}
class PortfolioSkillsComponent {
  constructor() {
    this.groups = [];
    this.animateBars = false;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.animateBars = true;
    }, 150);
  }
}
PortfolioSkillsComponent.ɵfac = function PortfolioSkillsComponent_Factory(t) {
  return new (t || PortfolioSkillsComponent)();
};
PortfolioSkillsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PortfolioSkillsComponent,
  selectors: [["app-portfolio-skills"]],
  inputs: {
    groups: "groups"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [[1, "skill-layout"], ["class", "skill-group", 4, "ngFor", "ngForOf"], [1, "skill-group"], ["class", "skill-item", 4, "ngFor", "ngForOf"], [1, "skill-item"], [1, "skill-head"], [1, "bi", 3, "ngClass"], [1, "progress-track"], [1, "progress-fill"]],
  template: function PortfolioSkillsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioSkillsComponent_article_1_Template, 4, 2, "article", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@cardStagger", undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.groups);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: [".skill-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.35rem;\n}\n\n.skill-group[_ngcontent-%COMP%] {\n  border: 1px solid var(--line-color);\n  background: var(--surface-card);\n  border-radius: 18px;\n  padding: 36px;\n  box-shadow: var(--card-shadow);\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n  animation: _ngcontent-%COMP%_skillsIn 0.7s ease both;\n}\n\n.skill-group[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 16px 32px rgba(2, 8, 23, 0.14);\n}\n\n.skill-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.9rem;\n  color: var(--text-color);\n  font-size: 1rem;\n}\n\n.skill-item[_ngcontent-%COMP%] {\n  margin-bottom: 1.05rem;\n}\n\n.skill-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.skill-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.35rem;\n}\n\n.skill-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  color: var(--text-color);\n  font-weight: 600;\n}\n\n.skill-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent-color);\n  animation: _ngcontent-%COMP%_iconBob 2.6s ease-in-out infinite;\n}\n\n.skill-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--muted-text);\n  font-size: 0.83rem;\n}\n\n.progress-track[_ngcontent-%COMP%] {\n  height: 7px;\n  background: var(--chip-bg);\n  border-radius: 999px;\n  overflow: hidden;\n}\n\n.progress-fill[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  height: 100%;\n  border-radius: 999px;\n  background: linear-gradient(90deg, var(--accent-color), var(--accent-soft));\n  transition: width 900ms cubic-bezier(0.22, 1, 0.36, 1);\n  overflow: hidden;\n}\n\n.progress-fill[_ngcontent-%COMP%]::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 26px;\n  background: rgba(255, 255, 255, 0.35);\n  filter: blur(2px);\n  animation: _ngcontent-%COMP%_sweep 2.2s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_sweep {\n  from {\n    left: -30px;\n  }\n  to {\n    left: calc(100% + 8px);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_iconBob {\n  0%,\n  100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-2px);\n  }\n}\n\n@keyframes _ngcontent-%COMP%_skillsIn {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@media (max-width: 992px) {\n  .skill-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWRtaW4vc2NyZWVucy9kYXNoYm9hcmQvcG9ydGZvbGlvL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixxREFBcUQ7RUFDckQsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsMkVBQTJFO0VBQzNFLHNEQUFzRDtFQUN0RCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsV0FBVztFQUNYLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBO0VBQ0U7O0lBRUUsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5za2lsbC1sYXlvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMS4zNXJlbTtcbn1cblxuLnNraWxsLWdyb3VwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZS1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtY2FyZCk7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIHBhZGRpbmc6IDM2cHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZSwgYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gIGFuaW1hdGlvbjogc2tpbGxzSW4gMC43cyBlYXNlIGJvdGg7XG59XG5cbi5za2lsbC1ncm91cDpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgYm94LXNoYWRvdzogMCAxNnB4IDMycHggcmdiYSgyLCA4LCAyMywgMC4xNCk7XG59XG5cbi5za2lsbC1ncm91cCBoMyB7XG4gIG1hcmdpbjogMCAwIDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5za2lsbC1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMS4wNXJlbTtcbn1cblxuLnNraWxsLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5za2lsbC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAwLjM1cmVtO1xufVxuXG4uc2tpbGwtaGVhZCBwIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjQ1cmVtO1xuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5za2lsbC1oZWFkIGkge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgYW5pbWF0aW9uOiBpY29uQm9iIDIuNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbi5za2lsbC1oZWFkIHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZC10ZXh0KTtcbiAgZm9udC1zaXplOiAwLjgzcmVtO1xufVxuXG4ucHJvZ3Jlc3MtdHJhY2sge1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY2hpcC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZ3Jlc3MtZmlsbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYWNjZW50LWNvbG9yKSwgdmFyKC0tYWNjZW50LXNvZnQpKTtcbiAgdHJhbnNpdGlvbjogd2lkdGggOTAwbXMgY3ViaWMtYmV6aWVyKDAuMjIsIDEsIDAuMzYsIDEpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucHJvZ3Jlc3MtZmlsbDo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDI2cHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gIGZpbHRlcjogYmx1cigycHgpO1xuICBhbmltYXRpb246IHN3ZWVwIDIuMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHN3ZWVwIHtcbiAgZnJvbSB7XG4gICAgbGVmdDogLTMwcHg7XG4gIH1cbiAgdG8ge1xuICAgIGxlZnQ6IGNhbGMoMTAwJSArIDhweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBpY29uQm9iIHtcbiAgMCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNraWxsc0luIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2tpbGwtbGF5b3V0IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('cardStagger', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.query)('.skill-group', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 0,
      transform: 'translateY(16px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.stagger)(90, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('420ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    })))], {
      optional: true
    })])])]
  }
});

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routingComponents": () => (/* binding */ routingComponents)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/admin.module */ 7095);
/* harmony import */ var _admin_screens_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/screens/dashboard/dashboard.component */ 1069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [{
  path: '',
  redirectTo: 'portfolio',
  pathMatch: 'full'
}, {
  path: 'portfolio',
  component: _admin_screens_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent
}, {
  path: 'admin/portfolio',
  redirectTo: 'portfolio',
  pathMatch: 'full'
}, {
  path: 'admin',
  redirectTo: 'portfolio',
  pathMatch: 'full'
}, {
  path: '**',
  redirectTo: 'portfolio'
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();
const routingComponents = [_admin_admin_module__WEBPACK_IMPORTED_MODULE_0__.AdminModule];

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
  constructor() {
    this.title = 'Abhyas';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _interceptor_headers_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptor/headers.interceptor */ 7869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.module */ 7095);









class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_5__.HashLocationStrategy
  }, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
    useClass: _interceptor_headers_interceptor__WEBPACK_IMPORTED_MODULE_2__.HeadersInterceptor,
    multi: true
  }, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient],
  imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.routingComponents]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _admin_admin_module__WEBPACK_IMPORTED_MODULE_3__.AdminModule]
  });
})();

/***/ }),

/***/ 7869:
/*!****************************************************!*\
  !*** ./src/app/interceptor/headers.interceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadersInterceptor": () => (/* binding */ HeadersInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class HeadersInterceptor {
  constructor(router) {
    this.router = router;
    this.logininfo = [];
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd) {
        // console.log(event.urlAfterRedirects);
        this.logininfo = localStorage.getItem('adminlogin');
        this.logininfo = this.logininfo ? JSON.parse(this.logininfo) : null;
        if (this.logininfo) {
          this.logininfo.stdCourse = '';
        }
      }
    });
  }
  intercept(request, next) {
    return next.handle(request);
  }
}
HeadersInterceptor.ɵfac = function HeadersInterceptor_Factory(t) {
  return new (t || HeadersInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router));
};
HeadersInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: HeadersInterceptor,
  factory: HeadersInterceptor.ɵfac
});

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map