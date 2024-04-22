import { test, expect } from 'vitest';
import { trier } from '../array';

test('Trier un tableau vide', () => {
    const tableau = [];
    const resultatAttendu = [];
    expect(trier(tableau)).toEqual(resultatAttendu);
});

test('Trier un tableau de nombres dans l\'ordre croissant', () => {
    const tableau = [4, 2, 7, 1, 9];
    const resultatAttendu = [1, 2, 4, 7, 9];
    expect(trier(tableau)).toEqual(resultatAttendu);
});

test('Trier un tableau déjà trié', () => {
    const tableau = [1, 2, 5, 9];
    const resultatAttendu = [1, 2, 5, 9];
    expect(trier(tableau)).toEqual(resultatAttendu);
});

test('Trier un tableau de nombres dans l\'ordre décroissant', () => {
    const tableau = [9, 7, 4, 2, 1];
    const resultatAttendu = [1, 2, 4, 7, 9];
    expect(trier(tableau)).toEqual(resultatAttendu);
});

test('Trier un tableau avec des doublons', () => {
    const tableau = [3, 1, 4, 1, 5, 9, 2, 6, 5];
    const resultatAttendu = [1, 1, 2, 3, 4, 5, 5, 6, 9];
    expect(trier(tableau)).toEqual(resultatAttendu);
});

test('Trier un tableau avec des éléments non numériques', () => {
    const tableau = [3, 'a', 4, 'b', 5, 9, 2, 'c', 5];
    const resultatAttendu = [2, 3, 4, 5, 5, 9, 'a', 'b', 'c'];
    expect(trier(tableau)).toEqual(resultatAttendu);
});