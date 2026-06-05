export interface NavItem {
  label: string
  href: string
}

export interface ServiceCard {
  icon: string
  title: string
  description: string
  features: string[]
  gradient: string
  glowColor: string
}

export interface CaseStudy {
  industry: string
  clientType: string
  title: string
  description: string
  metrics: {
    label: string
    value: string
    suffix?: string
  }[]
  tags: string[]
  gradient: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  rating: number
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  icon: string
  details: string[]
}

export interface StatItem {
  value: number
  suffix: string
  label: string
  description: string
}

export interface ContactInfo {
  icon: string
  label: string
  value: string
  href?: string
}
