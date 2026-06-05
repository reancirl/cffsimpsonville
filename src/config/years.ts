// Single source of truth for "years in business" so copy never goes stale.
// Computed at build time from the founding year.
export const FOUNDED_YEAR = 1983;

export const YEARS = new Date().getFullYear() - FOUNDED_YEAR;

// Spell out the number for prose (e.g. "forty-two summers").
// Covers the realistic range for a single business's lifetime.
const ONES = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen',
];
const TENS = [
  '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',
];

export function spellNumber(n: number): string {
  if (n < 0) return String(n);
  if (n < 20) return ONES[n];
  if (n < 100) {
    const tens = TENS[Math.floor(n / 10)];
    const ones = n % 10;
    return ones ? `${tens}-${ONES[ones]}` : tens;
  }
  return String(n);
}

// Spelled-out word for the current count, e.g. "forty-two".
export const YEARS_WORD = spellNumber(YEARS);
