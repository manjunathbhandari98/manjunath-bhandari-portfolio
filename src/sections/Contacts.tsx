'use client';

import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center  transition-colors duration-300"
    >
      {/* Background blur - dark mode only */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-indigo-900/30 dark:via-purple-900/20 dark:to-black dark:blur-3xl dark:opacity-30 -z-10" />

      {/* Section Title */}
      <SectionTitle title="Get in Touch" id="contact" />

      {/* Description */}
      <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-300 max-w-2xl mx-auto">
        I&apos;m always open to exciting opportunities — whether it&apos;s full-time roles,
        freelance projects, tech collaborations, or even a friendly conversation.
        Let’s connect!
      </p>

      {/* CTA Button */}
      <div className="mt-10">
        <Link
          href="https://www.linkedin.com/in/manjunath-bhandari-98"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-base sm:text-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200"
        >
          Reach Me on LinkedIn
        </Link>
      </div>
    </section>
  );
};

export default Contact;
