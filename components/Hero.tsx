import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#073f36] via-[#0d6652] to-[#d97706] text-white">

      {/* Decorative background glow */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-400/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">

        {/* Hero text */}
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
            उत्तराखण्ड • United Kingdom
          </p>

          <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Connecting our community.
            <span className="mt-2 block text-orange-300">
              Celebrating our roots.
            </span>
          </h2>

          <div className="mt-7 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mt-7 max-w-xl text-lg leading-8 text-emerald-50">
            Bringing Uttarakhandis across the United Kingdom together while
            celebrating the culture, traditions and natural beauty of
            Devbhoomi Uttarakhand.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/events"
              className="rounded-full bg-orange-600 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:bg-orange-500"
            >
              Upcoming Events →
            </a>

            <a
              href="/uttarakhand"
              className="rounded-full border border-white/60 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Discover Uttarakhand
            </a>
          </div>
        </div>

        {/* Logo feature */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-8 rounded-full bg-orange-300/20 blur-3xl" />

            <Image
              src="/ukdb-logo.png"
              alt="Uttarakhandi Didi Bhula in UK"
              width={520}
              height={520}
              className="relative h-auto w-full max-w-[460px] drop-shadow-2xl"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}   