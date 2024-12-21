'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import { BsGithub, BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className='flex flex-row gap-4 justify-center items-center p-4'>
        <a
          className='flex justify-center items-center w-12 h-12 bg-white text-gray-700 hover:text-gray-950 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60'
          href='https://www.instagram.com/gozlu.enessamed_007/'
          target='_blank'
        >
          <BsInstagram />
        </a>
        <a
          className='flex justify-center items-center w-12 h-12 bg-white text-gray-700 hover:text-gray-950 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60'
          href='https://github.com/Zyqwax'
          target='_blank'
        >
          <BsGithub />
        </a>
        <a
          className='flex justify-center items-center w-12 h-12 bg-white text-gray-700 hover:text-gray-950 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60'
          href='https://x.com/Enessamed422'
          target='_blank'
        >
          <BsTwitter />
        </a>
      </div>

      <SectionHeading>Bana ulaş</SectionHeading>

      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Bana bu formu kullanarak ulaşabilirsin{' '}
        <a className='underline' href='mailto:enessamed422@gmail.com'>
          enessamed422@gmail.com
        </a>
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
