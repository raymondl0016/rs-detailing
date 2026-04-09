import { useState } from 'react'
import { Header } from './components/Header'
import { PackageCard } from './components/PackageCard'
import { FAQSection } from './components/FAQSection'
import { QuoteForm } from './components/QuoteForm'
import { Footer } from './components/Footer'
import { packages } from './data/packages'

const galleryImages = [
  'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
  'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
  'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80',
  'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  'https://images.unsplash.com/photo-1694678505383-676d78ea3b96?w=800&q=80',
]

// const stories = [
//   {
//     title: 'Maintain your car after a detail',
//     excerpt: 'Simple habits that stretch your shine and protect interior materials.',
//   },
//   {
//     title: 'Why window tint matters',
//     excerpt: 'UV, heat, and privacy — what to look for in a legal, quality install.',
//   },
//   {
//     title: 'Does detailing remove scratches?',
//     excerpt: 'What correction can and cannot do, explained in plain language.',
//   },
// ]

export default function App() {
  const [heroGalleryIndex, setHeroGalleryIndex] = useState(0)
  const heroThumbs = galleryImages.slice(0, 3)

  return (
    <>
      <Header />

      <main>
        <section className="relative min-h-[90svh] overflow-hidden pt-28">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'linear-gradient(to bottom, rgba(14,15,18,0.92) 0%, rgba(14,15,18,0.75) 45%, rgba(14,15,18,1) 100%), url(https://images.unsplash.com/photo-1520340358204-eabfd0996b0c?w=1920&q=80)',
            }}
          />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-24 md:px-6 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Mobile service
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                Car detailing service in Orange County - CA.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/75">
                We restore, protect, and maintain — not just vacuum and rinse. Fully equipped pros, background-checked
                team, and fair pricing.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-surface shadow-lg shadow-accent/30 hover:brightness-110"
                >
                  Free quote
                </a>
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  View packages
                </a>
                <a
                  href="tel:+6265005486"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Call now
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted">
                <span className="inline-flex items-center gap-2 text-white/80">
                  <StarRow /> Trusted locally
                </span>
                <span>Licensed &amp; insured</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="rounded-2xl border border-white/10 bg-surface-2/60 p-2 shadow-2xl shadow-black/50 backdrop-blur-md">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-surface-3">
                  <img
                    src={galleryImages[heroGalleryIndex]}
                    alt="Shiny vehicle hood reflecting studio lights"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 p-2">
                  {heroThumbs.map((src, i) => (
                    <button
                      type="button"
                      key={`hero-thumb-${i}`}
                      onClick={() => setHeroGalleryIndex(i)}
                      className={`aspect-[4/3] overflow-hidden rounded-lg ring-offset-2 ring-offset-surface-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        heroGalleryIndex === i ? 'ring-2 ring-accent' : 'opacity-90 hover:opacity-100'
                      }`}
                      aria-label={`Show gallery image ${i + 1}`}
                      aria-current={heroGalleryIndex === i}
                    >
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="intro" className="border-t border-white/10 bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-3xl font-bold text-white md:text-4xl">Make your car look new again</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
              Established with a simple promise: convenience without compromise. We bring pro tools, eco-conscious
              products, and meticulous standards to your driveway or bay. Same team mindset you would expect from a
              specialty shop — with scheduling that respects your day.
            </p>
          </div>
        </section>

        <section id="services" className="bg-surface-2 py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-center text-2xl font-bold text-white md:text-3xl">Choose a service</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
              Full details, coatings, film, and tint — one team, coherent standards.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Mobile detailing', 'Water & power access at your location.', '#mobile'],
                ['Ceramic coating', 'Years of protection with proper prep.', '#packages'],
                ['Window tint', 'Heat rejection and UV control.', '#services'],
                ['Paint protection film', 'Impact-ready clear coverage.', '#services'],
              ].map(([title, desc, href]) => (
                <a
                  key={title}
                  href={href}
                  className="group rounded-2xl border border-white/10 bg-surface p-6 transition hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-accent">{title}</h3>
                  <p className="mt-2 text-sm text-muted">{desc}</p>
                  <span className="mt-4 inline-flex text-sm font-medium text-accent">Learn more →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-surface py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">Licensed, insured, obsessed with consistency</h2>
                <p className="mt-4 text-muted leading-relaxed">
                  Over a decade refining the mobile + shop workflow. We plan arrivals, protect your property, and
                  document results so expectations stay clear. Boats, RVs, and specialty vehicles welcome — ask when
                  you book.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-white/85">
                  {[
                    'Background-checked technicians',
                    'Long hoses & extension cords on the truck',
                    'Biodegradable chemistry where it makes sense',
                    'Satisfaction-first communication',
                  ].map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="text-accent">✓</span> {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-surface-2 p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">Detail packages</p>
                <h3 className="mt-2 text-xl font-bold text-white">Book the level that fits</h3>
                <p className="mt-3 text-sm text-muted">
                  Full, exterior-only, interior-only, and specialty remediation. Tap any card for line-items.
                </p>
                <a
                  href="#packages"
                  className="mt-6 inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Jump to pricing cards
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="bg-surface-2 py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Book a detail with us</h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
              Transparent scopes — pick the package that matches condition and goals.
            </p>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {packages.map((pkg) => (
                <PackageCard key={pkg.title} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* <section className="border-t border-white/10 bg-surface py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-6">
            <div className="order-2 md:order-1">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-surface-3 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1520340358204-eabfd0996b0c?w=1280&q=80"
                  alt=""
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                  <span className="rounded-full border border-white/30 bg-black/50 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
                    ▶ 2 min — add your embed
                  </span>
                </div>
              </div>
              <p className="mt-3 text-xs text-muted">
                Swap this block for a YouTube or Vimeo iframe—the section mirrors a “watch us work” layout.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white">How we detail</h2>
              <p className="mt-4 text-muted leading-relaxed">
                Controlled lighting inspection, safe wash mechanics, and finishing steps chosen for your paint type.
                No mystery processes — we explain what we are doing while we work.
              </p>
              <a
                href="#quote"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-surface hover:bg-white/90"
              >
                Watch / book — get started
              </a>
            </div>
          </div>
        </section> */}

        <section id="gallery" className="bg-surface-2 py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-center text-2xl font-bold text-white">Recent work</h2>
            <div className="mt-10 columns-2 gap-3 sm:columns-3 lg:gap-4">
              {galleryImages.map((src, i) => (
                <div key={`gallery-${i}`} className="mb-3 break-inside-avoid overflow-hidden rounded-xl lg:mb-4">
                  <img src={src} alt="" className="w-full object-cover transition hover:scale-105" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-surface py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  badge: 'Most popular',
                  title: 'Car detailing',
                  lines: ['Interior & exterior', 'Deep clean + hand wash', 'Interior from $90'],
                },
                {
                  badge: 'Correction',
                  title: 'Paint polish',
                  lines: ['Swirl reduction', 'Enhancement / correction', 'From $50'],
                },
                {
                  badge: 'Long-term',
                  title: 'Ceramic coating',
                  lines: ['Durable protection', 'Multi-year programs', 'Registered warranty options'],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col rounded-2xl border border-white/10 bg-surface-2 p-6"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">{card.badge}</span>
                  <h3 className="mt-3 text-xl font-bold text-white">{card.title}</h3>
                  <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
                    {card.lines.map((l) => (
                      <li key={l}>• {l}</li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <a href="#quote" className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-surface">
                      Quote
                    </a>
                    <a
                      href="sms:+15035550199"
                      className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10"
                    >
                      Text us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-2 py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Tunnel wash vs. a real detail</h2>
            <p className="mt-4 max-w-3xl text-muted leading-relaxed">
              A tunnel moves cars quickly; a detail addresses built-up grime, neglected jams, and paint that needs human
              judgment. If you want reflection, longevity, and a cabin that feels reset, hand work and the right
              chemistry matter.
            </p>
          </div>
        </section>

        <section id="mobile" className="border-t border-white/10 bg-surface-2 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
            <div>
              <h2 className="text-3xl font-bold text-white">Mobile detailing, fully equipped</h2>
              <p className="mt-4 text-muted leading-relaxed">
                We specialize in interior reset, exterior restoration, maintenance plans, coatings, tint, and film. All
                we need is cooperative weather and hookups for water and power — we bring the rest.
              </p>
            </div>
            <div id="quote" className="rounded-2xl border border-white/10 bg-surface p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white">Get a free quote</h3>
              <p className="mt-1 text-sm text-muted">We respond fast during business hours.</p>
              <QuoteForm />
            </div>
          </div>
        </section>

        {/* <section id="stories" className="border-t border-white/10 bg-surface py-16">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-white">Latest stories</h2>
              <span className="text-sm text-muted">View all →</span>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {stories.map((s) => (
                <article key={s.title} className="rounded-2xl border border-white/10 bg-surface-2 p-6">
                  <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.excerpt}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-accent">Read more</span>
                </article>
              ))}
            </div>
          </div>
        </section> */}

        <FAQSection />
      </main>

      <Footer />
    </>
  )
}

function StarRow() {
  return (
    <span className="inline-flex gap-0.5 text-accent" aria-hidden>
      {'★★★★★'.split('').map((_, i) => (
        <span key={i}>★</span>
      ))}
    </span>
  )
}
