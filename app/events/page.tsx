import Header from "@/components/Header";
import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#f7faf6] text-slate-900">
      <Header />

      <section className="bg-[#063f35] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
            UKDBUK Community
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Events
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Discover upcoming UKDBUK cultural, social and family events
            across the United Kingdom.
          </p>
        </div>
      </section>
      <section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-20">
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <article
          key={event.id}
          className="overflow-hidden rounded-3xl border border-slate-200 bg-[#f8faf7] shadow-sm"
        >
          <div className="p-7">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">
              {event.category}
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#063f35]">
              {event.title}
            </h2>

            <p className="mt-5 font-semibold text-slate-800">
              📅 {event.date}
            </p>

            <p className="mt-3 text-slate-600">
              📍 {event.location}
            </p>

            <p className="mt-5 leading-7 text-slate-600">
              {event.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>
    </main>
  );
}