import sortCharacters from '../js/app.js';

test('good health checking', () => {
  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'ратник', health: 80 },
  ];
  const standard = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'ратник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = characters.sort(sortCharacters);
  expect(result).toEqual(standard);
});
