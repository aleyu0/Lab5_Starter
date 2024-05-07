// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('should return true for a valid US phone number', () => {
    expect(isPhoneNumber('202-555-0143')).toBe(true);
  });

  test('should return true for a valid US phone number with country code', () => {
    expect(isPhoneNumber('+1 202-555-0143')).toBe(true);
  });

  test('should return false for an invalid phone number', () => {
    expect(isPhoneNumber('12345')).toBe(false);
  });

  test('should return false for an international number without +', () => {
    expect(isPhoneNumber('442075551234')).toBe(false);
  });
});

describe('isEmail', () => {
  test('should return true for a valid email', () => {
    expect(isEmail('example@example.com')).toBe(true);
  });

  test('should return true for a valid email with subdomain', () => {
    expect(isEmail('email@sub.example.com')).toBe(true);
  });

  test('should return false for an email without an "@" symbol', () => {
    expect(isEmail('example.com')).toBe(false);
  });

  test('should return false for an email without a domain', () => {
    expect(isEmail('email@')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('should return true for a strong password', () => {
    expect(isStrongPassword('Example123!')).toBe(true);
  });

  test('should return true for a strong password with various characters', () => {
    expect(isStrongPassword('A!2b3C4d$')).toBe(true);
  });

  test('should return false for a short password', () => {
    expect(isStrongPassword('E!2b$')).toBe(false);
  });

  test('should return false for a password without special characters', () => {
    expect(isStrongPassword('Example123')).toBe(false);
  });
});

describe('isDate', () => {
  test('should return true for a valid date in YYYY-MM-DD format', () => {
    expect(isDate('2021-08-15')).toBe(true);
  });

  test('should return true for a valid date in DD/MM/YYYY format', () => {
    expect(isDate('15/08/2021')).toBe(true);
  });

  test('should return false for a date with invalid month', () => {
    expect(isDate('2021-13-01')).toBe(false);
  });

  test('should return false for a date with invalid format', () => {
    expect(isDate('15-08-2021')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('should return true for a valid 6 digit hex color', () => {
    expect(isHexColor('#AABBCC')).toBe(true);
  });

  test('should return true for a valid 3 digit hex color', () => {
    expect(isHexColor('#ABC')).toBe(true);
  });

  test('should return false for a hex color without #', () => {
    expect(isHexColor('AABBCC')).toBe(false);
  });

  test('should return false for an invalid hex color', () => {
    expect(isHexColor('#GHIJKL')).toBe(false);
  });
});
