import Header from "@/components/Header";
import Image from "next/image";
import { galleryAlbums } from "@/data/gallery";

export default async function GalleryAlbumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const album = galleryAlbums.find((album) => album.id === id);

  if (!album) {
    return (
      <main className="min-h-screen bg-[#f7faf6]">
        <Header />

        <div className="mx-auto max-w-7xl px-6 py-20">
          <h1 className="text-3xl font-bold text-[#063f35]">
            Gallery album not found
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7faf6] text-slate-900">
      <Header />

      <section className="bg-[#063f35] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-orange-300">
            {album.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            {album.title}
          </h1>

          <p className="mt-5 text-lg text-emerald-50">
            {album.date} • {album.images.length} photos
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {album.images.map((image, index) => (
              <div
                key={image}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 shadow-sm"
              >
                <Image
                  src={image}
                  alt={`${album.title} photo ${index + 1}`}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}