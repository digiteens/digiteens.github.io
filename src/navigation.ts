import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import EULogo from './assets/images/nextgeneu-logo.png';

export const headerData = {
  links: [
    {
      text: 'Project',
      href: getPermalink('/project'),
    },
    {
      text: 'Team',
      href: getPermalink('/about'),
    },
    {
      text: 'Updates',
      href: getBlogPermalink(),
    },
    {
      text: 'Publications',
      href: getPermalink('/publications'),
    },
    {
      text: 'Contacts',
      href: '#',
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Project', href: getPermalink('/project') },
    { text: 'Team', href: getPermalink('/about') },
    { text: 'Contacts', href: getPermalink('/contacts') },
  ],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    <img class="h-10 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="${EULogo.src}" alt="Founded by the European Union - NextGenerationEU" loading="lazy"></img>
     "Improving digital wellbeing with and for teens: a gamified and personalized intelligent system" project – funded by European Union – Next Generation EU  within the PRIN 2022 program (D.D. 104 - 02/02/2022 Ministero dell’Università e della Ricerca).
  `,
};
