import { useState, type FormEvent } from 'react'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

const SERVICE_TYPES = [
  'Mobile detailing',
  'Ceramic coating',
  'Window tint',
  'Paint protection film',
] as const

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type FieldKey = 'email' | 'phone' | 'serviceType'

function validateQuoteFields(values: {
  email: string
  phone: string
  serviceType: string
}): Partial<Record<FieldKey, string>> {
  const errors: Partial<Record<FieldKey, string>> = {}

  if (!values.email) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_RE.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.phone) {
    errors.phone = 'Phone is required.'
  } else if (values.phone.replace(/\D/g, '').length < 7) {
    errors.phone = 'Enter a phone number with at least 7 digits.'
  }

  if (!values.serviceType) {
    errors.serviceType = 'Please select a service type.'
  } else if (!SERVICE_TYPES.includes(values.serviceType as (typeof SERVICE_TYPES)[number])) {
    errors.serviceType = 'Please select a valid service type.'
  }

  return errors
}

export function QuoteForm() {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? ''
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>({})

  function clearFieldError(key: FieldKey) {
    setFieldErrors((prev) => {
      if (!(key in prev)) return prev
      const next = { ...prev }
      delete next[key]
      return next
    })
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '').trim()
    const email = String(fd.get('email') ?? '').trim()
    const phone = String(fd.get('phone') ?? '').trim()
    const serviceType = String(fd.get('serviceType') ?? '').trim()

    const validation = validateQuoteFields({ email, phone, serviceType })
    if (Object.keys(validation).length > 0) {
      setFieldErrors(validation)
      setStatus('idle')
      setErrorMessage('')
      return
    }
    setFieldErrors({})

    if (!accessKey) {
      setStatus('error')
      setErrorMessage(
        'Email delivery is not configured yet. Set VITE_WEB3FORMS_ACCESS_KEY (see .env.example).',
      )
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: 'New quote request — RS Detailing',
          from_name: name || 'Website',
          name,
          email,
          replyto: email,
          phone,
          message: [
            `Quote request (rs-detailing)`,
            `Name: ${name || '—'}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Service type: ${serviceType || '—'}`,
          ].join('\n'),
        }),
      })

      const data: { success?: boolean; message?: string } = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.message || `Request failed (${res.status})`)
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Try again or call us.')
    }
  }

  if (status === 'success') {
    return (
      <div className="mt-6 rounded-lg border border-accent/30 bg-accent/10 px-4 py-5 text-center">
        <p className="text-sm font-medium text-white">Thanks — we got your request.</p>
        <p className="mt-1 text-sm text-muted">We’ll reply by email during business hours.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-semibold text-accent underline-offset-2 hover:underline"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
      {status === 'error' && errorMessage && (
        <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200" role="alert">
          {errorMessage}
        </p>
      )}
      <div>
        <label className="text-xs font-medium text-muted" htmlFor="name">
          Full name
        </label>
        <input
          id="name"
          name="name"
          className="mt-1 w-full rounded-lg border border-white/15 bg-surface-2 px-3 py-2.5 text-sm text-white outline-none focus:border-accent"
          autoComplete="name"
          disabled={status === 'submitting'}
        />
      </div>
      <div>
        <label className="text-xs font-medium text-muted" htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          aria-invalid={fieldErrors.email ? true : undefined}
          aria-describedby={fieldErrors.email ? 'email-error' : undefined}
          onChange={() => clearFieldError('email')}
          className={`mt-1 w-full rounded-lg border bg-surface-2 px-3 py-2.5 text-sm text-white outline-none focus:border-accent ${
            fieldErrors.email ? 'border-red-400/60' : 'border-white/15'
          }`}
          autoComplete="email"
          disabled={status === 'submitting'}
        />
        {fieldErrors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-300">
            {fieldErrors.email}
          </p>
        )}
      </div>
      <div>
        <label className="text-xs font-medium text-muted" htmlFor="phone">
          Phone *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          aria-invalid={fieldErrors.phone ? true : undefined}
          aria-describedby={fieldErrors.phone ? 'phone-error' : undefined}
          onChange={() => clearFieldError('phone')}
          className={`mt-1 w-full rounded-lg border bg-surface-2 px-3 py-2.5 text-sm text-white outline-none focus:border-accent ${
            fieldErrors.phone ? 'border-red-400/60' : 'border-white/15'
          }`}
          autoComplete="tel"
          disabled={status === 'submitting'}
        />
        {fieldErrors.phone && (
          <p id="phone-error" className="mt-1 text-xs text-red-300">
            {fieldErrors.phone}
          </p>
        )}
      </div>
      <div>
        <label className="text-xs font-medium text-muted" htmlFor="serviceType">
          Service type *
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          defaultValue=""
          aria-invalid={fieldErrors.serviceType ? true : undefined}
          aria-describedby={fieldErrors.serviceType ? 'serviceType-error' : undefined}
          onChange={() => clearFieldError('serviceType')}
          className={`mt-1 w-full rounded-lg border bg-surface-2 px-3 py-2.5 text-sm text-white outline-none focus:border-accent disabled:opacity-60 ${
            fieldErrors.serviceType ? 'border-red-400/60' : 'border-white/15'
          }`}
          disabled={status === 'submitting'}
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICE_TYPES.map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
        {fieldErrors.serviceType && (
          <p id="serviceType-error" className="mt-1 text-xs text-red-300">
            {fieldErrors.serviceType}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full rounded-full bg-accent py-3 text-sm font-semibold text-surface hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Start booking'}
      </button>
    </form>
  )
}
