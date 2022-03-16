import { validateCharacters } from '../src/validateCharacters';

describe('Testing validateCharacters', () => {
  //#region empty name
  test('Should return false for empty name', () => {
    const result = validateCharacters({
      defense: 500,
      strength: 300,
      name: '',
      life: 1500,
    });

    expect(result).toBe(false);
  });
  //#endregion

  //#region life = 0
  test('Should return false for life: 0', () => {
    const result = validateCharacters({
      defense: 500,
      strength: 300,
      name: 'Evelim',
      life: 0,
    });

    expect(result).toBe(false);
  });
  //#endregion

  //#region strength = 0
  test('Should return false for strength: 0', () => {
    const result = validateCharacters({
      defense: 500,
      strength: 0,
      name: 'Dreska',
      life: 1500,
    });

    expect(result).toBe(false);
  });
  //#endregion

  //#region defense = 0
  test('Should return false for defense: 0', () => {
    const result = validateCharacters({
      defense: 0,
      strength: 300,
      name: 'Faeryl',
      life: 1500,
    });

    expect(result).toBe(false);
  });
  //#endregion

  //#region life or strength or defense < 0
  test('Should return false for life or strength or defense < 0', () => {
    const result = validateCharacters({
      defense: 500,
      strength: 300,
      name: 'Brenna',
      life: -1500,
    });

    expect(result).toBe(false);
  });
  //#endregion

  //#region valid Character
  test('Should return false for life: 0', () => {
    const result = validateCharacters({
      defense: 500,
      strength: 300,
      name: 'Lorelai',
      life: 1500,
    });

    expect(result).toBe(true);
  });
  //#endregion
});