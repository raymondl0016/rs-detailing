import { useState } from 'react'
import { faqItems } from '../data/faq'

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-t border-white/10 bg-surface py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold text-white md:text-4xl">Frequently asked</h2>
        <p className="mt-3 text-center text-muted">Straight answers before you book.</p>
        <dl className="mt-10 space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="rounded-xl border border-white/10 bg-surface-2">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-white"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span className={`text-accent transition ${isOpen ? 'rotate-180' : ''}`}>
                      <Chevron />
                    </span>
                  </button>
                </dt>
                {isOpen && (
                  <dd className="border-t border-white/10 px-5 pb-4 pt-0 text-sm leading-relaxed text-muted">
                    <p className="pt-3">{item.a}</p>
                  </dd>
                )}
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}

function Chevron() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}
