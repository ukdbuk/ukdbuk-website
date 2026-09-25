import Header from "@/components/Header";

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-[#f7faf6] text-slate-900">
      <Header />

      <section className="bg-[#063f35] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
            Be Part of UKDBUK
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Join Our Community
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Connect with Uttarakhandis across the United Kingdom, take part
            in our events and help us celebrate and preserve our shared
            culture and heritage.
          </p>
        </div>
      </section>
    </main>
  );
}