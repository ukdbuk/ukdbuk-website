export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-emerald-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <h1 className="text-3xl font-bold">UKDBUK</h1>
          <p className="text-sm text-emerald-100">
            Uttarakhandi Community in the United Kingdom
          </p>
        </div>
      </header>

      <section className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <p className="mb-4 font-semibold uppercase tracking-widest text-orange-600">
            Welcome to UKDBUK
          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-slate-900">
            Connecting our community.
            <br />
            Celebrating our Uttarakhandi heritage.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Bringing the Uttarakhandi community across the United Kingdom
            together through culture, events, traditions and our shared
            connection with Devbhoomi Uttarakhand.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#events"
              className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white"
            >
              Upcoming Events
            </a>

            <a
              href="#uttarakhand"
              className="rounded-full border border-emerald-900 px-6 py-3 font-semibold text-emerald-950"
            >
              Discover Uttarakhand
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}