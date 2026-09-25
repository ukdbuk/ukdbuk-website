export default function Introduction() {
  return (
    <section
      id="about"
      className="border-b border-emerald-100 bg-[#f7faf6]"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">

        <div>
          <div className="mb-4 text-3xl">👥</div>

          <h3 className="text-xl font-bold text-[#063f35]">
            A Stronger Community
          </h3>

          <p className="mt-2 leading-7 text-slate-600">
            Connecting Uttarakhandis across the United Kingdom and bringing
            generations together.
          </p>
        </div>

        <div>
          <div className="mb-4 text-3xl">🌿</div>

          <h3 className="text-xl font-bold text-[#063f35]">
            Our Culture, Our Heritage
          </h3>

          <p className="mt-2 leading-7 text-slate-600">
            Celebrating our language, music, food, festivals and traditions
            while passing them on to future generations.
          </p>
        </div>

        <div>
          <div className="mb-4 text-3xl">🏔️</div>

          <h3 className="text-xl font-bold text-[#063f35]">
            Devbhoomi to the World
          </h3>

          <p className="mt-2 leading-7 text-slate-600">
            Sharing the spiritual, cultural and natural beauty of
            Uttarakhand with our community and beyond.
          </p>
        </div>

      </div>
    </section>
  );
}