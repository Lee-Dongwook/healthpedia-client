'use client';
import React, { useRef, useState } from 'react';

interface FileInputProps {
  icon?: React.ReactNode;
}

const FileInput: React.FC<FileInputProps> = ({}) => {
  const fileRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState<string>('');

  const handleChangeFile = () => {
    const files = fileRef.current?.files;

    if (files && files.length > 0) {
      setFileName(files[0].name);
    }
  };

  return (
    <div>
      <input
        id="file_input"
        ref={fileRef}
        type="file"
        onChange={handleChangeFile}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      />
      {fileName && <span className="text-sm text-gray-700">{fileName}</span>}
    </div>
  );
};

export default FileInput;
