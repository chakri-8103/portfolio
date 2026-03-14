import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';
import { AchievementItem } from './portfolio/achievements/achievements.component';
import { EducationItem } from './portfolio/about/about.component';
import { CertificationItem } from './portfolio/certifications/certifications.component';
import { ExperienceItem } from './portfolio/experience/experience.component';
import { HeroStat } from './portfolio/hero/hero.component';
import { PortfolioNavLink } from './portfolio/navbar/navbar.component';
import { ProjectItem } from './portfolio/projects/projects.component';
import { SkillGroup } from './portfolio/skills/skills.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('pageReveal', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('420ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('sectionCascade', [
      transition(':enter', [
        query(
          '.portfolio-section',
          [
            style({ opacity: 0, transform: 'translateY(26px)' }),
            stagger(120, animate('620ms cubic-bezier(0.22, 1, 0.36, 1)', style({ opacity: 1, transform: 'translateY(0)' })))
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  darkMode = false;
  isMobileView = false;
  scrollDepth = 0;
  scrollPx = 0;
  mouseX = 0;
  mouseY = 0;
  private sectionObserver: IntersectionObserver | null = null;

  readonly name = 'Janapaneedi Chakradhar';
  readonly role = 'Full-Stack Developer | Backend Engineer';
  readonly company = 'Criativo Software Company, Kakinada';

//   Janapaneedi Chakradhar
// Full-Stack Developer | Backend Engineer

// I am a Full - Stack Developer specializing in backend systems and scalable web applications.I build secure APIs, real - time systems, and modern web interfaces using technologies like Node.js, Python, Angular, MongoDB, and Firebase.Currently working at Criativo Company, I focus on creating reliable, high-performance solutions that solve real business problems.

  readonly intro =
  'I am a Full-Stack Developer specializing in backend systems and scalable web applications. I build secure APIs, real-time applications, and modern web interfaces using technologies like Angular, AngularJS, Python, Node.js, and MongoDB. Currently working at Criativo Company, I focus on building reliable, high-performance solutions that solve real-world business problems.';

  readonly typingSkills = ['Angular','', 'AngularJS','', 'Node.js','', 'Python','', 'MongoDB', '', ''];

  readonly navLinks: PortfolioNavLink[] = [
  { label: 'Home', fragment: 'hero' },
  { label: 'About', fragment: 'about' },
  { label: 'Skills', fragment: 'skills' },
  { label: 'Projects', fragment: 'projects' },
  { label: 'Experience', fragment: 'experience' },
  { label: 'Certs', fragment: 'certifications' },
  { label: 'Wins', fragment: 'achievements' },
  { label: 'Contact', fragment: 'contact' }
];

  readonly heroStats: HeroStat[] = [
  { label: 'Projects', value: '6+ Projects' },
  { label: 'Awards', value: '3 Major Wins' },
  { label: 'Primary Focus', value: 'Angular, AngularJS' },
  { label: 'Deploy', value: 'Github / Vercel' }
];

  readonly education: EducationItem[] = [
  {
    degree: 'Degree (B.Sc-MCCs)',
    institution: 'Aditya Degree College, Kakinada',
    score: '72%',
    year: '2022-2025'
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Aditya Junior College, Kakinada',
    score: '76%',
    year: '2020-2022'
  },
  {
    degree: '10th',
    institution: 'Swamy E.M High School',
    score: '83%',
    year: '2019-2020'
  }
];

  readonly story =
`My journey as a developer is driven by curiosity and problem-solving. I enjoy building modern web applications with clean, responsive interfaces and reliable backend systems.
At Criativo Company, I develop secure, production-ready applications using Angular and AngularJS while collaborating with my team to deliver scalable solutions.`;

  readonly skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'Angular', level: 90, icon: 'bi-stars' },
      { name: 'JavaScript', level: 86, icon: 'bi-filetype-js' },
      { name: 'Bootstrap', level: 88, icon: 'bi-bootstrap' },
      { name: 'HTML & CSS', level: 92, icon: 'bi-code-slash' }
    ]
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', level: 89, icon: 'bi-hdd-network' },
      { name: 'Python / FastAPI', level: 87, icon: 'bi-terminal-fill' },
      { name: 'MongoDB', level: 85, icon: 'bi-database-fill-gear' },
      { name: 'Firebase', level: 80, icon: 'bi-cloud-upload-fill' }
    ]
  },
  {
    category: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 90, icon: 'bi-git' },
      { name: 'VS Code', level: 93, icon: 'bi-window-stack' },
      { name: 'Railway / Vercel', level: 82, icon: 'bi-cloud-check-fill' },
      { name: 'MongoDB Compass', level: 84, icon: 'bi-diagram-3-fill' },
    ]
  },
  {
    category: 'Advanced Engineering',
    skills: [
      { name: 'API Development', level: 90, icon: 'bi-plug-fill' },
      { name: 'WebSockets', level: 82, icon: 'bi-broadcast-pin' },
      { name: 'Automation', level: 84, icon: 'bi-gear-wide-connected' },
      { name: 'Secure System Design', level: 81, icon: 'bi-shield-lock-fill' }
    ]
  }
];

  readonly projects: ProjectItem[] = [
  {
    title: 'Lead Management System',
    description: 'Built a centralized full-stack platform for tracking leads, status updates, and follow-up workflows.',
    stack: ['Angular', 'Node.js', 'MongoDB'],
    github: 'https://github.com/',
    live: 'https://vercel.com/'
  },
  {
    title: 'File Integrated Management System',
    description: 'Engineered a secure document pipeline with role-based access, uploads, and indexed retrieval.',
    stack: ['Angular', 'FastAPI', 'MongoDB'],
    github: 'https://github.com/',
    live: 'https://vercel.com/'
  },
  {
    title: 'Secure Exam Portal',
    description: 'Created a proctoring-oriented exam portal that restricts screenshot/copy actions and hardens session flow.',
    stack: ['Angular', 'Node.js', 'Web APIs'],
    github: 'https://github.com/',
    live: 'https://vercel.com/'
  },
  {
    title: 'Voting System for College Projects',
    description: 'Implemented voting lifecycle, validation, and transparent result aggregation for project competitions.',
    stack: ['Angular', 'Firebase'],
    github: 'https://github.com/',
    live: 'https://vercel.com/'
  },
  {
    title: 'Network Intrusion Detection System',
    description: 'Developed a Flask and Dash solution with Scapy packet analysis and RandomForestClassifier threat detection.',
    stack: ['Flask', 'Dash', 'Scapy', 'ML'],
    github: 'https://github.com/',
    live: 'https://vercel.com/'
  },
  {
    title: 'Notification Sender',
    description: 'Delivered real-time Angular + Firebase push notification service for system and user-triggered updates.',
    stack: ['Angular', 'Firebase', 'Cloud Messaging'],
    github: 'https://github.com/',
    live: 'https://vercel.com/'
  }
];

  readonly experiences: ExperienceItem[] = [
  {
    title: 'Full-Stack Developer & Backend Developer',
    company: 'Criativo Software Company, Kakinada',
    duration: '2025 - Present',
    summary:
      'Owning backend-heavy delivery while collaborating across product and frontend workflows to launch reliable web systems.',
    highlights: [
      'Designed API-first architecture and service integrations for business workflows.',
      'Implemented secure access patterns and production-grade dashboard capabilities.',
      'Shipped data-driven Angular interfaces connected to scalable backend services.'
    ]
  }
];

  readonly certifications: CertificationItem[] = [
  { title: 'HackerRank Python Certificate', issuer: 'HackerRank', badge: 'Verified' },
  { title: 'Python Certificate', issuer: 'Criativo Company', badge: 'Professional' },
  { title: 'Mobile App Hackathon Certificate', issuer: 'Adhoc Company', badge: 'Hackathon' },
  { title: 'AWS (S3, IAM User Creation)', issuer: 'Adhoc Company', badge: 'Cloud' }
];

  readonly achievements: AchievementItem[] = [
  { title: 'Rising Star of the Year 2025', detail: 'Recognized at Criativo Company for high-impact execution.' },
  { title: '1st Place - Coding Contest', detail: 'Won first place by delivering optimized and accurate solutions.' },
  { title: '1st Place - NSS Quiz', detail: 'Secured top position in competitive NSS knowledge challenge.' }
];

  readonly socialLinks = [
  { label: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/' },
  { label: 'GitHub', icon: 'bi-github', url: 'https://github.com/' },
  { label: 'Email', icon: 'bi-envelope-fill', url: 'mailto:chakri.dev@example.com' }
];

  readonly email = 'chakri.dev@example.com';
  readonly linkedin = 'https://www.linkedin.com/';
  readonly github = 'https://github.com/';
  readonly location = 'Kakinada, Andhra Pradesh, India';

constructor(private readonly route: ActivatedRoute) { }

ngOnInit(): void {
  this.syncViewportMode();
  const savedTheme = localStorage.getItem('portfolio-theme');
  if(!savedTheme) {
    this.darkMode = true;
    localStorage.setItem('portfolio-theme', 'dark');
  } else {
    this.darkMode = savedTheme === 'dark';
  }
    this.route.fragment.subscribe(fragment => {
    if (fragment) {
      setTimeout(() => {
        document
          .getElementById(fragment)
          ?.scrollIntoView({ behavior: this.isMobileView ? 'auto' : 'smooth', block: 'start' });
      }, 100);
    }
  });
}

ngAfterViewInit(): void {
  this.setupSectionReveal();
  this.updateScrollState();
}

ngOnDestroy(): void {
  this.disconnectSectionObserver();
}

toggleTheme(): void {
  this.darkMode = !this.darkMode;
  localStorage.setItem('portfolio-theme', this.darkMode ? 'dark' : 'light');
}

@HostListener('window:resize')
onWindowResize(): void {
  const wasMobileView = this.isMobileView;
  this.syncViewportMode();

  if(wasMobileView !== this.isMobileView) {
  this.setupSectionReveal();
  this.updateScrollState();
}
  }

@HostListener('window:scroll')
onWindowScroll(): void {
  this.updateScrollState();
}

@HostListener('window:mousemove', ['$event'])
onMouseMove(event: MouseEvent): void {
  if(this.isMobileView) {
  return;
}

const x = event.clientX - window.innerWidth / 2;
const y = event.clientY - window.innerHeight / 2;
this.mouseX = Math.max(Math.min(x, 180), -180);
this.mouseY = Math.max(Math.min(y, 180), -180);
  }

  private syncViewportMode(): void {
  this.isMobileView = window.innerWidth <= 767;

  if(this.isMobileView) {
  this.scrollDepth = 0;
  this.scrollPx = 0;
  this.mouseX = 0;
  this.mouseY = 0;
}
  }

  private setupSectionReveal(): void {
  this.disconnectSectionObserver();
  const nodes = Array.from(document.querySelectorAll('.fx-reveal'));

  if(this.isMobileView) {
  nodes.forEach(node => node.classList.add('in-view'));
  return;
}

this.sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  },
  { threshold: 0.22, rootMargin: '0px 0px -8% 0px' }
);

nodes.forEach(node => this.sectionObserver?.observe(node));
  }

  private disconnectSectionObserver(): void {
  this.sectionObserver?.disconnect();
  this.sectionObserver = null;
}

  private updateScrollState(): void {
  if(this.isMobileView) {
  this.scrollDepth = 0;
  this.scrollPx = 0;
  return;
}

const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
this.scrollPx = scrollTop;
this.scrollDepth = Math.min(scrollTop / maxScroll, 1);
  }

}
