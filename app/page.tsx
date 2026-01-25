import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingCoffee from "@/components/floating-coffee";
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      
      {/* Navbar */}
      <Header title="ReadmeCraft" subtitle="Create beautiful READMEs visually" />

      {/* Hero Section */}
      <section className="px-8 pt-20 pb-28 text-center max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Build beautiful <span className="text-indigo-400">README.md</span>
          <br /> visually, not manually
        </h2>

        <p className="mt-6 text-lg text-zinc-300 max-w-3xl mx-auto">
          A drag-and-drop README generator for developers.
          Create clean GitHub READMEs with logo-based tech stacks,
          live preview, and instant Markdown export.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/creator"
            className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 font-semibold"
          >
            Get Started
          </Link>

          <a
            href="#features"
            className="px-6 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-800"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-8 py-24 bg-zinc-900/60">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          
          <Feature
            title="Drag & Drop Editor"
            desc="Build README sections visually using blocks — headings, text, lists, code, images, and more."
          />

          <Feature
            title="Logo-Based Tech Stack"
            desc="Add technologies as beautiful badges using Shields.io and Simple Icons instead of boring text."
          />

          <Feature
            title="Clean Markdown Export"
            desc="Export a perfectly formatted README.md that works everywhere on GitHub."
          />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-8 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10">How it works</h3>

          <div className="grid md:grid-cols-3 gap-8 text-zinc-300">
            <Step number="1" text="Add blocks using the editor toolbar" />
            <Step number="2" text="Customize content and tech stack logos" />
            <Step number="3" text="Preview live and export README.md" />
          </div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section id="tech" className="px-8 py-24 bg-zinc-900/60">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Built for developers</h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Next.js",
              "Tailwind CSS",
              "Markdown",
              "Shields.io",
              "Simple Icons"
            ].map(t => (
              <span
                key={t}
                className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>
            <FloatingCoffee />

      {/* Footer */}
      <Footer />
    </main>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-zinc-300">{desc}</p>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="p-6 rounded-xl border border-zinc-700">
      <div className="text-indigo-400 text-2xl font-bold mb-2">{number}</div>
      <p>{text}</p>
    </div>
  );
}
