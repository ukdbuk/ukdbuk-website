import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#063f35] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Logo + Brand */}
        <div className="flex items-center gap-4">
          <Image
            src="/ukdb-logo.png"
            alt="UKDBUK Logo"
            width={90}
            height={90}
            className="h-20 w-20 object-contain"
            priority
          />

          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              UKDBUK
            </h1>

            <p className="text-sm text-emerald-100">
              Uttarakhandi Didi Bhula in UK
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
          <a href="#" className="text-orange-400">
            Home
          </a>

          <a
            href="#about"
            className="transition hover:text-orange-400"
          >
            About
          </a>

          <a
            href="#events"
            className="transition hover:text-orange-400"
          >
            Events
          </a>

          <a
            href="#gallery"
            className="transition hover:text-orange-400"
          >
            Gallery
          </a>

          <a
            href="#uttarakhand"
            className="transition hover:text-orange-400"
          >
            Discover Uttarakhand
          </a>

          <a
            href="#community"
            className="transition hover:text-orange-400"
          >
            Community
          </a>

          <a
            href="#contact"
            className="rounded-full bg-orange-600 px-6 py-3 font-semibold text-white transition hover:bg-orange-500"
          >
            Join Us
          </a>
        </nav>

      </div>
    </header>
  );
}