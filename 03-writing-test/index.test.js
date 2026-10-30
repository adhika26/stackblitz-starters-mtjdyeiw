import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('adds 1 + 2 to equal 3', () => {
  const result = sum(1, 2);
  assert.strictEqual(result, 3);
});

test('adds negative numbers correctly', () => {
  const result = sum(-2, -3);
  assert.strictEqual(result, -5);
});