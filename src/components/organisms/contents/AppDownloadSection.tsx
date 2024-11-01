import AppDownloadButton from '@/components/molecules/AppDownloadButton';

const AppDownloadSection = () => {
  return (
    <div className="mt-16 flex justify-center items-center space-x-20">
      <AppDownloadButton store="google" />
      <AppDownloadButton store="apple" />
    </div>
  );
};

export default AppDownloadSection;
