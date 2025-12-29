import { getPermalink } from './utils/permalinks';
import siteSettings from './data/settings/site.json';

export const headerData = {
  showToggleTheme: true,
  links: [
    {
      text: 'Acasa',
      href: getPermalink('/'),
    },
    {
      text: 'Proprietati',
      links: [
        {
          text: 'Toate proprietatile',
          href: getPermalink('/proprietati'),
        },
        {
          text: 'Apartamente',
          href: getPermalink('/proprietati/apartamente'),
        },
        {
          text: 'Case si Vile',
          href: getPermalink('/proprietati/case'),
        },
        {
          text: 'Terenuri',
          href: getPermalink('/proprietati/terenuri'),
        },
        {
          text: 'Spatii Comerciale',
          href: getPermalink('/proprietati/comercial'),
        },
      ],
    },
    {
      text: 'Servicii',
      links: [
        {
          text: 'Vanzari',
          href: getPermalink('/servicii/vanzari'),
        },
        {
          text: 'Inchirieri',
          href: getPermalink('/servicii/inchirieri'),
        },
        {
          text: 'Evaluari',
          href: getPermalink('/servicii/evaluari'),
        },
        {
          text: 'Consultanta',
          href: getPermalink('/servicii/consultanta'),
        },
      ],
    },
    {
      text: 'Despre Noi',
      href: getPermalink('/despre'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [
    {
      text: 'Programeaza vizita',
      href: getPermalink('/contact'),
      icon: 'tabler:calendar',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Proprietati',
      links: [
        { text: 'Apartamente', href: getPermalink('/proprietati/apartamente') },
        { text: 'Case si Vile', href: getPermalink('/proprietati/case') },
        { text: 'Terenuri', href: getPermalink('/proprietati/terenuri') },
        { text: 'Spatii Comerciale', href: getPermalink('/proprietati/comercial') },
        { text: 'Toate proprietatile', href: getPermalink('/proprietati') },
      ],
    },
    {
      title: 'Servicii',
      links: [
        { text: 'Vanzari Imobiliare', href: getPermalink('/servicii/vanzari') },
        { text: 'Inchirieri', href: getPermalink('/servicii/inchirieri') },
        { text: 'Evaluari Proprietati', href: getPermalink('/servicii/evaluari') },
        { text: 'Consultanta Imobiliara', href: getPermalink('/servicii/consultanta') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: `Telefon: ${siteSettings.contact.phone}`, href: `tel:${siteSettings.contact.phone}` },
        { text: `Email: ${siteSettings.contact.email}`, href: `mailto:${siteSettings.contact.email}` },
        { text: 'Programare vizionare', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Informatii',
      links: [
        { text: 'Despre noi', href: getPermalink('/despre') },
        { text: 'Echipa noastra', href: getPermalink('/despre#echipa') },
        { text: 'Blog imobiliar', href: getPermalink('/blog') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Termeni si conditii', href: getPermalink('/terms') },
    { text: 'Politica de confidentialitate', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: siteSettings.socialMedia.facebook },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: siteSettings.socialMedia.instagram },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: `https://wa.me/${siteSettings.contact.whatsapp}` },
  ],
  footNote: `
    © ${new Date().getFullYear()} Casa Perfecta - Agentie Imobiliara Bucuresti. Toate drepturile rezervate.
  `,
};
