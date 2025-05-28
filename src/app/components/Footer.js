import { Instagram, Linkedin, X } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black text-white py-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding & Description */}
        <div>
          <h2 className="text-xl font-semibold">Brandvertise.in</h2>
          <p className="text-sm text-gray-400 mt-2 max-w-sm">
            Your trusted partner in website solutions — building high-converting websites for growing businesses.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition"
          >
            <X size={20} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
