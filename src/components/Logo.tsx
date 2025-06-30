// src/components/Logo.tsx
import { FC } from "react";

const Logo: FC = () => {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
    
      {/* Optional Text */}
      <div className="hidden sm:block">
  <p className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 text-xl font-extrabold tracking-widest drop-shadow-sm animate-pulse">
    <span className="text-indigo-400">&lt;</span>
    MB
    <span className="text-pink-400">/&gt;</span>
  </p>
</div>

    </div>
  );
};

export default Logo;
