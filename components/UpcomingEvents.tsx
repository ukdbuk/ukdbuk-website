import { events } from "@/data/events"; 
 {/* UPCOMING EVENTS */}
 export default function UpcomingEvents() {
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
        href="/events"
        className="font-semibold text-[#063f35] transition hover:text-orange-600"
      >
        View all events →
      </a>
    </div>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {events.map((event) => (
  <article
    key={event.id}
    className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f8faf7] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
  >
    <div
      className={`px-7 py-8 text-white ${
        event.colour === "orange"
          ? "bg-orange-600"
          : event.colour === "emerald"
            ? "bg-[#0d6652]"
            : "bg-[#063f35]"
      }`}
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-orange-200">
        {event.category}
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        {event.title}
      </h3>
    </div>

    <div className="p-7">
      <p className="font-semibold text-slate-800">
        📅 {event.date}
      </p>

      <p className="mt-3 text-slate-600">
        📍 {event.location}
      </p>

      <p className="mt-5 leading-7 text-slate-600">
        {event.description}
      </p>

      <a
        href="#"
        className="mt-7 inline-block font-bold text-orange-600"
      >
        Event details →
      </a>
    </div>
  </article>
))}

    </div>
  </div>
</section>
  );
}