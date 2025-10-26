import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 backdrop-blur-md py-3 px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600/80">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-sm font-semibold tracking-tight">DreamWave</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium hover:bg-indigo-500 transition-colors">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}
