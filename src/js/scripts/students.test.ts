import { describe, it, expect } from 'vitest';
import { studentsData } from '../../data/studentsData';

describe('Proves bàsiques de dades d\'alumnes', () => {

  it('hauria de tenir dades a studentsData', () => {
    expect(studentsData.length).toBeGreaterThan(0);
  });

  it('cada alumne hauria de tenir un nom i un id', () => {
    const primerAlumne = studentsData[0];
    expect(primerAlumne.id).toBeDefined();
    expect(primerAlumne.name).toBeDefined();
    expect(typeof primerAlumne.name).toBe('string');
  });

});