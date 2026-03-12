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
  scrollDepth = 0;
  scrollPx = 0;
  mouseX = 0;
  mouseY = 0;
  private sectionObserver: IntersectionObserver | null = null;

  readonly name = 'Janapaneedi Chakradhar';
  readonly role = 'Full-Stack Developer & Backend Developer';
  readonly company = 'Criativo Company, Kakinada';

  readonly intro =
    'I design and build scalable products end-to-end, from secure backend APIs to responsive Angular interfaces. My focus is maintainable architecture, performance, and practical business impact.';

  readonly typingSkills = ['Angular', 'Node.js', 'FastAPI', 'MongoDB', 'WebSockets', 'Automation'];

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
    { label: 'Primary Focus', value: 'Full-Stack Development' },
    { label: 'Deployment', value: 'Vercel' }
  ];

  readonly education: EducationItem[] = [
    {
      degree: 'B.Sc (2025 Batch)',
      institution: 'Aditya Degree College, Kakinada',
      score: '72%',
      year: '2025'
    },
    {
      degree: 'Intermediate',
      institution: 'Aditya Junior College, Kakinada',
      score: '76%',
      year: '2021'
    },
    {
      degree: '10th',
      institution: 'Swamy E.M High School',
      score: '83%',
      year: '2019'
    }
  ];

  readonly story =
    'I am a full-stack engineer who enjoys solving backend-heavy challenges while delivering strong frontend experiences. At Criativo Company, I build secure and production-ready systems, participate in rapid product development, and contribute to team-driven innovation with an execution-first mindset.';

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
        { name: 'Three.js', level: 78, icon: 'bi-bounding-box-circles' },
        { name: 'GSAP', level: 76, icon: 'bi-activity' },
        { name: 'Next.js', level: 72, icon: 'bi-stack' }
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
      company: 'Criativo Company, Kakinada',
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

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
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
          document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  }

  ngAfterViewInit(): void {
    const nodes = Array.from(document.querySelectorAll('.fx-reveal'));
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
    this.updateScrollState();
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
    this.sectionObserver = null;
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('portfolio-theme', this.darkMode ? 'dark' : 'light');
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrollState();
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const x = event.clientX - window.innerWidth / 2;
    const y = event.clientY - window.innerHeight / 2;
    this.mouseX = Math.max(Math.min(x, 180), -180);
    this.mouseY = Math.max(Math.min(y, 180), -180);
  }

  private updateScrollState(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    this.scrollPx = scrollTop;
    this.scrollDepth = Math.min(scrollTop / maxScroll, 1);
  }

}
