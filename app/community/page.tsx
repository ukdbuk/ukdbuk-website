import Header from "@/components/Header";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#f7faf6] text-slate-900">
      <Header />

      <section className="bg-[#063f35] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
            Together in the UK
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Our Community
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Connecting Uttarakhandis across the United Kingdom, building
            friendships, supporting one another and strengthening our
            community for future generations.
          </p>
        </div>
      </section>
    </main>
  );
}