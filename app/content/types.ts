export interface ProjectMetric {
  value: string
  label: string
  detail?: string
}

export interface ProjectItem {
  id: string
  title: string
  year: string
  role: string
  category: string
  liveUrl: string
  previewImage: string
  metric: ProjectMetric
  problem: string
  solution: string
  tags: string[]
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  description: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  location: string
}

export interface PrincipleItem {
  number: string
  title: string
  description: string
}

export interface SkillCategory {
  category: string
  skills: string[]
}

export interface ArticleImage {
  src: string
  alt: string
  caption: string
}

export interface ArticlePoint {
  label: string
  text: string
}

export interface ArticleSection {
  id: string
  title?: string
  paragraphs: string[]
  points?: ArticlePoint[]
  image?: ArticleImage
}

export interface ArticleItem {
  id: string
  slug: string
  title: string
  subtitle: string
  category: string
  readTime: string
  date: string
  tags: string[]
  summary: string
  sections: ArticleSection[]
}

export interface ArticlesSectionContent {
  sectionNumber: string
  title: string
  subtitle: string
  readAction: string
  closeAction: string
  backToArticles: string
  tapToZoomHint: string
  items: ArticleItem[]
}

export interface PortfolioContent {
  nav: {
    projects: string
    articles: string
    experience: string
    principles: string
    contact: string
    cvButton: string
    skipLink: string
    themeToggleAria: string
    langToggleAria: string
  }
  hero: {
    status: string
    location: string
    greeting: string
    name: string
    role: string
    positioning: string
    ctaProjects: string
    ctaContact: string
    downloadCv: string
  }
  works: {
    sectionNumber: string
    title: string
    subtitle: string
    problemLabel: string
    solutionLabel: string
    visitLive: string
    projects: ProjectItem[]
  }
  articles: ArticlesSectionContent
  experience: {
    sectionNumber: string
    title: string
    subtitle: string
    jobs: ExperienceItem[]
    educationTitle: string
    education: EducationItem[]
  }
  principles: {
    sectionNumber: string
    title: string
    subtitle: string
    items: PrincipleItem[]
    skillsTitle: string
    skills: SkillCategory[]
    languagesTitle: string
    languages: { name: string; level: string }[]
  }
  contact: {
    sectionNumber: string
    title: string
    subtitle: string
    emailLabel: string
    copyEmail: string
    copied: string
    linkedinLabel: string
    githubLabel: string
    cvLabel: string
    availabilityNote: string
  }
  footer: {
    copyright: string
    techStack: string
    backToTop: string
  }
}
