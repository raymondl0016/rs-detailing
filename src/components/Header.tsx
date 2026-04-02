import { useEffect, useState } from 'react'

const nav = [
  {
    label: 'Car detailing',
    items: [
      ['Mobile detailing', '#packages'],
      ['Interior', '#packages'],
      ['Exterior', '#packages'],
      // ['Fleets', '#contact'],
    ],
  },
  { label: 'Ceramic coating', href: '#packages' },
  { label: 'Window tint', href: '#services' },
  { label: 'Paint protection film', href: '#services' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-surface/95 shadow-lg shadow-black/40 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-dim text-surface font-extrabold">
            RS
          </span>
          RS Detailing
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) =>
            'items' in item ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white ${
                    openDropdown === item.label ? 'bg-white/10 text-white' : ''
                  }`}
                >
                  {item.label}
                  <ChevronDown />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-56 rounded-xl border border-white/10 bg-surface-2 py-2 shadow-xl shadow-black/50">
                      {item.items.map(([label, href]) => (
                        <a
                          key={label}
                          href={href}
                          className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#quote"
            className="hidden rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-surface shadow-lg shadow-accent/25 transition hover:brightness-110 sm:inline-flex"
          >
            Book online
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-surface-2 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {nav.map((item) =>
              'items' in item ? (
                <div key={item.label} className="py-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">{item.label}</p>
                  {item.items.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="mt-1 block py-2 text-white/90"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-3 font-medium text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href="#quote"
              className="mt-2 rounded-full bg-accent py-3 text-center font-semibold text-surface"
              onClick={() => setOpen(false)}
            >
              Book online
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function ChevronDown() {
  return (
    <svg className="h-4 w-4 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}
