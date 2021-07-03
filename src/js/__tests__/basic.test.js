import Character from '../Character';
import Team from '../Team';

let lev;

test('class "Character" exists and has the "name" property', () => {
  expect(new Character()).toBeDefined();

  lev = new Character('lev');

  expect(lev.name).toBe('lev');
});

test('class "Team" exists', () => {
  expect(new Team()).toBeDefined();
});

const team = new Team();

test('class "Team" has the "members" property with Set object', () => {
  expect(team.members).toBeDefined();
  expect(team.members instanceof Set).toBeTruthy();
});

test('class "Team" has working "add" method', () => {
  expect(typeof team.add).toBe('function');

  team.add(lev);

  expect(team.members).toEqual(new Set([lev]));

  const error = () => team.add(lev);

  expect(error).toThrow(`Ошибка. Объект ${lev} уже добавлен!`);
});

test('class "Team" has working "addAll" method', () => {
  expect(typeof team.addAll).toBe('function');

  const vladimir = new Character('vladimir');
  const victor = new Character('victor');

  team.addAll(vladimir, victor);

  expect(team.members).toEqual(new Set([lev, vladimir, victor]));

  const error = () => team.addAll(lev);

  expect(error).toThrow(`Ошибка. Объект ${lev} уже добавлен!`);
});

test('class "Team" has working "toArray" method', () => {
  expect(Array.from(team.members)).toEqual(team.toArray());
});
