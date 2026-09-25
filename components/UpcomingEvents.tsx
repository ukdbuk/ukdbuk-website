 {/* UPCOMING EVENTS */}
 export default function Header() {
  return (
<section id="events" className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-20">

    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
          What's happening
        </p>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#063f35]">
          Upcoming Events
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Join the Uttarakhandi community across the UK for cultural,
          social and family events.
        </p>
      </div>

      <a
        href="#"
        className="font-semibold text-[#063f35] transition hover:text-orange-600"
      >
        View all events →
      </a>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {/* Event 1 */}
      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f8faf7] shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="bg-[#063f35] px-7 py-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-300">
            Community Event
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            UKDBUK Community Gathering
          </h3>
        </div>

        <div className="p-7">
          <p className="font-semibold text-slate-800">
            📅 Date to be announced
          </p>

          <p className="mt-3 text-slate-600">
            📍 United Kingdom
          </p>

          <p className="mt-5 leading-7 text-slate-600">
            Meet fellow Uttarakhandis and celebrate our culture,
            friendships and community.
          </p>

          <a
            href="#"
            className="mt-7 inline-block font-bold text-orange-600"
          >
            Event details →
          </a>
        </div>
      </article>

      {/* Event 2 */}
      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f8faf7] shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="bg-orange-600 px-7 py-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-100">
            Culture
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            Uttarakhand Cultural Evening
          </h3>
        </div>

        <div className="p-7">
          <p className="font-semibold text-slate-800">
            📅 Coming soon
          </p>

          <p className="mt-3 text-slate-600">
            📍 Venue to be announced
          </p>

          <p className="mt-5 leading-7 text-slate-600">
            An evening celebrating Uttarakhandi music, dance, food
            and traditions.
          </p>

          <a
            href="#"
            className="mt-7 inline-block font-bold text-orange-600"
          >
            Event details →
          </a>
        </div>
      </article>

      {/* Event 3 */}
      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f8faf7] shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="bg-[#0d6652] px-7 py-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-100">
            Family & Community
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            Summer Family Day
          </h3>
        </div>

        <div className="p-7">
          <p className="font-semibold text-slate-800">
            📅 Coming soon
          </p>

          <p className="mt-3 text-slate-600">
            📍 Venue to be announced
          </p>

          <p className="mt-5 leading-7 text-slate-600">
            A relaxed family day bringing generations of our community
            together.
          </p>

          <a
            href="#"
            className="mt-7 inline-block font-bold text-orange-600"
          >
            Event details →
          </a>
        </div>
      </article>

    </div>
  </div>
</section>
  );
}