import { describe, it, expect } from 'vitest'
import { sum } from '@/utils/number'

describe.concurrent('number utils', () => {
  it('sum', () => {
    expect(sum(1, 1)).toBe(2)
  })
})
