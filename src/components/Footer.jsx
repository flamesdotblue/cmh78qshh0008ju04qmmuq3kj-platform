export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
        <p>© {new Date().getFullYear()} DreamWave. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
