import { test, expect } from 'vitest';
import { isPriceInRange } from '../boundary';

test('Le prix est dans la plage', () => {
    expect(isPriceInRange(10, 5, 20)).toBeTruthy();
    expect(isPriceInRange(5, 5, 20)).toBeTruthy();
    expect(isPriceInRange(20, 5, 20)).toBeTruthy();
});

test('Le prix est en dehors de la plage', () => {
    expect(isPriceInRange(4, 5, 20)).toBeFalsy();
    expect(isPriceInRange(21, 5, 20)).toBeFalsy();
});
