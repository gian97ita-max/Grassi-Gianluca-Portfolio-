
import { Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Operra - B2B SaaS · Workflow Automation',
    roi: 'Shaping the revenue foundation of an AI-driven SaaS platform.',
    category: 'Product Strategy & UX',
    image: 'https://lh3.googleusercontent.com/d/1zO5FKrg2Pm0RpwyLHkg9QpDc28ojo6R6',
    description: 'Transforming a SaaS product into an AI-powered revenue growth system.',
    bgColor: 'bg-zinc-900'
  },
  {
    id: '2',
    title: 'Thesis AI',
    roi: 'Designing the reasoning core of an AI decision engine.',
    category: 'AI Systems & HITP',
    image: 'https://lh3.googleusercontent.com/d/1gZ72WVz8Ucr8zjIrAydEdyI0doYxbKpv',
    description: 'Building structured, explainable strategic decisions from fragmented startup signals.',
    bgColor: 'bg-zinc-800',
    objectPosition: 'top'
  },
  {
    id: '3',
    title: 'Novra - Mobile Crypto App',
    roi: 'Reframing leverage risk through systemic mobile redesign.',
    category: 'Mobile Product Design',
    image: 'https://lh3.googleusercontent.com/d/16Vx_S3clow9_1B-raxogHsgbL-W86l00',
    description: 'Reducing high-stakes user error in a volatile, leverage-driven trading environment.',
    bgColor: 'bg-zinc-700'
  },
  {
    id: '4',
    title: 'Sentinel',
    roi: 'Operational Efficiency & Fraud Ops',
    category: 'Enterprise SaaS · Internal Operations',
    image: 'https://lh3.googleusercontent.com/d/1Rp0EgvoPtpCpw2_7ne7uu5x5ZE1OMGVo',
    description: 'Re-architecting a high-volume fraud operations system to reduce decision friction and operational cost.',
    bgColor: 'bg-zinc-950'
  }
];
