import React from 'react';

interface PhoneTextContentProps {
  category: string;
  title: string;
  subtitle?: string;
  content: string;
}

const PhoneTextContent = ({
  category,
  title,
  subtitle,
  content,
}: PhoneTextContentProps) => {
  if (subtitle) {
    return (
      <div className="p-5 max-w-md">
        <h5 className="mb-5 text-xl text-blue-500 font-bold">{category}</h5>
        <h2 className="text-xl font-bold break-words mb-40">{title}</h2>
        <h2 className="text-xl font-bold break-words">{subtitle}</h2>
        <p className="text-base break-words">{content}</p>
      </div>
    );
  } else {
    return (
      <div className="p-5 max-w-md">
        <h5 className="mb-5 text-xl text-blue-500 font-bold">{category}</h5>
        <h2 className="text-xl font-bold break-words">{title}</h2>
        <p className="text-base break-words">{content}</p>
      </div>
    );
  }
};

export default PhoneTextContent;
