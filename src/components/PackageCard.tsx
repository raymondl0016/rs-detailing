import type { DetailPackage } from '../data/packages'

function Check() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function PackageCard({ pkg }: { pkg: DetailPackage }) {
  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-surface-2/80 p-6 shadow-lg shadow-black/30 backdrop-blur-sm">
      <h3 className="text-xl font-bold text-white">{pkg.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{pkg.subtitle}</p>

      {pkg.variant === 'split' && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Interior</h4>
            <ul className="mt-3 space-y-2">
              {pkg.interior?.map((line) => (
                <li key={line} className="flex gap-2 text-sm text-white/85">
                  <Check />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Exterior</h4>
            <ul className="mt-3 space-y-2">
              {pkg.exterior?.map((line) => (
                <li key={line} className="flex gap-2 text-sm text-white/85">
                  <Check />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {pkg.variant === 'list' && (
        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-accent">Included</h4>
          <ul className="mt-3 space-y-2">
            {pkg.included?.map((line) => (
              <li key={line} className="flex gap-2 text-sm text-white/85">
                <Check />
                {line}
              </li>
            ))}
          </ul>
        </div>
      )}

      <a
        href="#quote"
        className="mt-8 inline-flex items-center justify-center rounded-full border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent/20"
      >
        Get a quote
      </a>
    </article>
  )
}
