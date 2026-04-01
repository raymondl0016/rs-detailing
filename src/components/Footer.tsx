const areas = [
  'Metro core',
  'West suburbs',
  'East communities',
  'North counties',
  'South corridor',
  'Neighboring state line',
]

const quick = [
  ['Stories', '#stories'],
  ['Gift cards', '#gift'],
  ['Gallery', '#gallery'],
  ['Pricing', '#packages'],
  ['Careers', '#contact'],
  ['FAQ', '#faq'],
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-surface-2 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Shop</p>
          <p className="mt-3 text-sm text-white/90">By appointment — call before visiting so we can greet you.</p>
          <p className="mt-4 text-sm text-muted">
            10950 Example Blvd, Suite 250
            <br />
            Beaverton, OR 97005
          </p>
          <p className="mt-4 text-sm font-medium text-white">
            <a href="tel:+15035550199" className="hover:text-accent">
              (503) 555-0199
            </a>
          </p>
          <p className="text-sm text-muted">
            <a href="mailto:hello@rsdetailing.example" className="hover:text-white">
              hello@rsdetailing.example
            </a>
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Areas served</p>
          <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-muted sm:grid-cols-2">
            {areas.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="text-accent">♦</span> {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Quick links</p>
          <ul className="mt-4 space-y-2 text-sm">
            {quick.map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-muted hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent">Hours</p>
          <p className="mt-4 text-sm text-muted">Phones &amp; booking: daily 8:00am – 8:00pm</p>
          <p className="mt-2 text-sm text-muted">Shop: Mon–Sun 8:30am – 6:00pm (appointment)</p>
          <div className="mt-6 flex gap-3">
            {['instagram', 'facebook', 'youtube'].map((s) => (
              <span
                key={s}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs capitalize text-muted"
              >
                {s[0]}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-8 text-center text-xs text-muted md:px-6 md:text-left">
        © {new Date().getFullYear()} RS Detailing LLC. Demo clone for local development — replace contact details
        with your own.
      </div>
    </footer>
  )
}
