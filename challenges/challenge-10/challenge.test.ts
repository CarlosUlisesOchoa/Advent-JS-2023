import { createChristmasTree } from './main'
//

// Test #01
test('Test #01 - Returns a string', () => {
  expect(typeof createChristmasTree('x', 3)).toBe('string')
})

// Test #02
test('Test #02 - Create Christmas tree with single character and height 3', () => {
  const expected = '  x\n x x\nx x x\n  |\n'
  expect(createChristmasTree('x', 3)).toBe(expected)
})

// Test #03
test('Test #03 - Create Christmas tree with two characters and height 4', () => {
  const expected = '   x\n  o x\n o x o\nx o x o\n   |\n'
  expect(createChristmasTree('xo', 4)).toBe(expected)
})

// Test #04
test('Test #04 - Create Christmas tree with sequence and height 5', () => {
  const expected = '    1\n   2 3\n  1 2 3\n 1 2 3 1\n2 3 1 2 3\n    |\n'
  expect(createChristmasTree('123', 5)).toBe(expected)
})

// Test #05
test('Test #05 - Create Christmas tree with multiple characters and height 3', () => {
  const expected = '  *\n @ o\n* @ o\n  |\n'
  expect(createChristmasTree('*@o', 3)).toBe(expected)
})
//
// Este archivo de test fue adaptado a partir de la información disponible públicamente en adventjs.dev
// Pruebas desarrolladas por: Miguel Ángel Durán (midu.dev)
// Transcrito por: Carlos Ochoa (carlos8a.com)
