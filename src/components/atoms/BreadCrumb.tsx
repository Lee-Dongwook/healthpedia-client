import React from 'react';
import Link from 'next/link';

interface BreadCrumbProps {
  path: Array<{ name: string; url: string }>;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ path = [] }) => {
  const displayPath =
    path.length > 5
      ? [...path.slice(0, 2), { name: '...', url: '#' }, ...path.slice(-2)]
      : path;

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-1">
        {displayPath.map((step, idx) => (
          <li
            key={idx}
            className={
              idx === displayPath.length - 1 ? 'text-gray-500' : 'text-gray-700'
            }
          >
            {step.name !== '...' ? (
              <Link
                href={step.url}
                className="text-gray-600 hover:text-gray-700"
              >
                {step.name}
              </Link>
            ) : (
              <span>{step.name}</span>
            )}
            {idx < displayPath.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
