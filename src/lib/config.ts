// Sweeyam Life — single site configuration.
// Canonical domain is .in; email stays on .co.in (MX). See docs/ARCHITECTURE.md.

export const SITE = {
  name: 'Sweeyam Life',
  tagline: 'Return to self, to nature and to meaningful everyday rituals.',
  url: 'https://www.sweeyamlife.in',
  description:
    'Sweeyam Life is an accessible premium lifestyle and self-care brand rooted in nature, heritage and thoughtful science. Kind to you and the Earth.',
  themeColor: '#10233d',
  locale: 'en_IN',
  pinterestVerify: '7065115029786405867155d7158de756',
};

export const EMAILS = {
  connect: 'connect@sweeyamlife.co.in',
  partners: 'partners@sweeyamlife.co.in',
  press: 'press@sweeyamlife.co.in',
  marketing: 'marketing@sweeyamlife.co.in',
  support: 'support@sweeyamlife.co.in',
  compliance: 'compliance@sweeyamlife.co.in',
  investors: 'investors@sweeyamlife.co.in',
} as const;

export const CONTACT = {
  phoneDisplay: '+91 98482 71543',
  phoneE164: '+91-98482-71543',
  whatsappNumber: '919848271543',
  whatsappText:
    'Hello%20Sweeyam%20Life%2C%20I%20would%20like%20to%20connect%20with%20you.',
} as const;

export const SOCIALS = [
  { name: 'Instagram', url: 'https://www.instagram.com/sweeyam.life/' },
  { name: 'Facebook', url: 'https://www.facebook.com/sweeyamlife' },
  { name: 'YouTube', url: 'https://www.youtube.com/@sweeyamlife' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/sweeyamlife' },
  { name: 'Pinterest', url: 'https://in.pinterest.com/sweeyamlife/' },
  { name: 'WhatsApp', url: `https://wa.me/${CONTACT.whatsappNumber}?text=${CONTACT.whatsappText}`, whatsapp: true },
] as const;

export const GOOGLE_FORMS = {
  action:
    'https://docs.google.com/forms/d/e/1FAIpQLSccRWIA1GWV-vfUYOrdo9Mp_pDvkGQDL7iV1ZRKBgvbc4y0hg/formResponse',
  entry: {
    name: 'entry.1702164361',
    mobile: 'entry.299388172',
    email: 'entry.857733985',
    consent: 'entry.627945568',
  },
} as const;

export type NavItem = { label: string; href: string; cta?: boolean };

export const NAV: NavItem[] = [
  { label: 'Our Promise', href: '/#promise' },
  { label: 'How We Create', href: '/#process' },
  { label: 'Our World', href: '/#world' },
  { label: 'Behind Sweeyam Life', href: '/#behind' },
  { label: 'Investors', href: '/investors/' },
];

export const NAV_CTA: NavItem = { label: 'Grow With Us', href: '/#grow', cta: true };

export const FOOTER_COLUMNS = [
  {
    heading: 'Company',
    links: [
      { label: 'Core Values', href: '/investors/#core-values' },
      { label: 'Press', href: `mailto:${EMAILS.press}` },
      { label: 'Marketing', href: `mailto:${EMAILS.marketing}` },
      { label: 'Support', href: `mailto:${EMAILS.support}` },
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Terms of Use', href: '/terms-of-use/' },
    ],
  },
  {
    heading: 'Explore',
    links: [
      { label: 'Our Promise', href: '/#promise' },
      { label: 'How We Create', href: '/#process' },
      { label: 'Our World', href: '/#world' },
      { label: 'Behind Sweeyam Life', href: '/#behind' },
    ],
  },
  {
    heading: 'Grow With Us',
    links: [
      { label: 'Investors & Strategic Partners', href: '/investors/' },
      { label: 'Suppliers & Artisans', href: `mailto:${EMAILS.partners}` },
      { label: 'R&D Partners', href: `mailto:${EMAILS.partners}` },
      { label: 'Women Entrepreneurs', href: `mailto:${EMAILS.partners}` },
      { label: 'Contact', href: '/contact/' },
    ],
  },
] as const;

export const WORLDS = [
  { id: 'hygiene', num: '01', name: 'Hygiene', tag: 'Cleansing rituals · Joyfulness', alt: 'Hygiene and cleansing rituals' },
  { id: 'nourishing', num: '02', name: 'Nourishing', tag: 'Skin, hair and body care · Efficacy', alt: 'Nourishing skin, hair and body care' },
  { id: 'home', num: '03', name: 'Home Cleaning', tag: 'Care for space · Sustainability', alt: 'Purposeful and sustainable home cleaning' },
  { id: 'heritage', num: '04', name: 'Heritage Games', tag: 'Culture and connection · Inclusivity', alt: 'Heritage games that encourage culture and connection' },
  { id: 'kitchen', num: '05', name: 'Kitchenware', tag: 'Material beauty · Transparency', alt: 'Kitchenware designed for beauty and longevity' },
] as const;
