import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-zinc-900">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 gap-4 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-widest text-zinc-600">
            &copy; All Rights Reserved, Gianluca Grassi 2026
          </p>
          <p className="text-[10px] uppercase tracking-widest text-zinc-600 italic">
            No pixels were harmed in the making of this portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;