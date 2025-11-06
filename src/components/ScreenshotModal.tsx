"use client";

import type { ProjectType } from "@/type";
import { Monitor, Smartphone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ScreenshotModalProps = {
  project: ProjectType;
  closeModal: () => void;
};

const ScreenshotModal = ({ project, closeModal }: ScreenshotModalProps) => {
  // view toggle: desktop or mobile
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  // for fullscreen single image view
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="relative mt-20 bg-white dark:bg-gray-900 rounded-xl p-6 max-w-7xl w-full mx-4 shadow-lg overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          {project.name} – Screenshots
        </h3>

        {/* Toggle buttons */}
        <div className="flex gap-3 mb-6">
          {["desktop", "mobile"].map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode as "desktop" | "mobile")}
              className={`px-4 py-2 rounded-lg font-medium capitalize transition-all flex items-center gap-2 ${
                viewMode === mode
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {mode === "desktop" ? (
                <Monitor className="w-5 h-5" />
              ) : (
                <Smartphone className="w-5 h-5" />
              )}
            </button>
          ))}
        </div>

        {/* Screenshot Grid */}
        {project.screenshots[viewMode]?.length > 0 ? (
          viewMode === "desktop" ? (
            // 🖥 Desktop grid layout
            <div className="grid gap-4 sm:grid-cols-3">
              {project.screenshots.desktop.map((src, i) => (
                <div
                  key={i}
                  onClick={() => setFullscreenImage(src)}
                  className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  <Image
                    src={src}
                    alt={`${project.name} desktop screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            // 📱 Mobile flex layout
            <div className="flex flex-wrap justify-center gap-5">
              {project.screenshots.mobile.map((src, i) => (
                <div
                  key={i}
                  onClick={() => setFullscreenImage(src)}
                  className="relative rounded-lg overflow-hidden shadow-md hover:scale-[1.02] transition-transform cursor-pointer w-[260px] sm:w-[280px] md:w-[320px] aspect-[9/19.5]"
                >
                  <Image
                    src={src}
                    alt={`${project.name} mobile screenshot ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">
            No {viewMode} screenshots available.
          </p>
        )}
      </div>

      {/* Fullscreen single image modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60]"
          onClick={() => setFullscreenImage(null)}
        >
          <button
            onClick={() => setFullscreenImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300"
          >
            <X className="w-7 h-7" />
          </button>
          <div className="relative w-[90%] max-w-5xl h-[80vh]">
            <Image
              src={fullscreenImage}
              alt="Fullscreen mobile screenshot"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshotModal;
