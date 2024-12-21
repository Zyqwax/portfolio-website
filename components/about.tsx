'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>Hakkımda</SectionHeading>
      <p className='mb-3'>
        <span className='font-medium'>Yazılım geliştirme</span>ye olan ilgim beni bu alanda kendimi geliştirmeye yönlendirdi. Lisede farklı
        teknolojiler öğrenerek başladım ve şu anda hem frontend hem de backend teknolojileriyle çalışıyorum. Temel stack'im{' '}
        <span className='font-medium'>React, Next.js, Django ve Python</span>. <span className='italic'>Programlamada en sevdiğim kısım</span> problem
        çözme süreci. Bir problemi çözmenin verdiği tatmin duygusunu <span className='underline'>çok seviyorum</span>. Ayrıca HTML, CSS ve JavaScript
        gibi teknolojilere de hakimim. Sürekli yeni teknolojiler öğrenmeyi hedefliyorum ve şu anda portfolyo projeleri üzerinde çalışıyorum.
      </p>

      <p>
        <span className='italic'>Kod yazmadığım zamanlarda</span>, resim yapmak, spor yapmak ve yeni şeyler öğrenmekten hoşlanıyorum. Şu sıralar{' '}
        <span className='font-medium'>mobil uygulama geliştirme</span> üzerine çalışıyor ve <span className='font-medium'>tasarım</span> ve kullanıcı
        deneyimi konularında bilgi ediniyorum. Ayrıca tarihe ve farklı kültürlere olan merakımı keşfetmeye devam ediyorum.
      </p>
    </motion.section>
  );
}
