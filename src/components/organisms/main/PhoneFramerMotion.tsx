'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { phones } from '@/lib/MainPhoneFramerMotionData';

const PhoneFramerMotion: React.FC = () => {
  return (
    <div className="bg-primary w-screen h-screen flex justify-center items-center">
      {phones.map(phone => (
        <motion.div
          key={phone.id}
          initial={{
            x: phone.direction === 'left' ? '-100vw' : '100vw',
            opacity: 0,
          }}
          animate={{ x: 20, opacity: 1 }}
          transition={{ duration: 20, type: 'spring' }}
          className={`m-4 ${phone.id % 2 === 0 ? 'mt-48' : ''}`}
        >
          <Image src={phone.src} alt={phone.alt} width={300} height={400} />
        </motion.div>
      ))}
    </div>
  );
};

export default PhoneFramerMotion;
