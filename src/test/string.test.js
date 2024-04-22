import { test, expect } from 'vitest';
import { transformer } from '../string';

test('Transformation d\'une chaîne vide', () => {
    const result = transformer('');
    expect(result).toBe('');
});

test('Transformation d\'une chaîne avec des caractères en minuscules', () => {
    const result = transformer('hello world');
    expect(result).toBe('HELLO WORLD');
});

test('Transformation d\'une chaîne avec des caractères spéciaux', () => {
    const result = transformer('@#xd%');
    expect(result).toBe('@#XD%');
});