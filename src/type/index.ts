import { LucideIcon } from "lucide-react";

export interface ScreenshotType {
    desktop:string[];
    mobile:string[];
}

export interface ProjectType {
  name: string;
  slug: string;
  description: string;
  keyFeatures: string[];
  techStacks: string[];
  icon: LucideIcon;
  screenshots: ScreenshotType;
  gitLink?: string;
  liveLink?: string;
  bgColor?: string;
}