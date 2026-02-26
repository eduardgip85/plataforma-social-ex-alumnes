import { describe, it, expect } from 'vitest';
import { eventsData } from '../../data/eventsData';

describe('Proves bàsiques de dades d\'esdeveniments', () => {

  it('hauria de tenir dades a eventsData', () => {
    expect(eventsData.length).toBeGreaterThan(0);
  });

  it('cada esdeveniment hauria de tenir un nom i un id', () => {
    const primerEsdeveniment = eventsData[0];
    expect(primerEsdeveniment.id).toBeDefined();
    expect(primerEsdeveniment.name).toBeDefined();
    expect(typeof primerEsdeveniment.name).toBe('string');
  });

});