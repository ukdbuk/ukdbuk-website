import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7faf6] text-slate-900">
      <Header />

      <section className="bg-[#063f35] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
            Our Community
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            About UKDBUK
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Bringing Uttarakhandis across the United Kingdom together,
            celebrating our heritage and strengthening our community for
            generations to come.
          </p>
        </div>
      </section>
      <section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-20">
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
        Who We Are
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063f35]">
        Connecting Uttarakhandis across the UK
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        UKDBUK — Uttarakhandi Didi Bhula in UK — is a community bringing
        together people with roots in Uttarakhand who live across the
        United Kingdom.
      </p>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        Our aim is to strengthen connections within our community,
        celebrate our culture and traditions, and help future generations
        stay connected with their Uttarakhandi heritage.
      </p>
    </div>
  </div>
</section>
<section className="bg-[#f7faf6]">
  <div className="mx-auto max-w-7xl px-6 py-20">
    <div className="grid gap-8 md:grid-cols-3">

      <div>
        <div className="text-3xl">🤝</div>
        <h3 className="mt-4 text-xl font-bold text-[#063f35]">
          Connect
        </h3>
        <p className="mt-3 leading-7 text-slate-600">
          Create opportunities for Uttarakhandis across the UK to meet,
          build friendships and support one another.
        </p>
      </div>

      <div>
        <div className="text-3xl">🌿</div>
        <h3 className="mt-4 text-xl font-bold text-[#063f35]">
          Celebrate
        </h3>
        <p className="mt-3 leading-7 text-slate-600">
          Celebrate Uttarakhandi culture, traditions, festivals, music,
          food and our shared heritage.
        </p>
      </div>

      <div>
        <div className="text-3xl">🏔️</div>
        <h3 className="mt-4 text-xl font-bold text-[#063f35]">
          Preserve
        </h3>
        <p className="mt-3 leading-7 text-slate-600">
          Help future generations stay connected with Uttarakhand and
          preserve our cultural identity within the UK.
        </p>
      </div>

    </div>
  </div>
</section>
    </main>
  );
}