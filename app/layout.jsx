import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Enes Samed Gözlü | Portföy',
  description: 'Enes is a full-stack developer with 8 years of experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <head>
        <link rel='apple-touch-icon' sizes='57x57' href='/icon/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/icon/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/icon/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/icon/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/icon/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/icon/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/icon/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/icon/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icon/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/icon/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/icon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/icon/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/icon/favicon-16x16.png' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/icon/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/icon/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />

        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content="Enes Samed Gözlü'nün portföy sitesi. Yazılım öğrencisi ve frontend, backend teknolojilerinde yetkin, yaratıcı projeler ve deneyimler." />
        <meta name='keywords' content='Enes Samed Gözlü, yazılım öğrencisi, frontend, backend, React, Next.js, Python, Django, portföy, yazılım geliştirme, web geliştirme' />
        <meta name='author' content='Enes Samed Gözlü' />
        <meta name='description' content='Enes Samed Gözlü&#039;nün portföy sitesi. Yazılım öğrencisi ve frontend, backend teknolojilerinde yetkin, yaratıcı projeler ve deneyimler.' />
        <meta itemprop='name' content='Enes Samed Gözlü - Portföy' />
        <meta itemprop='image' content='https://www.enessamedgozlu.me/thumbnail.png' />

        <meta property='og:url' content='https://www.enessamedgozlu.me/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Enes Samed Gözlü - Portföy' />
        <meta property='og:description' content='Enes Samed Gözlü&#039;nün portföy sitesi. Yazılım öğrencisi ve frontend, backend teknolojilerinde yetkin, yaratıcı projeler ve deneyimler.' />
        <meta property='og:image' content='https://www.enessamedgozlu.me/thumbnail.png' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Enes Samed Gözlü - Portföy' />
        <meta name='twitter:description' content='Enes Samed Gözlü&#039;nün portföy sitesi. Yazılım öğrencisi ve frontend, backend teknolojilerinde yetkin, yaratıcı projeler ve deneyimler.' />
        <meta name='twitter:image' content='https://www.enessamedgozlu.me/thumbnail.png' />
      </head>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]'></div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position='top-right' />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
