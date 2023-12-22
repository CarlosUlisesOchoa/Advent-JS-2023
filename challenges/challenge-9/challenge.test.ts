import { adjustLights } from './main'
//

// Test #01
test('Test #01 - Returns a number', () => {
  expect(typeof adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toBe('number')
})

// Test #02
test('Test #02 - Adjust lights with mixed green and red', () => {
  const expected = 1
  expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toBe(expected)
})

// Test #03
test('Test #03 - Adjust lights with majority red', () => {
  const expected = 2
  expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toBe(expected)
})

// Test #04
test('Test #04 - Adjust lights with alternating pattern', () => {
  const expected = 1
  expect(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])).toBe(expected)
})

// Test #05
test('Test #05 - Adjust lights with no required changes', () => {
  const expected = 0
  expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toBe(expected)
})

// Test #06
test('Test #06 - Adjust lights with all red', () => {
  const expected = 1
  expect(adjustLights(['🔴', '🔴', '🔴'])).toBe(expected)
})
//
// Este archivo de test fue adaptado a partir de la información disponible públicamente en adventjs.dev
// Pruebas desarrolladas por: Miguel Ángel Durán (midu.dev)
// Transcrito por: Carlos Ochoa (carlos8a.com)
