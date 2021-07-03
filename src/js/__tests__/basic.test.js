import Character from '../Character';
import Team from '../Team';

const lev = new Character('lev');

test('class «Character» exists and has the «name» property', () => {
  expect(typeof lev).toBe('object');
  expect(lev.name).toBe('lev');
});

const team = new Team();

test('class «Team» exists and has «add», «addAll», «toArray» methods', () => {
  expect(typeof team).toBe('object');
  expect(typeof team.add).toBe('function');
  expect(typeof team.addAll).toBe('function');
  expect(typeof team.toArray).toBe('function');
});

team.add(lev);

test('method «add» of class «Team» works correctly', () => {
  expect(team.members).toEqual(new Set([lev]));

  const error = () => team.add(lev);

  expect(error).toThrow(
    `Ошибка. Объект ${lev} уже добавлен!`,
  );
});

const extendedTeam = new Team();
const vladimir = new Character('vladimir');
const victor = new Character('victor');

extendedTeam.addAll(lev, vladimir, victor);

test('method «addAll» of class «Team» works correctly', () => {
  expect(extendedTeam.members).toEqual(new Set([lev, vladimir, victor]));

  const error = () => extendedTeam.addAll(lev);

  expect(error).toThrow(
    `Ошибка. Объект ${lev} уже добавлен!`,
  );
});

test('method «toArray» of class «Team» works correctly', () => {
  expect(Array.from(extendedTeam.members)).toEqual(extendedTeam.toArray());
});
