import Image from 'next/image';
import MedicalRecord from '@/assets/img/Medical Record.png';
import Hospital from '@/assets/img/Hospital.png';
import Stethoscope from '@/assets/img/Stethoscope.png';

const BackgroundInfoCardSection = () => {
  return (
    <div className="grid grid-cols-3 gap-8 mt-12 mb-40 px-4">
      <div className="bg-white shadow-md rounded-md w-64 p-4">
        <p className="w-28 mx-auto bg-blue-500 rounded-full text-center text-white">
          가격정보
        </p>
        <h3 className="mt-4 text-2xl font-bold text-center">병원비 비교하기</h3>
        <Image
          src={MedicalRecord}
          alt="Medical Record"
          className="mt-4 ml-12"
        />
      </div>
      <div className="bg-white shadow-md rounded-lg w-64 p-4">
        <p className="w-28 mx-auto bg-blue-500 rounded-full text-center text-white">
          위치기반
        </p>
        <h3 className="mt-4 text-2xl font-bold text-center">
          가까운 병원 찾기
        </h3>
        <Image src={Hospital} alt="Hospital" className="mt-4 ml-12" />
      </div>
      <div className="bg-white shadow-md rounded-lg w-64 p-4">
        <p className="w-28 mx-auto bg-blue-500 rounded-full text-center text-white">
          야간 병원
        </p>
        <h3 className="mt-4 text-2xl font-bold text-center">
          야간·주말 병원 찾기
        </h3>
        <Image src={Stethoscope} alt="Stethoscope" className="mt-4 ml-12" />
      </div>
    </div>
  );
};
export default BackgroundInfoCardSection;
