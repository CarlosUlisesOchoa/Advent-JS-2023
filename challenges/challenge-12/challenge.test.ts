import { checkIsValidCopy } from './main'
//

// Test #01
test('Test #01 - Returns a boolean', () => {
  expect(typeof checkIsValidCopy('Santa', 'Santa')).toBe('boolean')
})

// Test #02
test('Test #02 - Should return false', () => {
  expect(
    checkIsValidCopy(
      'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños',
      'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño'
    )
  ).toBe(false)
})

// Test #03
test('Test #03 - Should return true', () => {
  expect(checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')).toBe(true)
})

// Test #04
test('Test #04 - Should return true', () => {
  expect(checkIsValidCopy('3 regalos', '3        ')).toBe(true)
})

// Test #05
test('Test #05 - Should return false', () => {
  expect(checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')).toBe(false)
})

// Test #06
test('Test #06 - Should return false', () => {
  expect(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')).toBe(false)
})

// Test #07
test('Test #07 - Should return false', () => {
  expect(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')).toBe(false)
})

// Test #08
test('Test #08 - Should return true', () => {
  expect(checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')).toBe(true)
})

// Test #09
test('Test #09 - Should return true', () => {
  expect(checkIsValidCopy('S#n:a Claus', 'S#+:. c:. s')).toBe(true)
})

// Test #10
test('Test #10 - Should return false', () => {
  expect(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')).toBe(false)
})

// Test #11
test('Test #11 - Should return true', () => {
  expect(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')).toBe(true)
})
//
// Este archivo de test fue adaptado a partir de la información disponible públicamente en adventjs.dev
// Pruebas desarrolladas por: Miguel Ángel Durán (midu.dev)
// Transcrito por: Carlos Ochoa (carlos8a.com)
