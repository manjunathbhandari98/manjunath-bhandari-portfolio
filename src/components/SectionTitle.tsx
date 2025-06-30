import { Minus } from "lucide-react";
import { FC } from "react";

interface SectionTitleProps {
    title: string;
    id?: string; // for anchor linking
  }

const SectionTitle:FC<SectionTitleProps> = ({title ,id}) =>{
    return(
        <div key={id} className="w-full max-w-6xl mx-auto px-6 py-4 mb-10 items-center flex gap-2">
            <Minus className="text-orange-500"/>
            <h2 className="text-left text-xl md:text-2xl font-semibold text-orange-500 uppercase tracking-widest">
                {title}
            </h2>
        </div>
    )

}

export default SectionTitle;