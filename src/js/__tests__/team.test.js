import Team from '../team';

test('Should iterate over and return an array of presons', () => {
  const expected = [{
    name: 'Лучник',
    type: 'Bowman',
    health: 10,
    level: 1,
    attack: 40,
    defence: 10,
  }, {
    name: 'Лучник',
    type: 'Bowman',
    health: 10,
    level: 2,
    attack: 40,
    defence: 10,
  }, {
    name: 'Лучник',
    type: 'Bowman',
    health: 10,
    level: 3,
    attack: 40,
    defence: 10,
  }];
  const team = new Team(expected);
  const received = [];
  for (const person of team) {
    received.push(person);
  }
  expect(received).toEqual(expected);
});
