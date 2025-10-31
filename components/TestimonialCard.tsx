import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  avatarUrl: string;
  className?: string;
  style?: React.CSSProperties;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, title, avatarUrl, className = '', style }) => {
  return (
    <div 
      className={`bg-slate-100 p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full ${className}`}
      style={style}
    >
      <img className="w-20 h-20 rounded-full mb-5 object-cover shadow-md" src={avatarUrl} alt={author} />
      <blockquote className="text-slate-600 italic mb-auto">
        <svg className="w-8 h-8 text-indigo-200 mb-4 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
        </svg>
        <p>"{quote}"</p>
      </blockquote>
      <div className="mt-6">
        <div className="font-semibold text-slate-800">{author}</div>
        <div className="text-sm text-slate-500">{title}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;