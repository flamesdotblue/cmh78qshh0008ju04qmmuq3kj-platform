import { Star, Shield, Sparkles } from 'lucide-react';

const features = [
  {
    title: 'Depth & Motion',
    description:
      'A dynamic 3D scene with smooth motion that adds depth without distracting from content.',
    Icon: Sparkles,
  },
  {
    title: 'Dreamy Gradient',
    description:
      'Soft, modern gradients with a subtle grain texture for a premium visual feel.',
    Icon: Star,
  },
  {
    title: 'Performance Minded',
    description:
      'Built with Vite and React. Optimized assets and responsive design by default.',
    Icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-4 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Design that feels alive</h2>
        <p className="mt-3 text-white/70">
          Bring your product to life with a clean, atmospheric hero that sets the tone.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, Icon }) => (
          <div
            key={title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/80">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
