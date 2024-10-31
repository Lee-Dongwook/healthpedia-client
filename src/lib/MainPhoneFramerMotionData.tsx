import type { StaticImageData } from 'next/image';
import Phone1 from '@/assets/img/Phone 1.png';
import Phone2 from '@/assets/img/Phone 2.png';
import Phone3 from '@/assets/img/Phone 3.png';
import Phone4 from '@/assets/img/Phone 4.png';

interface Phone {
  id: number;
  src: StaticImageData;
  alt: string;
  direction: 'left' | 'right' | 'top' | 'bottom';
}

export const phones: Phone[] = [
  {
    id: 1,
    src: Phone1,
    alt: 'Phone 1',
    direction: 'left',
  },
  { id: 2, src: Phone2, alt: 'Phone 2', direction: 'left' },
  { id: 3, src: Phone3, alt: 'Phone 3', direction: 'right' },
  { id: 4, src: Phone4, alt: 'Phone 4', direction: 'right' },
];
