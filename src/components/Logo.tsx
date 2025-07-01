// src/components/Logo.tsx
import { FC } from "react";

const Logo: FC = () => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">

      {/* Logo Text */}
      <div className="hidden sm:block">
        <p className="text-xl font-extrabold tracking-widest drop-shadow-sm transition-colors duration-300">
          <span className="text-indigo-500 dark:text-indigo-400">&lt;</span>
          <span className="text-black dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-indigo-400 dark:via-purple-400 dark:to-pink-500 animate-pulse">
            MB
          </span>
          <span className="text-pink-500 dark:text-pink-400">/&gt;</span>
        </p>
      </div>
      
    </div>
  );
};

export default Logo;
