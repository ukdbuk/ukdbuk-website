"use client";
export default function JoinForm() {
  return (
    <section className="bg-[#f7faf6]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
            Get Involved
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063f35] md:text-4xl">
            Join the UKDBUK community
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Interested in becoming part of UKDBUK? Share your details with us
            and our community team will get in touch.
          </p>
        </div>
        <form 
        action="/api/join"
  method="POST"
  className="mt-10 max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
  <div>
    <label
      htmlFor="fullName"
      className="block text-sm font-semibold text-[#063f35]"
    >
      Full name
    </label>

    <input
      type="text"
      id="fullName"
      name="fullName"
      required
      placeholder="Your full name"
      className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#063f35] focus:ring-2 focus:ring-emerald-100"
    />
  </div>
  <div className="mt-6">
  <label
    htmlFor="email"
    className="block text-sm font-semibold text-[#063f35]"
  >
    Email address
  </label>

  <input
    type="email"
    id="email"
    name="email"
    required
    placeholder="you@example.com"
    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#063f35] focus:ring-2 focus:ring-emerald-100"
  />
</div>
<div className="mt-6">
  <label
    htmlFor="location"
    className="block text-sm font-semibold text-[#063f35]"
  >
    Town or city
  </label>

  <input
    type="text"
    id="location"
    name="location"
    required
    placeholder="e.g. Reading, London, Manchester"
    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#063f35] focus:ring-2 focus:ring-emerald-100"
  />
</div>
<div className="mt-6">
  <label
    htmlFor="phone"
    className="block text-sm font-semibold text-[#063f35]"
  >
    Phone number <span className="font-normal text-slate-500">(optional)</span>
  </label>

  <input
    type="tel"
    id="phone"
    name="phone"
    placeholder="e.g. 07123 456789"
    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#063f35] focus:ring-2 focus:ring-emerald-100"
  />
</div>
<div className="mt-6">
  <label
    htmlFor="interest"
    className="block text-sm font-semibold text-[#063f35]"
  >
    How would you like to get involved?
  </label>

  <select
    id="interest"
    name="interest"
    defaultValue=""
    required
    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-[#063f35] focus:ring-2 focus:ring-emerald-100"
  >
    <option value="" disabled>
      Please select an option
    </option>
    <option value="community">Join the community</option>
    <option value="events">Attend events</option>
    <option value="volunteer">Volunteer with UKDBUK</option>
    <option value="culture">Support cultural activities</option>
    <option value="other">Other</option>
  </select>
</div>
<div className="mt-6">
  <label
    htmlFor="message"
    className="block text-sm font-semibold text-[#063f35]"
  >
    Message <span className="font-normal text-slate-500">(optional)</span>
  </label>

  <textarea
    id="message"
    name="message"
    rows={4}
    placeholder="Tell us a little about yourself or how you would like to get involved..."
    className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#063f35] focus:ring-2 focus:ring-emerald-100"
  />
</div>
<div className="mt-8">
  <button
    type="submit"
    className="rounded-xl bg-[#063f35] px-6 py-3 font-semibold text-white transition hover:bg-[#0a5547]"
  >
    Join UKDBUK →
  </button>
</div>
</form>
      </div>
    </section>
  );
}