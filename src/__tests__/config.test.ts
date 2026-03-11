import { describe, it, expect } from 'vitest';
import { APP_URL, GITHUB_URL } from '../config';

describe('config', () => {
  it('APP_URL points to the app subdomain', () => {
    expect(APP_URL).toBe('https://app.ms-mvp.com');
  });

  it('GITHUB_URL points to the correct repo', () => {
    expect(GITHUB_URL).toBe('https://github.com/NecturaLabs/MapleStory-MVP-Detector');
  });
});
