import { drawGift } from './main'
//

// Test #01
test('Test #01 - Returns a function', () => {
  expect(typeof drawGift).toBe('function')
})

// Test #02
test('Test #02 - Draw gift with size 4 and "+" decoration', () => {
  const expected = `   ####\n  #++##\n #++#+#\n####++#\n#++#+#\n#++##\n####\n`
  expect(drawGift(4, '+')).toBe(expected)
})

// Test #03
test('Test #03 - Draw gift with size 5 and "*" decoration', () => {
  const expected = `    #####\n   #***##\n  #***#*#\n #***#**#\n#####***#\n#***#**#\n#***#*#\n#***##\n#####\n`
  expect(drawGift(5, '*')).toBe(expected)
})

// Test #04
test('Test #04 - Draw gift with size 1 and "^" decoration', () => {
  const expected = `#\n`
  expect(drawGift(1, '^')).toBe(expected)
})

// Test #05
test('Test #05 - Draw gift with size 2 and "&" decoration', () => {
  const expected = ` ##\n###\n##\n`
  expect(drawGift(2, '&')).toBe(expected)
})

// Test #06
test('Test #06 - Draw gift with size 10 and "%" decoration', () => {
  const expected = `         ##########\n        #%%%%%%%%##\n       #%%%%%%%%#%#\n      #%%%%%%%%#%%#\n     #%%%%%%%%#%%%#\n    #%%%%%%%%#%%%%#\n   #%%%%%%%%#%%%%%#\n  #%%%%%%%%#%%%%%%#\n #%%%%%%%%#%%%%%%%#\n##########%%%%%%%%#\n#%%%%%%%%#%%%%%%%#\n#%%%%%%%%#%%%%%%#\n#%%%%%%%%#%%%%%#\n#%%%%%%%%#%%%%#\n#%%%%%%%%#%%%#\n#%%%%%%%%#%%#\n#%%%%%%%%#%#\n#%%%%%%%%##\n##########\n`
  expect(drawGift(10, '%')).toBe(expected)
})
//
// Este archivo de test fue adaptado a partir de la información disponible públicamente en adventjs.dev
// Pruebas desarrolladas por: Miguel Ángel Durán (midu.dev)
// Transcrito por: Carlos Ochoa (carlos8a.com)
