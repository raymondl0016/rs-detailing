export type DetailPackage = {
  title: string
  subtitle: string
  variant: 'split' | 'list'
  interior?: string[]
  exterior?: string[]
  included?: string[]
}

export const packages: DetailPackage[] = [
  {
    title: 'Full Refresh',
    subtitle: 'Maintenance or quick inside-out refresh.',
    variant: 'split',
    interior: [
      'Interior vacuum',
      'Wipe all surfaces',
      'Stain spot treatment',
      'Windows & mirrors',
      'Door jambs',
      'Floor mats',
      'Trunk detail',
    ],
    exterior: [
      'Hand wash',
      'Rims & tires',
      '3-month wax protection',
    ],
  },
  {
    title: 'Gold Standard',
    subtitle: 'Thorough full detail — our most-booked package.',
    variant: 'split',
    interior: [
      'Double vacuum',
      'Wipe all surfaces',
      'Stain spot treatment',
      'Windows & mirrors',
      'Clean & protect plastics',
      'Floor mats dressed',
      'Trunk & door jambs',
    ],
    exterior: [
      'Spot polish',
      'Professional hand wash',
      'Rims, tires & wheel wells',
      '3-month wax protection',
    ],
  },
  {
    title: 'Masterpiece Detail',
    subtitle: 'Full polish plus shampoo & extraction.',
    variant: 'split',
    interior: [
      'Shampoo seats & carpet',
      'Double vacuum',
      'Wipe all surfaces',
      'Stain spot treatment',
      'Clean & protect plastics',
      'Windows & mirrors',
      'Floor mats & trunk',
    ],
    exterior: [
      'Paint enhancement polish',
      'Hand wash & clay bar',
      'Wheel wells & dress trims',
      'Door jambs',
      '3-month wax protection',
    ],
  },
  {
    title: 'Classic Exterior',
    subtitle: 'Quick exterior glow-up.',
    variant: 'list',
    included: [
      '5-step spot polish',
      'Professional hand wash',
      'Wheel wells',
      'Windows & mirrors',
      'Rims & tires',
      '3-month wax protection',
    ],
  },
  {
    title: 'Wax & Buff',
    subtitle: 'Light swirls and wash-induced marring.',
    variant: 'list',
    included: [
      'Paint enhancement polish',
      'Professional hand wash',
      'Clay bar',
      'Wheel wells',
      'Rims & tires',
      'Windows & mirrors',
      '3-month wax protection',
    ],
  },
  {
    title: 'Ceramic Coating',
    subtitle: 'Long-term gloss and chemical resistance.',
    variant: 'list',
    included: [
      'Paint correction available',
      'Maximum gloss finish',
      '10H+ professional coating',
      'Hydrophobic, easier maintenance',
      'Full exterior prep',
      'Warranty options',
      '5–10 year protection plans',
    ],
  },
  {
    title: 'Classic Interior',
    subtitle: 'Keep the cabin fresh between big details.',
    variant: 'list',
    included: [
      'Complete vacuum',
      'All surfaces wiped',
      'Stain spot treatment',
      'Windows & mirrors',
      'Floor mats detailed',
      'Trunk',
    ],
  },
  {
    title: 'Deep Shampoo',
    subtitle: 'Seats & carpets reset.',
    variant: 'list',
    included: [
      'Deep cleaning treatment',
      'Shampoo carpets & seats',
      'Double vacuum',
      'Stain extraction',
      'Protect plastics',
      'Windows & mirrors',
      'Floor mats & trunk',
    ],
  },
  {
    title: 'Mold Reset',
    subtitle: 'Remediation-focused interior service.',
    variant: 'list',
    included: [
      'Mold remediation treatment',
      'Shampoo seats & carpets',
      'Ozone treatment',
      'Double vacuum',
      'Wipe all surfaces',
      'Stain spot treatment',
      'Plastics protected',
      'Windows, mats & trunk',
    ],
  },
]
