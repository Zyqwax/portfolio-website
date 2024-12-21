import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    title: 'Ana Sayfa',
    hash: '#home',
  },
  {
    name: 'About',
    title: 'Hakkında',
    hash: '#about',
  },
  {
    name: 'Projects',
    title: 'Projeler',
    hash: '#projects',
  },
  {
    name: 'Skills',
    title: 'Yetenekler',
    hash: '#skills',
  },
  {
    name: 'Experience',
    title: 'Deneyim',
    hash: '#experience',
  },
  {
    name: 'Contact',
    title: 'İletişim',
    hash: '#contact',
  },
];

export const experiencesData = [
  {
    title: 'ODTÜ / Bilgisayar Mühendisliği',
    location: 'Ankara / Türkiye',
    description:
      '2019 yılında Orta Doğu Teknik Üniversitesi Bilgisayar Mühendisliği bölümünü derece ile bitirdim. Mezun olmadan ve olduktan sonra da kendimi geliştirmeye hep özen gösterdim.',
    icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Mobile-App Developer',
    location: 'HC Bilişim, İzmir',
    description:
      'Özel bir mobil uygulama şirketinde mobil uygulama geliştiricisi olarak çalıştım. Uygulamalarımı genellikle React Native, Flutter ve Native kod kullanarak geliştirdim.',
    icon: React.createElement(FaReact),
    date: '2020 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'ASELSAN / Ankara',
    description:
      "Şu anda ASELSAN'da full-stack geliştirici olarak çalışmaktayım. Önümüzdeki süreçte kendimi geliştimeye ve yeniliklere uyum sağlamaya devam edeceğim.",
    icon: React.createElement(CgWorkAlt),
    date: '2021 - Günümüz',
  },
];

export const projectsData = [
  {
    title: 'CorpComment',
    description: 'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description: 'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description: 'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
];

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Express',
  'Python',
  'Django',
];
