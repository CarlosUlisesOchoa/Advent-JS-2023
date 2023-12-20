function getIndexsForPalindrome(word: string): number[] | null {
  //
  const wordInverted = word.split('').reverse().join('')
  // La linea anterior obtiene y almacena el inverso de 'word'
  // Por ejemplo word = 'abab', wordInverted = 'baba'

  // Si ya es palíndromo, retornamos un array vacio tal cual lo indica el reto
  if (word === wordInverted) return []

  // Ahora si viene lo chido... (WIP)

  return [0, 0]
}

getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null
