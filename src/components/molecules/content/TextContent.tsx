import React from 'react';

interface TextContentProps {
  category: string;
  title: string;
}

const TextContent = ({ category, title }: TextContentProps) => {
  return (
    <div className="p-5 max-w-md ml-80">
      <h5 className="mb-5 text-xl text-blue-500 font-bold">{category}</h5>
      <h2 className="text-xl font-bold break-words mb-6">{title}</h2>
    </div>
  );
};

export default TextContent;
