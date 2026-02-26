import { describe, it, expect } from 'vitest';
import { jobsData } from '../../data/jobsData';

describe('Proves bàsiques de dades de treball', () => {

  it('hauria de tenir dades a jobsData', () => {
    expect(jobsData.length).toBeGreaterThan(0);
  });

  it('cada treball hauria de tenir un nom i un id', () => {
    const primerTreball = jobsData[0];
    expect(primerTreball.id).toBeDefined();
    expect(primerTreball.name).toBeDefined();
    expect(typeof primerTreball.name).toBe('string');
  });

});