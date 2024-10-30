'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AppleLogo from '@/assets/img/Apple-logo.png';
import GoogleLogo from '@/assets/img/Google-logo.png';
import Button from '@/components/atoms/Button';

interface AppDownloadButtonProps {
  store: 'google' | 'apple';
}

const AppDownloadButton: React.FC<AppDownloadButtonProps> = ({ store }) => {
  const isGoogle = store === 'google';
  const logo = isGoogle ? GoogleLogo : AppleLogo;
  const router = useRouter();

  const handleMoveToDownload = () => {
    if (isGoogle) {
      router.push('/https://play.google.com/store/apps/details');
    } else {
      router.push(
        '/https://apps.apple.com/kr/app/%EC%95%84%ED%94%84%EC%A7%80%EB%A7%88-%EC%A0%84%EA%B5%AD-%EB%B3%91%EC%9B%90%EB%B3%84-%EB%B3%91%EC%9B%90%EB%B9%84-%EC%A1%B0%ED%9A%8C-%EB%B0%8F-%EB%B9%84%EA%B5%90-%EC%84%9C%EB%B9%84%EC%8A%A4/id1593152794'
      );
    }
  };

  return (
    <Button variant="secondary" size="large" onClick={handleMoveToDownload}>
      <Image
        src={logo}
        alt={`${store} Download Logo`}
        layout="fill"
        objectFit="contain"
      />
    </Button>
  );
};

export default AppDownloadButton;
