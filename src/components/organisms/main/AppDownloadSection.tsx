import AppDownloadButton from '@/components/molecules/AppDownloadButton';

const AppDownloadSection = () => {
  return (
    <div className="flex justify-center items-center space-x-16">
      <AppDownloadButton store="google" />
      <AppDownloadButton store="apple" />
    </div>
  );
};

export default AppDownloadSection;
