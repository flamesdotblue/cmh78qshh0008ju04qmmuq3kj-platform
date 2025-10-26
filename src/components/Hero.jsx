import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/50gS2Nx3yhdqzJSa/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Live 3D cover background
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          Wavy, Dreamy, Modern
        </h1>
        <p className="mt-4 max-w-2xl text-white/80">
          A wavy animated background with dunes, dreamy gradients, subtle grain, and light streaks. Built for modern, tech-forward experiences.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold hover:bg-indigo-500 transition-colors"
          >
            Explore Features
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
