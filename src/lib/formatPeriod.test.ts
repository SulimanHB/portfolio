import { describe, expect, it } from 'vitest';
import { formatPeriod } from './formatPeriod';

describe('formatPeriod', () => {
  it('formatea inicio y fin en español', () => {
    expect(formatPeriod('2026-03', '2026-05')).toBe('mar 2026 – may 2026');
  });

  it('indica «actualidad» si no hay fecha de fin', () => {
    expect(formatPeriod('2022-09')).toBe('sept 2022 – actualidad');
  });
});
