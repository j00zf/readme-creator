import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Sparkles,
  LayoutDashboard,
  FileText,
  Github,
  Heart,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white">
      {/* Header */}
      <Header
        title="MyReadme.md"
        subtitle="Build beautiful READMEs visually"
      />

      {/* Hero */}
      <section className="px-8 pt-20 pb-16 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6">
          About <span className="text-indigo-400">MyReadme.md</span>
        </h1>
        <p className="text-lg text-zinc-300">
          MyReadme.md is a developer-focused tool that helps you create
          clean, beautiful GitHub README files using a visual,
          block-based editor — no markdown memorization required.
        </p>
      </section>

      {/* Mission */}
      <section className="px-8 py-20 bg-zinc-900/60">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Sparkles className="text-indigo-400" />
              Our Mission
            </h2>
            <p className="text-zinc-300 leading-relaxed">
              Writing READMEs shouldn’t feel like a chore.  
              Our mission is to empower developers to present their
              projects professionally with minimal effort, using
              visual blocks, live previews, and clean Markdown exports.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-700 bg-zinc-800/50 p-8">
            <p className="text-zinc-300 italic">
              “Good documentation tells your project’s story —
              MyReadme.md helps you tell it better.”
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14">
            What makes it different
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <Feature
              icon={<LayoutDashboard />}
              title="Visual Block Editor"
              desc="Build your README using structured blocks instead of raw Markdown."
            />

            <Feature
              icon={<FileText />}
              title="Clean Markdown Export"
              desc="Export a perfectly formatted README.md that works everywhere."
            />

            <Feature
              icon={<Sparkles />}
              title="Tech Stack Badges"
              desc="Add beautiful logo-based badges using Shields.io and Simple Icons."
            />
          </div>
        </div>
      </section>

      {/* Creator */}
      <section className="px-8 py-20 bg-zinc-900/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 flex justify-center items-center gap-3">
            <Heart className="text-red-400" />
            Built by a Developer
          </h2>

          <p className="text-zinc-300 mb-6">
            MyReadme.md is built and maintained by{" "}
            <span className="text-white font-semibold">
              Joseph Sebastian
            </span>
            , with a focus on developer experience, clean UI, and
            practical tooling.
          </p>

          <a
            href="https://github.com/j00zf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3
                       rounded-xl bg-zinc-800 border border-zinc-700
                       hover:bg-zinc-700 transition"
          >
            <Github />
            View on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700">
      <div className="text-indigo-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-300">{desc}</p>
    </div>
  );
}
