import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('should return correct sum for valid positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
  assert.strictEqual(sum(0, 0), 0);
});

test('should return 0 if any argument is not a number', () => {
  assert.strictEqual(sum('5', 2), 0);
  assert.strictEqual(sum(5, '2'), 0);
  assert.strictEqual(sum(null, 3), 0);
  assert.strictEqual(sum(3, undefined), 0);
});

test('should return 0 if any argument is a negative number', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-3, -3), 0);
});