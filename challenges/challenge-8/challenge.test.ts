import { organizeGifts } from './main'
//

// Test #01
test('Test #01 - Returns a function', () => {
  expect(typeof organizeGifts).toBe('function')
})

// Test #02
test('Test #02 - Organize mixed gift types and quantities', () => {
  const expected = '[a]{a}{a}(aaaaaa){b}(b)'
  expect(organizeGifts('76a11b')).toBe(expected)
})

// Test #03
test('Test #03 - Organize single gift type with minimum quantity', () => {
  const expected = '{a}{a}'
  expect(organizeGifts('20a')).toBe(expected)
})

// Test #04
test('Test #04 - Organize multiple gift types with varying quantities', () => {
  const expected = '[b]{b}{b}[a][a]{a}{a}(cccc)'
  expect(organizeGifts('70b120a4c')).toBe(expected)
})

// Test #05
test('Test #05 - Organize single gift type with a specific quantity', () => {
  const expected = '(ccccccccc)'
  expect(organizeGifts('9c')).toBe(expected)
})

// Test #06
test('Test #06 - Organize mixed gift types with specific quantities', () => {
  const expected = '{d}(ddddddddd)[e](e)'
  expect(organizeGifts('19d51e')).toBe(expected)
})
//
// Este archivo de test fue adaptado a partir de la información disponible públicamente en adventjs.dev
// Pruebas desarrolladas por: Miguel Ángel Durán (midu.dev)
// Transcrito por: Carlos Ochoa (carlos8a.com)
