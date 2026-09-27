import Header from "@/components/Header";
import Image from "next/image";
import { galleryAlbums } from "@/data/gallery";
export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f7faf6] text-slate-900">
      <Header />

      <section className="bg-[#063f35] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
            Our Memories
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Gallery
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50">
            Celebrating UKDBUK community events, cultural gatherings and
            memorable moments from across the United Kingdom.
          </p>
        </div>
      </section>
      <section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-20">
    <div className="max-w-2xl">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-600">
        Community Moments
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063f35]">
        Celebrating our community together
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        Explore moments from UKDBUK cultural celebrations, community
        gatherings, family events and other memorable occasions.
      </p>
    </div>
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {galleryAlbums.map((album) => (
    <a
      key={album.id}
      href={`/gallery/${album.id}`}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={album.coverImage}
          alt={album.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
          {album.category}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-[#063f35]">
          {album.title}
        </h3>

        <p className="mt-3 text-slate-600">
          {album.date}
        </p>

        <p className="mt-5 font-semibold text-[#063f35]">
          {album.images.length} photos →
        </p>
      </div>
    </a>
  ))}
</div>
  </div>
</section>
    </main>
  );
}