import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-4 max-w-7xl mx-auto text-center">
      {/* Optional background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/20 to-black blur-3xl opacity-30 -z-10" />

      <SectionTitle title="Get in Touch" id="contact" />

      <p className="mt-6 text-gray-300 text-lg max-w-2xl mx-auto">
  I'm always open to exciting opportunities — whether it's full-time roles, freelance projects, tech collaborations, or just a good conversation. Feel free to reach out!
</p>


      {/* Reach Me Button */}
      <div className="mt-10">
        <Link
          href="https://www.linkedin.com/in/manjunath-bhandari-98"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200"
        >
          Reach Me on LinkedIn
        </Link>
      </div>
    </section>
  );
}

export default Contact;

