import Header from "@/components/Header";

export default function DonatePage() {
  return (
    <>
      <Header />

      <main>
        <section className="bg-[#063f35] text-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">
              Support Our Community
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Donate to UKDBUK
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
              Your contribution helps us organise community gatherings,
              cultural programmes and activities that bring Uttarakhandi
              families together across the United Kingdom.
            </p>
          </div>
        </section>
        <section className="bg-[#f7faf6]">
  <div className="mx-auto max-w-7xl px-6 py-16">
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
        Your Contribution Matters
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063f35]">
        Help us bring our community together
      </h2>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Your contribution helps support UKDBUK community events, cultural
        programmes, family gatherings and other activities that celebrate and
        preserve our Uttarakhandi heritage in the United Kingdom.
      </p>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        Contributions are received and managed through Shri Badri Vishal
        Bhakti Sudha Kendra.
      </p>
      <a
  href="https://buy.stripe.com/test_aFa7sK7kC1Sm8DC1jd0ZW00"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-block rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
>
  Make a Contribution
</a>
    </div>
  </div>
</section>
      </main>
    </>
  );
}