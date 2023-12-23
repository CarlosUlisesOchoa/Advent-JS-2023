import { getIndexsForPalindrome } from './main'
//

// Test #01
test('Test #01 - Returns a function', () => {
  expect(typeof getIndexsForPalindrome).toBe('function')
})
// Test #02
test('Test #02 - Check palindrome index for "anna"', () => {
  const expected: number[] = []
  expect(getIndexsForPalindrome('anna')).toEqual(expected)
})

// Test #03
test('Test #03 - Check palindrome index for "abab"', () => {
  const expected = [0, 1]
  expect(getIndexsForPalindrome('abab')).toEqual(expected)
})

// Test #04
test('Test #04 - Check palindrome index for non-palindromic "abac"', () => {
  const expected = null
  expect(getIndexsForPalindrome('abac')).toBe(expected)
})

// Test #05
test('Test #05 - Check palindrome index for repeating characters "aaaaaaaa"', () => {
  const expected: number[] = []
  expect(getIndexsForPalindrome('aaaaaaaa')).toEqual(expected)
})

// Test #06
test('Test #06 - Check palindrome index for "aaababa"', () => {
  const expected = [1, 3]
  expect(getIndexsForPalindrome('aaababa')).toEqual(expected)
})

// Test #07
test('Test #07 - Check palindrome index for non-palindromic "caababa"', () => {
  const expected = null
  expect(getIndexsForPalindrome('caababa')).toBe(expected)
})

// Test #08
test('Test #08 - Check palindrome index for "rotavator"', () => {
  const expected: number[] = []
  expect(getIndexsForPalindrome('rotavator')).toEqual(expected)
})

// Test #09
test('Test #09 - Check palindrome index for "rotaratov"', () => {
  const expected = [4, 8]
  expect(getIndexsForPalindrome('rotaratov')).toEqual(expected)
})

// Test #10
test('Test #10 - Check palindrome index for "saippuakivikauppias"', () => {
  const expected: number[] = []
  expect(getIndexsForPalindrome('saippuakivikauppias')).toEqual(expected)
})
//
// Este archivo de test fue adaptado a partir de la información disponible públicamente en adventjs.dev
// Pruebas desarrolladas por: Miguel Ángel Durán (midu.dev)
// Transcrito por: Carlos Ochoa (carlos8a.com)
