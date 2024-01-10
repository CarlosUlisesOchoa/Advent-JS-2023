import { calculateTime } from './main'
//

// Test #01
test('Test #01 - Returns a string', () => {
  expect(typeof calculateTime(['00:10:00', '01:50:00'])).toBe('string')
})

// Test #02
test('Test #02 - Calculate time difference with negative result', () => {
  const expected = '-02:20:00'
  expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toBe(expected)
})

// Test #03
test('Test #03 - Calculate time with slight negative difference', () => {
  const expected = '-00:30:00'
  expect(calculateTime(['01:00:00', '05:00:00', '00:30:00'])).toBe(expected)
})

// Test #04
test('Test #04 - Calculate time with positive result', () => {
  const expected = '00:30:00'
  expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toBe(expected)
})

// Test #05
test('Test #05 - Calculate time with multiple inputs and negative result', () => {
  const expected = '-05:29:00'
  expect(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])).toBe(expected)
})

// Test #06
test('Test #06 - Calculate time resulting in zero', () => {
  const expected = '00:00:00'
  expect(calculateTime(['02:00:00', '03:00:00', '02:00:00'])).toBe(expected)
})

// Test #07
test('Test #07 - Calculate time with mixed inputs and positive result', () => {
  const expected = '05:02:01'
  expect(calculateTime(['01:01:01', '09:59:59', '01:01:01'])).toBe(expected)
})

// Test #08
test('Test #08 - Calculate time with multiple inputs leading to a minimal negative result', () => {
  const expected = '-00:00:01'
  expect(calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])).toBe(expected)
})
//
// Este archivo de test fue adaptado a partir de la información disponible públicamente en adventjs.dev
// Pruebas desarrolladas por: Miguel Ángel Durán (midu.dev)
// Transcrito por: Carlos Ochoa (carlos8a.com)
