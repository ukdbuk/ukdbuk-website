import Header from "@/components/Header";
import JoinForm from "@/components/JoinForm";

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
      <section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-20">
    <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
      Join UKDBUK
    </p>

    <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063f35] md:text-4xl">
      Become part of our growing community
    </h2>

    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
      UKDBUK brings Uttarakhandis living across the United Kingdom together
      through cultural events, family gatherings and community activities.
    </p>
    <div className="mt-12 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-slate-200 bg-[#f7faf6] p-6">
    <div className="text-3xl">🤝</div>
    <h3 className="mt-4 text-xl font-bold text-[#063f35]">
      Connect
    </h3>
    <p className="mt-3 leading-7 text-slate-600">
      Meet fellow Uttarakhandis and build friendships with families across
      the United Kingdom.
    </p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-[#f7faf6] p-6">
    <div className="text-3xl">🎉</div>
    <h3 className="mt-4 text-xl font-bold text-[#063f35]">
      Participate
    </h3>
    <p className="mt-3 leading-7 text-slate-600">
      Take part in cultural celebrations, family gatherings and community
      events throughout the year.
    </p>
  </div>

  <div className="rounded-2xl border border-slate-200 bg-[#f7faf6] p-6">
    <div className="text-3xl">🏔️</div>
    <h3 className="mt-4 text-xl font-bold text-[#063f35]">
      Celebrate Our Roots
    </h3>
    <p className="mt-3 leading-7 text-slate-600">
      Help celebrate Uttarakhand's culture, traditions and heritage for
      current and future generations.
    </p>
  </div>
</div>
  </div>
</section>
<JoinForm />  
    </main>
  );
}