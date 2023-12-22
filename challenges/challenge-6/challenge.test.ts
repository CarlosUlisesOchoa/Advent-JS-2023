import { maxDistance } from './main'

test('Test #01 - Returns a number', () => {
  expect(typeof maxDistance('>>*<')).toBe('number')
})

test('Test #02 - maxDistance(">>*<")', () => {
  expect(maxDistance('>>*<')).toStrictEqual(2)
})

test('Test #03 - maxDistance("<<<<<")', () => {
  expect(maxDistance('<<<<<')).toStrictEqual(5)
})

test('Test #04 - maxDistance(">***>")', () => {
  expect(maxDistance('>***>')).toStrictEqual(5)
})

test('Test #05 - maxDistance("**********")', () => {
  expect(maxDistance('**********')).toStrictEqual(10)
})

test('Test #06 - maxDistance("<<**>>")', () => {
  expect(maxDistance('<<**>>')).toStrictEqual(2)
})
//
// Este archivo de test fue adaptado a partir de la información disponible públicamente en adventjs.dev
// Pruebas desarrolladas por: Miguel Ángel Durán (midu.dev)
// Transcrito por: @Achalogy (GitHub)
